import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateTitle,
  EmptyStateIcon,
} from '../src/empty-state';
import { FolderPlus } from 'lucide-react';
import { PlusIcon } from '../src/icons/outline/plus';
import { Link } from '../src/link';
import { ArrowUpRightIcon } from '../src/icons/outline/arrow-up-right';

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
        Get started by creating a new project. You can add tasks, set deadlines,
        and collaborate with your team.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <PlusIcon />
          Add new project
        </Button>
        <Link variant="outline">
          Read more <ArrowUpRightIcon />
        </Link>
      </EmptyStateActions>
    </EmptyState>
  );
};

export const StartAlignment = () => {
  return (
    <EmptyState className="h-screen" align='start'>
      <EmptyStateIcon>
        <FolderPlus strokeWidth="1" />
      </EmptyStateIcon>
      <div className="flex flex-col">
        {/* <EmptyStateTitle>No projects</EmptyStateTitle> */}
        <EmptyStateDescription>
          Get started by creating a new project. You can add tasks, set
          deadlines, and collaborate with your team.
        </EmptyStateDescription>
        <EmptyStateActions>
          <Button>
            <PlusIcon />
            Add new project
          </Button>
          <Link variant="outline">
            Read more <ArrowUpRightIcon />
          </Link>
        </EmptyStateActions>
      </div>
    </EmptyState>
  );
};