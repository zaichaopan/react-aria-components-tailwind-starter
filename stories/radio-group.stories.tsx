import React from 'react';
import type { Meta } from '@storybook/react';
import { RadioField, RadioGroup, Radio, Radios } from '../src/radio-group';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { FieldError, Label, Description } from '../src/field';
import { Small, TextLink } from '../src/text';
import { Icon } from '../src/icon';
import { twMerge } from 'tailwind-merge';
import { MonitorIcon, MoonStarIcon, SunIcon } from 'lucide-react';

const meta: Meta = {
  title: 'Radio group',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/RadioGroup.html#radiogroup" target="_blank">**radio group**</a> allows a user to select a single item from a list of mutually exclusive options.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <RadioGroup defaultValue="system" className="max-w-md">
      <Label>Autoplay animated images</Label>
      <Radios>
        <Radio value="system">Sync with system</Radio>
        <Radio value="enable">Enable</Radio>
        <Radio value="disabled">Disabled</Radio>
      </Radios>
    </RadioGroup>
  );
};

export const RadioWithDescription = () => {
  return (
    <div className="space-y-12">
      <RadioGroup className="max-w-md">
        <Label>Autoplay animated images</Label>

        <Radios>
          <RadioField>
            <Radio value="system">Sync with system</Radio>
            <Description>
              Adopts your system preference for reduced motion
            </Description>
          </RadioField>

          <RadioField>
            <Radio value="enable">Approve</Radio>
          </RadioField>

          <RadioField>
            <Radio value="disabled">Disabled</Radio>
          </RadioField>
        </Radios>
      </RadioGroup>

      <RadioGroup className="max-w-md">
        <Label>Autoplay animated images</Label>

        <Radios>
          <RadioField>
            <Radio value="system">Sync with system</Radio>
            <Description>
              Adopts your system preference for reduced motion
            </Description>
          </RadioField>

          <RadioField>
            <Radio value="enable">Approve</Radio>
            <Description>Automatically plays animated images</Description>
          </RadioField>

          <RadioField>
            <Radio value="disabled">Disabled</Radio>
            <Description>
              Prevents animated images from playing automatically
            </Description>
          </RadioField>
        </Radios>
      </RadioGroup>
    </div>
  );
};

export const RadioGroupWithDescription = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>
      <Description>
        Select whether animated images should play automatically.
      </Description>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const RadioLabelPlacement = () => {
  return (
    <div className="space-y-12">
      <RadioGroup className="max-w-md">
        <Label>Autoplay animated images</Label>

        <Radios>
          <Radio value="system" labelPlacement="start">
            Sync with system
          </Radio>

          <Radio value="enable" labelPlacement="start">
            Approve
          </Radio>

          <Radio value="disabled" labelPlacement="start">
            Disabled
          </Radio>
        </Radios>
      </RadioGroup>

      <RadioGroup className="max-w-md">
        <Label>Autoplay animated images</Label>

        <Radios>
          <RadioField>
            <Radio value="system" labelPlacement="start">
              Sync with system
            </Radio>
            <Description>
              Adopts your system preference for reduced motion
            </Description>
          </RadioField>

          <RadioField>
            <Radio value="enable" labelPlacement="start">
              Approve
            </Radio>
            <Description>Automatically plays animated images</Description>
          </RadioField>

          <RadioField>
            <Radio value="disabled" labelPlacement="start">
              Disabled
            </Radio>
            <Description>
              Prevents animated images from playing automatically
            </Description>
          </RadioField>
        </Radios>
      </RadioGroup>
    </div>
  );
};

