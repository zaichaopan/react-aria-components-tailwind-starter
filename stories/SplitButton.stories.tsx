import type { Meta } from '@storybook/react';
import {
  SplitButtonGroup,
  SplitButton,
  SplitButtonMenuTrigger,
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
    <SplitButtonGroup>
      <SplitButton>Save</SplitButton>
      <MenuTrigger>
        <SplitButtonMenuTrigger aria-label="Save options" />
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
};

export const Outline = () => {
  return (
    <SplitButtonGroup outline>
      <SplitButton>Save</SplitButton>
      <MenuTrigger>
        <SplitButtonMenuTrigger aria-label="Save options" />
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
};

export const Destructive = () => {
  return (
    <SplitButtonGroup color="destructive">
      <SplitButton>Save</SplitButton>
      <MenuTrigger>
        <SplitButtonMenuTrigger />
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
};
