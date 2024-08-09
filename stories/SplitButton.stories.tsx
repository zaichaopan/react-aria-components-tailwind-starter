import type { Meta } from '@storybook/react';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  MenuButton,
  MenuSeparator,
} from '../src/Menu';
import { docs } from '../.storybook/docs';
import { Button, ButtonGroup } from '../src/Button';

const meta: Meta = {
  title: 'SplitButton',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use <a href="./?path=/docs/buttongroup--docs" target="_blank">**ButtonGroup**</a> and <a href="./?path=/docs/menu--docs" target="_blank">**Menu**</a> component to compose <a href="https://web.dev/articles/building/a-split-button-component" target="_blank">**split buttons**</a> which conceal a primary button and a list of additional buttons.',
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
    <ButtonGroup>
      <Button color="success">Merge pull request</Button>
      <MenuTrigger>
        <MenuButton color="success" aria-label="More merge options" />
        <MenuPopover placement="bottom end">
          <Menu>
            <MenuItem description="All commits from this branch will be added to the base branch via a merge commit.">
              Create a merge commit
            </MenuItem>
            <MenuSeparator />
            <MenuItem description="The 1 commit from this branch will be rebased and added to the base branch.">
              Rebase and merge
            </MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </ButtonGroup>
  );
};