export const RadioWithDisabledState = () => {
  return (
    <RadioGroup className="max-w-md">
      <Label>Autoplay animated images</Label>
      <Description>
        Select whether animated images should play automatically.
      </Description>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled" isDisabled>
            Disabled
          </Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const RadioGroupWithDisabledState = () => {
  return (
    <RadioGroup className="max-w-md" isDisabled>
      <Label>Autoplay animated images</Label>
      <Description>
        Select whether animated images should play automatically.
      </Description>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const RadioGroupWithReadonlyState = () => {
  return (
    <RadioGroup className="max-w-md" isReadOnly>
      <Label>Autoplay animated images</Label>
      <Description>
        Select whether animated images should play automatically.
      </Description>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <RadioField>
          <Radio value="enable">Approve</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <RadioField>
          <Radio value="disabled">Disabled</Radio>
          <Description>
            Prevents animated images from playing automatically
          </Description>
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const RadioGroupWithValidation = () => {
  return (
    <Form>
      <RadioGroup isRequired className="max-w-md">
        <Label>Autoplay animated images</Label>
        <Description>
          Select whether animated images should play automatically.
        </Description>
        <Radios>
          <RadioField>
            <Radio value="system">Sync with system</Radio>
            <Description>
              Adopts your system preference for reduced motion
            </Description>
          </RadioField>

          <RadioField>
            <Radio value="enable">Approve</Radio>
            <Description>Automatically plays animated images</Description>
          </RadioField>

          <RadioField>
            <Radio value="disabled">Disabled</Radio>
            <Description>
              Prevents animated images from playing automatically
            </Description>
          </RadioField>
        </Radios>
        <FieldError />
      </RadioGroup>

      <Button type="submit">Save motion preferences</Button>
    </Form>
  );
};

export function RadioGroupWithHorizontalLayout() {
  return (
    <RadioGroup orientation="horizontal">
      <Label>Select your favorite city</Label>
      <Radios>
        <Radio value="buenos-aires">Buenos Aires</Radio>
        <Radio value="sydney">Sydney</Radio>
        <Radio value="san-francisco">San Francisco</Radio>
        <Radio value="london">London</Radio>
        <Radio value="tokyo">Tokyo</Radio>
      </Radios>
    </RadioGroup>
  );
}

export function RadioGroupWithCustomization() {
  return (
    <div className="flex flex-col space-y-6">
      <Rating />
      <Reviews />
      <DeliveryOptions />
      <DeliveryOptionsRightAlignment />
      <CpuOptions />
      <AccentColors />

      <div className="w-72">
        <SwitchPlan />
      </div>

      <ThemeOptions />
    </div>
  );
}

function Reviews() {
  return (
    <RadioGroup defaultValue="all">
      <Label className="sr-only">Choose review</Label>
      <Radios>
        <Radio value="all">
          All reviews&nbsp;<Small>(12,921)</Small>
        </Radio>
        <Radio
          value="5 stars reviews"
          aria-label="5 stars"
          className="[&_svg]:size-4 [&_svg]:text-yellow-500"
        >
          <div className="inline-flex gap-x-1">
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
          </div>
        </Radio>
        <Radio
          value="4 stars reviews"
          aria-label="4 stars"
          className="[&_svg]:size-4 [&_svg]:text-yellow-500"
        >
          <div className="inline-flex gap-x-1">
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
          </div>
          &nbsp;<Small>(4,726)</Small>
        </Radio>
        <Radio
          value="3 stars reviews"
          aria-label="3 stars"
          className="[&_svg]:size-4 [&_svg]:text-yellow-500"
        >
          <div className="inline-flex gap-x-1">
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
          </div>
          &nbsp;<Small>(3,234)</Small>
        </Radio>
        <Radio
          value="2 stars reviews"
          aria-label="2 stars"
          className="[&_svg]:size-4 [&_svg]:text-yellow-500"
        >
          <div className="inline-flex gap-x-1">
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
          </div>
          &nbsp;<Small>(1,842)</Small>
        </Radio>
        <Radio
          value="1 star review"
          aria-label="1 starts"
          className="[&_svg]:size-4 [&_svg]:text-yellow-500"
        >
          <div className="inline-flex gap-x-1">
            <Icon>
              <StarFillIcon />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
            <Icon>
              <StarFillIcon className="opacity-30" />
            </Icon>
          </div>
          &nbsp;<Small>(452)</Small>
        </Radio>
      </Radios>
    </RadioGroup>
  );
}

function DeliveryOptions() {
  const options = [
    { name: 'Standard', description: ' 4-6 business days', price: ' $4.99' },
    { name: 'Express', description: ' 2-5 business days', price: ' $15.99' },
    { name: 'Lightning', description: ' 1 business day', price: ' $24.99' },
  ];

  return (
    <RadioGroup defaultValue={options[0].name} className="w-72">
      <Label>Shipping</Label>
      <Radios className="grid grid-cols-1 gap-4">
        {options.map((option) => {
          return (
            <Radio
              value={option.name}
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-lg border px-4 py-3 [&_[slot=radio]]:mt-1.5',
                  isSelected && 'border-accent ring-accent ring ring-1',
                );
              }}
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex font-medium">{option.name}</div>
                  <div className="text-gray-500">{option.description}</div>
                </div>
                <div className="text-muted font-medium">{option.price}</div>
              </div>
            </Radio>
          );
        })}
      </Radios>
    </RadioGroup>
  );
}

function DeliveryOptionsRightAlignment() {
  const options = [
    { name: 'Standard', description: ' 4-6 business days', price: ' $4.99' },
    { name: 'Express', description: ' 2-5 business days', price: ' $15.99' },
    { name: 'Lightning', description: ' 1 business day', price: ' $24.99' },
  ];

  return (
    <RadioGroup defaultValue={options[0].name} className="w-72">
      <Label>Shipping</Label>
      <Radios className="grid grid-cols-1 gap-4">
        {options.map((option) => {
          return (
            <Radio
              labelPlacement="start"
              value={option.name}
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-lg border px-4 py-3 [&_[slot=radio]]:mt-1.5',
                  isSelected && 'border-accent ring-accent ring ring-1',
                );
              }}
            >
              <div className="flex w-full flex-col gap-3">
                <div className="flex flex-1 flex-col">
                  <div className="flex font-medium">{option.name}</div>
                  <div className="text-gray-500">{option.description}</div>
                </div>
                <div className="font-medium">{option.price}</div>
              </div>
            </Radio>
          );
        })}
      </Radios>
    </RadioGroup>
  );
}

