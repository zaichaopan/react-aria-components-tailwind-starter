import type { Meta } from '@storybook/react';
import {
  RadioField,
  RadioGroup,
  RadioGroupContent,
  Radio,
} from '../src/RadioGroup';
import { Form } from '../src/Form';
import { Button } from '../src/Button';
import { Small, Text, TextLink } from '../src/Text';
import { docs } from '../.storybook/docs';
import { FieldError, Label, Description } from '../src/Field';
import { twMerge } from 'tailwind-merge';
import { CheckCircle } from 'lucide-react';
import { focusOutlineStyle } from '../src/utils';

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/RadioGroup.html#radiogroup" target="_blank">**radio group**</a> allows a user to select a single item from a list of mutually exclusive options.',
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => {
  return (
    <div className="w-full max-w-sm p-3">
      <RadioGroup {...args}>
        <Label>Notify me about...</Label>
        <RadioGroupContent>
          <Radio value="all">All new message</Radio>
          <Radio value="direct">Direct messages, mentions & keywords</Radio>
          <Radio value="nothing">Nothing</Radio>
        </RadioGroupContent>
      </RadioGroup>
    </div>
  );
};

export const DisabledRadioItems = () => {
  return (
    <div className="w-full max-w-sm p-3">
      <RadioGroup>
        <Label>Notify me about...</Label>
        <RadioGroupContent>
          <Radio value="all">All new message</Radio>
          <Radio value="direct" isDisabled>
            Direct messages, mentions & keywords
          </Radio>
          <Radio value="nothing">Nothing</Radio>
        </RadioGroupContent>
      </RadioGroup>
    </div>
  );
};

export const DisabledRadioGroup = () => {
  return (
    <div className="w-full max-w-sm p-3">
      <RadioGroup isDisabled>
        <Label>Notify me about...</Label>
        <RadioGroupContent>
          <Radio value="all">All new message</Radio>
          <Radio value="direct">Direct messages, mentions & keywords</Radio>
          <Radio value="nothing">Nothing</Radio>
        </RadioGroupContent>
      </RadioGroup>
    </div>
  );
};

export const WithDescription = () => {
  return (
    <div className="w-full p-3">
      <RadioGroup>
        <Label>Contact sharing</Label>
        <Text>
          Choose who’s allowed to share your contact info — so they can
          introduce you to people outside.{' '}
          <TextLink href="#">Learn more</TextLink>
        </Text>
        <RadioGroupContent className="gap-6 pt-4">
          <RadioField>
            <Radio value="all">All your contacts</Radio>
            <Description>Includes people from any external people</Description>
          </RadioField>

          <RadioField>
            <Radio value="only_at_my_company">Only people at my company</Radio>
          </RadioField>

          <Radio value="no_none">No one</Radio>
        </RadioGroupContent>
      </RadioGroup>
    </div>
  );
};

export function HorizontalRadioGroup(args: any) {
  return (
    <div className="w-full p-3">
      <RadioGroup {...args} orientation="horizontal" name="rate">
        <Label>How do you rate your experience?</Label>
        <RadioGroupContent>
          <Radio value="1">1</Radio>
          <Radio value="2">2</Radio>
          <Radio value="3">3</Radio>
          <Radio value="4">4</Radio>
          <Radio value="5">5</Radio>
        </RadioGroupContent>
      </RadioGroup>
    </div>
  );
}

export const WithValidation = (args: any) => {
  return (
    <Form>
      <div className="w-full max-w-sm p-3">
        <RadioGroup {...args} isRequired>
          <Label>Notify me about...</Label>
          <RadioGroupContent>
            <Radio value="all">All new message</Radio>
            <Radio value="direct">Direct messages, mentions & keywords</Radio>
            <Radio value="nothing">Nothing</Radio>
          </RadioGroupContent>
          <FieldError />
        </RadioGroup>
      </div>
      <Button type="submit" className="self-start">
        Save
      </Button>
    </Form>
  );
};

export const RadioCardGroups = () => {
  return (
    <div className="flex flex-1">
      <RadioGroup
        orientation="horizontal"
        defaultValue="basic"
        className="flex-1"
      >
        <Label>Database configuration</Label>
        <RadioGroupContent className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 [&_[slot=radio]]:mt-1.5">
          <Radio
            value="basic"
            className={(renderProps) => {
              return twMerge(
                'items-start rounded-md border p-3 shadow-sm',
                renderProps.isSelected && 'border-accent ring-2 ring-accent/25',
              );
            }}
          >
            <div className="flex flex-col ">
              <Text className="text-foreground">Basic performance</Text>
              <Small>1/8 vCPU, 1GB RAM</Small>
            </div>
          </Radio>
          <Radio
            value="advanced"
            className={(renderProps) => {
              return twMerge(
                'items-start rounded-md border p-3 shadow-sm',
                renderProps.isSelected && 'border-accent ring-2 ring-accent/15',
              );
            }}
          >
            <div className="flex flex-col">
              <Text className="text-foreground">Advanced performance</Text>
              <Small>1/8 vCPU, 1GB RAM</Small>
            </div>
          </Radio>
          <Radio
            value="turbo"
            className={(renderProps) => {
              return twMerge(
                'items-start rounded-md border p-3 shadow-sm',
                renderProps.isSelected && 'border-accent ring-2 ring-accent/15',
              );
            }}
          >
            <div className="flex flex-col">
              <Text className="text-foreground">Turbo performance</Text>
              <Small>1/8 vCPU, 1GB RAM</Small>
            </div>
          </Radio>
        </RadioGroupContent>
      </RadioGroup>
    </div>
  );
};

export const CustomRadioGroups = () => {
  const options = [
    { name: 'Standard', description: ' 4-6 business days', price: ' $4.99' },
    { name: 'Express', description: ' 2-5 business days', price: ' $15.99' },
    { name: 'Lightning', description: ' 1 business day', price: ' $24.99' },
  ];

  return (
    <div className="flex flex-1">
      <RadioGroup
        orientation="horizontal"
        defaultValue={options[0].name}
        className="flex-1"
      >
        <Label>Shipping</Label>
        <RadioGroupContent className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          {options.map((option) => {
            return (
              <Radio
                value={option.name}
                className={({ isSelected, isFocusVisible }) => {
                  return twMerge(
                    'items-start rounded-md border p-3 shadow-sm',
                    isSelected && 'bg-accent text-white',
                    isFocusVisible && focusOutlineStyle,
                  );
                }}
                customRender={({ isSelected }) => {
                  return (
                    <div className="flex w-full items-center justify-between gap-3">
                      <div
                        className={twMerge(
                          'flex shrink-0 items-center text-blue-100',
                          isSelected && ' text-white',
                        )}
                      >
                        <CheckCircle />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div
                          className={twMerge(
                            'font-semibold text-gray-900',
                            isSelected && 'text-white',
                          )}
                        >
                          {option.name}
                        </div>
                        <div
                          className={twMerge(
                            'inline text-gray-500',
                            isSelected && 'text-sky-100',
                          )}
                        >
                          {option.description}
                        </div>
                      </div>
                      <div
                        className={twMerge(
                          'font-medium text-muted',
                          isSelected && 'text-white',
                        )}
                      >
                        {option.price}
                      </div>
                    </div>
                  );
                }}
              />
            );
          })}
        </RadioGroupContent>
      </RadioGroup>
    </div>
  );
};

CustomRadioGroups.parameters = {
  docs: {
    description: {
      story:
        'Use the **customRender** prop of **Radio** to render completely custom radio groups:',
    },
  },
};
