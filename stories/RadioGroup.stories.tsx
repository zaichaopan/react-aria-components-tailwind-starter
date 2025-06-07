import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { RadioField, RadioGroup, Radio, Radios } from '../src/radio-group';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { FieldError, Label, Description } from '../src/field';
import { Small, TextLink } from '../src/text';
import { Icon } from '../src/icon';
import { twMerge } from 'tailwind-merge';
import { MonitorIcon, MoonStarIcon, SunIcon } from 'lucide-react';
import { CheckIcon } from '../src/icons/outline/check';

const meta: Meta = {
  parameters: {
    title: 'Radio group',
    layout: 'centered',
    docs: {
      ...docs,
    },
  },
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

export const RadioDescription = () => {
  return (
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
        </RadioField>
      </Radios>
    </RadioGroup>
  );
};

export const GroupDescription = () => {
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

export const LabelPlacement = () => {
  return (
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

        <Radio value="disabled" labelPlacement="start">
          Disabled
        </Radio>
      </Radios>
    </RadioGroup>
  );
};

export const DisabledState = () => {
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

export const GroupDisabledState = () => {
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

export const ReadonlyState = () => {
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

export const ValidationErrors = () => {
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

export function HorizontalLayout() {
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

export function Reviews() {
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

export function Shipping() {
  return (
    <RadioGroup defaultValue="Standard" className="w-72">
      <Label>Shipping</Label>
      <Radios className="grid grid-cols-1 gap-4">
        {[
          {
            name: 'Standard',
            description: ' 4-6 business days',
            price: ' $4.99',
          },
          {
            name: 'Express',
            description: ' 2-5 business days',
            price: ' $15.99',
          },
          {
            name: 'Lightning',
            description: ' 1 business day',
            price: ' $24.99',
          },
        ].map((option) => {
          return (
            <Radio
              key={option.name}
              labelPlacement="start"
              value={option.name}
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-lg px-4 py-3 [&_[slot=radio]]:mt-1.5',
                  isSelected ? 'ring-ring ring-2' : 'shadow-outline',
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

export function CustomRadio() {
  return (
    <RadioGroup defaultValue="yearly" className="w-72">
      <Label>Upgrade plan</Label>
      <Radios className="grid grid-cols-1 gap-4">
        <Radio
          labelPlacement="start"
          value="yearly"
          className={({ isSelected }) => {
            return twMerge(
              'rounded-lg px-3 py-1',
              isSelected ? 'ring-ring ring-2' : 'shadow-outline',
            );
          }}
          radio={({ isSelected }) => {
            return (
              <span
                className={twMerge(
                  'grid size-4 place-items-center rounded-full',
                  isSelected ? 'text-white' : 'hidden',
                )}
              >
                <CheckIcon className="size-3" />
              </span>
            );
          }}
        >
          <div className="flex flex-col">
            <div className="text-muted flex flex-1 flex-col">Yearly</div>
            <div className="flex items-center gap-x-2 font-semibold">
              <div>$6/month</div>
              <div className="rounded bg-emerald-100 px-2 text-xs font-medium text-zinc-950">
                Save 40%
              </div>
            </div>
          </div>
        </Radio>
        <Radio
          labelPlacement="start"
          value="monthly"
          className={({ isSelected }) => {
            return twMerge(
              'rounded-lg px-3 py-1',
              isSelected ? 'ring-ring ring-2' : 'shadow-outline',
            );
          }}
          radio={({ isSelected }) => {
            return (
              <span
                className={twMerge(
                  'grid size-4 place-items-center rounded-full',
                  isSelected ? 'text-white' : 'hidden',
                )}
              >
                <CheckIcon className="size-3" />
              </span>
            );
          }}
        >
          <div className="flex flex-col">
            <div className="text-muted flex flex-1 flex-col">Monthly</div>
            <div className="flex items-center gap-x-2 font-semibold">
              $10/month
            </div>
          </div>
        </Radio>
      </Radios>
    </RadioGroup>
  );
}
export function AccentColors() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="blue">
      <Label>Choose a accent color</Label>
      <Radios className="gap-x-2">
        {[
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
        ].map((color) => {
          return (
            <Radio
              value={color.value}
              key={color.value}
              aria-label={color.value}
              render={({ isSelected, isFocusVisible }) => (
                <div
                  className={twMerge(
                    'grid size-6 place-items-center rounded-full',
                    color.color,
                    isFocusVisible && 'outline-ring outline-2 outline-offset-2',
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

export function CpuOptions() {
  return (
    <RadioGroup orientation="horizontal" defaultValue={'6 CPU'}>
      <Label className="flex justify-between">
        CPU
        <TextLink className="text-muted no-underline">
          See performance specs
        </TextLink>
      </Label>

      <Radios>
        {['2 CPU', '4 CPU', '6 CPU', '8 CPU', '12 CPU', '16 CPU'].map(
          (option) => {
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
                      isSelected &&
                        'border-accent bg-accent text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
                      isFocusVisible &&
                        'outline-ring outline-2 outline-offset-2',
                    ].join(' ')}
                  >
                    {option}
                  </div>
                )}
              />
            );
          },
        )}
      </Radios>
    </RadioGroup>
  );
}

export function Rating() {
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
        {[
          { value: '1' },
          { value: '2' },
          { value: '3' },
          { value: '4' },
          { value: '5' },
        ].map((option, index) => {
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
                  ? 'outline-ring outline-2 outline-offset-2'
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

export function Appearance() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="system">
      <Label>Appearance</Label>
      <Description>Customize your application appearance</Description>
      <Radios className="shadow-outline size-fit rounded-full p-1">
        <div className="relative isolate flex">
          {[
            {
              value: 'system',
              label: 'System',
              icon: MonitorIcon,
              className: 'peer/system',
            },
            {
              value: 'light',
              label: 'Light mode',
              icon: SunIcon,
              className: 'peer/light',
            },
            {
              value: 'dark',
              label: 'Dark mode',
              icon: MoonStarIcon,
              className: 'peer/dark',
            },
          ].map((option) => {
            return (
              <Radio
                key={option.value}
                aria-label={option.label}
                data-theme={option.value}
                className={({ isSelected }) => {
                  return twMerge(
                    'z-10 grid size-8 place-items-center rounded-full [&_svg]:size-4',
                    option.className,
                    isSelected &&
                      'text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]',
                  );
                }}
                value={option.value}
                render={<option.icon />}
              ></Radio>
            );
          })}

          <div
            className={twMerge(
              'bg-accent absolute top-0 left-0 h-full w-1/3 rounded-full transition-all ease-in-out peer-data-selected/dark:left-2/3 peer-data-selected/light:left-1/3',
            )}
          ></div>
        </div>
      </Radios>
    </RadioGroup>
  );
}

export function SwitchPlan() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="monthly" className="">
      <Label>Choose plan</Label>
      <Radios className="rounded-(--card-radius) bg-zinc-100 p-0.5 [--card-padding:--spacing(0.5)] [--card-radius:var(--radius-lg)] dark:bg-zinc-800">
        <div className="relative isolate flex flex-1">
          <Radio
            className="peer/monthly z-10 flex-1 rounded-[calc(var(--card-radius)-var(--card-padding))] px-4 py-1 text-center font-medium sm:w-64"
            value="monthly"
            render="Bill Monthly"
          ></Radio>
          <Radio
            className="peer/yearly z-10 w-64 flex-1 rounded-[calc(var(--card-radius)-var(--card-padding))] px-4 py-1 text-center font-medium"
            value="yearly"
            render={({ isSelected }) => (
              <div>
                Bill Yearly{' '}
                <span className={isSelected ? 'text-green-600' : ''}>-20%</span>
              </div>
            )}
          ></Radio>
          <div
            className={twMerge(
              'absolute top-0 left-0 h-full w-1/2 rounded-[calc(var(--card-radius)-var(--card-padding))] bg-white shadow transition-all ease-in-out peer-data-selected/yearly:left-1/2 dark:bg-zinc-600',
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
