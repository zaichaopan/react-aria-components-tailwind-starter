import React from 'react';
import {
  FieldErrorProps,
  InputProps,
  LabelProps,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  TextProps,
  composeRenderProps,
  LabelContext,
  GroupContext,
  Group as RACGroup,
  GroupProps,
  TextFieldProps as RACTextFieldProps,
  TextField as RACTextField,
  TextArea as RACTextArea,
  TextAreaProps as RACTextAreaProps,
  Text as RACText,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { composeTailwindRenderProps, inputRingStyle } from './utils';
import { Text } from './Text';

export function Group(props: GroupProps) {
  const labelId = React.useId();

  return (
    <LabelContext.Provider value={{ id: labelId, elementType: 'span' }}>
      <GroupContext.Provider value={{ 'aria-labelledby': labelId }}>
        <RACGroup
          {...props}
          className={composeRenderProps(props.className, (className) => {
            return twMerge('flex flex-col gap-1', className);
          })}
        />
      </GroupContext.Provider>
    </LabelContext.Provider>
  );
}

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        'w-fit cursor-default text-pretty text-base/6 font-medium group-disabled:opacity-50 sm:text-sm/6',
        props.className,
      )}
    />
  );
}

export function WithLabelContext({
  children,
}: {
  children: (
    context: {
      'aria-labelledBy'?: string;
    } | null,
  ) => React.ReactNode;
}) {
  const context = (React.useContext(LabelContext) ?? {}) as { id?: string };

  return children({
    'aria-labelledBy': context?.id,
  });
}

export const DescriptionContext = React.createContext<{
  'aria-describedby'?: string;
} | null>(null);

export function WithDescriptionContext({
  children,
}: {
  children: (
    context: {
      'aria-describedby'?: string;
    } | null,
  ) => React.ReactNode;
}) {
  const context = React.useContext(DescriptionContext);

  return children(context);
}

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

export function Description({ className, ...props }: TextProps) {
  return (
    <WithDescriptionContext>
      {(context) => {
        const describedby = context?.['aria-describedby'];
        return describedby ? (
          <Text
            {...props}
            id={describedby}
            slot="description"
            className={twMerge('mb-1', className)}
          />
        ) : (
          <RACText
            {...props}
            slot="description"
            className={twMerge(
              'mb-1 text-pretty text-base/6 text-muted group-disabled:opacity-50 sm:text-sm/6',
              className,
            )}
          />
        );
      }}
    </WithDescriptionContext>
  );
}

export function TextField(props: RACTextFieldProps) {
  return (
    <RACTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col gap-1',
      )}
    />
  );
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'text-base/6 text-destructive sm:text-sm/6',
      )}
    />
  );
}

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'placeholder:text-muted-foreground flex flex h-9 w-full rounded-md border bg-background px-2 py-1 text-base/6 shadow-sm outline-none sm:text-sm/6',
            renderProps.isInvalid && 'border-destructive',
            renderProps.isDisabled && 'disabled:opacity-50',
            renderProps.isFocused && inputRingStyle,
            // When it is inside role=presentation | group parent and it has border
            '[[role=presentation]_&.border]:h-fit [[role=presentation]_&.border]:border-none [[role=presentation]_&.border]:shadow-none [[role=presentation]_&.border]:ring-0',
            '[[role=group]_&.border]:h-fit [[role=group]_&.border]:border-none [[role=group]_&.border]:shadow-none [[role=group]_&.border]:ring-0 [[role=group]_&.border]:invalid:ring-0',
            className,
          );
        },
      )}
    />
  );
}

export function TextArea(props: RACTextAreaProps) {
  return (
    <RACTextArea
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return twMerge(
            'w-full rounded-md border bg-background p-2 text-base/6 text-foreground outline-none sm:text-sm/6',
            renderProps.isInvalid && 'border-destructive',
            renderProps.isDisabled && 'disabled:opacity-50',
            renderProps.isFocused && inputRingStyle,
            className,
          );
        },
      )}
    />
  );
}

export const InputFieldGroup = React.forwardRef<HTMLDivElement, GroupProps>(
  function InputFieldGroup(props, ref) {
    return (
      <RACGroup
        ref={ref}
        {...props}
        className={composeRenderProps(
          props.className,
          (className, renderProps) =>
            twMerge(
              'group flex w-full items-center overflow-hidden rounded-md border bg-background shadow-sm',
              'invalid:border-destructive group-invalid:border-destructive',
              renderProps.isFocusWithin && inputRingStyle,
              className,
            ),
        )}
      />
    );
  },
);
