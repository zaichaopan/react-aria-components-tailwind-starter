import {
  NumberField as RACNumberField,
  NumberFieldProps as RACNumberFieldProps,
  Button,
  ButtonProps,
  InputProps,
} from 'react-aria-components';
import { Input, InputFieldGroup } from './Field';
import { composeTailwindRenderProps } from './utils';

export interface NumberFieldProps extends RACNumberFieldProps {}

export function NumberField(props: NumberFieldProps) {
  return (
    <RACNumberField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col gap-1',
      )}
    />
  );
}

export function NumberInput(
  props: Omit<InputProps, keyof RACNumberFieldProps>,
) {
  return (
    <InputFieldGroup className="fist:border-r">
      <StepperButton slot="increment">
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </StepperButton>
      <Input {...props} />

      <StepperButton slot="decrement">
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M5 12h14" />
        </svg>
      </StepperButton>
    </InputFieldGroup>
  );
}

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="h-9 cursor-default px-2 first:border-r last:border-l pressed:bg-hover"
    />
  );
}
