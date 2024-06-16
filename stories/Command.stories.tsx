import type { Meta } from '@storybook/react';
import { Command } from '../src/Command';
import { Text } from '../src/Text';

const meta: Meta = {
  title: 'CMD+K',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Example = () => {
  return (
    <div className="min-h-screen w-full">
      <div className='flex justify-center py-1'>
        <Command />
      </div>
      <div className='flex-1 text-center'>
        <Text>Coming soon...</Text>
      </div>
    </div>
  );
};
