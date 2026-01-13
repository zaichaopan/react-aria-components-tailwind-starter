import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';
import { CheckIcon } from './icons/outline/check';
import { flushSync } from 'react-dom';

type OrientationAndLabelPlacement =
  | {
      orientation: 'horizontal';
      labelPlacement?: 'top';
    }
  | {
      orientation: 'vertical';
    };

type StepperContextType = {
  value: number;
  steps: number;
  stepHeadingRef: React.RefObject<HTMLDivElement | null>;
  onStepChange: (step: number) => void;
} & OrientationAndLabelPlacement;

const StepperContextType = React.createContext<StepperContextType | null>(null);

function useStepperContext() {
  const stepIndicatorContext = React.useContext(StepperContextType);

  if (!stepIndicatorContext) {
    throw new Error('<Stepper.Provider> is required');
  }

  return stepIndicatorContext;
}

type StepContextType = {
  step: number;
  completed: boolean;
  current: boolean;
  hasCounter: boolean;
};

const StepContext = React.createContext<StepContextType | null>(null);

function useStepContext() {
  const stepContext = React.useContext(StepContext);

  if (!stepContext) {
    throw new Error('<StepContext.Provider> is required');
  }

  return stepContext;
}

export function Stepper(
  props: {
    value: number;
    steps: number;
    onStepChange: React.Dispatch<React.SetStateAction<number>>;
    children:
      | React.ReactNode
      | ((props: {
          prev: () => void;
          next: () => void;
          isFirstStep: boolean;
          isLastStep: boolean;
          isCompleted: boolean;
        }) => React.ReactNode);
  } & Partial<OrientationAndLabelPlacement>,
) {
  const {
    value,
    steps,
    onStepChange,
    children,
    orientation = 'horizontal',
    ...rest
  } = props;
  const labelPlacement =
    'labelPlacement' in rest ? rest.labelPlacement : undefined;
  const stepHeadingRef = React.useRef<HTMLDivElement | null>(null);
  const isCompleted = value === steps;
  const isFirstStep = value === 0;
  const isLastStep = value === steps - 1;

  const prev = React.useCallback(() => {
    if (isFirstStep) {
      return;
    }

    flushSync(() => {
      onStepChange((val) => val - 1);
    });

    stepHeadingRef.current?.focus();
  }, [onStepChange, isFirstStep]);

  const next = React.useCallback(() => {
    if (isCompleted) {
      return;
    }
    flushSync(() => {
      onStepChange((val) => val + 1);
    });

    stepHeadingRef.current?.focus();
  }, [onStepChange, isCompleted]);

  return (
    <StepperContextType.Provider
      value={{
        value,
        steps,
        stepHeadingRef,
        onStepChange,
        orientation,
        labelPlacement,
      }}
    >
      {typeof children === 'function'
        ? children({
            prev,
            next,
            isFirstStep,
            isLastStep,
            isCompleted,
          })
        : children}
    </StepperContextType.Provider>
  );
}

