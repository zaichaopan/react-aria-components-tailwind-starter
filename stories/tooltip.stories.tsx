import React from 'react';
import type { Meta } from '@storybook/react';
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

const meta: Meta = {
  title: 'Tooltip',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">**tooltip**</a> displays a description of an element on hover or focus. Tooltip target need to be focusable.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => (
  <TooltipTrigger>
    <Button variant="outline">Hover me</Button>
    <Tooltip>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

export const TooltipWithNonFocusableElements = () => (
  <TooltipTrigger>
    <NonFousableTooltipTarget>
      <div>Hover me</div>
    </NonFousableTooltipTarget>
    <Tooltip>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

TooltipWithNonFocusableElements.parameters = {
  docs: {
    description: {
      story:
        'Use the **NonFousableTooltipTarge** prop to show a tooltip on <a href="https://argos-ci.com/blog/react-aria-migration" target="_blank">**non-focusable**</a> element.',
    },
  },
};

export const TooltipWithWithDisabledElements = () => (
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

TooltipWithWithDisabledElements.parameters = {
  docs: {
    description: {
      story:
        'Use the **NonFousableTooltipTarget** component and **div** to show a tooltip on disabled elements.',
    },
  },
};

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

NativeTooltips.parameters = {
  docs: {
    description: {
      story:
        'The **NativeTooltip** component uses <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title" target="_blank">**title**</a> attribute to create a native html tooltip.',
    },
  },
};
