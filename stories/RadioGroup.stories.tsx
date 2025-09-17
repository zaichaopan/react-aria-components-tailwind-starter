import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { RadioField, RadioGroup, Radio, Radios } from '../src/radio-group';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { FieldError, Label, Description } from '../src/field';
import { Small, Strong, Text, TextLink } from '../src/text';
import { Icon } from '../src/icon';
import { twMerge } from 'tailwind-merge';
import {
  BoxIcon,
  ClockIcon,
  MonitorIcon,
  MoonStarIcon,
  SunIcon,
  TruckIcon,
} from 'lucide-react';
import { CheckIcon } from '../src/icons/outline/check';
import { Badge } from '../src/badge';
import { Separator } from '../src/separator';
import { Link } from '../src/link';

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
          <Radio value="enable">Enable</Radio>
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
          <Radio value="enable">Enable</Radio>
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
    <RadioGroup className="max-w-md" labelPlacement="start">
      <Label>Autoplay animated images</Label>
      <Radios>
        <RadioField>
          <Radio value="system">Sync with system</Radio>
          <Description>
            Adopts your system preference for reduced motion
          </Description>
        </RadioField>

        <Separator soft />

        <RadioField>
          <Radio value="enable">Enable</Radio>
          <Description>Automatically plays animated images</Description>
        </RadioField>

        <Separator soft />

        <Radio value="disabled">Disabled</Radio>
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
          <Radio value="enable">Enable</Radio>
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
          <Radio value="enable">Enable</Radio>
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
          <Radio value="enable">Enable</Radio>
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
            <Radio value="enable">Enable</Radio>
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