export function StepList({
  className,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  const { orientation } = useStepperContext();

  return (
    <div
      {...props}
      role="group"
      className={twMerge(
        'flex',
        orientation === 'horizontal'
          ? 'w-full flex-row overflow-x-auto'
          : 'flex-col gap-y-(--step-gap-y) [--step-gap-y:--spacing(10)]',
        'gap-x-2',
        '[--separator-radius:calc(infinity*1px)]',
        '[&.gap-x-0]:[--separator-radius:0]',
        '[&.gap-x-0]:rounded-full',
        '[--counter-size:--spacing(6)]',
        '[--counter-padding:--spacing(1)]',
        '[--counter:var(--color-zinc-200)]/75',
        'dark:[--counter:var(--color-zinc-700)]',
        '[--counter-text:var(--muted)]',
        '[--counter-highlight:var(--accent)]',
        '[--counter-highlight-text:lch(from_var(--counter-highlight)_calc((49.44-l)*infinity)_0_0)]',
        '[--separator-h:--spacing(0.5)]',

        className,
      )}
    />
  );
}

export function Step({
  children,
  'aria-label': ariaLabel,
  step,
  className,
  counter,
  separator,
  ...props
}: Omit<React.JSX.IntrinsicElements['div'], 'className'> & {
  className?:
    | string
    | ((renderProps: {
        completed: boolean;
        current: boolean;
      }) => ClassNameValue);
  step: number;
  counter?:
    | React.ReactNode
    | ((props: { completed: boolean; step: number }) => React.ReactNode);
  separator?: React.ReactNode;
} & (
    | { children?: never; 'aria-label': string }
    | { children: React.ReactNode }
  )) {
  const { value, steps, orientation, stepHeadingRef } = useStepperContext();
  const completed = value >= step;
  const current = value === step - 1;
  const context = useStepperContext();
  const labelPlacement =
    context.orientation === 'horizontal' ? context.labelPlacement : undefined;

  return (
    <StepContext.Provider
      value={{ step, hasCounter: !!counter, completed, current }}
    >
      <div
        {...props}

        tabIndex={-1}
        {...(current && {
          ref: stepHeadingRef,
        })}
        className={twMerge(
          'relative outline-0 isolate flex flex-1 shrink-0 gap-2 text-sm/6',
          orientation === 'horizontal'
            ? [
                'flex-col',
                'items-center',
                'text-center',
                labelPlacement === 'top' && [
                  'min-w-0 *:data-[ui=label]:w-full *:data-[ui=label]:truncate',
                ],
              ]
            : ['flex-row', 'items-baseline'],

          ariaLabel && ['*:data-[ui=label]:sr-only'],

          typeof className == 'function'
            ? className({ completed, current })
            : className,
        )}
      >
        {counter ? (
          <>
            {labelPlacement === 'top' && (
              <span
                data-ui="label"
                {...(ariaLabel && { 'aria-label': ariaLabel })}
              >
                {children}
              </span>
            )}

            {typeof counter === 'function'
              ? counter({ completed, step })
              : counter}

            {!labelPlacement && (
              <span
                data-ui="label"
                {...(ariaLabel && { 'aria-label': ariaLabel })}
              >
                {children}
              </span>
            )}

            {step < steps && (separator ? separator : <StepSeparator />)}
          </>
        ) : (
          <>
            {labelPlacement === 'top' && (
              <span
                data-ui="label"
                {...(ariaLabel && { 'aria-label': ariaLabel })}
              >
                {children}
              </span>
            )}
            {separator ? separator : <StepSeparator />}

            {!labelPlacement && (
              <span
                {...(current && {
                  ref: stepHeadingRef,
                })}
                data-ui="label"
                {...(ariaLabel && { 'aria-label': ariaLabel })}
              >
                {children}
              </span>
            )}
          </>
        )}

        <span className="sr-only">
          {step <= value ? 'completed' : 'not completed'}
        </span>
      </div>
    </StepContext.Provider>
  );
}

export function StepCounter({
  className,
  children,
  checkIcon = true,
  ...props
}: React.JSX.IntrinsicElements['div'] & {
  checkIcon?: boolean;
}) {
  const { step, completed, current } = useStepContext();

  return (
    <div
      {...props}
      aria-hidden
      className={twMerge(
        'flex size-(--counter-size) shrink-0 items-center justify-center rounded-full p-(--counter-padding) text-sm/6 font-medium [&_svg[data-ui=icon]:not([class*=size-])]:size-full',
        'transition-colors duration-300 ease-in-out',
        'bg-(--counter) text-(--counter-text)',
        (completed || current) && [
          'bg-(--counter-highlight) text-(--counter-highlight-text)',
        ],
        className,
      )}
    >
      {completed && checkIcon ? (
        <>
          &#x200B;
          <CheckIcon />
        </>
      ) : children ? (
        children
      ) : (
        step
      )}
    </div>
  );
}

export function StepSeparator({
  className,
  ...props
}: Omit<React.JSX.IntrinsicElements['div'], 'children'>) {
  const { hasCounter, completed, current } = useStepContext();
  const { orientation } = useStepperContext();
  const context = useStepperContext();
  const labelPlacement =
    context.orientation === 'horizontal' ? context.labelPlacement : undefined;

  return hasCounter ? (
    <div
      {...props}
      data-ui="sep-separator"
      aria-hidden
      className={twMerge(
        'transition-colors duration-300 ease-in-out',
        'absolute rounded-(--separator-radius)',

        orientation === 'horizontal'
          ? [
              'h-(--separator-h)',
              labelPlacement === 'top'
                ? ['bottom-[calc(var(--counter-size)/2)]', 'translate-y-1/2']
                : ['top-[calc(var(--counter-size)/2)]', '-translate-y-1/2'],

              'w-[calc(100%-var(--counter-size,0))]',
              'left-[calc(var(--counter-size,0)+0.25rem)]',
              'left-[calc(50%+calc(var(--counter-size,0)/2)+0.125rem)]',
              'w-[calc(100%-var(--counter-size,0)+0.5rem-0.25rem)]',
            ]
          : [
              'w-0.5',
              'left-[calc(var(--counter-size,0)/2)] -z-10',
              'top-[calc(var(--counter-size,0))]',
              'h-[calc(var(--step-gap-y)+calc(100%-var(--counter-size,0)+0.25rem))]',
            ],

        'in-[.gap-x-0]:rounded-0',
        'bg-(--counter)',
        completed && 'bg-(--counter-highlight)',
        current && !hasCounter && 'bg-(--counter-highlight)',
        className,
      )}
    ></div>
  ) : (
    <div
      className={twMerge(
        'transition-colors duration-300 ease-in-out',
        'h-(--separator-h) w-full rounded-(--separator-radius)',
        'bg-(--counter)',
        completed && 'bg-(--counter-highlight)',
        current && !hasCounter && 'bg-(--counter-highlight)',
        className,
      )}
    ></div>
  );
}

export function StepPanel({
  children,
  step,
  ...props
}: {
  children: React.ReactNode;
  step: number;
} & React.JSX.IntrinsicElements['div']) {
  const { value, steps } = useStepperContext();

  if (step === value + 1) {
    return <div {...props}>{children}</div>;
  }

  if (step == steps && value === steps) {
    return <div {...props}>{children}</div>;
  }
}
