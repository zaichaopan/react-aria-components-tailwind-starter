import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Avatar, AvatarBadge, AvatarGroup } from '../src/avatar';
import { Icon } from '../src/accessible-icon';
import {
  AvailableIcon,
  AwayIcon,
  BusyIcon,
  DoNotDisturbIcon,
} from '../src/icons';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An avatar is a thumbnail representation of an entity, such as a user or an organization.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <Avatar
      alt="M A"
      src="https://i.imgur.com/xIe7Wlb.png"
    />
  );
};

export const RoundedAvatars = () => {
  return (
    <div className="flex gap-6">
      <Avatar
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
      <Avatar
        className="rounded-full"
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
    </div>
  );
};

RoundedAvatars.parameters = {
  docs: {
    description: {
      story: 'Use **className="rounded-full"** to render a rounded avatar.',
    },
  },
};

export const AvatarSizes = () => {
  return (
    <div className="flex items-end gap-6">
      <Avatar
        className="size-8"
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
      <Avatar
        className="size-9"
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
      <Avatar
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
      <Avatar
        className="size-11"
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
      <Avatar
        className="size-12"
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
      <Avatar
        className="size-14"
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
      <Avatar
        className="size-16"
        alt="M A"
        src="https://i.imgur.com/xIe7Wlb.png"
      />
    </div>
  );
};

AvatarSizes.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="https://tailwindcss.com/docs/size" target="_blank">**size-***</a> utility to render avatars in different sizes. The default size is **size-10**.',
    },
  },
};

export const InitialFallbacks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-4">
        <Avatar alt="M A" />
        <Avatar alt="A B" />
        <Avatar alt="B O" />
        <Avatar alt="T W" />
      </div>
      <div className="flex items-end gap-4">
        <Avatar alt="A N" className="rounded-full" />
        <Avatar alt="D P" className="rounded-full" />
        <Avatar alt="S W" className="rounded-full" />
        <Avatar alt="W W" className="rounded-full" />
      </div>
    </div>
  );
};

InitialFallbacks.parameters = {
  docs: {
    description: {
      story:
        'The **alt** prop is used to generate initial avatar when image src is unavailable.',
    },
  },
};

export const InitialWithSingleColor = () => {
  return (
    <div className="flex items-end gap-4">
      <Avatar alt="A J" className="rounded-full" colorless />
      <Avatar alt="T O" className="rounded-full" colorless />
      <Avatar alt="E M" className="rounded-full" colorless />
      <Avatar alt="D T" className="rounded-full" colorless />
    </div>
  );
};

InitialWithSingleColor.parameters = {
  docs: {
    description: {
      story:
        'Use the **colorless** prop to render initial avatars with a single background.',
    },
  },
};

export const AvatarBadges = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Avatar
          src="https://i.imgur.com/xIe7Wlb.png"
          alt="M A"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>

        <Avatar
          src="https://i.imgur.com/xIe7Wlb.png"
          alt="M A"
        >
          <AvatarBadge badge={<BusyIcon aria-label="Busy" />} />
        </Avatar>

        <Avatar
          src="https://i.imgur.com/xIe7Wlb.png"
          alt="M A"
        >
          <AvatarBadge badge={<AwayIcon aria-label="Away" />} />
        </Avatar>

        <Avatar
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge
            badge={<DoNotDisturbIcon aria-label="Do not disturb" />}
          />
        </Avatar>
      </div>
    </div>
  );
};

AvatarBadges.parameters = {
  docs: {
    description: {
      story:
        'Use the **AvatarBadge** component to add badges. Badges are positioned at the bottom right corner of the avatar.',
    },
  },
};

export const AvatarBadgeAccessibility = () => {
  return (
    <div className="flex gap-4">
      <Avatar
        src="https://i.imgur.com/xIe7Wlb.png"
        alt="Jane Doe"
      >
        <AvatarBadge
          aria-label="Verified"
          className="border-none bg-blue-500 p-0 text-white"
          badge={
            <Icon aria-label="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </Icon>
          }
        ></AvatarBadge>
      </Avatar>

      <Avatar
        src="https://i.imgur.com/xIe7Wlb.png"
        alt="Jane Doe"
      >
        <AvatarBadge
          aria-label="Verified"
          className="border-none bg-yellow-500 p-0 text-white"
          badge={
            <Icon aria-label="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </Icon>
          }
        ></AvatarBadge>
      </Avatar>
    </div>
  );
};

