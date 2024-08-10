import React from 'react';
import type { Meta } from '@storybook/react';
import { RadioField, RadioGroup, Radio } from '../src/RadioGroup';
import { Form } from '../src/Form';
import { Button } from '../src/Button';
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

export const Example = () => {
  return (
    <div className="w-full max-w-sm p-3">
      <RadioGroup defaultValue="automatic">
        <Label>Show scrollbars</Label>
        <Radio value="automatic">Automatic</Radio>
        <Radio value="scrolling">While scrolling</Radio>
        <Radio value="always">Always</Radio>
      </RadioGroup>
    </div>
  );
};

export const DisabledRadioItems = () => {
  return (
    <div className="w-full max-w-sm p-3">
      <RadioGroup>
        <Label>Show scrollbars</Label>
        <Radio value="automatic">Automatic</Radio>
        <Radio value="scrolling" isDisabled>
          While scrolling
        </Radio>
        <Radio value="always">Always</Radio>
      </RadioGroup>
    </div>
  );
};

export const DisabledRadioGroup = () => {
  return (
    <div className="w-full max-w-sm p-3">
      <RadioGroup isDisabled>
        <Label>Show scrollbars</Label>
        <Radio value="automatic">Automatic</Radio>
        <Radio value="scrolling">While scrolling</Radio>
        <Radio value="always">Always</Radio>
      </RadioGroup>
    </div>
  );
};

export const WithDescription = () => {
  return (
    <div className="w-full p-3">
      <RadioGroup>
        <Label>Show scrollbars</Label>
        <RadioField>
          <Radio value="automatic">Automatic</Radio>
          <Description>
            Scrollbars will always be visible when using a mouse, and only while
            scrolling when using a trackpad.
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="while_scrolling">While scrolling</Radio>
          <Description>
            Scrollbars will appear only while you are scrolling.
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="always">Always</Radio>
          <Description>Scrollbars will always be visible.</Description>
        </RadioField>
      </RadioGroup>
    </div>
  );
};

export const WithValidation = () => {
  return (
    <Form>
      <div className="w-full max-w-sm p-3">
        <RadioGroup isRequired>
          <Label>Show scrollbars</Label>
          <Radio value="automatic">Automatic</Radio>
          <Radio value="scrolling">While scrolling</Radio>
          <Radio value="always">Always</Radio>
          <FieldError />
        </RadioGroup>
      </div>
      <Button type="submit" className="self-start">
        Save
      </Button>
    </Form>
  );
};

export function HorizontalRadioGroup() {
  return (
    <div className="w-full p-3">
      <RadioGroup name="rate">
        <Label>How do you rate your experience?</Label>
        <div className="flex gap-4">
          <Radio value="1">1</Radio>
          <Radio value="2">2</Radio>
          <Radio value="3">3</Radio>
          <Radio value="4">4</Radio>
          <Radio value="5">5</Radio>
        </div>
      </RadioGroup>
    </div>
  );
}

export const RadioCardGroups = () => {
  const options = [
    { name: 'Standard', description: ' 4-6 business days', price: ' $4.99' },
    { name: 'Express', description: ' 2-5 business days', price: ' $15.99' },
    { name: 'Lightning', description: ' 1 business day', price: ' $24.99' },
  ];

  return (
    <div className="flex flex-1">
      <RadioGroup
        defaultValue={options[0].name}
        className="flex-1"
      >
        <Label>Shipping</Label>
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          {options.map((option) => {
            return (
              <Radio
                value={option.name}
                className={({ isSelected }) => {
                  return twMerge(
                    'items-start rounded-md border p-3 shadow-sm [&_[slot=radio]]:mt-1.5',
                    isSelected && 'border-accent ring-1 ring-accent',
                  );
                }}
              >
                <div className="flex w-full items-center justify-between gap-3">
                  <div className="flex flex-1 flex-col">
                    <div className="font-semibold">{option.name}</div>
                    <div className="text-gray-500">{option.description}</div>
                  </div>
                  <div className="font-medium text-muted">{option.price}</div>
                </div>
              </Radio>
            );
          })}
        </div>
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
        defaultValue={options[0].name}
        className="flex-1"
      >
        <Label>Shipping</Label>
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          {options.map((option) => {
            return (
              <Radio
                value={option.name}
                className={({ isSelected, isFocusVisible }) => {
                  return twMerge(
                    'items-start rounded-md border p-3 shadow-sm',
                    isSelected && 'border-accent ring-1 ring-accent',
                    isFocusVisible && focusOutlineStyle,
                  );
                }}
                render={({ isSelected }) => {
                  return (
                    <div className="flex w-full items-center justify-between gap-3">
                      <div
                        className={twMerge(
                          'flex shrink-0 items-center text-accent/25',
                          isSelected && ' text-accent',
                        )}
                      >
                        <CheckCircle />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className='font-semibold'>
                          {option.name}
                        </div>
                        <div className='inline text-gray-500'>
                          {option.description}
                        </div>
                      </div>
                      <div className='font-medium text-muted'>
                        {option.price}
                      </div>
                    </div>
                  );
                }}
              />
            );
          })}
        </div>
      </RadioGroup>
    </div>
  );
};

CustomRadioGroups.parameters = {
  docs: {
    description: {
      story:
        'Use the **render** prop of **Radio** to render completely custom radio groups.',
    },
  },
};

export const StarRatings = () => {
  const options = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
  ];

  const [rating, setRating] = React.useState<string | null>(null);

  return (
    <div className="flex flex-1">
      <RadioGroup
        className="flex-1"
        value={rating}
        onChange={(value) => {
          setRating(value);
        }}
      >
        <Label>Rating</Label>
        <div className="flex gap-2">
          {options.map((option) => {
            const shouldLHighlight = Number(rating) > Number(option.value);
            return (
              <Radio
                value={option.value}
                className={({ isSelected, isFocusVisible }) => {
                  return twMerge(
                    'items-start rounded-md',
                    isSelected || shouldLHighlight
                      ? 'text-accent'
                      : 'text-muted',
                    isFocusVisible && focusOutlineStyle,
                  );
                }}
                render={({ isSelected }) => {
                  return (
                    <div className="flex w-full items-center justify-between gap-3 ">
                      {isSelected || shouldLHighlight ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                      )}
                    </div>
                  );
                }}
              />
            );
          })}
        </div>
      </RadioGroup>
    </div>
  );
};
