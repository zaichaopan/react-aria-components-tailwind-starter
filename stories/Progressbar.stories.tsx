import { Bar, BarValueText, ProgressBar } from '../src/progress-bar';
import { docs } from '../.storybook/docs';
import { Label } from '../src/field';

const meta = {
  title: 'Progress bar',
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <ProgressBar value={80}>
      <div className="flex items-center justify-between">
        <Label>Loading</Label>
        <BarValueText />
      </div>
      <Bar />
    </ProgressBar>
  );
};

export const Indeterminate = () => {
  return (
    <ProgressBar value={80} isIndeterminate>
      <div className="flex items-center justify-between">
        <Label>Loading</Label>
        <BarValueText />
      </div>
      <Bar />
    </ProgressBar>
  );
};
