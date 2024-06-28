import type { Meta } from '@storybook/react';
import { Link } from '../src/Link';
import { ExternalLink, MessageCircle, Phone, Video } from 'lucide-react';
import { docs } from '../.storybook/docs';
import { Button } from '../src/Button';
import { NotificationBadge } from '../src/NotificationBadge';
import { Avatar } from '../src/Avatar';
import { Icon } from '../src/Icon';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Link.html#link" target="_blank">**link**</a> allows a user to navigate to another page or resource within a web page or application.',
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
  return <Link>React Aria Component Link</Link>;
};

export const WithIcons = () => {
  return (
    <Link
      href="https://react-spectrum.adobe.com/react-aria/routing.html"
      target="_blank"
    >
      React Aria Component Link
      <Icon>
        <ExternalLink className="size-5" strokeWidth={1.5} />
      </Icon>
    </Link>
  );
};

WithIcons.parameters = {
  docs: {
    description: {
      story:
        'Use the **Icon** component to render a decoration icon inside a link:',
    },
  },
};

export function NavLinks() {
  return (
    <nav className="flex w-16 flex-col gap-4 rounded border border-border p-3">
      <Link
        className="flex-col p-2 hover:no-underline"
        aria-label="Chat - 6 new messages"
      >
        <Icon>
          <MessageCircle
            size={20}
            className="transition group-hover:scale-110"
          />
        </Icon>
        <NotificationBadge count={6} />
        <span className="text-xs" aria-hidden="true">
          Chat
        </span>
      </Link>
      <Link
        aria-label="Calls - new calls"
        className="flex-col p-2 hover:no-underline"
      >
        <Icon>
          <Phone size={20} className="transition group-hover:scale-110" />
        </Icon>

        <NotificationBadge show />
        <span className="text-xs" aria-hidden="true">
          Calls
        </span>
      </Link>
      <Link
        aria-label="Meet - 9 new meet alerts"
        className="flex-col p-2 hover:no-underline"
      >
        <Icon>
          <Video size={20} className="transition group-hover:scale-110" />
        </Icon>

        <NotificationBadge count={20} />
        <span className="text-xs" aria-hidden="true">
          Meet
        </span>
      </Link>
    </nav>
  );
}

export const AvatarLinks = () => {
  return (
    <Link>
      <Avatar alt="D P" />
    </Link>
  );
};

AvatarLinks.parameters = {
  docs: {
    description: {
      story: 'Use the **Avatar** component to render avatar inside a link:',
    },
  },
};

export const DisabledLinks = () => {
  return (
    <Link
      isDisabled
      href="https://react-spectrum.adobe.com/react-aria/routing.html"
      target="_blank"
    >
      React Aria Component Link
      <Icon>
        <ExternalLink className="size-5" strokeWidth={1.5} />
      </Icon>
    </Link>
  );
};

export const AsChild = () => {
  return (
    <Link>
      <Button unstyle>Edit Profile</Button>
    </Link>
  );
};

AsChild.parameters = {
  docs: {
    description: {
      story:
        'Use **asChild** prop to render other react components like <a href="https://reactrouter.com/en/main/components/link" target="_blank">**Router router Link**</a>:',
    },
  },
};
