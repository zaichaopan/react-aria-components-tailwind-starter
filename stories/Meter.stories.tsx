import { Meter } from '../src/meter';
import { docs } from '../.storybook/docs';

const meta = {
  parameters: {
    layout: 'centered',
    docs
    },
  };
  

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <Meter label="Storage space" value={20} />
      <Meter label="Storage space" value={80} />
      <Meter label="Storage space" value={70} />
    </div>
  );
};

export const PositiveMeter = () => {
  return (
    <div className="flex flex-col gap-4">
      <Meter label="Progress" value={25} valueLabel="1 of 4" positive />
      <Meter label="Progress" value={75} valueLabel="3 of 4" positive />
    </div>
  );
};

export const InformativeMeter = () => {
  return <Meter label="Space used" value={25} informative />;
};
