import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Avatar, AvatarBadge, AvatarGroup } from '../src/avatar';
import { Icon } from '../src/icon';
import {
  AvailableIcon,
  AwayIcon,
  BusyIcon,
  DoNotDisturbIcon,
} from '../src/icons';

const meta: Meta<typeof Avatar> = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <Avatar
      alt="M A"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
    />
  );
};

export const RoundedAvatars = () => {
  return (
    <div className="flex gap-6">
      <Avatar
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
      <Avatar
        className="rounded-full"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
    </div>
  );
};

export const AvatarSizes = () => {
  return (
    <div className="flex items-end gap-6">
      <Avatar
        className="size-8"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
      <Avatar
        className="size-9"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
      <Avatar
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
      <Avatar
        className="size-11"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
      <Avatar
        className="size-12"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
      <Avatar
        className="size-14"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
      <Avatar
        className="size-16"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
    </div>
  );
};

export const InitialFallbacks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-4">
        <Avatar alt="D G" />
        <Avatar alt="S C" />
        <Avatar alt="Y G" />
        <Avatar alt="G W" />
        <Avatar alt="T C" />
      </div>
      <div className="flex items-end gap-4">
        <Avatar alt="D G" className="rounded-full" />
        <Avatar alt="S C" className="rounded-full" />
        <Avatar alt="Y G" className="rounded-full" />
        <Avatar alt="G W" className="rounded-full" />
        <Avatar alt="T C" className="rounded-full" />
      </div>
    </div>
  );
};

export const IconFallbacks = () => {
  return (
    <div className="flex gap-4">
      <Avatar alt="Y C" fallback="icon" />
      <Avatar alt="Y C" className="rounded-full" fallback="icon" />
    </div>
  );
};

export const SingleFallbackColor = () => {
  return (
    <div className="flex gap-4">
      <Avatar alt="T W" colorless />
      <Avatar alt="T W" colorless fallback="icon" />
    </div>
  );
};

export const AvatarBadges = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          alt="M M"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>

        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          alt="M M"
        >
          <AvatarBadge badge={<BusyIcon aria-label="Busy" />} />
        </Avatar>

        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          alt="M M"
        >
          <AvatarBadge badge={<AwayIcon aria-label="Away" />} />
        </Avatar>

        <Avatar
          alt="M M"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge
            badge={<DoNotDisturbIcon aria-label="Do not disturb" />}
          />
        </Avatar>
      </div>
    </div>
  );
};

export const AvatarBadgeAccessibility = () => {
  return (
    <div className="flex gap-4">
      <Avatar
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
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
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
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

export const AvatarBadgeSizes = () => {
  return (
    <div className="grid gap-y-12">
      <div className="flex items-end gap-6">
        <Avatar
          className="size-9"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-11"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-12"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-16"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-20"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
      </div>
      <div className="flex items-end gap-6">
        <Avatar
          className="size-9 rounded-full"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          alt="M A"
          className="rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-11 rounded-full"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-12 rounded-full"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-16 rounded-full"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
        <Avatar
          className="size-20 rounded-full"
          alt="M A"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        >
          <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
        </Avatar>
      </div>
    </div>
  );
};

export const AvatarGroups = () => {
  return (
    <div className="flex flex-col gap-6">
      <AvatarGroup>
        <Avatar
          className="size-8"
          alt="D P"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
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
        <Avatar className="size-8" alt="D G" fallback="icon" />
        <Avatar className="size-8" alt="G W" fallback="icon" />
      </AvatarGroup>

      <AvatarGroup>
        <Avatar
          className="size-8"
          alt="D P"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
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
        <Avatar className="size-8" alt="D G" />
        <Avatar className="size-8" alt="G W" />
      </AvatarGroup>

      <div className="flex items-center">
        <AvatarGroup>
          <Avatar
            className="size-8 rounded-full"
            alt="D P"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          />
          <Avatar
            className="size-8 rounded-full"
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
          <Avatar className="size-8 rounded-full" alt="M A" />
          <Avatar className="size-8 rounded-full" alt="G W" />
        </AvatarGroup>
        <div className="ring-background [&:not(:hover)]:text-muted relative -ms-2 grid size-8 place-items-center rounded-full bg-zinc-50 text-sm/6 font-medium ring-2 dark:bg-zinc-600">
          +2
        </div>
      </div>

      <div className="flex items-center">
        <AvatarGroup>
          <Avatar
            className="size-8 rounded-full"
            alt="G W"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          />
          <Avatar
            className="size-8 rounded-full"
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
          <Avatar className="size-8 rounded-full" alt="D G" fallback="icon" />
          <Avatar className="size-8 rounded-full" alt="G W" fallback="icon" />
        </AvatarGroup>
        <div className="ring-background [&:not(:hover)]:text-muted relative -ms-2 grid size-8 place-items-center rounded-full bg-zinc-50 text-sm/6 font-medium ring-2 dark:bg-zinc-600">
          +2
        </div>
      </div>
    </div>
  );
};

export const AvatarGroupsWithReverseOverlap = () => {
  return (
    <div className="grid gap-y-6">
      <AvatarGroup reverseOverlap>
        <Avatar className="size-8" alt="D G" />
        <Avatar
          className="size-8"
          alt="D P"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
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
        <Avatar className="size-8" alt="G W" />
      </AvatarGroup>

      <div className="flex items-center">
        <AvatarGroup reverseOverlap>
          <Avatar className="size-8 rounded-full" alt="D G" />
          <Avatar
            className="size-8 rounded-full"
            alt="J C"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
          />
          <Avatar
            className="size-8 rounded-full"
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
          <Avatar className="size-8 rounded-full" alt="G W" />
        </AvatarGroup>
        <div className="relative flex size-8 items-center justify-center rounded-full ps-2 text-xs/6">
          +2
        </div>
      </div>
    </div>
  );
};
