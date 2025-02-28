import { NotificationBadge } from '../src/notification-badge';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/icon';
import { BellIcon, MessageCircle } from 'lucide-react';
import { Link } from '../src/link';
import { Button } from '../src/button';
import React from 'react';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const DotBadge = () => {
  return (
    <Link className="p-2" aria-label="Chat - 6 new messages">
      <Icon>
        <MessageCircle />
      </Icon>
      <NotificationBadge variant="dot" aria-label="Chat - 6 new messages" />
    </Link>
  );
};

export const NumberBadge = () => {
  return (
    <div className="flex gap-6">
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
          <BellIcon className="text-muted size-5"></BellIcon>
        </Icon>
        Notifications
        <NotificationBadge
          variant="numeric"
          inline
          value={8}
          className="ms-2"
        />
      </div>
    </div>
  );
};

export const BadgeAccessibility = () => {
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
