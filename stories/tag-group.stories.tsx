import { Tag, TagGroup, TagList } from '../src/tag-group';
import { Label } from '../src/field';
import { docs } from '../.storybook/docs';

const meta = {
  component: TagGroup,
  title: 'Tag group',
  parameters: {
    layout: 'centered',
    docs: {
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = (args: any) => {
  return (
    <TagGroup {...args} selectionMode="none">
      <Label>Ice cream flavor</Label>
      <TagList>
        <Tag isDisabled id="chocolate">
          Chocolate
        </Tag>
        <Tag id="mint">Mint</Tag>
        <Tag id="strawberry">Strawberry</Tag>
        <Tag id="vanilla">Vanilla</Tag>
      </TagList>
    </TagGroup>
  );
};

export const SingleSelection = (args: any) => {
  return (
    <TagGroup
      {...args}
      defaultSelectedKeys={['chocolate']}
      selectionMode="single"
    >
      <Label>Ice cream flavor</Label>
      <TagList>
        <Tag id="chocolate">Chocolate</Tag>
        <Tag id="mint">Mint</Tag>
        <Tag id="strawberry">Strawberry</Tag>
        <Tag id="vanilla">Vanilla</Tag>
      </TagList>
    </TagGroup>
  );
};

export const MultiSelection = (args: any) => {
  return (
    <TagGroup
      {...args}
      defaultSelectedKeys={['chocolate', 'mint']}
      selectionMode="multi"
    >
      <Label>Ice cream flavor</Label>
      <TagList>
        <Tag id="chocolate">Chocolate</Tag>
        <Tag id="mint">Mint</Tag>
        <Tag id="strawberry">Strawberry</Tag>
        <Tag id="vanilla">Vanilla</Tag>
      </TagList>
    </TagGroup>
  );
};

export const Removable = (args: any) => {
  return (
    <TagGroup
      {...args}
      defaultSelectedKeys={['Chocolate']}
      selectionMode="multi"
      onRemove={() => {
        //
      }}
    >
      <Label>Ice cream flavor</Label>
      <TagList>
        <Tag id="chocolate">Chocolate</Tag>
        <Tag id="mint">Mint</Tag>
        <Tag id="strawberry">Strawberry</Tag>
        <Tag id="vanilla">Vanilla</Tag>
      </TagList>
    </TagGroup>
  );
};

export const Colors = (args: any) => {
  return (
    <TagGroup
      {...args}
      defaultSelectedKeys={['in-review']}
      selectionMode="single"
    >
      <Label>Status</Label>
      <TagList>
        <Tag id="in-review" color="default">
          In Review
        </Tag>
        <Tag id="ready-to-merge" color="success">
          Ready to merge
        </Tag>
        <Tag id="experimental" color="warning">
          Experimental
        </Tag>
        <Tag id="breaking-changes" color="destructive">
          Breaking changes
        </Tag>
      </TagList>
    </TagGroup>
  );
};
