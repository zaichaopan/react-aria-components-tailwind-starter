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
  return <Badge>Badge</Badge>;
};

export const Colors = () => {
  return (
    <div className="flex gap-4 m-12 flex-wrap">
      <Badge color="white">Badge</Badge>
      <Badge color="zinc">Badge</Badge>
      <Badge color="black">Badge</Badge>
      <Badge color="red">Badge</Badge>
      <Badge color="orange">Badge</Badge>
      <Badge color="amber">Badge</Badge>
      <Badge color="yellow">Badge</Badge>
      <Badge color="lime">Badge</Badge>
      <Badge color="green">Badge</Badge>
      <Badge color="emerald">Badge</Badge>
      <Badge color="teal">Badge</Badge>
      <Badge color="cyan">Badge</Badge>
      <Badge color="sky">Badge</Badge>
      <Badge color="blue">Badge</Badge>
      <Badge color="indigo">Badge</Badge>
      <Badge color="violet">Badge</Badge>
      <Badge color="purple">Badge</Badge>
      <Badge color="fuchsia">Badge</Badge>
      <Badge color="pink">Badge</Badge>
      <Badge color="rose">Badge</Badge>
      <Badge color="purple">Badge</Badge>
    </div>
  );
};

export const Solid = () => {
  return (
    <div className="flex gap-4 m-12 flex-wrap">
      <Badge color="white" variant="solid">
        Badge
      </Badge>
      <Badge color="zinc" variant="solid">
        Badge
      </Badge>
      <Badge color="black" variant="solid">
        Badge
      </Badge>
      <Badge color="red" variant="solid">
        Badge
      </Badge>
      <Badge color="orange" variant="solid">
        Badge
      </Badge>
      <Badge color="amber" variant="solid">
        Badge
      </Badge>
      <Badge color="yellow" variant="solid">
        Badge
      </Badge>
      <Badge color="lime" variant="solid">
        Badge
      </Badge>
      <Badge color="green" variant="solid">
        Badge
      </Badge>
      <Badge color="emerald" variant="solid">
        Badge
      </Badge>
      <Badge color="teal" variant="solid">
        Badge
      </Badge>
      <Badge color="cyan" variant="solid">
        Badge
      </Badge>
      <Badge color="sky" variant="solid">
        Badge
      </Badge>
      <Badge color="blue" variant="solid">
        Badge
      </Badge>
      <Badge color="indigo" variant="solid">
        Badge
      </Badge>
      <Badge color="violet" variant="solid">
        Badge
      </Badge>
      <Badge color="purple" variant="solid">
        Badge
      </Badge>
      <Badge color="fuchsia" variant="solid">
        Badge
      </Badge>
      <Badge color="pink" variant="solid">
        Badge
      </Badge>
      <Badge color="rose" variant="solid">
        Badge
      </Badge>
      <Badge color="purple" variant="solid">
        Badge
      </Badge>
    </div>
  );
};

export const WithIcons = () => {
  return (
    <div className="flex gap-x-2">
      <Badge color="white">
        <CheckCircleIcon />
        Badge
      </Badge>

      <Badge color="black" variant="solid">
        <CheckCircleIcon />
        Badge
      </Badge>

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