export function RadioCards() {
  return (
    <div className="flex flex-col space-y-16">
      <RadioGroup
        defaultValue="NAVDIA H100"
        orientation="horizontal"
        variant="card"
        className="self-start"
      >
        <Label displayLevel={2}>GPU type</Label>
        <Radios>
          {[
            {
              name: 'NAVDIA H100',
              description: 'SXM5 80GB VRAM',
            },
            {
              name: 'NAVDIA H200',
              description: 'SXM5 141GB VRAM',
            },
          ].map((option) => {
            return (
              <Radio
                radio={null}
                key={option.name}
                value={option.name}
                className="w-48"
              >
                <div className="text-muted group-data-selected:text-accent flex w-full flex-col gap-3">
                  <div className="flex flex-1 flex-col">
                    <div className="flex font-medium">{option.name}</div>
                    <div className="">{option.description}</div>
                  </div>
                </div>
              </Radio>
            );
          })}
        </Radios>
        <Link className="text-muted mt-2">Need B100, B200 or other GPUs?</Link>
      </RadioGroup>

      <RadioGroup
        defaultValue="Kubernetes"
        orientation="horizontal"
        variant="card"
        className="self-start"
      >
        <Label displayLevel={2}>Compute environment</Label>
        <Radios>
          {[
            {
              name: 'Kubernetes',
              description: 'Run GPU workloads with your K8s configurations',
              icon: <KubernetesIcon />,
            },
            {
              name: 'Virtual Machine',
              description:
                'Access a virtual machine via SSH to run your own software',
              icon: <ServerIcon />,
            },
          ].map((option) => {
            return (
              <Radio
                radio={null}
                key={option.name}
                value={option.name}
                className="w-56"
              >
                <div className="text-muted group-data-selected:text-accent flex w-full flex-col gap-3">
                  <div className="flex flex-1 flex-col">
                    <div className="flex gap-x-2 font-medium">
                      <Icon>{option.icon}</Icon>

                      {option.name}
                    </div>
                    <div className="">{option.description}</div>
                  </div>
                </div>
              </Radio>
            );
          })}
        </Radios>
      </RadioGroup>

      <RadioGroup
        defaultValue="Pick up your order at your local store"
        variant="card"
      >
        <Label>Shipping method</Label>
        <Description>How would you like your order delivered?</Description>
        <Radios>
          {[
            {
              name: 'Pick up your order at your local store',
              description: '2-5 business days',
            },
            {
              name: 'Delivery to GLS collection store',
              description: 'Arrives before Monday, Nov 6',
            },
            {
              name: 'GLS delivery to selected address',
              description: 'Arrives before Monday, Nov 6',
            },
          ].map((option) => {
            return (
              <Radio key={option.name} value={option.name}>
                <div className="flex flex-1 flex-col">
                  <div className="flex font-medium">{option.name}</div>
                  <div className="text-gray-500">{option.description}</div>
                </div>
              </Radio>
            );
          })}
        </Radios>
      </RadioGroup>

      <RadioGroup
        defaultValue="Pick up your order at your local store"
        variant="card"
        compact
      >
        <Label>Shipping method</Label>
        <Description>How would you like your order delivered?</Description>
        <Radios>
          {[
            {
              name: 'Pick up your order at your local store',
              description: '2-5 business days',
            },
            {
              name: 'Delivery to GLS collection store',
              description: 'Arrives before Monday, Nov 6',
            },
            {
              name: 'GLS delivery to selected address',
              description: 'Arrives before Monday, Nov 6',
            },
          ].map((option) => {
            return (
              <Radio key={option.name} value={option.name}>
                <div className="flex flex-1 flex-col">
                  <div className="flex font-medium">{option.name}</div>
                  <div className="text-gray-500">{option.description}</div>
                </div>
              </Radio>
            );
          })}
        </Radios>
      </RadioGroup>

      <RadioGroup
        defaultValue="Pick up your order at your local store"
        variant="card"
        labelPlacement="start"
      >
        <Label>Shipping method</Label>
        <Description>How would you like your order delivered?</Description>
        <Radios>
          {[
            {
              name: 'Pick up your order at your local store',
              description: '2-5 business days',
            },
            {
              name: 'Delivery to GLS collection store',
              description: 'Arrives before Monday, Nov 6',
            },
            {
              name: 'GLS delivery to selected address',
              description: 'Arrives before Monday, Nov 6',
            },
          ].map((option) => {
            return (
              <Radio
                key={option.name}
                value={option.name}
                radio={
                  <span className="hidden rounded-full group-data-selected:flex">
                    <CheckIcon className="size-3 text-white dark:text-black" />
                  </span>
                }
              >
                <div className="flex flex-1 flex-col">
                  <div className="flex font-medium">{option.name}</div>
                  <div className="text-gray-500">{option.description}</div>
                </div>
              </Radio>
            );
          })}
        </Radios>
      </RadioGroup>

      {/* <RadioGroup
        defaultValue="yearly"
        labelPlacement="start"
        orientation="horizontal"
        variant="card"
      >
        <Label>Radio cards with custom radio icon</Label>
        <Radios>
          <Radio
            value="yearly"
            radio={
              <span className="hidden size-4 place-items-center rounded-full group-data-selected:grid group-data-selected:text-white">
                <CheckIcon className="size-3 text-white" />
              </span>
            }
          >
            <div className="flex flex-col">
              <div className="text-muted flex flex-1 flex-col">Yearly</div>
              <div className="flex items-center gap-x-2 pb-1.5 font-semibold">
                <div>$6/month</div>

                <Badge color="emerald" variant="solid">
                  Save 40%
                </Badge>
              </div>
            </div>
          </Radio>
          <Radio
            value="monthly"
            radio={
              <span className="hidden size-4 place-items-center rounded-full group-data-selected:grid group-data-selected:text-white">
                <CheckIcon className="size-3 text-white" />
              </span>
            }
          >
            <div className="flex flex-col">
              <div className="text-muted flex flex-1 flex-col">Monthly</div>
              <div className="flex items-center gap-x-2 pb-1.5 font-semibold">
                $10/month
              </div>
            </div>
          </Radio>
        </Radios>
      </RadioGroup> */}
    </div>
  );
}

