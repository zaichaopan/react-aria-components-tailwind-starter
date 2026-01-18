import { Switch, SwitchField, SwitchGroup, Switches } from '../src/switch';
import { Text, TextLink } from '../src/text';
import { docs } from '../.storybook/docs';
import { Description, Label } from '../src/field';
import { Icon } from '../src/icon';
import { MoonIcon, SunIcon } from 'lucide-react';
import { CheckIcon } from '../src/icons/outline/check';
import { XIcon } from '../src/icons/outline/x';

import { twMerge } from 'tailwind-merge';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return <Switch>Email notification</Switch>;
};

export const SwitchDescription = () => {
  return (
    <SwitchField>
      <Switch>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you're not online.
      </Description>
    </SwitchField>
  );
};

export const DisabledState = () => {
  return (
    <SwitchField>
      <Switch isDisabled>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you're not online.
      </Description>
    </SwitchField>
  );
};

export const ReadonlyState = () => {
  return (
    <SwitchField>
      <Switch isReadOnly>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you're not online.
      </Description>
    </SwitchField>
  );
};

export const LabelPlacement = () => {
  return (
    <SwitchField>
      <Switch labelPlacement="start">Email notifications</Switch>
    </SwitchField>
  );
};

export const Sizes = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Switch className="[--thumb-size:--spacing(5)]">
        Annual billing&nbsp;<Text>(Save 10%)</Text>
      </Switch>

      <Switch className="[--thumb-size:--spacing(3)]">
        Annual billing&nbsp;<Text>(Save 10%)</Text>
      </Switch>
    </div>
  );
};

export const SwitchBackgrounds = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Switch className="[--switch-bg:white]" defaultSelected>
        White
      </Switch>

      <Switch className="[--switch-bg:black]" defaultSelected>
        Black
      </Switch>

      <Switch className="[--switch-bg:var(--color-zinc-600)]" defaultSelected>
        Zinc
      </Switch>

      <Switch className="[--switch-bg:var(--color-red-600)]" defaultSelected>
        Red
      </Switch>

      <Switch className="[--switch-bg:var(--color-orange-500)]" defaultSelected>
        Orange
      </Switch>

      <Switch className="[--switch-bg:var(--color-amber-500)]" defaultSelected>
        Amber
      </Switch>

      <Switch className="[--switch-bg:var(--color-yellow-500)]" defaultSelected>
        Yellow
      </Switch>

      <Switch className="[--switch-bg:var(--color-lime-500)]" defaultSelected>
        Lime
      </Switch>

      <Switch className="[--switch-bg:var(--color-green-600)]" defaultSelected>
        Green
      </Switch>

      <Switch
        className="[--switch-bg:var(--color-emerald-600)]"
        defaultSelected
      >
        Emerald
      </Switch>

      <Switch className="[--switch-bg:var(--color-teal-600)]" defaultSelected>
        Teal
      </Switch>

      <Switch className="[--switch-bg:var(--color-cyan-500)]" defaultSelected>
        Cyan
      </Switch>

      <Switch className="[--switch-bg:var(--color-sky-500)]" defaultSelected>
        Sky
      </Switch>

      <Switch className="[--switch-bg:var(--color-blue-500)]" defaultSelected>
        Blue
      </Switch>

      <Switch className="[--switch-bg:var(--color-indigo-500)]" defaultSelected>
        Indigo
      </Switch>

      <Switch className="[--switch-bg:var(--color-violet-500)]" defaultSelected>
        Violet
      </Switch>

      <Switch className="[--switch-bg:var(--color-purple-500)]" defaultSelected>
        Purple
      </Switch>

      <Switch
        className="[--switch-bg:var(--color-fuchsia-500)]"
        defaultSelected
      >
        Fuchsia
      </Switch>

      <Switch className="[--switch-bg:var(--color-pink-500)]" defaultSelected>
        Pink
      </Switch>

      <Switch className="[--switch-bg:var(--color-rose-500)]" defaultSelected>
        Rose
      </Switch>
    </div>
  );
};

export const SwitchGroups = () => {
  return (
    <SwitchGroup className="max-w-2xl">
      <Label>Sync data</Label>
      <Switches>
        <Switch>Apps</Switch>
        <Switch>Bookmarks</Switch>
        <Switch>Extensions</Switch>
        <Switch>History</Switch>
        <Switch>Settings</Switch>
      </Switches>
    </SwitchGroup>
  );
};

