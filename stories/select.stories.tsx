import React from 'react';
import type { Meta } from '@storybook/react';
import { Key } from 'react-aria-components';
import { users } from './users';
import { Button } from '../src/button';
import { Form } from '../src/form';
import {
  Select,
  SelectPopover,
  SelectButton,
  SelectListItem,
  SelectSection,
  SelectListItemLabel,
  SelectListItemDescription,
  SelectListBox,
} from '../src/select';
import { Avatar } from '../src/avatar';
import { Description, FieldError, Label } from '../src/field';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/accessible-icon';
import { AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react';
import { Text } from '../src/text';

const meta: Meta = {
  title: 'Select',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Select.html#select" target="_blank">**select**</a> displays a collapsible list of options and allows a user to select one of them.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <FieldError />
    </Select>
  );
};

export const SelectedIconPlacement = () => {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox selectedIconPlacement="start">
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <FieldError />
    </Select>
  );
};

export const SelectWithDescription = () => {
  return (
    <div className="space-y-12">
      <Select placeholder="Select status&hellip;">
        <Label>Project status</Label>
        <Description>
          This will be visible to clients involved in the project.
        </Description>
        <SelectButton />
        <SelectPopover>
          <SelectListBox>
            <SelectListItem id="1">Backlog</SelectListItem>
            <SelectListItem id="2">In Progress</SelectListItem>
            <SelectListItem id="3">In Review</SelectListItem>
            <SelectListItem id="4">Done</SelectListItem>
            <SelectListItem id="5">Won't do</SelectListItem>
          </SelectListBox>
        </SelectPopover>
      </Select>

      <Select placeholder="Select status&hellip;">
        <Label>Project status</Label>
        <SelectButton />
        <SelectPopover>
          <SelectListBox>
            <SelectListItem id="1">Backlog</SelectListItem>
            <SelectListItem id="2">In Progress</SelectListItem>
            <SelectListItem id="3">In Review</SelectListItem>
            <SelectListItem id="4">Done</SelectListItem>
            <SelectListItem id="5">Won't do</SelectListItem>
          </SelectListBox>
        </SelectPopover>
        <Description>
          This will be visible to clients involved in the project.
        </Description>
      </Select>
    </div>
  );
};

export const SelectItemWithDescription = () => {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1" textValue="Backlog">
            <SelectListItemLabel>Backlog</SelectListItemLabel>
            <SelectListItemDescription className="block w-full">
              A backlog is a list of tasks waiting to be prioritized and
              completed.
            </SelectListItemDescription>
          </SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
};

export const SelectWithSections = () => {
  const placements = ['start', 'end'] as const;

  return (
    <div className="flex flex-col gap-6">
      {placements.map((placement) => {
        return (
          <Select key={placement}>
            <Label>Preferred fruit or vegetable</Label>
            <SelectButton />

            <SelectPopover>
              <SelectListBox selectedIconPlacement={placement}>
                <SelectSection title="Fruit">
                  <SelectListItem id="Apple">Apple</SelectListItem>
                  <SelectListItem id="Banana">Banana</SelectListItem>
                  <SelectListItem id="Orange">Orange</SelectListItem>
                  <SelectListItem id="Honeydew">Honeydew</SelectListItem>
                  <SelectListItem id="Grapes">Grapes</SelectListItem>
                  <SelectListItem id="Watermelon">Watermelon</SelectListItem>
                  <SelectListItem id="Cantaloupe">Cantaloupe</SelectListItem>
                  <SelectListItem id="Pear">Pear</SelectListItem>
                </SelectSection>
                <SelectSection title="Vegetable">
                  <SelectListItem id="Cabbage">Cabbage</SelectListItem>
                  <SelectListItem id="Broccoli">Broccoli</SelectListItem>
                  <SelectListItem id="Carrots">Carrots</SelectListItem>
                  <SelectListItem id="Lettuce">Lettuce</SelectListItem>
                  <SelectListItem id="Spinach">Spinach</SelectListItem>
                  <SelectListItem id="Bok Choy">Bok Choy</SelectListItem>
                  <SelectListItem id="Cauliflower">Cauliflower</SelectListItem>
                  <SelectListItem id="Potatoes">Potatoes</SelectListItem>
                </SelectSection>
              </SelectListBox>
            </SelectPopover>
          </Select>
        );
      })}
    </div>
  );
};