export function CustomRender() {
  return (
    <div className="flex flex-col space-y-12">
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
                  radio={null}
                  className="rounded-md"
                >
                  {({ isSelected }) => {
                    return (
                      <Badge
                        data-selection-mode="single"
                        color="white"
                        {...(isSelected && {
                          variant: 'solid',
                        })}
                        className={twMerge('px-4 py-2 text-sm/6')}
                      >
                        {option}
                      </Badge>
                    );
                  }}
                </Radio>
              );
            },
          )}
        </Radios>
      </RadioGroup>

      <RadioGroup orientation="horizontal" defaultValue={'High'}>
        <Label className="flex justify-between">Priority</Label>

        <Radios>
          {['Low', 'Medium', 'High', 'Critical'].map((option) => {
            return (
              <Radio
                key={option}
                value={option}
                radio={null}
                className="rounded-full"
              >
                {({ isSelected }) => {
                  return (
                    <Badge
                      data-selection-mode="single"
                      color="black"
                      {...(isSelected && {
                        variant: 'solid',
                      })}
                      className="rounded-full"
                    >
                      {option}
                    </Badge>
                  );
                }}
              </Radio>
            );
          })}
        </Radios>
      </RadioGroup>

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
                className="rounded-full"
                render={({ isSelected }) => (
                  <div
                    className={twMerge(
                      'grid size-6 place-items-center rounded-full',
                      color.color,
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
    </div>
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

export function SegmentRadios() {
  return (
    <div className="space-y-16">
      <RadioGroup variant="segment" defaultValue="system">
        <Label>Appearance</Label>
        <Description>Customize your application appearance</Description>
        <Radios>
          <Radio
            aria-label="System"
            value="system"
            render={
              <Icon>
                <MonitorIcon />
              </Icon>
            }
          ></Radio>
          <Radio
            aria-label="Light mode"
            value="light"
            render={
              <Icon>
                <SunIcon />
              </Icon>
            }
          ></Radio>

          <Radio
            aria-label="Dark mode"
            value="dark"
            render={
              <Icon>
                <MoonStarIcon />
              </Icon>
            }
          ></Radio>
        </Radios>
      </RadioGroup>

      <RadioGroup
        variant="segment"
        defaultValue="system"
        className="[--segment-radius:9999px]"
      >
        <Label>Appearance</Label>
        <Description>Customize your application appearance</Description>
        <Radios>
          <Radio
            aria-label="System"
            value="system"
            render={
              <Icon>
                <MonitorIcon />
              </Icon>
            }
          ></Radio>
          <Radio
            aria-label="Light mode"
            value="light"
            render={
              <Icon>
                <SunIcon />
              </Icon>
            }
          ></Radio>

          <Radio
            aria-label="Dark mode"
            value="dark"
            render={
              <Icon>
                <MoonStarIcon />
              </Icon>
            }
          ></Radio>
        </Radios>
      </RadioGroup>

      <RadioGroup variant="segment" defaultValue="yearly">
        <Label>Choose plan</Label>
        <Radios>
          <Radio value="monthly" render="Bill Monthly"></Radio>
          <Radio
            value="yearly"
            render={
              <div>
                Bill Yearly{' '}
                <span className="group-data-selected:text-green-600">-20%</span>
              </div>
            }
          ></Radio>
        </Radios>
      </RadioGroup>
    </div>
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

function ServerIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32m-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32m-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32m-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24"
      ></path>
    </svg>
  );
}

function KubernetesIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.8 309.892L44.722 118.82c2.266-9.847 9.243-18.52 18.417-22.904l178.029-85.06c9.162-4.426 18.887-4.202 29.552 0L448.77 95.87c9.174 4.383 16.15 13.056 18.42 22.908l43.986 191.07c2.27 9.854-.224 20.676-6.577 28.574L381.42 491.653c-6.358 7.887-16.436 12.69-26.618 12.682l-197.604.046c-10.186.004-20.264-4.81-26.619-12.704L7.357 338.467C.427 329.8-1.212 320.177.8 309.892m245.99 17.53l-29.963 54.135c26.587 8.509 52.79 8.946 78.553.075L265.367 327.4c-5.397-7.606-14.561-6.833-18.576.024m-44.757-30.414l-60.884 10.33c9.395 25.997 26.96 47.186 49.016 61.338l23.586-57.006c2.598-8.503-2.987-15.46-11.719-14.664m96.194 14.313l23.842 57.585c22.98-14.64 40.176-36.518 49.166-61.77l-61.416-10.38c-8.955-.857-14.314 6.562-11.592 14.565m-63.558-50.35l4.236 18.396l17.087 8.215l17.034-8.19l4.232-18.397l-11.793-14.743H246.49zm83.34.15l59.675 17.187c2.72-27.396-3.984-52.783-17.766-76.662l-46.067 41.227c-5.402 6.322-4.971 14.161 4.158 18.248m-119.956-18.07l-46.319-41.429a121.48 121.48 0 0 0-17.24 76.887l59.376-17.136c7.98-3.229 10.593-11.415 4.183-18.322m92.991-28.781l50.402-35.734c-19.014-18.622-43.83-30.77-70.661-34.073l3.5 61.77c1.33 10.37 9.255 12.025 16.76 8.037m-120.913-35.758l50.729 35.963c8.297 5.13 16.174-.353 16.86-8.143l3.5-61.869c-27.73 3.791-52.166 15.26-71.09 34.049m274.691 142.386c-5.047-1.632-20.746-8.588-31.148-10.131c-3.2-.252-4.831 1.275-6.603 2.444l-5.04-.882c-11.3 35.515-35.367 66.268-67.992 85.53l1.965 4.766c-.748 1.987-1.866 3.894-.91 6.953c4.442 10.71 11.052 19.138 16.787 28.126c10.645 17.827-10.283 30.183-20.554 12.267c-3.944-11.015-7.349-24.747-12.208-32.68c-1.8-2.657-4.004-2.995-6.024-3.654l-2.52-4.536c-36.787 13.552-73.058 13.218-108.841-.28l-2.673 4.84c-1.99.532-3.907 1.075-5.084 2.477c-5.57 7.087-10.1 26.445-13.995 34.999c-8.173 15.739-28.41 4.976-21.318-10.058c4.699-9.666 10.806-14.647 18.515-31.784c.575-1.973.075-4.992-1.051-6.67l2.142-5.144c-31.396-18.6-56.186-48.247-68.016-84.927l-5.142.882c-1.2-1.304-4.15-2.599-6.78-2.394c-6.297.913-13.446 1.797-20.563 6.048c-32.849 19.621-44.674-22.478-4.536-19.857c15.642 1.021 21.987-1.302 26.209-8.593l4.937-1.436c-5.532-38.33 3.832-75.946 24.067-106.4l-3.78-3.375c-.24-1.473-.555-4.875-2.367-6.804c-14.875-12.707-21.086-12.681-29.764-20.01c-13.667-10.701.874-29.275 14.542-18.575c8.094 6.4 12.573 14.432 26.284 24.697c2.772 1.614 4.902.965 7.008.682l4.257 3.024c21.971-23.14 55.366-43.273 98.386-47.304l.276-4.988c1.572-1.52 3.332-3.706 3.832-6.1c1.202-12.156-2.896-26.617-2.922-35.963c.21-16.96 22.954-17.924 23.587 0c.266 10.456-3.18 16.021-2.922 35.963c.464 3.173 2.319 4.43 3.854 5.898l.276 5.265c37.503 3.332 72.327 20.48 97.906 47.303l4.485-3.201c1.52.09 4.871.551 7.16-.78c5.928-3.807 14.8-13.202 23.688-22.63c13.198-13.615 31.939 2.488 17.314 16.353c-7.319 6.294-16.7 8.824-29.938 20.138c-2.194 2.343-2.028 4.563-2.221 6.678l-4.182 3.756c21.627 33.692 30.05 67.216 24.571 106.144l4.764 1.386c.855 1.213 2.615 4.158 5.088 5.119c10.27 3.274 20.58 3.352 34.175 4.787c20.534 2.167 12.75 28.717-6.981 22.63"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
