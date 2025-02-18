import { Icon } from '../src/icon';
import { docs } from '../.storybook/docs';
import { MailIcon } from 'lucide-react';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <Icon aria-label="email">
      <MailIcon strokeWidth={1.5} />
    </Icon>
  );
};
