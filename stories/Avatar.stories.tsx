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
import { CheckIcon } from 'lucide-react';

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
    <div className="flex gap-4">
      <Avatar alt="T W" />
      <Avatar alt="T W" className="rounded-full" />
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

const names = [
  'Ramiro Dicki',
  'Abraham Upton',
  'Irma Goldner',
  'Michael Reinger II',
  'Ana DuBuque',
  'Betsy Tremblay',
];
export const Colorful = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {names.map((name) => {
          return <Avatar key={name} alt={name} colorful />;
        })}
      </div>
      <div className="flex gap-4">
        {names.map((name) => {
          return <Avatar key={name} alt={name} fallback="icon" colorful />;
        })}
      </div>
    </div>
  );
};

export const BrandColor = () => {
  return <Avatar alt="A" background="#007bff" />;
};

export const AvatarBadges = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 p-6">
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

      <div className="flex gap-4 rounded-lg bg-linear-to-bl from-sky-500 to-indigo-500 p-6">
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

const sizes = [
  'size-4',
  'size-5',
  'size-6',
  'size-7',
  'size-8',
  'size-9',
  'size-10',
  'size-12',
  'size-14',
  'size-16',
  'size-18',
  'size-24',
  'size-30',
  'size-32',
];

export const AvatarBadgeSizes = () => {
  return (
    <div className="grid gap-y-12">
      <div className="flex items-end gap-6">
        {sizes.map((size) => {
          return (
            <Avatar
              key={size}
              className={size}
              alt="M A"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            >
              <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
            </Avatar>
          );
        })}
      </div>
      <div className="flex items-end gap-6">
        {sizes.map((size) => {
          return (
            <Avatar
              key={size}
              className={`${size} rounded-full`}
              alt="M A"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            >
              <AvatarBadge badge={<AvailableIcon aria-label="Available" />} />
            </Avatar>
          );
        })}
      </div>
    </div>
  );
};

export function StyleAvatarBadge() {
  return (
    <div className="flex gap-4">
      <Avatar
        className="size-20"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      >
        <AvatarBadge
          className="size-10 rounded-lg"
          badge={
            <Avatar
              alt="MM"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-9"
            />
          }
        />
      </Avatar>

      <Avatar
        className="size-20"
        alt="M A"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      >
        <AvatarBadge
          className="size-6 translate-x-1 translate-y-1 border-2 border-white bg-green-500"
          badge={
            <Icon>
              <CheckIcon className="size-3.5 text-white" />
            </Icon>
          }
        />
      </Avatar>
    </div>
  );
}

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
        <Avatar className="size-8" alt="R A" fallback="icon" colorful />
        <Avatar className="size-8" alt="E A" fallback="icon" colorful />
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
        <Avatar className="size-8" alt="R A" colorful />
        <Avatar className="size-8" alt="E A" colorful />
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
          <Avatar className="size-8 rounded-full" alt="R A" colorful />
          <Avatar className="size-8 rounded-full" alt="E A" colorful />
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
          <Avatar
            className="size-8 rounded-full"
            alt="R A"
            fallback="icon"
            colorful
          />
          <Avatar
            className="size-8 rounded-full"
            alt="E A"
            fallback="icon"
            colorful
          />
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
        <Avatar className="size-8" alt="E A" colorful />
        <Avatar className="size-8" alt="R A" colorful />
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
      </AvatarGroup>

      <div className="flex items-center">
        <AvatarGroup reverseOverlap>
          <Avatar className="size-8 rounded-full" alt="E A" colorful />
          <Avatar className="size-8 rounded-full" alt="R A" colorful />
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
        </AvatarGroup>
        <div className="relative flex size-8 items-center justify-center rounded-full ps-2 text-xs/6">
          +2
        </div>
      </div>
    </div>
  );
};
