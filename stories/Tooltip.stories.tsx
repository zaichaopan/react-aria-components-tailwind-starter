import type { Meta } from '@storybook/react';
import { Button } from '../src/Button';
import {
  NonFousableTooltipTarget,
  TooltipTrigger,
  Tooltip,
} from '../src/Tooltip';
import { docs } from '../.storybook/docs';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">**tooltip**</a> displays a description of an element on hover or focus. Tooltip target need to be focusable.',
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
  <TooltipTrigger>
    <Button outline>Hover me</Button>
    <Tooltip {...args}>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

export const WithNonFocusableElements = (args: any) => (
  <TooltipTrigger>
    <NonFousableTooltipTarget>
      <div>Hover me</div>
    </NonFousableTooltipTarget>
    <Tooltip {...args}>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

WithNonFocusableElements.parameters = {
  docs: {
    description: {
      story:
        'Use the **NonFousableTooltipTarge** to show a tooltip on **non-focusable** element. <a href="https://argos-ci.com/blog/react-aria-migration" target="_blank">**Learn more**</a>:',
    },
  },
};

export const WithDisabledElements = (args: any) => (
  <TooltipTrigger>
    <NonFousableTooltipTarget>
      <div>
        <Button outline isDisabled>
          Hover me
        </Button>
      </div>
    </NonFousableTooltipTarget>
    <Tooltip {...args}>I am a tooltip</Tooltip>
  </TooltipTrigger>
);

WithDisabledElements.parameters = {
  docs: {
    description: {
      story:
        'Use **NonFousableTooltipTarge** and **div** to show a tooltip on disabled elements:',
    },
  },
};
