import React from 'react';
import type { Meta } from '@storybook/react';
import { ToggleButton } from '../src/Button';
import { Mic, MicOff } from 'lucide-react';
import { TooltipTrigger } from 'react-aria-components';
import { Tooltip } from '../src/Tooltip';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/Icon';

const meta: Meta<typeof ToggleButton> = {
  title: 'ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A <a href="https://react-spectrum.adobe.com/react-aria/ToggleButton.html#togglebutton" target="_blank">**toggle button**</a> allows a user to toggle a selection on or off, for example switching between two states or modes. 
        \nUse the **isSelected** and **onChange** prop to control toggle state and behavior.`,
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
  const [isPined, setIsPined] = React.useState(false);

  return (
    <ToggleButton
      isSelected={isPined}
      onChange={setIsPined}
      {...(!isPined && {
        outline: true,
      })}
    >
      Pin
    </ToggleButton>
  );
};

export const WithIconAndTooltips = () => {
  const [isMicMuted, setIsMicMuted] = React.useState(true);

  return (
    <TooltipTrigger>
      <ToggleButton
        isSelected={isMicMuted}
        onChange={setIsMicMuted}
        text
        className="h-16 w-16 flex-col gap-0 p-2 text-xs/6"
      >
        <Icon
          aria-label="Mute mic"
          icon={
            isMicMuted ? (
              <MicOff className="h-6 w-6" strokeWidth="1.5px" />
            ) : (
              <Mic className="h-6 w-6" strokeWidth="1.5px" />
            )
          }
        ></Icon>
        Mic
      </ToggleButton>
      <Tooltip>{isMicMuted ? 'Un-mute Microphone' : 'Mute Microphone'}</Tooltip>
    </TooltipTrigger>
  );
};
