import React from 'react';
import { Button } from '../src/button';
import {
  NonFousableTooltipTarget,
  TooltipTrigger,
  Tooltip,
  NativeTooltip,
} from '../src/tooltip';
import { docs } from '../.storybook/docs';
import { Moon, Sun } from 'lucide-react';
import { Icon } from '../src/icon';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => (
  <TooltipTrigger>
    <Button variant="outline">Hover me</Button>
    <Tooltip>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

export const NonFocusableElements = () => (
  <TooltipTrigger>
    <NonFousableTooltipTarget>
      <div>Hover me</div>
    </NonFousableTooltipTarget>
    <Tooltip>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

export const DisabledElements = () => (
  <TooltipTrigger>
    <NonFousableTooltipTarget>
      <div>
        <Button variant="outline" isDisabled>
          Hover me
        </Button>
      </div>
    </NonFousableTooltipTarget>
    <Tooltip>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

export const NativeTooltips = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const title =
    theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <NativeTooltip title={title}>
      <Button
        isIconOnly
        variant="outline"
        onPress={() =>
          setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
        }
      >
        <Icon aria-label={title}>{theme === 'light' ? <Moon /> : <Sun />}</Icon>
      </Button>
    </NativeTooltip>
  );
};