export const SelectItemWithDisabledState = () => {
  const [statusId, setStatusId] = React.useState<Key>('2');

  return (
    <Select
      placeholder="Select status&hellip;"
      selectedKey={statusId}
      onSelectionChange={setStatusId}
      disabledKeys={['5']}
    >
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
};

export const SelectWithDisabledState = () => {
  return (
    <Select placeholder="Select status&hellip;" isDisabled>
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
};

export const SelectWithControlledState = () => {
  const [statusId, setStatusId] = React.useState<Key>('3');

  return (
    <Select
      placeholder="Select status&hellip;"
      selectedKey={statusId}
      onSelectionChange={setStatusId}
    >
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />

      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
};

export const SelectItemWithIcon = () => {
  return (
    <div className="space-y-12">
      <Select placeholder="Select status&hellip;">
        <Label>Project status</Label>
        <Description>
          This will be visible to clients involved in the project.
        </Description>
        <SelectButton />
        <SelectPopover>
          <SelectListBox>
            <SelectListItem id="1" textValue="Backlog">
              <StatusIcon className="bg-gray-500" />
              <SelectListItemLabel>Backlog</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="2" textValue="In Progress">
              <StatusIcon className="bg-blue-500" />
              <SelectListItemLabel>In Progress</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="3" textValue="In Review">
              <StatusIcon className="bg-yellow-500" />
              <SelectListItemLabel>In Review</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="4" textValue="Done">
              <StatusIcon className="bg-green-500" />
              <SelectListItemLabel>Done</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="5" textValue="Won't do">
              <StatusIcon className="bg-red-500" />
              <SelectListItemLabel>Won't do</SelectListItemLabel>
            </SelectListItem>
          </SelectListBox>
        </SelectPopover>
      </Select>

      <Select placeholder="Choose alignment" defaultSelectedKey="left">
        <Label>Alignment</Label>
        <SelectButton />
        <SelectPopover>
          <SelectListBox>
            <SelectListItem id="left" textValue="Left">
              <Icon>
                <AlignLeftIcon />
              </Icon>
              <SelectListItemLabel>Left</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="right" textValue="Right">
              <Icon>
                <AlignRightIcon />
              </Icon>
              <SelectListItemLabel>Right</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="justified" textValue="Justified">
              <Icon>
                <AlignJustifyIcon />
              </Icon>
              <SelectListItemLabel>Justified</SelectListItemLabel>
            </SelectListItem>
          </SelectListBox>
        </SelectPopover>
      </Select>
    </div>
  );
};

export const SelectItemWithIconAndDescription = () => {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1" textValue="Backlog">
            <StatusIcon className="bg-gray-500" />
            <SelectListItemLabel>Backlog</SelectListItemLabel>
            <SelectListItemDescription className="block w-full">
              A backlog is a list of tasks waiting to be prioritized and
              completed.
            </SelectListItemDescription>
          </SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
    </Select>
  );
};

export const SelectItemWithAvatars = () => {
  return (
    <div className="space-y-12">
      <Select placeholder="Assign to" defaultSelectedKey="1">
        <Label>Assignee</Label>
        <SelectButton />
        <SelectPopover>
          <SelectListBox items={users}>
            {(user) => {
              return (
                <SelectListItem textValue={user.name}>
                  <Avatar
                    className="rounded-full"
                    src={user.avatar}
                    alt={user.name}
                  />
                  <SelectListItemLabel>{user.name}</SelectListItemLabel>
                </SelectListItem>
              );
            }}
          </SelectListBox>
        </SelectPopover>
      </Select>

      <Select placeholder="Assign to" defaultSelectedKey="1">
        <Label>Assignee</Label>
        <SelectButton />
        <SelectPopover>
          <SelectListBox items={users}>
            {(user) => {
              return (
                <SelectListItem textValue={user.name}>
                  <Avatar
                    className="rounded-full"
                    src={user.avatar}
                    alt={user.name}
                  />
                  <SelectListItemLabel>{user.name}</SelectListItemLabel>
                  <SelectListItemDescription>
                    {user.description}
                  </SelectListItemDescription>
                </SelectListItem>
              );
            }}
          </SelectListBox>
        </SelectPopover>
      </Select>
    </div>
  );
};

export const SelectItemWithFlags = () => {
  return (
    <Select defaultSelectedKey="ca">
      <Label>Country</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="ca" textValue="Canada">
            <Icon>
              <Canada />
            </Icon>
            <SelectListItemLabel>Canada</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="us" textValue="United States">
            <Icon>
              <US />
            </Icon>
            <SelectListItemLabel>United States</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="mexican" textValue="Mexico">
            <Icon>
              <Mexico />
            </Icon>
            <SelectListItemLabel>Mexico</SelectListItemLabel>
          </SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
};

export const SelectItemWithSecondaryText = () => {
  return (
    <Select
      placeholder="Assign to"
      defaultSelectedKey="1"
      className="w-full sm:min-w-72"
    >
      <Label>Assignee</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox items={users}>
          {(user) => {
            return (
              <SelectListItem textValue={user.name}>
                <SelectListItemLabel>
                  {user.name}
                  <Text className="inline ps-1.5">{user.description}</Text>
                </SelectListItemLabel>
              </SelectListItem>
            );
          }}
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
};
export const SelectWithValidation = () => {
  return (
    <Form className='space-y-4'>
      <Select isRequired placeholder="Select status&hellip;">
        <Label>Project status</Label>
        <Description>
          This will be visible to clients involved in the project.
        </Description>
        <SelectButton />
        <SelectPopover>
          <SelectListBox>
            <SelectListItem id="1" textValue="Backlog">
              <StatusIcon className="bg-gray-500" />
              <SelectListItemLabel>Backlog</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="2" textValue="In Progress">
              <StatusIcon className="bg-blue-500" />
              <SelectListItemLabel>In Progress</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="3" textValue="In Review">
              <StatusIcon className="bg-yellow-500" />
              <SelectListItemLabel>In Review</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="4" textValue="Done">
              <StatusIcon className="bg-green-500" />
              <SelectListItemLabel>Done</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="5" textValue="Won't do">
              <StatusIcon className="bg-red-500" />
              <SelectListItemLabel>Won't do</SelectListItemLabel>
            </SelectListItem>
          </SelectListBox>
        </SelectPopover>
        <FieldError />
      </Select>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const SelectWithCustomWidth = () => {
  return (
    <Select className="min-w-96" isRequired placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1" textValue="Backlog">
            <StatusIcon className="bg-gray-500" />
            <SelectListItemLabel>Backlog</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="2" textValue="In Progress">
            <StatusIcon className="bg-blue-500" />
            <SelectListItemLabel>In Progress</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="3" textValue="In Review">
            <StatusIcon className="bg-yellow-500" />
            <SelectListItemLabel>In Review</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="4" textValue="Done">
            <StatusIcon className="bg-green-500" />
            <SelectListItemLabel>Done</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="5" textValue="Won't do">
            <StatusIcon className="bg-red-500" />
            <SelectListItemLabel>Won't do</SelectListItemLabel>
          </SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <FieldError />
    </Select>
  );
};

SelectWithCustomWidth.parameters = {
  docs: {
    description: {
      story:
        'Use **className="min-w-*"**on the **SelectField** component to set select field width.',
    },
  },
};

export const SelectWithCustomLayout = () => {
  return (
    <Form className='space-y-4'>
      <Select isRequired placeholder="Select status&hellip;" className="gap-2">
        <div className="flex items-center gap-2">
          <Label className="mb-0 mt-1 self-start">Project status</Label>
          <div>
            <SelectButton className="min-w-48" />
            <FieldError className="mt-2" />
          </div>

          <SelectPopover>
            <SelectListBox>
              <SelectListItem id="1" textValue="Backlog">
                <StatusIcon className="bg-gray-500" />
                <SelectListItemLabel>Backlog</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="2" textValue="In Progress">
                <StatusIcon className="bg-blue-500" />
                <SelectListItemLabel>In Progress</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="3" textValue="In Review">
                <StatusIcon className="bg-yellow-500" />
                <SelectListItemLabel>In Review</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="4" textValue="Done">
                <StatusIcon className="bg-green-500" />
                <SelectListItemLabel>Done</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="5" textValue="Won't do">
                <StatusIcon className="bg-red-500" />
                <SelectListItemLabel>Won't do</SelectListItemLabel>
              </SelectListItem>
            </SelectListBox>
          </SelectPopover>
        </div>
      </Select>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

function StatusIcon({ className }: { className: string }) {
  return (
    <span
      data-ui="icon"
      className={`size-3 rounded-full border border-solid border-white ${className}`}
    />
  );
}

function Canada(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 16 12" fill="none" {...props}>
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
  );
}

function US(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 16 12" fill="none" {...props}>
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
  );
}

function Mexico(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 16 12" fill="none" {...props}>
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
  );
}
