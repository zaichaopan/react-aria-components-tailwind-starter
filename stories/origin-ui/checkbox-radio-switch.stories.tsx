import React from 'react';
import { Group } from 'react-aria-components';
import { Small, Strong, Text, TextLink } from '../../src/text';
import { Icon } from '../../src/accessible-icon';
import { Heading } from '../../src/heading';
import {
  BrushIcon,
  EraserIcon,
  Moon,
  ScissorsIcon,
  Sun,
  SwatchBookIcon,
} from 'lucide-react';
import {
  Checkbox,
  Checkboxes,
  CheckboxField,
  CheckboxGroup,
} from '../../src/checkbox';
import { Description, Label, LabeledGroup } from '../../src/field';
import { twMerge } from 'tailwind-merge';
import { focusVisibleOutline, groupFocusVisibleOutline } from '../../src/utils';
import { Radio, RadioField, RadioGroup, Radios } from '../../src/radio-group';
import { Switch, Switches, SwitchField, SwitchGroup } from '../../src/switch';
import { Separator } from '../../src/separator';

const meta = {
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

function Box({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        'p-6 md:p-10 md:p-12',
        'border-border/50',
        'lg:[&:not(:nth-child(2n))]:border-e',
        'xl:[&:not(:nth-child(2n))]:border-e-0',
        'xl:[&:not(:nth-child(3n))]:border-e',
        '[&:not(:nth-child(-n+1))]:border-t',
        'lg:[&:not(:nth-child(-n+1))]:border-t-0',
        'lg:[&:not(:nth-child(-n+2))]:border-t',
        'xl:[&:not(:nth-child(-n+2))]:border-t-0',
        'xl:[&:not(:nth-child(-n+3))]:border-t',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export const CheckboxRadioAndSwitch = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-16 sm:px-6 lg:px-8">
      <Heading className="text-center">Checkbox, Radio, and Switch</Heading>
      <Text className="text-center">
        A growing collection checkbox, radio and switch components built with
        &nbsp;
        <Strong>React Aria Components</Strong> and&nbsp;
        <Strong>TailwindCSS</Strong>. Inspired by{' '}
        <TextLink
          href="https://originui.com/checks-radios-switches"
          target="_blank"
        >
          OriginUI/Checkbox, Radio, and Switch
        </TextLink>
      </Text>
      <div className="grid pt-10 lg:grid-cols-2 xl:grid-cols-3">
        <Box>
          <Checkbox>Simple checkbox</Checkbox>
        </Box>

        <Box>
          <Checkbox isIndeterminate>Indeterminate checkbox</Checkbox>
        </Box>

        <Box>
          <Checkbox isDisabled>Disabled checkbox</Checkbox>
        </Box>

        <Box>
          <Checkbox>
            I agree to the &nbsp;
            <TextLink
              href="https://github.com/zaichaopan/react-aria-components-tailwind-starter"
              target="_blank"
            >
              terms of service
            </TextLink>
          </Checkbox>
        </Box>

        <Box>
          <CheckboxGroup orientation="horizontal">
            <Label className="sr-only">Choose framework</Label>
            <Checkboxes>
              <Checkbox value="react">React</Checkbox>
              <Checkbox value="nextjs">NextJS</Checkbox>
              <Checkbox value="astro">Astro</Checkbox>
            </Checkboxes>
          </CheckboxGroup>
        </Box>

        <Box>
          <Checkbox labelPlacement="start">Right aligned checkbox</Checkbox>
        </Box>

        <Box>
          <CheckboxField>
            <Checkbox>
              Label&nbsp;<Text elementType="span">(Sublabel)</Text>
            </Checkbox>
            <Description>
              You can use this checkbox with a label and a description.
            </Description>
          </CheckboxField>
        </Box>

        <Box>
          <CheckboxField>
            <Checkbox>Checkbox with expansion</Checkbox>
            <Description>
              You can use this checkbox with a label and a description.
            </Description>
          </CheckboxField>
        </Box>

        <Box>
          <CheckboxField>
            <Checkbox labelPlacement="start">
              <div>
                Label&nbsp;<Text elementType="span">(Sublabel)</Text>
              </div>
            </Checkbox>
            <Description>
              You can use this checkbox with a label and a description.
            </Description>
          </CheckboxField>
        </Box>

        <Box>
          <CheckboxField className="rounded-lg border p-3">
            <Checkbox>
              Label&nbsp;<Text elementType="span">(Sublabel)</Text>
            </Checkbox>
            <Description>A short description goes here.</Description>
          </CheckboxField>
        </Box>

        <Box>
          <CheckboxField className="rounded-lg border p-3">
            <Checkbox labelPlacement="start" className="items-start">
              <div className="flex gap-x-3">
                <Icon className="mt-1">
                  <MasterCardIcon />
                </Icon>

                <div>
                  <div>
                    Label <Text elementType="span">(Sublabel)</Text>
                  </div>
                  <Text>A short description goes here.</Text>
                </div>
              </div>
            </Checkbox>
          </CheckboxField>
        </Box>

        <Box>
          <CheckboxField className="rounded-lg border p-3">
            <Checkbox labelPlacement="start" className="items-start">
              <div className="flex gap-x-3">
                <Icon className="self-center">
                  <SupaBaseIcon />
                </Icon>

                <div>
                  <div>
                    Label <Text elementType="span">(Sublabel)</Text>
                  </div>
                  <Text>A short description goes here.</Text>
                </div>
              </div>
            </Checkbox>
          </CheckboxField>
        </Box>

        <Box>
          <div>
            <CheckboxGroup defaultValue={['palette', 'brush']}>
              <Label className="sr-only">Checkbox group</Label>
              <Checkboxes className="grid grid-cols-2 gap-3">
                <Checkbox
                  labelPlacement="start"
                  value="palette"
                  className="items-start rounded-lg border p-3"
                >
                  <div className="flex flex-col gap-y-4">
                    <Icon>
                      <SwatchBookIcon className="size-4 text-muted" />
                    </Icon>
                    Palette
                  </div>
                </Checkbox>

                <Checkbox
                  labelPlacement="start"
                  value="brush"
                  className="items-start rounded-lg border p-3"
                >
                  <div className="flex flex-col gap-y-4">
                    <Icon>
                      <BrushIcon className="size-4 text-muted" />
                    </Icon>
                    Brush
                  </div>
                </Checkbox>

                <Checkbox
                  labelPlacement="start"
                  value="eraser"
                  className="items-start rounded-lg border p-3"
                >
                  <div className="flex flex-col gap-y-4">
                    <Icon>
                      <EraserIcon className="size-4 text-muted" />
                    </Icon>
                    Eraser
                  </div>
                </Checkbox>

                <Checkbox
                  labelPlacement="start"
                  value="cut"
                  className="items-start rounded-lg border p-3"
                >
                  <div className="flex flex-col gap-y-4">
                    <Icon>
                      <ScissorsIcon className="size-4 text-muted" />
                    </Icon>
                    Cut
                  </div>
                </Checkbox>
              </Checkboxes>
            </CheckboxGroup>
          </div>
        </Box>

        <Box>
          <IndeterminateStateCheckboxes />
        </Box>

        <Box>
          <WeekDayCheckBoxGroup />
        </Box>

        <Box>
          <RadioGroup>
            <Label className="sr-only">Radio Group</Label>
            <Radios>
              <Radio value="option 1">Option 1</Radio>
              <Radio value="option 2">Option 2</Radio>
              <Radio value="option 3">Option 3</Radio>
            </Radios>
          </RadioGroup>
        </Box>

        <Box>
          <RadioGroup isDisabled defaultValue={'option 2'}>
            <Label className="sr-only">Radio Group</Label>
            <Radios>
              <Radio value="option 1">Option 1</Radio>
              <Radio value="option 2">Option 2</Radio>
              <Radio value="option 3">Option 3</Radio>
            </Radios>
          </RadioGroup>
        </Box>

        <Box>
          <RadioGroup>
            <Label className="sr-only">Radio Group</Label>
            <Radios>
              <RadioField>
                <Radio value="small">
                  Small&nbsp; <Text elementType="span">(Sublabel)</Text>
                </Radio>
                <Description>
                  You can use this card with a label and a description.
                </Description>
              </RadioField>

              <RadioField>
                <Radio value="large">
                  Large&nbsp;<Text elementType="span">(Sublabel)</Text>{' '}
                </Radio>
                <Description>
                  You can use this card with a label and a description.
                </Description>
              </RadioField>
            </Radios>
          </RadioGroup>
        </Box>

        <Box>
          <RadioGroup>
            <Label className="sr-only">Radio Group</Label>
            <Radios>
              <RadioField>
                <Radio value="with">Radio with expansion</Radio>
                <Description>
                  You can use this card with a label and a description.
                </Description>
              </RadioField>

              <RadioField>
                <Radio value="without">Radio without expansion</Radio>
                <Description>
                  You can use this card with a label and a description.
                </Description>
              </RadioField>
            </Radios>
          </RadioGroup>
        </Box>

        <Box>
          <Reviews />
        </Box>

        <Box>
          <DeliveryOptions />
        </Box>

        <Box>
          <DeliveryOptionsRightAlignment />
        </Box>

        <Box>
          <Rating />
        </Box>

        <Box>
          <AccentColors />
        </Box>

        <Box>
          <CpuOptions />
        </Box>

        <Box>
          <ThemeOptions />
        </Box>

        <Box>
          <SwitchPlan />
        </Box>

        <Box>
          <Switch>Switch</Switch>
        </Box>

        <Box>
          <Switch defaultSelected>
            Yearly billing&nbsp;<Text>(Save 10%)</Text>
          </Switch>
        </Box>

        <Box>
          <SwitchField>
            <Switch defaultSelected>
              Yearly billing&nbsp;<Text>(Save 10%)</Text>
            </Switch>
            <Description>Lorem ipsum dolor sit.</Description>
          </SwitchField>
        </Box>

        <Box>
          <Switch isDisabled>Disabled Switch</Switch>
        </Box>

        <Box>
          <Switch labelPlacement="start">Right aligned switch</Switch>
        </Box>
        <Box>
          <SwitchField>
            <Switch labelPlacement="start">Right aligned checkbox</Switch>
            <Description>
              Lorem ipsum dolor sit consectetur adipisicing.
            </Description>
          </SwitchField>
        </Box>

        <Box>
          <Switch>
            {({ isSelected }) => {
              return isSelected ? 'On' : 'Off';
            }}
          </Switch>
        </Box>

        <Box>
          <div className="inline-flex flex-row-reverse items-center gap-x-3">
            <Switch className="peer/switch text-muted/60 selected:text-foreground">
              On
            </Switch>
            <span className="peer-selected/switch:text-muted/75">Off</span>
          </div>
        </Box>

        <Box>
          <Switch aria-label="Dark mode">
            {({ isSelected }) => {
              return isSelected ? (
                <Icon>
                  <Sun className="size-4" />
                </Icon>
              ) : (
                <Icon>
                  <Moon className="size-4" />
                </Icon>
              );
            }}
          </Switch>
        </Box>

        <Box>
          <div className="inline-flex flex-row-reverse items-center gap-x-3">
            <Switch
              className="peer/switch text-muted/60 selected:text-foreground"
              aria-label="dark mode"
            >
              <Icon>
                <Sun className="size-4" />
              </Icon>
            </Switch>
            <Icon>
              <Moon className="size-4 peer-selected/switch:text-muted/75" />
            </Icon>
          </div>
        </Box>

        <Box>
          <Switch
            className="inline-flex"
            aria-label="switch with thumb icon"
            render={
              <div
                className={[
                  'flex',
                  'rounded-full',
                  'border',
                  'border-zinc-200',
                  'p-[0.5px]',
                  'dark:border-border',
                  'group-selected:border-accent',
                  'bg-zinc-200',
                  'dark:bg-transparent',
                  'group-selected:bg-accent',
                  'transition ease-in-out',
                ].join(' ')}
              >
                <div className="relative isolate flex">
                  <div
                    className={[
                      'z-10',
                      'flex-1',
                      'p-1',
                      'grid place-items-center',
                      'transition ease-in-out',
                      'opacity-100 group-selected:opacity-0',
                    ].join(' ')}
                  >
                    <Icon>
                      <svg
                        fill="none"
                        viewBox="0 0 12 12"
                        className="size-3 text-muted/75 dark:text-muted/90"
                      >
                        <path
                          d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </Icon>
                  </div>

                  <div
                    className={[
                      'z-10',
                      'flex-1',
                      'p-1',
                      'grid place-items-center',
                      'transition ease-in-out',
                      'opacity-0 group-selected:opacity-100',
                    ].join(' ')}
                  >
                    <Icon>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 12 12"
                        className="size-3 text-accent"
                      >
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
                      </svg>
                    </Icon>
                  </div>

                  <div
                    className={[
                      'h-full w-1/2 rounded-full bg-white ',
                      'absolute left-0 top-0 group-selected:left-1/2',
                      'transition-all ease-in-out ',
                    ].join(' ')}
                  ></div>
                </div>
              </div>
            }
          />
        </Box>

        <Box>
          <Switch
            aria-label="Dark mode"
            className="inline-flex"
            render={
              <div
                className={[
                  'flex rounded-full bg-zinc-200 p-0.5 dark:bg-zinc-700',
                  'group-selected:bg-accent',
                ].join(' ')}
              >
                <div className="relative isolate flex">
                  <div className="z-10 p-1.5">
                    <Icon>
                      <Sun className="size-4 text-foreground transition group-selected:text-white" />
                    </Icon>
                  </div>

                  <div className="z-10 p-1.5">
                    <Icon>
                      <Moon className="size-4 text-muted/75 transition group-selected:text-foreground" />
                    </Icon>
                  </div>

                  <div
                    className={[
                      'h-full w-1/2 rounded-full bg-white dark:bg-zinc-900',
                      'absolute left-0 top-0 group-selected:left-1/2',
                      'transition-all ease-in-out ',
                    ].join(' ')}
                  ></div>
                </div>
              </div>
            }
          ></Switch>
        </Box>

        <Box>
          <Switch
            aria-label="Dark mode"
            className="inline-flex"
            render={
              <div
                className={[
                  'flex',
                  'p-0.5',
                  'rounded-full',
                  'bg-zinc-200',
                  'dark:bg-zinc-700',
                  'group-selected:bg-accent',
                  'group-selected:text-white',
                  'transition-[background]',
                  'ease-in-out',
                ].join(' ')}
              >
                <div className="relative isolate flex px-0.5">
                  <div
                    className={[
                      'z-10',
                      'p-1.5',
                      'opacity-0',
                      'group-selected:opacity-100',
                      'translate-x-full',
                      'group-selected:translate-x-0',
                      'transition-all',
                      'ease-in-out',
                    ].join(' ')}
                  >
                    <Icon>
                      <Sun className="size-4" />
                    </Icon>
                  </div>

                  <div
                    className={[
                      'z-10',
                      'p-1.5',
                      'opacity-100',
                      'group-selected:opacity-0',
                      'translate-x-0',
                      'group-selected:-translate-x-full',
                      'transition-all',
                      'ease-in-out',
                    ].join(' ')}
                  >
                    <Icon>
                      <Moon className="size-4" />
                    </Icon>
                  </div>

                  <div
                    className={[
                      'h-full',
                      'w-1/2',
                      'rounded-full',
                      'bg-white',
                      'absolute',
                      'top-0',
                      'left-0',
                      'group-selected:left-1/2',
                      'transition-all',
                      'ease-in-out',
                    ].join(' ')}
                  ></div>
                </div>
              </div>
            }
          ></Switch>
        </Box>

        <Box>
          <SwitchGroup>
            <Label>Email notifications</Label>
            <Switches>
              <SwitchField>
                <Switch labelPlacement="start">Communication emails</Switch>
                <Description>
                  Receive emails about your account activity.
                </Description>
              </SwitchField>

              <Separator soft />

              <SwitchField>
                <Switch labelPlacement="start">Marketing emails</Switch>
                <Description>
                  Receive emails about new products, features, and more.
                </Description>
              </SwitchField>

              <Separator soft />

              <SwitchField>
                <Switch labelPlacement="start">Social emails</Switch>
                <Description>
                  Receive emails for friend requests, follows, and more.
                </Description>
              </SwitchField>
            </Switches>
          </SwitchGroup>
        </Box>
      </div>
    </div>
  );
};

const IndeterminateStateCheckboxes = () => {
  const [selectedWonder, setSelectedWonder] = React.useState<Array<string>>([
    'Mountains',
    'Angel Falls',
  ]);

  return (
    <LabeledGroup>
      <Label className="sr-only">IndeterminateState</Label>
      <Group className="space-y-2">
        <Checkbox
          isSelected={selectedWonder.length > 0}
          isIndeterminate={
            selectedWonder.length > 0 && selectedWonder.length !== 4
          }
          onChange={(checked) => {
            setSelectedWonder(
              checked
                ? ['Mountains', 'Niagara Falls', 'Angel Falls', 'Grand Canyon']
                : [],
            );
          }}
        >
          Natural Wonders
        </Checkbox>

        <Checkbox
          className="ms-7"
          name="Mountains"
          isSelected={selectedWonder.includes('Mountains')}
          onChange={(checked) => {
            return setSelectedWonder((pending) => {
              return checked
                ? [...pending, 'Mountains']
                : pending.filter((item) => item !== ' Mountains');
            });
          }}
        >
          Mountains
        </Checkbox>

        <Checkbox
          className="ms-7"
          isSelected={
            selectedWonder.includes('Niagara Falls') ||
            selectedWonder.includes('Angel Falls')
          }
          isIndeterminate={
            (selectedWonder.includes('Niagara Falls') &&
              !selectedWonder.includes('Angel Falls')) ||
            (!selectedWonder.includes('Niagara Falls') &&
              selectedWonder.includes('Angel Falls'))
          }
          onChange={(checked) => {
            setSelectedWonder((pending) => {
              return checked
                ? [...pending, 'Niagara Falls', 'Angel Falls']
                : pending.filter(
                    (item) =>
                      item !== 'Niagara Falls' && item !== 'Angel Falls',
                  );
            });
          }}
        >
          Waterfalls
        </Checkbox>

        <Checkbox
          className="ms-14"
          name="Niagara Falls"
          isSelected={selectedWonder.includes('Niagara Falls')}
          onChange={(checked) => {
            return setSelectedWonder((pending) => {
              return checked
                ? [...pending, 'Niagara Falls']
                : pending.filter((item) => item !== 'Niagara Falls');
            });
          }}
        >
          Niagara Falls
        </Checkbox>

        <Checkbox
          className="ms-14"
          name="Angel Falls"
          isSelected={selectedWonder.includes('Angel Falls')}
          onChange={(checked) => {
            return setSelectedWonder((pending) => {
              return checked
                ? [...pending, 'Angel Falls']
                : pending.filter((item) => item !== 'Angel Falls');
            });
          }}
        >
          Angel Falls
        </Checkbox>

        <Checkbox
          className="ms-7"
          name="Grand Canyon"
          isSelected={selectedWonder.includes('Grand Canyon')}
          onChange={(checked) => {
            return setSelectedWonder((pending) => {
              return checked
                ? [...pending, 'Grand Canyon']
                : pending.filter((item) => item !== 'Grand Canyon');
            });
          }}
        >
          Grand Canyon
        </Checkbox>
      </Group>
    </LabeledGroup>
  );
};

const WeekDayCheckBoxGroup = () => {
  return (
    <CheckboxGroup
      orientation="horizontal"
      defaultValue={['Monday', 'Tuesday', 'Thursday', 'Friday']}
    >
      <Label>Day of week</Label>
      <Checkboxes className="gap-x-1.5">
        <Checkbox
          value="Monday"
          aria-label="Monday"
          render={
            <div
              className={twMerge(
                'grid',
                'place-items-center',
                'rounded-full',
                'size-10',
                'border',
                'group-selected:border-accent',
                'group-selected:bg-accent',
                'group-selected:text-white',
                groupFocusVisibleOutline,
              )}
            >
              Mo
            </div>
          }
        />
        <Checkbox
          value="Tuesday"
          aria-label="Tuesday"
          render={
            <div
              className={twMerge(
                'grid',
                'place-items-center',
                'rounded-full',
                'size-10',
                'border',
                'group-selected:border-accent',
                'group-selected:bg-accent',
                'group-selected:text-white',
                groupFocusVisibleOutline,
              )}
            >
              Tu
            </div>
          }
        />

        <Checkbox
          value="Wednesday"
          aria-label="Wednesday"
          render={
            <div
              className={twMerge(
                'grid',
                'place-items-center',
                'rounded-full',
                'size-10',
                'border',
                'group-selected:border-accent',
                'group-selected:bg-accent',
                'group-selected:text-white',
                groupFocusVisibleOutline,
              )}
            >
              We
            </div>
          }
        />

        <Checkbox
          value="Thursday"
          aria-label="Thursday"
          render={
            <div
              className={twMerge(
                'grid',
                'place-items-center',
                'rounded-full',
                'size-10',
                'border',
                'group-selected:border-accent',
                'group-selected:bg-accent',
                'group-selected:text-white',
                groupFocusVisibleOutline,
              )}
            >
              Th
            </div>
          }
        />

        <Checkbox
          value="Friday"
          aria-label="Friday"
          render={
            <div
              className={twMerge(
                'grid',
                'place-items-center',
                'rounded-full',
                'size-10',
                'border',
                'group-selected:border-accent',
                'group-selected:bg-accent',
                'group-selected:text-white',
                groupFocusVisibleOutline,
              )}
            >
              Fr
            </div>
          }
        />

        <Checkbox
          value="Saturday"
          aria-label="Saturday"
          render={
            <div
              className={twMerge(
                'grid',
                'place-items-center',
                'rounded-full',
                'size-10',
                'border',
                'group-selected:border-accent',
                'group-selected:bg-accent',
                'group-selected:text-white',
                groupFocusVisibleOutline,
              )}
            >
              Sa
            </div>
          }
        />

        <Checkbox
          isDisabled
          value="Sunday"
          aria-label="Sunday"
          render={
            <div
              className={twMerge(
                'grid',
                'place-items-center',
                'rounded-full',
                'size-10',
                'border',
                'group-selected:border-accent',
                'group-selected:bg-accent',
                'group-selected:text-white',
                groupFocusVisibleOutline,
              )}
            >
              Su
            </div>
          }
        />
      </Checkboxes>
    </CheckboxGroup>
  );
};

function DeliveryOptions() {
  const options = [
    { name: 'Standard', description: ' 4-6 business days', price: ' $4.99' },
    { name: 'Express', description: ' 2-5 business days', price: ' $15.99' },
    { name: 'Lightning', description: ' 1 business day', price: ' $24.99' },
  ];

  return (
    <RadioGroup defaultValue={options[0].name}>
      <Label>Shipping</Label>
      <Radios className="grid grid-cols-1 gap-4">
        {options.map((option) => {
          return (
            <Radio
              value={option.name}
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-lg border px-4 py-3 [&_[slot=radio]]:mt-1.5',
                  isSelected && 'border-accent',
                );
              }}
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex font-medium">{option.name}</div>
                  <div className="text-gray-500">{option.description}</div>
                </div>
                <div className="font-medium text-muted">{option.price}</div>
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
    <RadioGroup defaultValue={options[0].name}>
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
                  isSelected && 'border-accent',
                );
              }}
            >
              <div className="flex w-full flex-col  gap-3">
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

function AccentColors() {
  return (
    <RadioGroup orientation="horizontal">
      <Label>Choose a accent color</Label>
      <Radios className="gap-x-2">
        <Radio
          value="blue"
          aria-label="blue"
          render={
            <div
              className={twMerge(
                'grid size-6 place-items-center rounded-full bg-blue-500',
                groupFocusVisibleOutline,
              )}
            >
              <div className="size-0 transition-all group-selected:size-2 group-selected:rounded-full group-selected:bg-white"></div>
            </div>
          }
        />
        <Radio
          value="purple"
          aria-label="purple"
          render={
            <div
              className={twMerge(
                'grid size-6 place-items-center rounded-full bg-purple-500',
                groupFocusVisibleOutline,
              )}
            >
              <div className="size-0 transition-all group-selected:size-2 group-selected:rounded-full group-selected:bg-white"></div>
            </div>
          }
        />
        <Radio
          value="pink"
          aria-label="pink"
          render={
            <div
              className={twMerge(
                'grid size-6 place-items-center rounded-full bg-pink-500',
                groupFocusVisibleOutline,
              )}
            >
              <div className="size-0 transition-all group-selected:size-2 group-selected:rounded-full group-selected:bg-white"></div>
            </div>
          }
        />
        <Radio
          value="red"
          aria-label="red"
          render={
            <div
              className={twMerge(
                'grid size-6 place-items-center rounded-full bg-red-500',
                groupFocusVisibleOutline,
              )}
            >
              <div className="size-0 transition-all group-selected:size-2 group-selected:rounded-full group-selected:bg-white"></div>
            </div>
          }
        />
        <Radio
          value="orange"
          aria-label="orange"
          render={
            <div
              className={twMerge(
                'grid size-6 place-items-center rounded-full bg-orange-500',
                groupFocusVisibleOutline,
              )}
            >
              <div className="size-0 transition-all group-selected:size-2 group-selected:rounded-full group-selected:bg-white"></div>
            </div>
          }
        />
        <Radio
          value="yellow"
          aria-label="yellow"
          render={
            <div
              className={twMerge(
                'grid size-6 place-items-center rounded-full bg-yellow-500',
                groupFocusVisibleOutline,
              )}
            >
              <div className="size-0 transition-all group-selected:size-2 group-selected:rounded-full group-selected:bg-white"></div>
            </div>
          }
        />
        <Radio
          value="green"
          aria-label="green"
          render={
            <div
              className={twMerge(
                'grid size-6 place-items-center rounded-full bg-green-500',
                groupFocusVisibleOutline,
              )}
            >
              <div className="size-0 transition-all group-selected:size-2 group-selected:rounded-full group-selected:bg-white"></div>
            </div>
          }
        />
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
              render={
                <div
                  className={[
                    'min-w-[86px]',
                    'rounded-md border  px-4 py-2 font-semibold',
                    'group-selected:border-accent group-selected:bg-accent group-selected:text-white',
                    groupFocusVisibleOutline,
                  ].join(' ')}
                >
                  {option}
                </div>
              }
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
              className={focusVisibleOutline}
              render={
                <div className="flex w-full items-center justify-between gap-3 ">
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
    <RadioGroup orientation="horizontal" defaultValue="light">
      <Label>Appearance</Label>
      <Description>Customize your application appearance</Description>
      <Radios className="gap-x-6 gap-y-4">
        <Radio
          value="light"
          render={
            <div className="relative isolate grid place-items-center gap-2">
              <div
                className={[
                  'grid aspect-[4/3] w-32 grid-cols-[12px_1fr] overflow-hidden rounded-md shadow',
                  'ring-transparent ring-offset-2 ring-offset-background group-selected:ring-2 group-selected:ring-accent dark:ring-offset-4',
                  groupFocusVisibleOutline,
                  'group-focus-visible:group-selected:ring-0',
                ].join(' ')}
              >
                <div className="bg-zinc-100"></div>

                <div className="bg-zinc-100 pt-3 ">
                  <div className="flex h-full flex-col overflow-hidden rounded-s border-s border-t border-black/10 bg-white">
                    <div className="flex h-1.5 items-center gap-x-0.5 overflow-hidden  border-b border-black/5 bg-zinc-200/75 ps-1">
                      <span className="size-0.5 rounded-full bg-red-400"></span>
                      <span className="size-0.5 rounded-full bg-yellow-400"></span>
                      <span className="size-0.5 rounded-full bg-green-400"></span>
                    </div>

                    <div className="ms-2 mt-1.5 h-1 rounded-s-sm bg-accent/40"></div>
                    <div className="ms-1 mt-0.5 h-0.5 rounded-s-sm bg-accent/15"></div>
                    <div className="ms-2 mt-[1px] h-0.5 rounded-s-sm bg-accent/15"></div>
                  </div>
                </div>
              </div>
              Light
            </div>
          }
        ></Radio>

        <Radio
          value="dark"
          render={
            <div className="relative isolate grid place-items-center gap-2">
              <div
                className={[
                  'grid aspect-[4/3] w-32 grid-cols-[12px_1fr] overflow-hidden rounded-md shadow',
                  'ring-transparent ring-offset-2 ring-offset-background  group-selected:ring-2 group-selected:ring-accent dark:ring-offset-4',
                  groupFocusVisibleOutline,
                  'group-focus-visible:group-selected:ring-0',
                ].join(' ')}
              >
                <div className="bg-zinc-800"></div>

                <div className="bg-zinc-800 pt-3">
                  <div className="flex h-full flex-col overflow-hidden rounded-s border border-zinc-700">
                    <div className="flex h-1.5 items-center gap-x-0.5 overflow-hidden border-b border-zinc-700 ps-1">
                      <span className="size-0.5 rounded-full bg-red-400"></span>
                      <span className="size-0.5 rounded-full bg-yellow-400"></span>
                      <span className="size-0.5 rounded-full bg-green-400"></span>
                    </div>

                    <div className="ms-2 mt-1.5 h-1 rounded-s-sm bg-accent"></div>
                    <div className="ms-1 mt-0.5 h-0.5 rounded-s-sm bg-accent/75"></div>
                    <div className="ms-2 mt-[1px] h-0.5 rounded-s-sm bg-accent/75"></div>
                  </div>
                </div>
              </div>
              Dark
            </div>
          }
        ></Radio>

        <Radio
          value="Auto"
          render={
            <div className="relative isolate grid place-items-center gap-2">
              <div
                className={[
                  'grid aspect-[4/3] w-32 grid-cols-[12px_1fr_1fr] overflow-hidden rounded-md shadow',
                  'ring-transparent ring-offset-2 ring-offset-background  group-selected:ring-2 group-selected:ring-accent dark:ring-offset-4',
                  groupFocusVisibleOutline,
                  'group-focus-visible:group-selected:ring-0',
                ].join(' ')}
              >
                <div className="bg-zinc-800"></div>

                <div className="bg-zinc-800 pt-3">
                  <div className="flex h-full flex-col overflow-hidden rounded-s-md  border border-zinc-700">
                    <div className="flex h-1.5 items-center gap-x-0.5 overflow-hidden border-b border-zinc-700  ps-1">
                      <span className="size-0.5 rounded-full bg-red-400"></span>
                      <span className="size-0.5 rounded-full bg-yellow-400"></span>
                      <span className="size-0.5 rounded-full bg-green-400"></span>
                    </div>

                    <div className="ms-2 mt-1.5 h-1 rounded-s-sm bg-accent"></div>
                    <div className="ms-1 mt-0.5 h-0.5 rounded-s-sm bg-accent/75"></div>
                    <div className="ms-2 mt-[1px] h-0.5 rounded-s-sm bg-accent/75"></div>
                  </div>
                </div>

                <div className="bg-white pt-3">
                  <div className="mt-[1px] flex h-1.5 items-center gap-x-0.5 overflow-hidden border-b border-black/5 bg-zinc-200/75  ps-1 "></div>

                  <div className="me-2 mt-1.5 h-1 rounded-e-sm bg-accent/40"></div>
                  <div className="me-1 mt-0.5 h-0.5 rounded-e-sm bg-accent/15"></div>
                  <div className="me-2 mt-[1px] h-0.5 rounded-e-sm bg-accent/15"></div>
                </div>
              </div>
              Auto
            </div>
          }
        ></Radio>
      </Radios>
    </RadioGroup>
  );
}

function SwitchPlan() {
  return (
    <RadioGroup orientation="horizontal" defaultValue={'monthly'}>
      <Label>Choose plan</Label>
      <Radios className="rounded-lg bg-zinc-200 p-0.5 dark:bg-zinc-800">
        <div className="relative isolate flex flex-1">
          <Radio
            className="peer/monthly z-10 flex-1"
            value="monthly"
            render={
              <div
                className={[
                  'rounded-md px-4 py-1 text-center font-medium',
                  groupFocusVisibleOutline,
                ].join(' ')}
              >
                Bill Monthly
              </div>
            }
          ></Radio>
          <Radio
            className="peer/yearly z-10 flex-1"
            value="yearly"
            render={
              <div
                className={[
                  'rounded-md px-4 py-1 text-center font-medium',
                  groupFocusVisibleOutline,
                ].join(' ')}
              >
                Bill Yearly{' '}
                <span className="group-selected:text-success">-20%</span>
              </div>
            }
          ></Radio>
          <div
            className={[
              'absolute',
              'rounded-md',
              'bg-white',
              'dark:bg-zinc-600',
              'h-full',
              'w-1/2',
              'top-0',
              'left-0',
              'peer-selected/yearly:left-1/2',
              'transition-all',
              'ease-in-out',
            ].join(' ')}
          ></div>
        </div>
      </Radios>
    </RadioGroup>
  );
}

function MasterCardIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="24" rx="4" fill="#252525"></rect>
      <path
        d="M19.0537 6.49742H12.9282V17.5026H19.0537V6.49742Z"
        fill="#FF5A00"
      ></path>
      <path
        d="M13.3359 12C13.3359 9.76408 14.3871 7.77961 16 6.49741C14.8129 5.56408 13.3155 5 11.6822 5C7.81295 5 4.68221 8.13074 4.68221 12C4.68221 15.8693 7.81295 19 11.6822 19C13.3155 19 14.8129 18.4359 16 17.5026C14.3848 16.2385 13.3359 14.2359 13.3359 12Z"
        fill="#EB001B"
      ></path>
      <path
        d="M27.3178 12C27.3178 15.8693 24.1871 19 20.3178 19C18.6845 19 17.1871 18.4359 16 17.5026C17.6333 16.2181 18.6641 14.2359 18.6641 12C18.6641 9.76408 17.6129 7.77961 16 6.49741C17.1848 5.56408 18.6822 5 20.3155 5C24.1871 5 27.3178 8.15113 27.3178 12Z"
        fill="#F79E1B"
      ></path>
    </svg>
  );
}

function SupaBaseIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#121212"></circle>
      <g clipPath="url(#sb-a)">
        <path
          fill="url(#sb-b)"
          d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
        ></path>
        <path
          fill="url(#sb-c)"
          fillOpacity=".2"
          d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
        ></path>
        <path
          fill="#3ECF8E"
          d="M14.375 6.367c.506-.638 1.532-.289 1.544.525l.078 11.903H8.094c-1.45 0-2.258-1.674-1.357-2.81l7.638-9.618Z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="sb-b"
          x1="15.907"
          x2="23.02"
          y1="15.73"
          y2="18.713"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361"></stop>
          <stop offset="1" stopColor="#3ECF8E"></stop>
        </linearGradient>
        <linearGradient
          id="sb-c"
          x1="12.753"
          x2="15.997"
          y1="11.412"
          y2="17.519"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="sb-a">
          <path fill="#fff" d="M6.354 6h19.292v20H6.354z"></path>
        </clipPath>
      </defs>
    </svg>
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
