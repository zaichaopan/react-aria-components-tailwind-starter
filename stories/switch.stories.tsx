import type { Meta } from '@storybook/react';
import { Switch, SwitchField, SwitchGroup, Switches } from '../src/switch';
import { Text, TextLink } from '../src/text';
import { docs } from '../.storybook/docs';
import { Description, Label } from '../src/field';

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
