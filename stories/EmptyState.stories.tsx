import type { Meta } from '@storybook/react';
import { Button } from '../src/Button';
import { docs } from '../.storybook/docs';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateHeading,
  EmptyStateIcon,
} from '../src/EmptyState';
import { FolderPlus, Plus } from 'lucide-react';
import { Icon } from '../src/Icon';

const meta: Meta<typeof Button> = {
  title: 'EmptyState',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '<a href="https://tailwindui.com/components/application-ui/feedback/empty-states" target="_blank">**EmptyState**</a> is used as placeholder to tell users why content is missing.',
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
    <EmptyState className="h-screen">
      <EmptyStateIcon>
        <FolderPlus strokeWidth="1" />
      </EmptyStateIcon>
      <EmptyStateHeading>No projects</EmptyStateHeading>
      <EmptyStateDescription>
        Get started by creating a new project.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <Icon>
            <Plus />
          </Icon>
          New Project
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
};
