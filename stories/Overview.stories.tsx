import React from 'react';
import type { Meta } from '@storybook/react';
import { Form } from '../src/Form';
import {
  Description,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from '../src/Field';
import { PasswordInput } from '../src/PasswordInput';
import { Button, ToggleButton } from '../src/Button';
import { Strong, Text, TextLink } from '../src/Text';
import { Link } from '../src/Link';
import { Icon } from '../src/Icon';
import { Moon, Sun } from 'lucide-react';
import { Avatar } from '../src/Avatar';
import { DateRangePicker, DateRangePickerInput } from '../src/DateRangePicker';
import { Heading } from '../src/Heading';
import { Tab, TabList, Tabs } from '../src/Tabs';
import { Switch } from '../src/Switch';
import { Radio, RadioField, RadioGroup, RadioGroupContent } from '../src/RadioGroup';
import { twMerge } from 'tailwind-merge';
import { Slider, SliderOutput, SliderTack } from '../src/Slider';
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  CheckboxGroupContent,
} from '../src/Checkbox';
import { NumberField, NumberInput } from '../src/NumberField';
import { Select, SelectField, SelectItem } from '../src/Select';
import { DialogTrigger, FileTrigger } from 'react-aria-components';
import { Modal } from '../src/Modal';
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogFooter,
  DialogHeader,
} from '../src/Dialog';
import { WithAvatars } from './MultiSelect.stories';