const accentColors = [
  {
    value: 'blue',
    color: 'bg-blue-500',
  },
  {
    value: 'purple',
    color: 'bg-purple-500',
  },
  {
    value: 'pink',
    color: 'bg-pink-500',
  },
  {
    value: 'red',
    color: 'bg-red-500',
  },
  {
    value: 'orange',
    color: 'bg-orange-500',
  },
  {
    value: 'yellow',
    color: 'bg-yellow-500',
  },
  {
    value: 'green',
    color: 'bg-green-500',
  },
];

function AccentColors() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="blue">
      <Label>Choose a accent color</Label>
      <Radios className="gap-x-2">
        {accentColors.map((color) => {
          return (
            <Radio
              value={color.value}
              aria-label={color.value}
              render={({ isSelected, isFocusVisible }) => (
                <div
                  className={twMerge(
                    'grid size-6 place-items-center rounded-full',
                    color.color,
                    isFocusVisible &&
                      'outline-ring outline outline-2 outline-offset-2',
                  )}
                >
                  <div
                    className={twMerge(
                      'size-0 transition-all',
                      isSelected ? 'size-2.5 rounded-full bg-white' : '',
                    )}
                  ></div>
                </div>
              )}
            />
          );
        })}
      </Radios>
    </RadioGroup>
  );
}

function CpuOptions() {
  const options = ['2 CPU', '4 CPU', '6 CPU', '8 CPU', '12 CPU', '16 CPU'];

  return (
    <RadioGroup orientation="horizontal" defaultValue={'6 CPU'}>
      <Label className="flex justify-between">
        CPU
        <TextLink className="text-muted no-underline">
          See performance specs
        </TextLink>
      </Label>

      <Radios>
        {options.map((option) => {
          return (
            <Radio
              isDisabled={option === '16 CPU'}
              key={option}
              value={option}
              render={({ isSelected, isFocusVisible }) => (
                <div
                  className={[
                    'min-w-[86px]',
                    'rounded-md border px-4 py-2 font-semibold',
                    isSelected && 'border-accent bg-accent text-white',
                    isFocusVisible &&
                      'outline-ring outline outline-2 outline-offset-2',
                  ].join(' ')}
                >
                  {option}
                </div>
              )}
            />
          );
        })}
      </Radios>
    </RadioGroup>
  );
}

