import {
  Slider as RACSlider,
  SliderProps as RACSliderProps,
  SliderThumb,
  SliderTrack as RACSliderTrack,
  composeRenderProps,
  SliderTrackProps,
  SliderRenderProps,
} from 'react-aria-components';
import { composeTailwindRenderProps } from './utils';
import { twMerge } from 'tailwind-merge';

export { SliderOutput } from 'react-aria-components';

export interface SliderProps<T> extends RACSliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

export function Slider<T extends number | number[]>(props: SliderProps<T>) {
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

const trackStyle = [
  'absolute',
  'group-data-[orientation=horizontal]:h-full',
  'group-data-[orientation=horizontal]:w-full',
  'group-data-[orientation=vertical]:h-full',
  'group-data-[orientation=vertical]:w-full',
  'group-data-disabled:opacity-50',
];

export function SliderTack({
  thumbLabels,
  ...props
}: SliderTrackProps & { thumbLabels?: string[] }) {
  return (
    <RACSliderTrack
      className={composeRenderProps(
        props.className,
        (className, { state, orientation }) => {
          const { highlightPercentage } = getTrackHighlightState(state);

          return twMerge(
            'group relative isolate flex w-full items-center [--horizontal-h:--spacing(1)] data-[orientation=horizontal]:h-(--horizontal-h) data-[orientation=vertical]:h-44 data-[orientation=vertical]:w-1',
            '[--slider-highlight:var(--color-accent)]',
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
      {({ state, orientation }) => {
        const { highlightPercentage, hasTwoThumbs, highlightStartPosition } =
          getTrackHighlightState(state);

        return (
          <>
            <div
              data-ui="slider-highlight"
              className={twMerge(
                'bg-(--slider-highlight)',
                trackStyle,
                !hasTwoThumbs &&
                  highlightPercentage !== '0%' &&
                  (orientation == 'horizontal'
                    ? 'rounded-s-full'
                    : 'rounded-b-full'),
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
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
                className={composeRenderProps(
                  '',
                  (className, { isFocusVisible, isDragging, isDisabled }) =>
                    twMerge(
                      'size-5 rounded-full bg-white ring shadow-sm ring-zinc-950/15',
                      'group-data-[orientation=horizontal]:top-1/2 group-data-[orientation=vertical]:left-1/2',
                      isDragging && ['outline', 'outline-3', 'outline-ring/50'],
                      isDisabled && 'cursor-not-allowed opacity-50',
                      isFocusVisible && [
                        'outline',
                        'outline-2',
                        'outline-ring',
                      ],
                      className,
                    ),
                )}
              />
            ))}
          </>
        );
      }}
    </RACSliderTrack>
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
