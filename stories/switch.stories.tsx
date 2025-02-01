import type { Meta } from '@storybook/react';
import { Switch, SwitchField, SwitchGroup, Switches } from '../src/switch';
import { Text, TextLink } from '../src/text';
import { docs } from '../.storybook/docs';
import { Description, Label } from '../src/field';
import { Icon } from '../src/icon';
import { MoonIcon, SunIcon } from 'lucide-react';

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
      <Switch defaultSelected>
        Yearly billing&nbsp;<Text>(Save 10%)</Text>
      </Switch>

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
        render={
          <div
            className={[
              'flex',
              'rounded-full',
              'border',
              'border-zinc-200',
              'p-[0.5px]',
              'dark:border-border',
              'group-data-selected:border-accent',
              'bg-zinc-200',
              'dark:bg-transparent',
              'group-data-selected:bg-accent',
              'transition ease-in-out',
            ].join(' ')}
          >
            <div className="relative isolate flex">
              <div
                className={[
                  'z-10',
                  'flex-1',
                  'p-1',
                  'grid place-items-center',
                  'transition ease-in-out',
                  'opacity-100 group-data-selected:opacity-0',
                ].join(' ')}
              >
                <Icon>
                  <svg
                    fill="none"
                    viewBox="0 0 12 12"
                    className="size-3 text-muted/75 dark:text-muted/90"
                  >
                    <path
                      d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Icon>
              </div>

              <div
                className={[
                  'z-10',
                  'flex-1',
                  'p-1',
                  'grid place-items-center',
                  'transition ease-in-out',
                  'opacity-0 group-data-selected:opacity-100',
                ].join(' ')}
              >
                <Icon>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 12 12"
                    className="size-3 text-accent"
                  >
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
                  </svg>
                </Icon>
              </div>

              <div
                className={[
                  'h-full w-1/2 rounded-full bg-white',
                  'absolute left-0 top-0 group-data-selected:left-1/2',
                  'transition-all ease-in-out',
                ].join(' ')}
              ></div>
            </div>
          </div>
        }
      />

      <Switch
        aria-label="Dark mode"
        className="inline-flex"
        render={
          <div
            className={[
              'flex rounded-full bg-zinc-200 p-0.5 dark:bg-zinc-700',
              'group-data-selected:bg-accent',
            ].join(' ')}
          >
            <div className="relative isolate flex">
              <div className="z-10 p-1.5">
                <Icon>
                  <SunIcon className="size-4 text-foreground transition group-data-selected:text-white" />
                </Icon>
              </div>

              <div className="z-10 p-1.5">
                <Icon>
                  <MoonIcon className="size-4 text-muted/75 transition group-data-selected:text-foreground" />
                </Icon>
              </div>

              <div
                className={[
                  'h-full w-1/2 rounded-full bg-white dark:bg-zinc-900',
                  'absolute left-0 top-0 group-data-selected:left-1/2',
                  'transition-all ease-in-out',
                ].join(' ')}
              ></div>
            </div>
          </div>
        }
      ></Switch>

      <Switch
        aria-label="Dark mode"
        className="inline-flex"
        render={
          <div
            className={[
              'flex',
              'p-0.5',
              'rounded-full',
              'bg-zinc-200',
              'dark:bg-zinc-700',
              'group-data-selected:bg-accent',
              'group-data-selected:text-white',
              'transition-[background]',
              'ease-in-out',
            ].join(' ')}
          >
            <div className="relative isolate flex px-0.5">
              <div
                className={[
                  'z-10',
                  'p-1.5',
                  'opacity-0',
                  'group-data-selected:opacity-100',
                  'translate-x-full',
                  'group-data-selected:translate-x-0',
                  'transition-all',
                  'ease-in-out',
                ].join(' ')}
              >
                <Icon>
                  <SunIcon className="size-4" />
                </Icon>
              </div>

              <div
                className={[
                  'z-10',
                  'p-1.5',
                  'opacity-100',
                  'group-data-selected:opacity-0',
                  'translate-x-0',
                  'group-data-selected:-translate-x-full',
                  'transition-all',
                  'ease-in-out',
                ].join(' ')}
              >
                <Icon>
                  <MoonIcon className="size-4" />
                </Icon>
              </div>

              <div
                className={[
                  'h-full',
                  'w-1/2',
                  'rounded-full',
                  'bg-white',
                  'absolute',
                  'top-0',
                  'left-0',
                  'group-data-selected:left-1/2',
                  'transition-all',
                  'ease-in-out',
                ].join(' ')}
              ></div>
            </div>
          </div>
        }
      ></Switch>
    </div>
  );
};
