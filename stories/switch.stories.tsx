import type { Meta } from '@storybook/react';
import { Switch, SwitchField, SwitchGroup, Switches } from '../src/switch';
import { Text, TextLink } from '../src/text';
import { docs } from '../.storybook/docs';
import { Description, Label } from '../src/field';
import { Icon } from '../src/icon';
import { CheckIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Switch.html#switch">**switch**</a> allows a user to turn a setting on or off.',
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

export const BasicExample = () => {
  return <Switch>Email notification</Switch>;
};

export const SwitchWithDescription = () => {
  return (
    <SwitchField>
      <Switch>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you'are not online.
      </Description>
    </SwitchField>
  );
};

export const SwitchWithDisabledState = () => {
  return (
    <SwitchField>
      <Switch isDisabled>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you'are not online.
      </Description>
    </SwitchField>
  );
};

export const SwitchWithReadonlyState = () => {
  return (
    <SwitchField>
      <Switch isReadOnly>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you'are not online.
      </Description>
    </SwitchField>
  );
};

export const SwitchLabelPlacement = () => {
  return (
    <SwitchField>
      <Switch labelPlacement="start">Email notifications</Switch>
    </SwitchField>
  );
};

export const SwitchSizes = () => {
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

export const SwitchGroupWithDescription = () => {
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

export const SwitchGroupWithItemDisabled = () => {
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

export const SwitchCustomization = () => {
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

      <Switch
        className="inline-flex"
        aria-label="switch with thumb icon"
        render={({ isSelected, isFocusVisible }) => (
          <div
            className={twMerge(
              'dark:border-border flex rounded-full border border-zinc-200 bg-zinc-200 p-px transition ease-in-out dark:bg-transparent',
              isSelected && 'border-accent bg-accent',
              isFocusVisible &&
                'outline-ring outline outline-2 outline-offset-2',
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
                  <XIcon
                    className="text-muted/75 dark:text-muted/90 size-3"
                    strokeWidth="3"
                  />
                </Icon>
              </div>

              <div
                className={twMerge(
                  'z-10 grid size-5 place-items-center opacity-0 transition ease-in-out',
                  isSelected && 'opacity-100',
                )}
              >
                <Icon>
                  <CheckIcon className="text-accent size-3" strokeWidth="3" />
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

      <Switch
        aria-label="Dark mode"
        className="inline-flex"
        render={({ isSelected, isFocusVisible }) => (
          <div
            className={twMerge(
              'dark:border-border flex rounded-full border border-zinc-200 p-1 transition ease-in-out',

              isFocusVisible &&
                'outline-ring outline outline-2 outline-offset-2',
            )}
          >
            <div className="relative isolate flex">
              <div className="z-10 grid size-8 place-items-center">
                <Icon>
                  <SunIcon
                    className={twMerge(
                      'text-foreground size-5 transition',
                      isSelected && 'text-muted',
                    )}
                  />
                </Icon>
              </div>

              <div className="z-10 grid size-8 place-items-center">
                <Icon>
                  <MoonIcon
                    className={twMerge(
                      'text-muted/75 size-5 transition',
                      isSelected && 'text-white',
                    )}
                  />
                </Icon>
              </div>

              <div
                className={twMerge(
                  'absolute top-0 left-0 h-full w-1/2 rounded-full transition-all ease-in-out',
                  isSelected ? 'left-1/2 bg-zinc-700' : 'bg-zinc-200',
                )}
              ></div>
            </div>
          </div>
        )}
      ></Switch>

      <Switch
        aria-label="Dark mode"
        className="inline-flex"
        render={({ isSelected, isFocusVisible }) => (
          <div
            className={twMerge(
              'flex rounded-full border border-zinc-200 bg-zinc-200 p-px transition-[background] ease-in-out dark:bg-zinc-700',
              isSelected && 'bg-accent border-accent text-white',
              isFocusVisible &&
                'outline-ring outline outline-2 outline-offset-2',
            )}
          >
            <div className="relative isolate flex">
              <div
                className={twMerge(
                  'z-10 grid size-8 translate-x-full place-items-center opacity-0 transition-all ease-in-out',
                  isSelected && 'translate-x-0 opacity-100',
                )}
              >
                <Icon>
                  <SunIcon className="size-5" />
                </Icon>
              </div>

              <div
                className={twMerge(
                  'z-10 grid size-8 translate-x-0 place-items-center opacity-100 transition-all ease-in-out',
                  isSelected && 'translate-x-full opacity-0',
                )}
              >
                <Icon>
                  <MoonIcon className="size-5" />
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
    </div>
  );
};
