import type { Meta } from '@storybook/react';
import { Switch, SwitchField } from '../src/Switch';
import { Text, TextLink } from '../src/Text';
import { docs } from '../.storybook/docs';
import { Group, Description, Label } from '../src/Field';

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

export const Example = (args: any) => (
  <Switch {...args}>Email notification</Switch>
);

export const WithDescription = (args: any) => (
  <SwitchField>
    <Switch {...args} isDisabled>
      Email notifications
    </Switch>
    <Description>
      Get email to find out what's going on when you'are not online.
    </Description>
  </SwitchField>
);

export const LabelPlacement = (args: any) => (
  <SwitchField>
    <Switch labelPlacement="right" {...args}>
      Email notifications
    </Switch>
    <Description>
      Get email to find out what's going on when you'are not online.
    </Description>
  </SwitchField>
);

export const GroupExample = (args: any) => (
  <Group className="max-w-2xl">
    <Label>Audience and tagging</Label>
    <Text>Manage what information you allow other people on X to see.</Text>
    <div className="gap-6 pt-4">
      <SwitchField>
        <Switch {...args}>Protect your posts</Switch>
        <Description className="flex pb-4" elementType="div">
          <Text>
            When selected, your posts and other account information are only
            visible to people who follow you.{' '}
            <TextLink className="inline">Learn more</TextLink>
          </Text>
        </Description>
      </SwitchField>

      <SwitchField>
        <Switch {...args}>Protect your videos</Switch>
        <Description className="pb-4">
          If selected, videos in your posts will not be downloadable by default.
          This setting applies to posts going forward and is not retroactive.
        </Description>
      </SwitchField>

      <SwitchField>
        <Switch {...args}>Photo tagging</Switch>
      </SwitchField>
    </div>
  </Group>
);
