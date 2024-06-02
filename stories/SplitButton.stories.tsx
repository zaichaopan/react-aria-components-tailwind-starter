import type { Meta } from '@storybook/react';
import {
  SplitButtonGroup,
  SplitButton,
  SplitButtonMenuTriggerButton,
} from '../src/SplitButton';
import { Menu, MenuItem, MenuPopover, MenuTrigger } from '../src/Menu';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof SplitButtonGroup> = {
  title: 'SplitButtonGroup',
  component: SplitButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://web.dev/articles/building/a-split-button-component" target="_blank">**Split buttons**</a> are buttons that conceal a primary button and a list of additional buttons.',
      },
      ...docs,
    },
  },
  args: {},
  tags: ['autodocs'],
};

export default meta;

export const Example = () => (
  <SplitButtonGroup>
    <SplitButton>Save</SplitButton>
    <MenuTrigger>
      <SplitButtonMenuTriggerButton aria-label="Save options" />
      <MenuPopover placement="bottom end">
        <Menu>
          <MenuItem>Save Draft </MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Schedule for later</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  </SplitButtonGroup>
);

export const Outline = () => (
  <SplitButtonGroup outline>
    <SplitButton>Save</SplitButton>
    <MenuTrigger>
      <SplitButtonMenuTriggerButton aria-label="Save options" />
      <MenuPopover>
        <Menu>
          <MenuItem>Save Draft </MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Schedule for later</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  </SplitButtonGroup>
);

export const Destructive = (args: any) => (
  <SplitButtonGroup {...args} color="destructive">
    <SplitButton>Save</SplitButton>
    <MenuTrigger>
      <SplitButtonMenuTriggerButton />
      <MenuPopover>
        <Menu>
          <MenuItem>Save Draft </MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Schedule for later</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  </SplitButtonGroup>
);