AvatarBadgeAccessibility.parameters = {
  docs: {
    description: {
      story:
        'Badge icon should be wrapped within the <a href="./?path=/docs/icon--docs" target="_blank">**Icon**</a> component and include an **aria-label** for accessibility. Use **className** to style the badge.',
    },
  },
};

export const AvatarBadgeSizes = () => {
  return (
    <div className="grid gap-y-12">
      <div className="flex items-end gap-6">
        <Avatar
          className="size-9"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-11"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-12"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-16"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-20"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
      </div>
      <div className="flex items-end gap-6">
        <Avatar
          className="size-9 rounded-full"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          alt="M A"
          className="rounded-full"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-11 rounded-full"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-12 rounded-full"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-16 rounded-full"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-20 rounded-full"
          alt="M A"
          src="https://i.imgur.com/xIe7Wlb.png"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
      </div>
    </div>
  );
};

AvatarBadgeSizes.parameters = {
  docs: {
    description: {
      story: 'Badge sizes are automatically scaled based on the avatar size.',
    },
  },
};

export const AvatarGroups = () => {
  return (
    <div className="flex flex-col gap-6">
      <AvatarGroup>
        <Avatar
          className="size-8"
          alt="D P"
          src="https://i.imgur.com/xIe7Wlb.png"
        />
        <Avatar
          className="size-8"
          alt="M C"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Avatar
          className="size-8"
          alt="M H"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8"
          alt="M J"
          src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8"
          alt="M J"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        />
        <Avatar className="size-8" alt="D P" colorless />
      </AvatarGroup>

      <div className="flex items-center">
        <AvatarGroup>
          <Avatar
            className="size-8 rounded-full"
            alt="D P"
            src="https://i.imgur.com/xIe7Wlb.png"
          />
          <Avatar
            className="size-8 rounded-full "
            alt="M C"
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M H"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M J"
            src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M J"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          />
          <Avatar className="size-8 rounded-full" alt="D P" colorless />
        </AvatarGroup>
        <div className="relative -ms-1 grid size-8 place-items-center rounded-full bg-zinc-50 text-xs/6 outline outline-1 -outline-offset-1 outline-black/5 ring ring-2 ring-background dark:bg-zinc-600 dark:outline-white/20">
          +2
        </div>
      </div>
    </div>
  );
};

AvatarGroups.parameters = {
  docs: {
    description: {
      story: 'Use the **AvatarGroup** component to stack avatars.',
    },
  },
};

export const AvatarGroupsWithReverseOverlap = () => {
  return (
    <div className="grid gap-y-6">
      <AvatarGroup reverseOverlap>
        <Avatar className="size-8" alt="D P" colorless />
        <Avatar
          className="size-8"
          alt="D P"
          src="https://i.imgur.com/xIe7Wlb.png"
        />
        <Avatar
          className="size-8"
          alt="M C"
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Avatar
          className="size-8"
          alt="M H"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8"
          alt="M J"
          src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <Avatar
          className="size-8"
          alt="M J"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        />
      </AvatarGroup>

      <div className="flex items-center">
        <AvatarGroup reverseOverlap>
          <Avatar className="size-8 rounded-full" alt="D P" colorless />
          <Avatar
            className="size-8 rounded-full"
            alt="J C"
            src="https://i.imgur.com/xIe7Wlb.png"
          />
          <Avatar
            className="size-8 rounded-full "
            alt="M C"
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M H"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="M J"
            src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            className="size-8 rounded-full"
            alt="Kurtis Gurrado"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          />
        </AvatarGroup>
        <div className="relative flex size-8 items-center justify-center rounded-full text-xs/6">
          +2
        </div>
      </div>
    </div>
  );
};

AvatarGroupsWithReverseOverlap.parameters = {
  docs: {
    description: {
      story: 'Use the **reverseOverlap** prop to reverse the overlap.',
    },
  },
};