function Rating() {
  const options = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
  ];

  const [rating, setRating] = React.useState<string | null>('4');
  const [hoveredRating, setHoveredRating] = React.useState<string | null>(null);

  return (
    <RadioGroup
      orientation="horizontal"
      className="flex-1"
      value={rating}
      onChange={(value) => {
        setRating(value);
      }}
    >
      <Label>Rating</Label>
      <Radios className="gap-x-1">
        {options.map((option, index) => {
          const shouldLHighlight =
            Number(rating) >= Number(option.value) ||
            Number(hoveredRating) >= Number(option.value);

          return (
            <Radio
              key={option.value}
              value={option.value}
              onHoverChange={(hovered) => {
                setHoveredRating(hovered ? option.value : null);
              }}
              aria-label={String(index + 1)}
              className={({ isFocusVisible }) => {
                return isFocusVisible
                  ? 'outline-ring outline outline-2 outline-offset-2'
                  : '';
              }}
              render={
                <div className="flex w-full items-center justify-between gap-3">
                  <StarFillIcon
                    className={[
                      'size-6',
                      shouldLHighlight ? 'text-yellow-500' : 'opacity-15',
                    ].join(' ')}
                  />
                </div>
              }
            />
          );
        })}
      </Radios>
    </RadioGroup>
  );
}

function ThemeOptions() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="system">
      <Label>Appearance</Label>
      <Description>Customize your application appearance</Description>
      <Radios className="rounded-lg border p-1">
        <div className="relative isolate flex flex-1">
          <Radio
            className="peer/system z-10 flex-1"
            value="system"
            render={({ isFocusVisible, isSelected }) => (
              <div
                className={twMerge(
                  'flex items-center justify-center gap-x-2 rounded-md px-4 py-1 text-muted',
                  isSelected && 'text-white',
                  isFocusVisible &&
                    'outline-ring outline outline-2 outline-offset-2',
                )}
              >
                <Icon>
                  <MonitorIcon className="size-4" />
                </Icon>
                <span>System</span>
              </div>
            )}
          ></Radio>
          <Radio
            className="peer/light z-10 flex-1"
            value="light"
            render={({ isFocusVisible, isSelected }) => (
              <div
                className={twMerge(
                  'flex items-center justify-center gap-x-2 rounded-md px-4 py-1 text-muted',
                  isSelected && 'text-white',
                  isFocusVisible &&
                    'outline-ring outline outline-2 outline-offset-2',
                )}
              >
                <Icon>
                  <SunIcon className="size-4" />
                </Icon>
                <span>Light</span>
              </div>
            )}
          ></Radio>
          <Radio
            className="peer/dark z-10 flex-1"
            value="dark"
            render={({ isFocusVisible, isSelected }) => (
              <div
                className={twMerge(
                  'flex items-center justify-center gap-x-2 rounded-md px-4 py-1 text-muted',
                  isSelected && 'text-white',
                  isFocusVisible &&
                    'outline-ring outline outline-2 outline-offset-2',
                )}
              >
                <Icon>
                  <MoonStarIcon className="size-4" />
                </Icon>
                <span>Dark</span>
              </div>
            )}
          ></Radio>
          <div
            className={twMerge(
              'absolute top-0 left-0 h-full w-1/3 rounded-md bg-accent transition-all ease-in-out peer-data-selected/dark:left-2/3 peer-data-selected/light:left-1/3 dark:bg-zinc-600',
            )}
          ></div>
        </div>
      </Radios>
    </RadioGroup>
  );
}

function SwitchPlan() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="monthly">
      <Label>Choose plan</Label>
      <Radios className="rounded-lg bg-zinc-200 p-0.5 dark:bg-zinc-800">
        <div className="relative isolate flex flex-1">
          <Radio
            className="peer/monthly z-10 flex-1"
            value="monthly"
            render={({ isFocusVisible }) => (
              <div
                className={twMerge(
                  'rounded-md px-4 py-1 text-center font-medium',
                  isFocusVisible &&
                    'outline-ring outline outline-2 outline-offset-2',
                )}
              >
                Bill Monthly
              </div>
            )}
          ></Radio>
          <Radio
            className="peer/yearly z-10 flex-1"
            value="yearly"
            render={({ isFocusVisible, isSelected }) => (
              <div
                className={twMerge(
                  'rounded-lg px-4 py-1 text-center font-medium',
                  isFocusVisible &&
                    'outline-ring outline outline-2 outline-offset-2',
                )}
              >
                Bill Yearly{' '}
                <span className={isSelected ? 'text-success' : ''}>-20%</span>
              </div>
            )}
          ></Radio>
          <div
            className={twMerge(
              'absolute top-0 left-0 h-full w-1/2 rounded-md bg-white transition-all ease-in-out peer-data-selected/yearly:left-1/2 dark:bg-zinc-600',
            )}
          ></div>
        </div>
      </Radios>
    </RadioGroup>
  );
}

function StarFillIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
    </svg>
  );
}
