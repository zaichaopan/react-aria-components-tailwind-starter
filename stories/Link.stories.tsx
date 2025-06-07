import { Link } from '../src/link';
import {
  MessageCircle,
  Phone,
  SquareArrowOutUpRightIcon,
  Video,
} from 'lucide-react';
import { docs } from '../.storybook/docs';
import { NotificationBadge } from '../src/notification-badge';
import { Avatar } from '../src/avatar';
import { Icon } from '../src/icon';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return <Link>React Aria Component Link</Link>;
};

export const LinkWithIcons = () => {
  return (
    <Link
      href="https://react-spectrum.adobe.com/react-aria/routing.html"
      target="_blank"
    >
      React Aria Component Link
      <Icon>
        <SquareArrowOutUpRightIcon></SquareArrowOutUpRightIcon>
      </Icon>
    </Link>
  );
};

export const DisabledState = () => {
  return (
    <Link
      isDisabled
      href="https://react-spectrum.adobe.com/react-aria/routing.html"
      target="_blank"
    >
      React Aria Component Link
    </Link>
  );
};

export function NavLinks() {
  return (
    <nav className="border-border flex w-16 flex-col gap-4 rounded-sm border p-3">
      <Link
        className="group flex-col p-2 hover:no-underline"
        aria-label="Chat - 6 new messages"
      >
        <Icon>
          <MessageCircle
            size={20}
            className="transition group-hover:scale-110"
          />
        </Icon>
        <NotificationBadge
          variant="numeric"
          value={6}
          aria-label="6 new chat messages"
        />
        <span className="text-xs" aria-hidden="true">
          Chat
        </span>
      </Link>
      <Link
        aria-label="Calls - new calls"
        className="group flex-col p-2 hover:no-underline"
      >
        <Icon>
          <Phone size={20} className="transition group-hover:scale-110" />
        </Icon>

        <NotificationBadge variant="dot" />
        <span className="text-xs" aria-hidden="true">
          Calls
        </span>
      </Link>
      <Link
        aria-label="Meet - 9 new meet alerts"
        className="group flex-col p-2 hover:no-underline"
      >
        <Icon>
          <Video size={20} className="transition group-hover:scale-110" />
        </Icon>

        <NotificationBadge
          variant="numeric"
          value={20}
          aria-label="9 new meeting alerts"
        />
        <span className="text-xs" aria-hidden="true">
          Meet
        </span>
      </Link>
    </nav>
  );
}

export const AsAvatars = () => {
  return (
    <Link>
      <Avatar alt="Jane Doe" />
    </Link>
  );
};
