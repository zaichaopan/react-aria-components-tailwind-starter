import React from 'react';
import {
  Slider as RACSlider,
  SliderProps as RACSliderProps,
  SliderThumb as RACSliderThumb,
  SliderTrack as RACSliderTrack,
  composeRenderProps,
  SliderTrackProps,
  SliderRenderProps,
  SliderStateContext,
  SliderThumbProps,
} from 'react-aria-components';
import { composeTailwindRenderProps } from './utils';
import { twMerge } from 'tailwind-merge';

export { SliderOutput } from 'react-aria-components';

export function Slider<T extends number | number[]>(props: RACSliderProps<T>) {
  return (
    <RACSlider
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2 data-[orientation=horizontal]:min-w-64 data-[orientation=vertical]:items-center',
      )}
    />
  );
}

const SliderThumbContext = React.createContext<{
  index: number;
  label?: string;
  orientation: 'horizontal' | 'vertical';
} | null>(null);

export function SliderThumb(props: SliderThumbProps) {
  const { index, label, orientation } = React.useContext(SliderThumbContext)!;

  return (
    <RACSliderThumb
      {...props}
      index={index}
      data-ui="slider-thumb"
      aria-label={label}
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible, isDragging, isDisabled }) => {
          return twMerge(
            'size-5 rounded-full bg-white ring shadow-[0_1px_1px_rgba(0,0,0,0.2)] ring-zinc-950/10 dark:shadow-none',
            orientation === 'horizontal' ? 'top-1/2' : 'left-1/2',
            isDragging && ['outline', 'outline-3', 'outline-ring/50'],
            isDisabled && 'cursor-not-allowed opacity-50',
            isFocusVisible && ['outline', 'outline-2', 'outline-ring'],
            className,
          );
        },
      )}
    />
  );
}

export function SliderTack({
  thumbLabels,
  sliderTrackHighlight = <SliderTrackHighlight />,
  sliderThumb = <SliderThumb />,
  ...props
}: SliderTrackProps & {
  thumbLabels?: string[];
  sliderTrackHighlight?: React.ReactElement;
  sliderThumb?: React.ReactElement;
}) {
  return (
    <RACSliderTrack
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { state, orientation }) => {
          const { highlightPercentage } = getTrackHighlightState(state);
          return twMerge(
            'group relative isolate flex w-full items-center',
            orientation == 'horizontal' ? 'h-1' : 'h-44 w-1',
            'bg-zinc-200 dark:bg-zinc-600',
            highlightPercentage !== '0%' &&
              (orientation == 'horizontal'
                ? 'rounded-s-full'
                : 'rounded-t-full'),
            highlightPercentage !== '100%' &&
              (orientation == 'horizontal'
                ? 'rounded-e-full'
                : 'rounded-b-full'),
            className,
          );
        },
      )}
    >
      {({ state }) => {
        return (
          <>
            {sliderTrackHighlight}
            {state.values.map((_, i) => {
              return (
                <SliderThumbContext.Provider
                  key={i}
                  value={{
                    index: i,
                    label: thumbLabels?.[i],
                    orientation: state.orientation,
                  }}
                >
                  {sliderThumb}
                </SliderThumbContext.Provider>
              );
            })}
          </>
        );
      }}
    </RACSliderTrack>
  );
}

export function SliderTrackHighlight({
  className,
  ...props
}: Omit<React.JSX.IntrinsicElements['div'], 'className'> & {
  className?:
    | string
    | ((renderProps: {
        isDisabled: boolean;
        hasTwoThumbs: boolean;
        highlightPercentage: string;
        highlightStartPosition: string;
        orientation: 'horizontal' | 'vertical';
      }) => string);
}) {
  const state = React.useContext(SliderStateContext)!;
  const { orientation, isDisabled } = state;
  const { highlightPercentage, hasTwoThumbs, highlightStartPosition } =
    getTrackHighlightState(state);

  return (
    <div
      {...props}
      data-ui="slider-highlight"
      className={twMerge(
        'bg-accent',
        'absolute',
        'w-full',
        'h-full',
        isDisabled && 'opacity-50',
        !hasTwoThumbs &&
          highlightPercentage !== '0%' &&
          (state.orientation == 'horizontal'
            ? 'rounded-s-full'
            : 'rounded-b-full'),

        typeof className === 'function'
          ? className({
              isDisabled,
              hasTwoThumbs,
              highlightPercentage,
              highlightStartPosition,
              orientation,
            })
          : className,
      )}
      style={
        orientation === 'horizontal'
          ? {
              width: highlightPercentage,
              left: highlightStartPosition,
            }
          : {
              height: highlightPercentage,
              bottom: highlightStartPosition,
            }
      }
    />
  );
}

function getTrackHighlightState(state: SliderRenderProps['state']) {
  const hasTwoThumbs = state.values.length == 2;
  const highlightPercentage = hasTwoThumbs
    ? (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + '%'
    : state.getThumbPercent(0) * 100 + '%';
  const highlightStartPosition = hasTwoThumbs
    ? state.getThumbPercent(0) * 100 + '%'
    : '0';

  return { highlightPercentage, highlightStartPosition, hasTwoThumbs };
}
