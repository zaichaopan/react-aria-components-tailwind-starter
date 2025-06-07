import { docs } from '../.storybook/docs';
import { Kbd } from '../src/kbd';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className='flex gap-2'>
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⌃</Kbd>
      <Kbd className='border rounded-md px-2'>⌘⇧</Kbd>
    </div>
  );
};
