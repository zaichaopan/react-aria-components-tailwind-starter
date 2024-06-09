import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
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
      {() => (
        <>
          <StepperButton slot="increment">
            <Plus aria-hidden className="h-4 w-4" />
          </StepperButton>
          <Input {...props} />

          <StepperButton slot="decrement">
            <Minus aria-hidden className="h-4 w-4" />
          </StepperButton>
        </>
      )}
    </InputFieldGroup>
  );
}

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="h-9 cursor-default px-2 text-gray-500 first:border-r last:border-l pressed:bg-hover group-disabled:opacity-50"
    />
  );
}