export const GroupDescription = () => {
  return (
    <SwitchGroup className="max-w-2xl" labelPlacement="start">
      <Label>Notifications</Label>
      <Description>
        Applies across all your desktop devices with notifications enabled.
      </Description>
      <Switches>
        <SwitchField>
          <Switch>Assignments</Switch>
          <Description elementType="div">
            <Text>
              Assignments, unassignments, and membership changes.{' '}
              <TextLink className="inline">Learn more</TextLink>
            </Text>
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch>Status changes</Switch>
          <Description>
            Changes to the status, priority, and blocking relationships of
            issues
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch>Comments and replies</Switch>
          <Description>Comments, replies and thread resolutions</Description>
        </SwitchField>

        <SwitchField>
          <Switch>Mentions</Switch>
        </SwitchField>
      </Switches>
    </SwitchGroup>
  );
};

export const DisabledItems = () => {
  return (
    <SwitchGroup className="max-w-2xl" labelPlacement="start">
      <Label>Notifications</Label>
      <Description>
        Applies across all your desktop devices with notifications enabled.
      </Description>
      <Switches>
        <SwitchField>
          <Switch isDisabled>Assignments</Switch>
          <Description elementType="div">
            <Text>
              Assignments, unassignments, and membership changes.{' '}
              <TextLink className="inline">Learn more</TextLink>
            </Text>
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch>Status changes</Switch>
          <Description>
            Changes to the status, priority, and blocking relationships of
            issues
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch>Comments and replies</Switch>
          <Description>Comments, replies and thread resolutions</Description>
        </SwitchField>

        <SwitchField>
          <Switch>Mentions</Switch>
        </SwitchField>
      </Switches>
    </SwitchGroup>
  );
};

export const HandleIcon = () => {
  return (
    <Switch
      aria-label="With toggle icon"
      render={({ isSelected, isFocusVisible }) => (
        <div
          className={twMerge(
            'dark:border-border flex rounded-full border border-zinc-200 bg-zinc-200 p-px transition ease-in-out dark:bg-transparent',
            isSelected && 'border-accent bg-accent',
            isFocusVisible && 'outline-ring outline-2 outline-offset-2',
          )}
        >
          <div className="relative isolate flex">
            <div
              className={twMerge(
                'z-10 grid size-5 place-items-center opacity-100 transition ease-in-out',
                isSelected && 'opacity-0',
              )}
            >
              <XIcon className="text-muted size-3.5" />
            </div>

            <div
              className={twMerge(
                'z-10 grid size-5 place-items-center opacity-0 transition ease-in-out',
                isSelected && 'opacity-100',
              )}
            >
              <CheckIcon className="text-muted size-4" />
            </div>

            <div
              className={twMerge(
                'absolute top-0 left-0 h-full w-1/2 rounded-full bg-white transition-all ease-in-out dark:bg-white',
                isSelected && 'left-1/2',
              )}
            ></div>
          </div>
        </div>
      )}
    />
  );
};

export const SwitchLabelAndIcon = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Switch>
        {({ isSelected }) => {
          return isSelected ? 'On' : 'Off';
        }}
      </Switch>

      <Switch aria-label="Dark mode">
        {({ isSelected }) => {
          return isSelected ? (
            <Icon>
              <SunIcon className="size-4" />
            </Icon>
          ) : (
            <Icon>
              <MoonIcon className="size-4" />
            </Icon>
          );
        }}
      </Switch>
    </div>
  );
};

export const AnimatedHandleIcons = () => {
  return (
    <Switch
      aria-label="Dark mode"
      className="inline-flex"
      render={({ isSelected, isFocusVisible }) => (
        <div
          className={twMerge(
            'flex rounded-full border border-zinc-200 bg-zinc-200 p-px transition-[background] ease-in-out dark:border-zinc-700 dark:bg-zinc-700',
            isSelected && 'bg-accent border-accent text-white',
            isFocusVisible && 'outline-ring outline-2 outline-offset-2',
          )}
        >
          <div className="relative isolate flex">
            <div
              className={twMerge(
                'z-10 grid size-6 translate-x-full place-items-center opacity-0 transition-all ease-in-out',
                isSelected && 'translate-x-0 opacity-100',
              )}
            >
              <Icon>
                <SunIcon className="size-4" />
              </Icon>
            </div>

            <div
              className={twMerge(
                'text-muted z-10 grid size-6 translate-x-0 place-items-center opacity-100 transition-all ease-in-out',
                isSelected && 'translate-x-full opacity-0',
              )}
            >
              <Icon>
                <MoonIcon className="size-4" />
              </Icon>
            </div>

            <div
              className={twMerge(
                'absolute top-0 left-0 h-full w-1/2 rounded-full bg-white transition-all ease-in-out',
                isSelected && 'left-1/2',
              )}
            ></div>
          </div>
        </div>
      )}
    ></Switch>
  );
};
