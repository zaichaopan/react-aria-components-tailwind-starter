import type { Meta } from '@storybook/react';
import { NotificationBadge } from '../src/notification-badge';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/icon';
import { MessageCircle } from 'lucide-react';
import { Link } from '../src/link';
import { Button } from '../src/button';

const meta: Meta<typeof NotificationBadge> = {
  title: 'NotificationBadge',
  component: NotificationBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**\\`Notification badges\\`** show notifications, counts, or status information on navigation items and icons. Add **\\`aria-label=*\\`** to its parent to make it accessible.',
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

export const WithDotNotifications = () => {
  return (
    <div className="flex gap-4">
      <Link className="p-2" aria-label="Chat - 6 new messages">
        <Icon>
          <MessageCircle />
        </Icon>
        <NotificationBadge show />
      </Link>

      <Button aria-label="Chat - 6 new messages">
        <Icon>
          <MessageCircle />
        </Icon>
        <NotificationBadge count={10} />
      </Button>
    </div>
  );
};

export const WithNumberNotifications = () => {
  return (
    <Link className="relative p-2" aria-label="New message">
      <Icon>
        <MessageCircle />
      </Icon>
      <NotificationBadge count={10} />
    </Link>
  );
};

WithNumberNotifications.parameters = {
  docs: {
    description: {
      story: 'Use the **\\`count\\`** prop to render counts.',
    },
  },
};
