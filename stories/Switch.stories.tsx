import { Switch, SwitchField, SwitchGroup, Switches } from '../src/switch';
import { Text, TextLink } from '../src/text';
import { docs } from '../.storybook/docs';
import { Description, Label } from '../src/field';
import { Icon } from '../src/icon';
import { CheckIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
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
        Get email to find out what's going on when you'are not online.
      </Description>
    </SwitchField>
  );
};

export const DisabledState = () => {
  return (
    <SwitchField>
      <Switch isDisabled>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you'are not online.
      </Description>
    </SwitchField>
  );
};

export const ReadonlyState = () => {
  return (
    <SwitchField>
      <Switch isReadOnly>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you'are not online.
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
    <Switch size="lg">
      Annual billing&nbsp;<Text>(Save 10%)</Text>
    </Switch>
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
    <SwitchGroup className="max-w-2xl">
      <Label>Audience and tagging</Label>
      <Description>
        Manage what information you allow other people on X to see
      </Description>
      <Switches>
        <SwitchField>
          <Switch labelPlacement="start">Protect your posts</Switch>
          <Description elementType="div">
            <Text>
              When selected, your posts and other account information are only
              visible to people who follow you.{' '}
              <TextLink className="inline">Learn more</TextLink>
            </Text>
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPlacement="start">Protect your videos</Switch>
          <Description>
            If selected, videos in your posts will not be downloadable by
            default. This setting applies to posts going forward and is not
            retroactive.
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPlacement="start">Photo tagging</Switch>
        </SwitchField>
      </Switches>
    </SwitchGroup>
  );
};

export const DisabledItems = () => {
  return (
    <SwitchGroup className="max-w-2xl">
      <Label>Audience and tagging</Label>
      <Description>
        Manage what information you allow other people on X to see
      </Description>
      <Switches>
        <SwitchField>
          <Switch labelPlacement="start" isDisabled>
            Protect your posts
          </Switch>
          <Description elementType="div">
            <Text>
              When selected, your posts and other account information are only
              visible to people who follow you.{' '}
              <TextLink className="inline">Learn more</TextLink>
            </Text>
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPlacement="start">Protect your videos</Switch>
          <Description>
            If selected, videos in your posts will not be downloadable by
            default. This setting applies to posts going forward and is not
            retroactive.
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPlacement="start">Photo tagging</Switch>
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
            isFocusVisible && 'outline-ring outline outline-2 outline-offset-2',
          )}
        >
          <div className="relative isolate flex">
            <div
              className={twMerge(
                'z-10 grid size-5 place-items-center opacity-100 transition ease-in-out',
                isSelected && 'opacity-0',
              )}
            >
              <Icon>
                <XIcon className="text-muted size-3" strokeWidth="3" />
              </Icon>
            </div>

            <div
              className={twMerge(
                'z-10 grid size-5 place-items-center opacity-0 transition ease-in-out',
                isSelected && 'opacity-100',
              )}
            >
              <Icon>
                <CheckIcon className="text-muted size-3" strokeWidth="3" />
              </Icon>
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
            isFocusVisible && 'outline-ring outline outline-2 outline-offset-2',
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
