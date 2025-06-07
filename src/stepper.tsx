import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';
import { CheckIcon } from './icons/outline/check';
import { flushSync } from 'react-dom';

type StepperContextType = {
  value: number;
  steps: number;
  stepHeadingRef: React.RefObject<HTMLDivElement | null>;
  onStepChange: (step: number) => void;
};

const StepperContextType = React.createContext<StepperContextType | null>(null);

const StepContext = React.createContext<{
  step: number;
  completed: boolean;
  current: boolean;
  hasCounter: boolean;
} | null>(null);

function useStepIndicator() {
  const stepIndicatorContext = React.useContext(StepperContextType);

  if (!stepIndicatorContext) {
    throw new Error('<Stepper.Provider> is required');
  }

  return stepIndicatorContext;
}

function useStepContext() {
  const stepContext = React.useContext(StepContext);

  if (!stepContext) {
    throw new Error('<StepContext.Provider> is required');
  }

  return stepContext;
}

export function Stepper({
  value,
  steps,
  onStepChange,
  children,
}: {
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
}) {
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
      value={{ value, steps, stepHeadingRef, onStepChange }}
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
  centered = true,
  ...props
}: React.JSX.IntrinsicElements['ol'] & {
  centered?: boolean;
}) {
  return (
    <ol
      {...props}
      {...(centered && {
        'data-centered': true,
      })}
      className={twMerge(
        'flex w-full gap-x-2 overflow-x-auto',
        '[--separator-radius:calc(infinity_*_1px)]',
        '[&.gap-x-0]:[--separator-radius:0]',
        '[&.gap-x-0]:rounded-full',
        '[--counter-size:--spacing(6)]',
        '[--counter-padding:--spacing(1)]',
        '[--counter:var(--color-zinc-200)]',
        'dark:[--counter:var(--color-zinc-700)]',
        '[--counter-text:var(--muted)]',
        '[--counter-highlight:var(--accent)]',
        '[--counter-highlight-text:lch(from_var(--counter-highlight)_calc((49.44_-_l)_*_infinity)_0_0)]',
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
}: Omit<React.JSX.IntrinsicElements['li'], 'className'> & {
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
  const { value, steps } = useStepIndicator();
  const completed = value >= step;
  const current = value === step - 1;

  return (
    <StepContext.Provider
      value={{ step, hasCounter: !!counter, completed, current }}
    >
      <li
        {...props}
        className={twMerge(
          'relative isolate flex flex-1 shrink-0 flex-col gap-2 text-sm/6',
          'in-[[data-centered]]:items-center in-[[data-centered]]:text-center',
          typeof className == 'function'
            ? className({ completed, current })
            : className,
        )}
      >
        {counter ? (
          <>
            {typeof counter === 'function'
              ? counter({ completed, step })
              : counter}
            <span
              {...(ariaLabel && { 'aria-label': ariaLabel })}
              className="contents"
            >
              {children}
            </span>

            {step < steps && (separator ? separator : <StepSeparator />)}
          </>
        ) : (
          <>
            {separator ? separator : <StepSeparator />}
            <span
              {...(ariaLabel && { 'aria-label': ariaLabel })}
              className="contents"
            >
              {children}
            </span>
          </>
        )}

        <span className="sr-only">
          {step <= value ? 'completed' : 'not completed'}
        </span>
      </li>
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
        'flex size-(--counter-size) shrink-0 items-center justify-center rounded-full p-(--counter-padding) text-sm/6 font-medium transition-colors duration-300 ease-in-out [&_svg[data-ui=icon]:not([class*=size-])]:size-full',
        'bg-(--counter) text-(--counter-text)',
        (completed || current) &&
          'bg-(--counter-highlight) text-(--counter-highlight-text)',
        className,
      )}
    >
      {completed && checkIcon ? <CheckIcon /> : children ? children : step}
    </div>
  );
}

export function StepSeparator({
  className,
  ...props
}: Omit<React.JSX.IntrinsicElements['div'], 'children'>) {
  const { hasCounter, completed, current } = useStepContext();

  return hasCounter ? (
    <div
      {...props}
      data-ui="sep-separator"
      aria-hidden
      className={twMerge(
        'transition-colors duration-300 ease-in-out',
        'absolute top-[calc(var(--counter-size)/2)] h-(--separator-h) -translate-y-1/2 rounded-(--separator-radius)',
        'left-[calc(var(--counter-size,0)+0.25rem)]',
        'w-[calc(100%-var(--counter-size,0))]',
        'in-[[data-centered]]:left-[calc(50%+calc(var(--counter-size,0)/2)+0.125rem)]',
        'in-[[data-centered]]:w-[calc(100%-var(--counter-size,0)+0.5rem-0.25rem)]',
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

export function StepIndicatorHeading(
  props: React.JSX.IntrinsicElements['div'],
) {
  const { stepHeadingRef } = useStepIndicator();
  return (
    <div {...props} className="outline-0" tabIndex={-1} ref={stepHeadingRef} />
  );
}

export function StepPanel({
  children,
  step,
}: {
  children: React.ReactNode;
  step: number;
}) {
  const { value, steps } = useStepIndicator();

  if (step === value + 1) {
    return children;
  }

  if (step == steps && value === steps) {
    return children;
  }
}
