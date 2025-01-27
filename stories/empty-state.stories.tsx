import type { Meta } from '@storybook/react';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateHeading,
  EmptyStateIcon,
} from '../src/empty-state';
import { FolderPlus, Plus } from 'lucide-react';
import { Icon } from '../src/icon';

const meta: Meta = {
  title: 'Empty state',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '<a href="https://tailwindui.com/components/application-ui/feedback/empty-states" target="_blank">**EmptyState**</a> is used as placeholder to tell users why content is missing.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
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
