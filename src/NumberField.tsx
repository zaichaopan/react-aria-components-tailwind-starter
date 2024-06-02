import { ChevronDown, ChevronUp } from 'lucide-react';
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
    <InputFieldGroup>
      {() => (
        <>
          <Input {...props} />
          <div className="flex flex-col border-s">
            <StepperButton slot="increment">
              <ChevronUp aria-hidden className="h-4 w-4" />
            </StepperButton>
            <div className="border-b" />
            <StepperButton slot="decrement">
              <ChevronDown aria-hidden className="h-4 w-4" />
            </StepperButton>
          </div>
        </>
      )}
    </InputFieldGroup>
  );
}

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="cursor-default px-0.5 text-gray-500 pressed:bg-gray-100 group-disabled:text-gray-200 dark:text-zinc-400 dark:pressed:bg-zinc-800 dark:group-disabled:text-zinc-600"
    />
  );
}
