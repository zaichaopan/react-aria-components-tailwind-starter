import type { Meta } from '@storybook/react';
import { Available, Away, Busy, DoNotDisturb } from '../src/Status';
import { Icon } from '../src/Icon';
import { docs } from '../.storybook/docs';
import { Mail } from 'lucide-react';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use <a href="https://www.radix-ui.com/themes/docs/components/accessible-icon" target="_blank">**Icon**</a> component with **aria-label=*** to render accessible icon.',
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

export const Example = () => {
  return (
    <div className="flex gap-4">
      <Icon aria-label="Available">
        <Available className="size-4" />
      </Icon>
      <Icon aria-label="Away">
        <Away className="size-4" />
      </Icon>
      <Icon aria-label="Do not disturb">
        <DoNotDisturb className="size-4" />
      </Icon>
      <Icon aria-label="Busy">
        <Busy className="size-4" />
      </Icon>
    </div>
  );
};

export const DecorationIcons = () => {
  return (
    <Icon>
      <Mail aria-label="test"/>
    </Icon>
  );
};

DecorationIcons.parameters = {
  docs: {
    description: {
      story:
        'when **aria-label=*** is not provided, **aria-hidden="true"** is added automatically to create a decoration only icon:',
    },
  },
};