const meta: Meta<typeof Button> = {
  title: 'Overview',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Example = () => {
  return (
    <div className="flex gap-12 p-8">
      <div className="flex w-96 flex-col items-stretch gap-12">
        <div className="flex flex-col ">
          <Heading level={2} className="mb-6 text-center">
            Sign in to ACME
          </Heading>
          <Form>
            <TextField>
              <Label>Email address</Label>
              <Input type="email" name="email" />
            </TextField>
            <TextField>
              <Label>Password</Label>
              <PasswordInput />
            </TextField>
            <div className="flex justify-between">
              <Switch labelPlacement="right">Remember me</Switch>
              <Link>
                <Strong>Forgot password?</Strong>
              </Link>
            </div>

            <Button type="submit" className="mt-2">
              Sign in
            </Button>

            <div className="flex justify-center">
              <Text>Don’t have an account?</Text>&nbsp;
              <Link>
                <Strong>Create an account</Strong>
              </Link>
            </div>
          </Form>
        </div>
        <RadioGroup
          className="flex-1"
          defaultValue="Root user"
          aria-label="Choose user type"
        >
          <RadioGroupContent className="gap-3">
            <RadioField>
            <Radio
              value="Root user"
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-md border p-3 shadow-sm [&_[slot=radio]]:mt-1.5',
                  isSelected && 'border-accent/45 ring-2 ring-accent/25',
                );
              }}
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex flex-1 flex-col">
                  <div className="font-semibold"> Root user</div>
                  <Text>
                    Account owner that performs tasks requiring unrestricted
                    access.{' '}
                    <TextLink href="https://www.example.com" target="_blank">
                      Learn more
                    </TextLink>
                  </Text>
                </div>
              </div>
            </Radio>
            </RadioField>
            <Radio
              value="IAM user"
              className={({ isSelected }) => {
                return twMerge(
                  'items-start rounded-md border p-3 shadow-sm [&_[slot=radio]]:mt-1.5',
                  isSelected && 'border-accent/45 ring-2 ring-accent/25',
                );
              }}
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex flex-1 flex-col">
                  <div className="font-semibold">IAM user</div>
                  <Text>
                    User within an account that performs daily tasks.{' '}
                    <TextLink href="https://www.example.com" target="_blank">
                      Learn more
                    </TextLink>
                  </Text>
                </div>
              </div>
            </Radio>
          </RadioGroupContent>
        </RadioGroup>

        <Slider
          minValue={70}
          maxValue={200}
          defaultValue={100}
          step={10}
          className="flex w-[350px] flex-col"
        >
          <div className="flex flex-1 items-end">
            <Label className="text-nowrap pb-1 pr-4 font-normal">Zoom</Label>
            <div className="flex flex-1 flex-col">
              <SliderOutput className="self-center">
                {({ state }) => {
                  return (
                    <span className="text-sm">
                      {state.getThumbValueLabel(0)}%
                    </span>
                  );
                }}
              </SliderOutput>
              <div className="flex flex-1 items-center gap-3">
                <SliderTack thumbLabels={['volume']} />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="flex w-96 flex-col gap-4">
        <div className="flex gap-2">
          <Button>Submit</Button>
          <Button outline>Submit</Button>

          <ToggleButton isIconOnly outline className="text-muted">
            <Icon aria-label="Change theme">
              <Sun strokeWidth={1.5} />
              {/* <Moon strokeWidth={1.5} /> */}
            </Icon>
          </ToggleButton>

          <DialogExample />
        </div>

        <NumberField maxValue={10} defaultValue={5}>
          <Label>Seat(s)</Label>
          <Description>Maximum of 10</Description>
          <NumberInput />
        </NumberField>

        <SelectField defaultSelectedKey={'ca'}>
          <Label>Country</Label>
          <Select>
            <SelectItem id="ca" textValue="Canada">
              <Icon>
                <svg className="w-5 sm:w-4" viewBox="0 0 16 12" fill="none">
                  <g clipPath="url(#clip0_270_55097)">
                    <path fill="#fff" d="M0 0H16V12H0z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 0h8.5v12H4V0z"
                      fill="#F7FCFF"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.164 4.201L7.987 3 8 10h-.343l.21-1.732s-2.305.423-2.115.21c.191-.214.3-.606.3-.606L4 6.474s.324-.004.587-.164c.264-.16-.263-1.109-.263-1.109l1.036.154.392-.435.782.836h.352l-.352-1.914.63.36zM8 10V3l.836 1.201.63-.359-.352 1.914h.352l.782-.836.392.435 1.036-.154s-.527.949-.263 1.109c.263.16.587.164.587.164L9.947 7.872s.11.392.3.606c.191.213-2.115-.21-2.115-.21L8.342 10H8zM12 0h4v12h-4V0zM0 0h4v12H0V0z"
                      fill="#E31D1C"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_270_55097">
                      <path fill="#fff" d="M0 0H16V12H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Icon>
              Canada
            </SelectItem>
            <SelectItem id="us" textValue="United States">
              <Icon>
                <svg className="w-5 sm:w-4" viewBox="0 0 16 12" fill="none">
                  <g clipPath="url(#clip0_270_55071)">
                    <path fill="#fff" d="M0 0H16V12H0z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0h16v12H0V0z"
                      fill="#E31D1C"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 1v1h16V1H0zm0 2v1h16V3H0zm0 3V5h16v1H0zm0 1v1h16V7H0zm0 3V9h16v1H0zm0 2v-1h16v1H0z"
                      fill="#F7FCFF"
                    ></path>
                    <path fill="#2E42A5" d="M0 0H9V7H0z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.04 2.174l.53-.37.411.297h-.233l.471.416-.159.584h-.249l-.242-.536-.206.536H.748l.471.416-.179.657.53-.37.411.297h-.233l.471.416-.159.584h-.249l-.242-.536-.206.536H.748l.471.416-.179.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.471.416-.179.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.471.416-.179.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.471.416-.179.657.53-.37.513.37-.16-.657.412-.416h-.524l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.19l.425-.296.513.369-.16-.657.412-.416h-.524l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.19l.425-.296.513.369-.16-.657.412-.416h-.524L7.569.565l-.206.536h-.615l.471.416-.159.584h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.524L5.569.565l-.206.536h-.615l.471.416-.159.584h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.524L3.569.565l-.206.536h-.615l.471.416-.159.584h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.524L1.569.565l-.206.536H.748l.471.416-.179.657zM7.06 4.1l.159-.584-.47-.416h.232l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.536.242.536h.249zm-1.079 0l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.536.242.536h.249l.159-.584-.47-.416h.232zm-1.762.416L4.06 5.1h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.471.416zm.144-.416h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.471.416-.159.584h-.249l-.242-.536-.206.536zm-1.303 0l.159-.584-.47-.416h.232l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.536.242.536h.249zm3.159-1.584L6.06 3.1h-.249l-.242-.536-.206.536h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.471.416zM3.981 2.1l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.536.242.536h.249l.159-.584-.47-.416h.232z"
                      fill="#F7FCFF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_270_55071">
                      <path fill="#fff" d="M0 0H16V12H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Icon>
              United States
            </SelectItem>
            <SelectItem id="mexican" textValue="Mexico">
              <Icon>
                <svg className="w-5 sm:w-4" viewBox="0 0 16 12" fill="none">
                  <g clipPath="url(#clip0_270_55118)">
                    <path fill="#fff" d="M0 0H16V12H0z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 0h5v12h-5V0z"
                      fill="#D9071E"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0h6v12H0V0z"
                      fill="#006923"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 0h6v12H5V0z"
                      fill="#fff"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.192 3.957s-.343.266-.279.55c.064.284.74 0 .66-.275-.083-.275-.38-.275-.38-.275z"
                      fill="#FCCA3D"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.668 4.634c-.257 0-.364-.214-.311-.442.028-.121.102-.276.222-.476l.43.257a2.861 2.861 0 00-.11.198.96.96 0 01.25.113c.234.154.32.428.07.631-.05.04-.128.173-.171.302.12.007.204.025.283.071.221.13.2.37.032.553-.12.13-.278.237-.429.29-.25.091-.516.057-.516-.263v-.002c0-.013-.002-.036.11-.038h.022-.022c-.19-.003-.231-.104-.255-.283a1.853 1.853 0 01-.012-.182l-.002-.06-.002-.06-.001-.013c-.004-.058-.007-.097.123-.097h-.29v-.5h.29c.164 0 .255.055.307.17.03-.052.06-.101.094-.145a.386.386 0 00-.112-.024zm.318.878l.008-.008-.002.004-.006.004zm-.218.149zm0-.189v.008-.015.007z"
                      fill="#A8AC71"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.633 6.201s.463-1.37-.272-2.08c-.736-.71-1.585-.662-1.585-.662s-.245.182 0 .32c.245.14.142.272.142.272s-.41-.416-.682-.173c-.272.243.254.206.199.39-.056.182-.292.995.053 1.405.344.41-.326.321-.19.321.137 0 .62.096.62 0 0-.095.168.371.312.371s.255-.164.255-.164.201.164.324.164.552-.107.552-.107l-.81-.682s.049-.301-.066-.366.92.577 1.002.784c.08.207.146.207.146.207z"
                      fill="#8F4620"
                    ></path>
                    <path
                      d="M5.533 5.863s.075-.239.156-.256c.07-.014.216.115.216.115.26 1.445.889 2.01 1.933 2.01 1.055 0 1.695-.43 2.069-1.762 0 0 .198-.203.268-.18.077.024.172.292.172.292-.095 1.559-1.22 2.482-2.492 2.482-1.284 0-2.333-1.035-2.322-2.7z"
                      fill="#9FAB2F"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.667 6.828s1.502.319 2.095.319c.593 0-.52.484-.954.484-.435 0-1.14-.803-1.14-.803z"
                      fill="#2FC2DC"
                    ></path>
                    <rect
                      x="7.33337"
                      y="7.05"
                      width="1"
                      height="0.535714"
                      rx="0.0833333"
                      fill="#F9AA51"
                    ></rect>
                    <path
                      d="M6.088 6.068l.41-.287c.532.76 1.328 1.009 2.443.748l.114.487c-1.303.305-2.31-.01-2.967-.948z"
                      fill="#259485"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.296 6.175s-.607.32-.405.32c.202 0 .994.16.84 0-.154-.16-.435-.32-.435-.32zM7.578 5.794s-.115-.333-.355-.333-.172.273-.288.273c-.115 0 .108.193.207.193.1 0 .436-.133.436-.133z"
                      fill="#FCCA3D"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_270_55118">
                      <path fill="#fff" d="M0 0H16V12H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </Icon>
              Mexico
            </SelectItem>
          </Select>
        </SelectField>

        <TextField>
          <Label>About</Label>
          <Description>Write a few sentences about yourself.</Description>
          <TextArea rows={2}></TextArea>
        </TextField>

        <CheckboxGroup defaultValue={['Post']}>
          <Label>Audience, media and tagging</Label>
          <Text className="pb-4">
            Manage what information you allow other people to see.
          </Text>
          <CheckboxGroupContent>
            <CheckboxField>
              <Checkbox value="Post">Protect your post</Checkbox>
              <Description>
                Your posts and other account information are only visible to
                people who follow you.
              </Description>
            </CheckboxField>

            <CheckboxField>
              <Checkbox value="Video">Protect your videos</Checkbox>
              <Description>
                your posts and other account information are only visible to
                people who follow you.
              </Description>
            </CheckboxField>
          </CheckboxGroupContent>
        </CheckboxGroup>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <ChangeProfile />
        </div>
        <div>
          <DateRangePicker>
            <Label>Stay duration</Label>
            <DateRangePickerInput></DateRangePickerInput>
          </DateRangePicker>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">
              Craft world-class accessible components
            </div>
            <div className="flex gap-2">
              <Button asChild outline>
                <Link
                  href="https://react-spectrum.adobe.com/react-aria/components.html"
                  target="_blank"
                  className="flex-1"
                >
                  <img
                    aria-hidden
                    className="size-5"
                    alt="react aria component"
                    src="https://spectrum.adobe.com/_next/static/media/adobe_logo_spectrum_site.b6d47fe3.svg"
                  />{' '}
                  React React Component
                </Link>
              </Button>

              <Button asChild outline>
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  className="flex-1"
                >
                  <img
                    aria-hidden
                    className="size-5"
                    alt="tailwind css"
                    src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                  />
                  Tailwind CSS
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Tabs>
            <TabList>
              <Tab>My Account</Tab>
              <Tab>Company</Tab>
              <Tab>Team Members</Tab>
              <Tab>Billing</Tab>
            </TabList>
          </Tabs>
          <Tabs variant="pills">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Analytics</Tab>
              <Tab>Reports</Tab>
              <Tab>Notifications</Tab>
            </TabList>
          </Tabs>
          <Tabs variant="segment">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Analytics</Tab>
              <Tab>Reports</Tab>
              <Tab>Notifications</Tab>
            </TabList>
          </Tabs>
          <Tabs orientation="vertical">
            <TabList>
              <Tab className="p-2">Overview</Tab>
              <Tab className="p-2">Analytics</Tab>
              <Tab className="p-2">Reports</Tab>
              <Tab className="p-2">Notifications</Tab>
            </TabList>
          </Tabs>
        </div>
        <div className="mt-4">
          <WithAvatars />
        </div>
      </div>
      <div></div>
    </div>
  );
};

function ChangeProfile() {
  const [src, setSrc] = React.useState<string | undefined>(
    'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  );

  return (
    <div className="flex items-center gap-2">
      <Avatar alt="D D" className="rounded-full" src={src}></Avatar>

      <FileTrigger
        onSelect={(e) => {
          if (!e) {
            return;
          }

          const file = Array.from(e)[0];
          setSrc(URL.createObjectURL(file));
        }}
      >
        <Button outline>Change</Button>
      </FileTrigger>
    </div>
  );
}

function DialogExample() {
  return (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Modal size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ml-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ml-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
