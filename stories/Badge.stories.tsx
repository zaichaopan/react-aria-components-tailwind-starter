import { StarIcon } from 'lucide-react';
import { docs } from '../.storybook/docs';
import { Badge } from '../src/badge';
import { Icon } from '../src/icon';
import { CheckCircleIcon } from '../src/icons/outline/check-circle';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return <Badge>Default</Badge>;
};

export const Colors = () => {
  return (
    <div className="flex gap-x-2">
      <Badge color="green">Success</Badge>
      <Badge color="blue">Info</Badge>
      <Badge color="red">Remove</Badge>
      <Badge color="yellow">Warning</Badge>
      <Badge color="purple">New</Badge>
    </div>
  );
};

export const Solid = () => {
  return (
    <div className="flex gap-x-2">
      <Badge color="green" variant="solid">
        Success
      </Badge>
      <Badge color="blue" variant="solid">
        Info
      </Badge>
      <Badge color="red" variant="solid">
        Remove
      </Badge>
      <Badge color="yellow" variant="solid">
        Warning
      </Badge>
      <Badge color="purple" variant="solid">
        New
      </Badge>
    </div>
  );
};

export const WithIcons = () => {
  return (
    <div className="flex gap-x-2">
      <Badge color="green">
        <CheckCircleIcon />
        Success
      </Badge>
      <Badge color="blue">
        <Icon>
          <StarIcon />
        </Icon>
        New
      </Badge>
    </div>
  );
};
