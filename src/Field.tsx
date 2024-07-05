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
  SearchField as RACSearchField,
  SearchFieldProps as RACSearchFieldProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { composeTailwindRenderProps, inputRingStyle } from './utils';
import { Text } from './Text';
import { CloseButton } from './Button';
import { Icon } from './Icon';
import { Search } from 'lucide-react';

export const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  function (props, ref) {
    const labelId = React.useId();

    const { id } = (React.useContext(LabelContext) ?? {}) as { id?: string };

    // When label id is already provided
    if (id) {
      return (
        <GroupContext.Provider value={{ 'aria-labelledby': id }}>
          <RACGroup
            {...props}
            ref={ref}
            className={composeRenderProps(props.className, (className) => {
              return twMerge('relative flex flex-col gap-1', className);
            })}
          />
        </GroupContext.Provider>
      );
    }

    return (
      <LabelContext.Provider value={{ id: labelId, elementType: 'span' }}>
        <GroupContext.Provider value={{ 'aria-labelledby': labelId }}>
          <RACGroup
            {...props}
            ref={ref}
            className={composeRenderProps(props.className, (className) => {
              return twMerge('relative flex flex-col gap-1', className);
            })}
          />
        </GroupContext.Provider>
      </LabelContext.Provider>
    );
  },
);

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        'w-fit cursor-default text-pretty text-base/6 font-medium sm:text-sm/6',
        // When it is inside disabled group
        ' group-disabled:opacity-50',
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
            className={twMerge(
              'mb-1',
              // When it is inside disabled group
              'group-disabled:opacity-50',
              className,
            )}
          />
        ) : (
          <RACText
            {...props}
            slot="description"
            className={twMerge(
              'mb-1 text-pretty text-base/6 text-muted sm:text-sm/6',
              // When it is inside disabled group
              'group-disabled:opacity-50',
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

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return (
      <RACInput
        {...props}
        ref={ref}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => {
            return twMerge(
              'flex flex w-full rounded-md border bg-inherit px-2 py-[5px] text-base/6 shadow-sm outline-none placeholder:text-muted sm:text-sm/6',
              renderProps.isInvalid && 'border-destructive',
              renderProps.isDisabled && 'disabled:opacity-50',
              renderProps.isFocused && inputRingStyle,
              // When it is inside input group with role=presentation|group and it has border
              '[[role=presentation]_&.border]:h-fit [[role=presentation]_&.border]:border-none [[role=presentation]_&.border]:shadow-none [[role=presentation]_&.border]:ring-0 [[role=presentation]_&.border]:disabled:opacity-100',
              '[[role=group]_&.border]:h-fit [[role=group]_&.border]:border-none [[role=group]_&.border]:shadow-none [[role=group]_&.border]:ring-0 [[role=group]_&.border]:invalid:ring-0 [[role=group]_&.border]:disabled:opacity-100',
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
        (className, renderProps) => {
          return twMerge(
            'w-full rounded-md border bg-inherit p-2 text-base/6 text-foreground outline-none sm:text-sm/6',
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
        {...props}
        ref={ref}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => {
            return twMerge(
              'group relative flex w-full items-center overflow-hidden rounded-md border bg-inherit shadow-sm',
              'group-invalid:border-destructive',
              '[&_svg]:text-muted',
              renderProps.isFocusWithin && inputRingStyle,
              className,
            );
          },
        )}
      />
    );
  },
);

export interface SearchFieldProps extends RACSearchFieldProps {}

export function SearchField(props: SearchFieldProps) {
  return (
    <RACSearchField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col',
      )}
    ></RACSearchField>
  );
}

export function SearchInput({
  className,
  ...props
}: InputProps & { className?: GroupProps['className'] }) {
  return (
    <InputFieldGroup
      className={composeTailwindRenderProps(
        className,
        '[&_input::-webkit-search-cancel-button]:hidden',
      )}
    >
      <Icon>
        <Search className="ml-2 size-5" />
      </Icon>
      <Input {...props} />
      <CloseButton plain size="sm" className="mr-1 group-empty:invisible" />
    </InputFieldGroup>
  );
}
