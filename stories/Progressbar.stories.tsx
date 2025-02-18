import { ProgressBar } from '../src/progress-bar';
import { docs } from '../.storybook/docs';

const meta = {
  title: 'Progress bar',
  parameters: {
    layout: 'centered',
    docs
  }
};

export default meta;

export const BasicExample = () => {
  return <ProgressBar label="loading" value={80} />;
};

export const Indeterminate = () => {
  return <ProgressBar label="loading" value={80} isIndeterminate />;
};
