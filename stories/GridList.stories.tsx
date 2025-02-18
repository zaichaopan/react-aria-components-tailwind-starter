import { GridList, GridListItem } from '../src/grid-list';
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
    <GridList aria-label="Ice cream flavors" selectionMode="multiple">
      <GridListItem id="chocolate">Chocolate</GridListItem>
      <GridListItem id="mint">Mint</GridListItem>
      <GridListItem id="strawberry">Strawberry</GridListItem>
      <GridListItem id="vanilla">Vanilla</GridListItem>
    </GridList>
  );
};

export const DisabledItems = () => {
  return (
    <GridList
      aria-label="Ice cream flavors"
      selectionMode="multiple"
      disabledKeys={['mint']}
    >
      <GridListItem id="chocolate">Chocolate</GridListItem>
      <GridListItem id="mint">Mint</GridListItem>
      <GridListItem id="strawberry">Strawberry</GridListItem>
      <GridListItem id="vanilla">Vanilla</GridListItem>
    </GridList>
  );
};
