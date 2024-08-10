import type { Meta } from '@storybook/react';
import { NotificationBadge } from '../src/notification-badge';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/accessible-icon';
import { BellIcon, MessageCircle } from 'lucide-react';
import { Link } from '../src/link';
import { Button } from '../src/button';
import React from 'react';

const meta: Meta = {
  title: 'Notification badge',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Notification badges** show notifications, counts, or status information on navigation items and icons. Add **aria-label=*** to its parent to make it accessible.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const ChatWithDotNotifications = () => {
  return (
    <div className="flex gap-6">
      <Link className="p-2" aria-label="Chat - 6 new messages">
        <Icon>
          <MessageCircle />
        </Icon>
        <NotificationBadge variant="dot" aria-label="Chat - 6 new messages" />
      </Link>

      <Button aria-label="Chat - 6 new messages" variant="outline">
        <Icon>
          <MessageCircle />
        </Icon>
        <NotificationBadge
          variant="numeric"
          value={6}
          aria-label="Chat - 6 new messages"
        />
      </Button>

      <div className="flex items-center gap-x-1">
        <Icon>
          <BellIcon className='text-muted size-5'></BellIcon>
        </Icon>
        Notifications
        <NotificationBadge variant="numeric" inlined value={8} className='ms-2'/>
      </div>
    </div>
  );
};

export const NotificationBadgeAccessibility = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="inline-flex flex-col space-y-4">
      <Link
        className="relative self-center p-2"
        aria-label={`Chat - ${value} new messages`}
      >
        <Icon>
          <MessageCircle />
        </Icon>
        <NotificationBadge
          variant="numeric"
          value={value}
          aria-label={`Chat - ${value} new messages`}
        />
      </Link>
      <Button onPress={() => setValue(value + 1)}>Add</Button>
    </div>
  );
};

NotificationBadgeAccessibility.parameters = {
  docs: {
    description: {
      story:
        '> Add an **aria-label** to both the **badge** and its parent for accessibility. If aria-label is not provided to the badge, the screen reader will not read the value of the badge when it changes. Learn more about <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22" target="_blank">**Status messages**</a>.',
    },
  },
};
