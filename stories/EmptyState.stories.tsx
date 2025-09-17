import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateTitle,
  EmptyStateIcon,
} from '../src/empty-state';
import {PlayCircleIcon } from 'lucide-react';
import { PlusIcon } from '../src/icons/outline/plus';
import { Link } from '../src/link';
import { ArrowUpRightIcon } from '../src/icons/outline/arrow-up-right';
import { Icon } from '../src/icon';

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
        <Icon>
          <EmptyIcon className="size-40" />
        </Icon>
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
    <EmptyState className="h-screen" align="start">
      <EmptyStateIcon>
        <Icon>
          <EmptyIcon className="size-40" />
        </Icon>
      </EmptyStateIcon>
      <EmptyStateTitle displayLevel={1}>
        There's no report here&hellip;
      </EmptyStateTitle>
      <EmptyStateDescription>
        Looks like there is nothing to see yet. Start by creating a new report
        to view data and insights.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <PlusIcon />
          Add new report
        </Button>
        <Button variant="outline">
          <Icon>
            <PlayCircleIcon />
          </Icon>
          Watch Demo
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
};

function EmptyIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg fill="none" viewBox="0 0 120 72" {...props}>
      <g data-lift="true">
        <path
          shapeRendering="geometricPrecision"
          className="fill-white dark:fill-gray-950"
          d="M56.066 6 8.435 33.5C7.478 34.053 7 34.776 7 35.5v3c0 .724.478 1.448 1.435 2L56.066 68c1.913 1.105 5.015 1.105 6.929 0l47.631-27.5c.957-.552 1.435-1.276 1.435-2v-3c0-.724-.479-1.447-1.435-2L62.995 6c-1.914-1.104-5.015-1.104-6.929 0"
        ></path>
        <path
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          d="M112.09 35.496c-.001-.723-.479-1.447-1.435-2l-47.632-27.5c-1.913-1.104-5.015-1.104-6.928 0l-47.631 27.5c-.957.553-1.435 1.277-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2v-3"
        ></path>
        <path
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeOpacity="0.3"
          d="M11.062 35.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.253-.276 1.732 0l30.31 17.5c.479.277.479.724 0 1l-47.63 27.5c-.479.276-1.255.276-1.733 0zM45.703 55.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1l-47.631 27.5c-.478.276-1.254.276-1.732 0z"
        ></path>
        <circle
          shapeRendering="geometricPrecision"
          cx="1.5"
          cy="1.5"
          r="1.5"
          fill="currentColor"
          transform="matrix(.86603 -.5 .86603 .5 16.258 35.496)"
        ></circle>
        <path
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          d="m22.32 33.496 3.464-2M56.961 13.496l3.465-2M49.168 17.996l4.33-2.5M42.24 21.996l3.463-2"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeOpacity="0.3"
          d="m41.373 38.496 23.383-13.5"
        ></path>
        <path
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          d="m53.498 55.496 6.928-4M69.086 46.496l6.928-4M84.674 37.496l6.929-4"
        ></path>
        <path
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeOpacity="0.3"
          d="m56.096 56.996 9.526-5.5M71.684 47.996l9.526-5.5M87.273 38.996l9.526-5.5M58.693 58.496l8.66-5M74.282 49.496l8.66-5M89.87 40.496l8.66-5M46.57 38.496l18.186-10.5"
        ></path>
        <rect
          shapeRendering="geometricPrecision"
          width="28"
          height="2"
          fill="currentColor"
          rx="0.5"
          transform="matrix(.86603 -.5 .86603 .5 33.579 34.496)"
        ></rect>
        <rect
          shapeRendering="geometricPrecision"
          width="32"
          height="2"
          fill="currentColor"
          rx="0.5"
          transform="matrix(.86603 -.5 .86603 .5 35.311 37.496)"
        ></rect>
        <rect
          shapeRendering="geometricPrecision"
          width="10"
          height="3"
          fill="currentColor"
          rx="1.5"
          transform="matrix(.86603 -.5 .86603 .5 48.301 39.996)"
        ></rect>
        <rect
          shapeRendering="geometricPrecision"
          width="10"
          height="3"
          fill="currentColor"
          fillOpacity="0.3"
          rx="1.5"
          transform="matrix(.86603 -.5 .86603 .5 58.693 33.996)"
        ></rect>
      </g>
    </svg>
  );
}
