import type { Meta } from '@storybook/react';
import { Avatar, AvatarBadge, AvatarGroup } from '../src/Avatar';
import { docs } from '../.storybook/docs';
import { Available, Away, Busy, DoNotDisturb } from '../src/Status';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An **avatar** is a thumbnail representation of an entity, such as a user or an organization.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = () => {
  return (
    <Avatar
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
      alt="Taylor Harber"
    />
  );
};

export const RoundedAvatars = () => {
  return (
    <Avatar
      className="rounded-full"
      alt="Taylor Harber"
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
    />
  );
};

RoundedAvatars.parameters = {
  docs: {
    description: {
      story: 'Use **className="rounded-full"** to render a rounded avatar:',
    },
  },
};

export const AvatarSizes = () => {
  return (
    <div className="flex items-end gap-6">
      <Avatar
        className="size-8"
        alt="Taylor Harber"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
      />
      <Avatar
        className="size-9"
        alt="Taylor Harber"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
      />
      <Avatar
        alt="Taylor Harber"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
      />
      <Avatar
        className="size-11"
        alt="Taylor Harber"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
      />
      <Avatar
        className="size-12"
        alt="Taylor Harber"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
      />
    </div>
  );
};

AvatarSizes.parameters = {
  docs: {
    description: {
      story:
        'Default avatar size is **size-10**. Use **size-\\*** utility to render avatars with different sizes:',
    },
  },
};

export const InitialFallbacks = () => {
  return (
    <div className="flex items-end gap-4">
      <Avatar alt="Taylor Harber" />
      <Avatar alt="A B" />
      <Avatar alt="B O" />
      <Avatar alt="T W" colorless />
    </div>
  );
};

InitialFallbacks.parameters = {
  docs: {
    description: {
      story: `The **alt** prop is used to generate initial avatar when image is loading or **src** is unavailable.
        \n\n Use the **colorless** props render initial avatars with a single background.   
        `,
    },
  },
};

export const AvatarBadges = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Avatar
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Taylor Harber"
        >
          <AvatarBadge badge={<Available />} aria-label="Available" />
        </Avatar>

        <Avatar
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Taylor Harber"
        >
          <AvatarBadge badge={<Busy />} aria-label="Available" />
        </Avatar>

        <Avatar
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Taylor Harber"
        >
          <AvatarBadge badge={<Away />} aria-label="Available" />
        </Avatar>

        <Avatar alt="Taylor Harber">
          <AvatarBadge aria-label="Available" badge={<DoNotDisturb />} />
        </Avatar>

        <Avatar
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Jane Doe"
        >
          <AvatarBadge
            aria-label="In meeting"
            className="bg-purple-500 p-0.5 text-white"
            badge={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-current"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>
            }
          ></AvatarBadge>
        </Avatar>
      </div>

      <div className="flex gap-4">
        <Avatar
          className="rounded-full"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Taylor Harber"
        >
          <AvatarBadge badge={<Available />} aria-label="Available" />
        </Avatar>

        <Avatar
          className="rounded-full"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Taylor Harber"
        >
          <AvatarBadge badge={<Busy />} aria-label="Available" />
        </Avatar>

        <Avatar
          className="rounded-full"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Taylor Harber"
        >
          <AvatarBadge badge={<Away />} aria-label="Available" />
        </Avatar>

        <Avatar alt="Taylor Harber" className="rounded-full">
          <AvatarBadge aria-label="Available" badge={<DoNotDisturb />} />
        </Avatar>

        <Avatar
          className="rounded-full"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt="Jane Doe"
        >
          <AvatarBadge
            aria-label="In meeting"
            className="bg-purple-500 p-0.5 text-white"
            badge={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-current"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>
            }
          ></AvatarBadge>
        </Avatar>
      </div>
    </div>
  );
};

AvatarBadges.parameters = {
  docs: {
    description: {
      story: `Use the **AvatarBadge** component to add badges. Badge size is auto scaled based on avatar sizes. 
      \n- Use **aria-label** to accessibility. 
      \n- Use **className** to style badge **border** and **background**.`,
    },
  },
};

export const AvatarGroups = () => {
  return (
    <div className="flex flex-col gap-6">
      <AvatarGroup
        avatars={{
          className: 'size-8',
          items: [
            {
              alt: 'Taylor Harber',
            },
            {
              alt: 'Taylor Harber',
              src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              alt: 'M H',
            },
            {
              alt: 'Taylor Harber',

              src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
            },
            {
              alt: 'Taylor Harber',
              src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D',
            },
          ],
        }}
      />
      <AvatarGroup
        avatars={{
          className: 'size-8 rounded-full',
          items: [
            {
              alt: 'Taylor Harber',
            },
            {
              alt: 'Taylor Harber',
              src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              alt: 'M H',
            },

            {
              alt: 'Taylor Harber',

              src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
            },
            {
              alt: 'Taylor Harber',
              src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D',
            },
          ],
        }}
      ></AvatarGroup>
      <AvatarGroup
        avatars={{
          className: 'size-8 rounded-full',
          items: [
            {
              alt: 'Taylor Harber',
            },
            {
              alt: 'Taylor Harber',
              src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              alt: 'M H',
            },

            {
              alt: 'Taylor Harber',

              src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
            },
            {
              alt: 'Taylor Harber',
              src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D',
            },
          ],
        }}
      >
        <div className="relative flex size-8 items-center justify-center rounded-full border bg-accent bg-background p-1 text-xs text-muted shadow-sm">
          +5
        </div>
      </AvatarGroup>
    </div>
  );
};

AvatarGroups.parameters = {
  docs: {
    description: {
      story: `Use the **AvatarGroup** component to stack avatars. Use the **maxDisplays** prop to control how many avatars to display.
      `,
    },
  },
};
