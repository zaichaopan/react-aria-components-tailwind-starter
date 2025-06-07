import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateTitle,
  EmptyStateIcon,
} from '../src/empty-state';
import { FolderPlus} from 'lucide-react';
import { PlusIcon } from '../src/icons/outline/plus';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <EmptyState className="h-screen">
      <EmptyStateIcon>
        <FolderPlus strokeWidth="1" />
      </EmptyStateIcon>
      <EmptyStateTitle>No projects</EmptyStateTitle>
      <EmptyStateDescription>
        Get started by creating a new project.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <PlusIcon />
          New Project
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
};
