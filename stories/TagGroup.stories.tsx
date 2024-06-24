import type { Meta } from '@storybook/react';
import { Tag, TagGroup, TagList } from '../src/TagGroup';

const meta: Meta<typeof Example> = {
  component: TagGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <TagGroup
    {...args}
    selectionMode="single"
    onRemove={() => {
      //
    }}
  >
    <TagList>
      <Tag isDisabled>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </TagList>
  </TagGroup>
);

Example.args = {
  label: 'Ice cream flavor',
  selectionMode: 'single',
};
