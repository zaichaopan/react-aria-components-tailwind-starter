import React from 'react';
import {
  FieldErrorProps,
  InputProps,
  LabelProps,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  TextProps,
  LabelContext,
  GroupContext,
  TextFieldProps as RACTextFieldProps,
  TextField as RACTextField,
  TextArea as RACTextArea,
  TextAreaProps as RACTextAreaProps,
  Text as RACText,
  composeRenderProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { DisplayLevel, displayLevels, inputField } from './utils';
import { Text } from './text';

// https://react-spectrum.adobe.com/react-aria/Group.html#advanced-customization
export const LabeledGroup = React.forwardRef<
  HTMLDivElement,
  React.JSX.IntrinsicElements['div']
>(function LabeledGroup({ className, children, ...props }, ref) {
  const labelId = React.useId();

  return (
    <LabelContext.Provider value={{ id: labelId, elementType: 'span' }}>
      <GroupContext.Provider value={{ 'aria-labelledby': labelId }}>
        <div
          {...props}
          ref={ref}
          className={twMerge(
            ['[&>[data-ui=label]:first-of-type:not([class*=mb])]:mb-2'],
            className,
          )}
        >
          {children}
        </div>
      </GroupContext.Provider>
    </LabelContext.Provider>
  );
});

export function Label({
  hint,
  displayLevel = 3,
  children,
  ...props
}: LabelProps & {
  hint?: 'required' | 'optional';
  displayLevel?: DisplayLevel;
}) {
  return (
    <RACLabel
      {...props}
      data-ui="label"
      className={twMerge(
        'inline-block min-w-max text-pretty',
        'group-data-disabled:opacity-50',
        displayLevels[displayLevel],
        hint === 'required' &&
          "after:ms-0.5 after:text-red-600 after:content-['*']",
        props.className,
      )}
    >
      {children}
      {hint === 'optional' && (
        <span className="text-muted ms-auto ps-0.5 font-normal">Optional</span>
      )}
    </RACLabel>
  );
}

export const DescriptionContext = React.createContext<{
  'aria-describedby'?: string;
} | null>(null);

export function DescriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const descriptionId: string | null = React.useId();
  const [descriptionRendered, setDescriptionRendered] = React.useState(true);

  React.useLayoutEffect(() => {
    if (!document.getElementById(descriptionId)) {
      setDescriptionRendered(false);
    }
  }, [descriptionId]);

  return (
    <DescriptionContext.Provider
      value={{
        'aria-describedby': descriptionRendered ? descriptionId : undefined,
      }}
    >
      {children}
    </DescriptionContext.Provider>
  );
}

/**
 * RAC will auto associate <RACText slot="description"/> with TextField/NumberField/RadioGroup/CheckboxGroup/DatePicker etc,
 * but not for Switch/Checkbox/Radio and our custom components. We use follow pattern to associate description for
 * Switch/Checkbox/Radio https://react-spectrum.adobe.com/react-aria/Switch.html#advanced-customization
 */
export function Description({ className, ...props }: TextProps) {
  const describedby =
    React.useContext(DescriptionContext)?.['aria-describedby'];

  return describedby ? (
    <Text
      {...props}
      id={describedby}
      data-ui="description"
      className={twMerge('block group-data-disabled:opacity-50', className)}
    />
  ) : (
    <RACText
      {...props}
      data-ui="description"
      slot="description"
      className={twMerge(
        'text-muted block text-base/6 text-pretty sm:text-sm/6',
        'group-data-disabled:opacity-50',
        className,
      )}
    />
  );
}

export function TextField(props: RACTextFieldProps) {
  return (
    <RACTextField
      {...props}
      data-ui="text-field"
      className={composeRenderProps(props.className, (className) =>
        twMerge(inputField, className),
      )}
    />
  );
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      data-ui="errorMessage"
      className={composeRenderProps(props.className, (className) =>
        twMerge('block text-base/6 text-red-600 sm:text-sm/6', className),
      )}
    />
  );
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return (
      <RACInput
        {...props}
        ref={ref}
        className={composeRenderProps(
          props.className,
          (className, { isDisabled, isInvalid, isFocused, isHovered }) => {
            return twMerge(
              'placeholder:text-muted w-full rounded-md text-base/6 shadow-sm outline-none sm:text-sm/6 dark:shadow-none',
              'px-3 py-2.5 sm:py-1.5',
              'ring ring-zinc-950/10 dark:ring-white/10',
              !isFocused &&
                !isDisabled &&
                !isInvalid &&
                isHovered &&
                '[&:not([readonly])]:ring-zinc-950/20 dark:[&:not([readonly])]:ring-white/20',
              '[&[readonly]]:bg-zinc-50 dark:[&[readonly]]:bg-white/5',
              isDisabled && 'opacity-50',
              isInvalid && 'ring-red-600 dark:ring-red-600',
              isFocused ? 'dark:ring-ring ring-ring ring-2' : '',
              className,
            );
          },
        )}
      />
    );
  },
);

export function TextArea(props: RACTextAreaProps) {
  return (
    <RACTextArea
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled, isInvalid, isFocused, isHovered }) =>
          twMerge(
            'placeholder:text-muted w-full rounded-md text-base/6 shadow-sm outline-none sm:text-sm/6 dark:shadow-none',
            'px-3 py-2.5 sm:py-1.5',
            'ring ring-zinc-950/10 dark:ring-white/10',
            !isFocused &&
              !isDisabled &&
              !isInvalid &&
              isHovered &&
              '[&:not([readonly])]:ring-zinc-950/20 dark:[&:not([readonly])]:ring-white/20',
            '[&[readonly]]:bg-zinc-50 dark:[&[readonly]]:bg-white/5',
            isDisabled && 'opacity-50',
            isInvalid && 'ring-red-600 dark:ring-red-600',
            isFocused ? 'ring-ring dark:ring-ring ring-2' : '',
            className,
          ),
      )}
    />
  );
}
