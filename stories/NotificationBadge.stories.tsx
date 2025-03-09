import { NotificationBadge } from '../src/notification-badge';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/icon';
import {
  BellIcon,
  CreditCardIcon,
  MessageCircle,
  MessagesSquareIcon,
  UserIcon,
} from 'lucide-react';
import { Link } from '../src/link';
import { Button } from '../src/button';
import React from 'react';
import { Avatar } from '../src/avatar';
import { TabList, Tabs, Tab } from '../src/tabs';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const NotificationBadgeOnLinks = () => {
  return (
    <div className="flex gap-4">
      <Link className="p-2">
        <Icon>
          <MessageCircle />
        </Icon>
        <NotificationBadge variant="dot" aria-label="Chat - 6 new messages" />
      </Link>

      <Link className="p-2">
        <Icon>
          <MessageCircle />
        </Icon>
        <NotificationBadge
          variant="numeric"
          value={6}
          aria-label="Chat - 6 new messages"
        />
      </Link>

      <Link>
        Messages
        <NotificationBadge
          variant="numeric"
          value={6}
          aria-label="6 new"
          inline
        />
      </Link>

      <Link>
        <Avatar alt="J P" aria-hidden colorful />
        <NotificationBadge
          variant="numeric"
          value={6}
          aria-label="J P 6 new message"
        />
      </Link>
    </div>
  );
};

export const NotificationBadgeOnButtons = () => {
  return (
    <div className="flex items-center gap-6">
      <Button variant="outline" isIconOnly>
        <Icon>
          <MessagesSquareIcon />
        </Icon>
        <NotificationBadge
          variant="numeric"
          value={10}
          aria-label={`Chat- 10 new messages`}
        />
      </Button>

      <Button variant="outline" isIconOnly>
        <Icon>
          <MessagesSquareIcon />
        </Icon>
        <NotificationBadge variant="dot" aria-label={`Chat- 10 new messages`} />
      </Button>

      <Button variant="plain" isIconOnly>
        <Avatar alt="J P" aria-hidden colorful />
        <NotificationBadge
          variant="numeric"
          value={10}
          aria-label={`J P - 10 new messages`}
        />
      </Button>
    </div>
  );
};

export const NotificationBadgeOnTabs = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation" className="px-4">
          <Tab id="profile">
            <Icon>
              <UserIcon />
            </Icon>
            Profile
          </Tab>

          <Tab id="billing">
            <Icon>
              <CreditCardIcon />
            </Icon>
            Billing
          </Tab>
          <Tab id="notifications">
            <Icon>
              <BellIcon />
            </Icon>
            Notifications
            <NotificationBadge
              variant="numeric"
              inline
              value={10}
              aria-label={`10 new messages`}
            />
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export const BadgeAccessibility = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="inline-flex flex-col space-y-4">
      <Button variant="plain" isIconOnly>
        <Avatar alt="J P" aria-hidden colorful />
        <NotificationBadge
          variant="numeric"
          value={10}
          aria-label={`G A - ${value} new messages`}
        />
      </Button>
      <Button onPress={() => setValue(value + 1)}>Add</Button>
    </div>
  );
};
