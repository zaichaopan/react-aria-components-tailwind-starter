import type { Meta } from '@storybook/react';
import { Icon } from '../src/icon';
import { docs } from '../.storybook/docs';
import { MailIcon } from 'lucide-react';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the <a href="https://www.radix-ui.com/themes/docs/components/accessible-icon" target="_blank">**Icon**</a> component with **aria-label=\\*** for accessible icons. If omitted, **aria-hidden** is added to create **decorative** icons.',
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
  return (
    <Icon aria-label="email">
      <MailIcon strokeWidth={1.5} />
    </Icon>
  );
};
