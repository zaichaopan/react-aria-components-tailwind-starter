import { docs } from '../.storybook/docs';
import { Avatar, AvatarBadge, AvatarGroup } from '../src/avatar';
import { AvailableIcon } from '../src/icons/solid/available';
import { AwayIcon } from '../src/icons/solid/away';
import { BusyIcon } from '../src/icons/solid/busy';
import { DoNotDisturbIcon } from '../src/icons/solid/do-not-disturb';
import { CheckIcon } from '../src/icons/outline/check';

const meta  = {
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
      src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    />
  );
};

export const RoundedAvatars = () => {
  return (
    <div className="flex gap-6">
      <Avatar
        alt="M A"
        src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <Avatar
        className="rounded-full"
        alt="M A"
        src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </div>
  );
};

const sizes = [
  16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128,
] as const;

export const AvatarSizes = () => {
  return (
    <div className="flex items-end gap-6">
      {sizes.map((size) => {
        return (
          <Avatar
            key={size}
            size={size}
            alt="M A"
            src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        );
      })}
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
        {[
          <AvailableIcon aria-label="Available" />,
          <BusyIcon aria-label="Busy" />,
          <AwayIcon aria-label="Away" />,
          <DoNotDisturbIcon aria-label="Do not disturb" />,
        ].map((icon, index) => {
          return (
            <Avatar
              key={index}
              src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="M A"
            >
              <AvatarBadge badge={icon} />
            </Avatar>
          );
        })}
      </div>

      <div className="flex gap-4 rounded-lg bg-linear-to-bl from-sky-500 to-indigo-500 p-6">
        {[
          <AvailableIcon aria-label="Available" />,
          <BusyIcon aria-label="Busy" />,
          <AwayIcon aria-label="Away" />,
          <DoNotDisturbIcon aria-label="Do not disturb" />,
        ].map((icon, index) => {
          return (
            <Avatar
              key={index}
              src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="M A"
            >
              <AvatarBadge badge={icon} />
            </Avatar>
          );
        })}
      </div>
    </div>
  );
};

export const AvatarBadgeSizes = () => {
  return (
    <div className="grid gap-y-12">
      <div className="flex items-end gap-6">
        {sizes.map((size) => {
          return (
            <Avatar
              key={size}
              size={size}
              alt="M A"
              src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
              className="rounded-full"
              size={size}
              alt="M A"
              src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
        size={72}
        alt="M A"
        src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge
          className="size-10 rounded-lg"
          badge={
            <Avatar
              alt="MM"
              size={36}
              src="https://images.unsplash.com/photo-1646589391794-566792b13cae?q=80&w=3386&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          }
        />
      </Avatar>

      <Avatar
        size={72}
        alt="M A"
        src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      >
        <AvatarBadge
          className="size-6 translate-x-1 translate-y-1 border-2 border-white bg-green-600"
          badge={<CheckIcon className="size-3.5 text-white" />}
        />
      </Avatar>
    </div>
  );
}

const users = [
  {
    name: 'M A',
    src: 'https://images.unsplash.com/photo-1646589391794-566792b13cae?q=80&w=3386&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'D P',
    src: 'https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'M C',
    src: 'https://images.unsplash.com/photo-1706951261002-1bfcc612664f?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'M H',
    src: 'https://images.unsplash.com/photo-1645002124895-009a4c3ea3af?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'M J',
    src: 'https://images.unsplash.com/photo-1679611978819-f10168367155?q=80&w=2306&auto=format&fit=facearea&facepad=4&w=256&h=256',
  },
];
export const AvatarGroups = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <AvatarGroup aria-label="Online users">
          {users.map((user) => {
            return (
              <Avatar
                key={user.name}
                size={32}
                alt={user.name}
                src={user.src}
              />
            );
          })}
        </AvatarGroup>
        <div className="ring-background relative -ms-2 grid size-8 place-items-center rounded-lg bg-zinc-100 text-xs/6 font-medium ring-2 dark:bg-zinc-700">
          +3
        </div>
      </div>

      <div className="flex items-center">
        <AvatarGroup aria-label="Online users">
          {users.map((user) => {
            return (
              <Avatar
                key={user.name}
                size={32}
                className="rounded-full"
                alt={user.name}
                src={user.src}
              />
            );
          })}
        </AvatarGroup>
        <div className="ring-background relative -ms-2 grid size-8 place-items-center rounded-full bg-zinc-100 text-xs/6 font-medium ring-2 dark:bg-zinc-700">
          +3
        </div>
      </div>
    </div>
  );
};

export const AvatarGroupsWithReverseOverlap = () => {
  return (
    <div className="grid gap-y-6">
      <div className="flex items-center">
        <AvatarGroup reverse aria-label="Online users">
          {users.map((user) => {
            return (
              <Avatar
                key={user.name}
                size={32}
                alt={user.name}
                src={user.src}
              />
            );
          })}
        </AvatarGroup>
        <div className="ring-background relative -z-10 ms-0.5 grid size-8 place-items-center rounded-lg bg-zinc-100 text-xs/6 font-medium ring-1 dark:bg-zinc-700">
          +2
        </div>
      </div>

      <div className="flex items-center">
        <AvatarGroup reverse aria-label="Online users">
          {users.map((user) => {
            return (
              <Avatar
                key={user.name}
                size={32}
                className="rounded-full"
                alt={user.name}
                src={user.src}
              />
            );
          })}
        </AvatarGroup>
        <div className="ring-background relative -z-10 ms-0.5 grid size-8 place-items-center rounded-full bg-zinc-100 text-xs/6 font-medium ring-1 dark:bg-zinc-700">
          +2
        </div>
      </div>
    </div>
  );
};
