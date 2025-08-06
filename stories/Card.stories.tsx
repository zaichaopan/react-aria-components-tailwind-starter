import React from 'react';
import { twMerge } from 'tailwind-merge';
import { docs } from '../.storybook/docs';
import { Button } from '../src/button';
import { Card, CardHeader, CardBody } from '../src/card';
import { Checkbox, Checkboxes, CheckboxGroup } from '../src/checkbox';
import { Description, Label } from '../src/field';
import { Radio, RadioGroup, Radios } from '../src/radio-group';
import { Separator } from '../src/separator';
import { Switch, Switches, SwitchField, SwitchGroup } from '../src/switch';
import { Strong, Text } from '../src/text';
import {
  KeyboardIcon,
  LanguagesIcon,
  MonitorIcon,
  MoonStarIcon,
  Settings2Icon,
  SunIcon,
  SunMoonIcon,
  UserRoundPenIcon,
  VideoIcon,
} from 'lucide-react';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectPopover,
} from '../src/select';
import { Slider, SliderTack } from '../src/slider';
import { Icon } from '../src/icon';
import { Avatar } from '../src/avatar';
import { FileTrigger } from 'react-aria-components';
import { PlusIcon } from '../src/icons/outline/plus';
import { XIcon } from '../src/icons/outline/x';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  const [src, setSrc] = React.useState<string | undefined>(
    'https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  );

  return (
    <div className="mt-6 flex max-w-prose flex-col gap-4">
      <Card>
        <CardHeader>
          <Icon>
            <UserRoundPenIcon />
          </Icon>
          Profile
        </CardHeader>
        <CardBody className="items-center">
          <div className="mr-ato flex flex-col items-center gap-y-2">
            <div className="relative isolate">
              <Avatar
                alt="T W"
                className="rounded-full"
                src={src}
                fallback="icon"
                size={64}
              ></Avatar>
              {src ? (
                <Button
                  isIconOnly
                  color="red"
                  onPress={() => setSrc(undefined)}
                  className="ring-background absolute end-0 top-0 z-10 size-5 translate-x-1/4 rounded-full ring-2 sm:size-5"
                >
                  <XIcon className="size-3.5 text-white" />
                </Button>
              ) : (
                <FileTrigger
                  onSelect={(e) => {
                    if (!e) {
                      return;
                    }

                    const file = Array.from(e)[0];
                    setSrc(URL.createObjectURL(file));
                  }}
                >
                  <Button
                    isIconOnly
                    className="ring-background absolute end-0 top-0 z-10 size-5 translate-x-1/4 rounded-full ring-2 [--btn-bg:var(--color-zinc-400)] sm:size-5"
                  >
                    <PlusIcon className="size-3.5 text-white" />
                  </Button>
                </FileTrigger>
              )}
            </div>

            <div className="flex flex-col items-center">
              <Strong>Upload Image</Strong>
              <Text>Max file size: 1MB</Text>
            </div>

            <FileTrigger
              onSelect={(e) => {
                if (!e) {
                  return;
                }

                const file = Array.from(e)[0];
                setSrc(URL.createObjectURL(file));
              }}
            >
              <Button>
                <PlusIcon /> Add Image
              </Button>
            </FileTrigger>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Icon>
            <Settings2Icon />
          </Icon>
          System
        </CardHeader>
        <CardBody className="space-y-2">
          <Checkbox>Auto-start</Checkbox>
          <Separator soft />
          <Checkbox>Open application in background</Checkbox>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Icon>
            <SunMoonIcon />
          </Icon>
          Appearance
        </CardHeader>
        <CardBody className="space-y-2">
          <RadioGroup
            orientation="horizontal"
            defaultValue="system"
            aria-label="Appearance"
          >
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
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Icon>
            <KeyboardIcon />
          </Icon>
          Keyboard shortcut
        </CardHeader>
        <CardBody className="space-y-2">
          <Text className="inline">
            Use Teams shortcuts, or combine them with those of other apps. see{' '}
            <Button variant="link" color="accent">
              available shortcuts
            </Button>
          </Text>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Icon>
            <VideoIcon />
          </Icon>
          Video settings
        </CardHeader>
        <CardBody className="space-y-4">
          <Select selectedKey="faceTimeHd">
            <div className="flex items-center gap-x-2">
              <Label className="mb-0 flex-1">Camera</Label>
              <SelectButton className="max-w-fit" />
            </div>

            <SelectPopover>
              <SelectListBox>
                <SelectListItem id="faceTimeHd">
                  FaceTime HD Camera
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>

          <Separator soft />

          <SwitchGroup>
            <Switches>
              <SwitchField>
                <Switch labelPlacement="start">Green Screen</Switch>
                <Description>
                  Turn on Green screen for a better look when you're using a
                  virtual background.
                </Description>
              </SwitchField>

              <Separator soft />

              <SwitchField>
                <Switch labelPlacement="start">Mirror my video</Switch>
                <Description>
                  Changing this setting will only change the view for you. This
                  setting doesn’t currently work in Together mode.
                </Description>
              </SwitchField>
              <Separator soft />

              <SwitchField>
                <Switch labelPlacement="start"> Adjust brightness</Switch>
                <Description>
                  Enhance the quality of your video in low light conditions.
                </Description>
              </SwitchField>

              <Separator soft />

              <SwitchField>
                <Switch labelPlacement="start" defaultSelected>
                  Soft focus
                </Switch>
                <Description>
                  Smoothen your appearance for a polished look.
                </Description>
              </SwitchField>
            </Switches>
          </SwitchGroup>

          <Slider
            minValue={0}
            maxValue={100}
            defaultValue={25}
            aria-label="Soft focus level"
            className="mb-4"
          >
            <SliderTack thumbLabels={['volume']} />
          </Slider>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Icon>
            <LanguagesIcon />
          </Icon>
          Edit spell check
        </CardHeader>
        <CardBody className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-start gap-x-6">
              <Text>
                Customize Editor to check for spelling and grammar improvements
                in up to three languages. If you'd like to include a different
                language or remove an old one, select Manage spellcheck
                languages.
              </Text>
              <Button variant="outline">Manage</Button>
            </div>
            <RadioGroup aria-label="Language">
              <Radios>
                <Radio value="en-US">English (United States)</Radio>
                <Radio value="cn">中文(简体)</Radio>
              </Radios>
            </RadioGroup>
          </div>

          <Separator soft />
          <div>
            <Switch labelPlacement="start">Spelling</Switch>

            <CheckboxGroup aria-label="Spelling configurations">
              <Checkboxes>
                <Checkbox value="ignore-uppercase">
                  Ignore words in UPPERCASE
                </Checkbox>
                <Checkbox value="ignore-numbers">
                  Ignore words with numbers
                </Checkbox>
                <Checkbox value="ignore-internet">
                  Ignore Internet and file addresses
                </Checkbox>
                <Checkbox value="flag-repeated">Flag repeated words</Checkbox>
              </Checkboxes>
            </CheckboxGroup>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
