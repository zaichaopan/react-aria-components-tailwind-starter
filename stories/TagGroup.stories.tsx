import { Tag, TagGroup, TagList } from '../src/tag-group';
import { Label } from '../src/field';
import { docs } from '../.storybook/docs';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <TagGroup selectionMode="none">
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

export const SingleSelection = () => {
  return (
    <TagGroup defaultSelectedKeys={['chocolate']} selectionMode="single">
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

export const MultipleSelections = () => {
  return (
    <TagGroup
      defaultSelectedKeys={['chocolate', 'mint']}
      selectionMode="multiple"
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

export const Removable = () => {
  return (
    <TagGroup
      defaultSelectedKeys={['Chocolate']}
      selectionMode="multiple"
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

export const Colors = () => {
  return (
    <TagGroup defaultSelectedKeys={['in-review']} selectionMode="single">
      <Label>Status</Label>
      <TagList>
        <Tag id="in-review">In Review</Tag>
        <Tag id="ready-to-merge">Ready to merge</Tag>
        <Tag id="experimental">Experimental</Tag>
        <Tag id="breaking-changes">Breaking changes</Tag>
      </TagList>
    </TagGroup>
  );
};

export const CustomColors = () => {
  return (
    <TagGroup selectionMode="single">
      <Label>Status</Label>
      <TagList>
        <Tag id="labe0" color="red">
          label
        </Tag>
        <Tag id="labe1" color="yellow">
          label
        </Tag>
        <Tag id="labe2" color="lime">
          label
        </Tag>
        <Tag id="labe3" color="green">
          label
        </Tag>
        <Tag id="labe4" color="emerald">
          Rejected
        </Tag>
        <Tag id="labe5" color="teal">
          label
        </Tag>
        <Tag id="labe6" color="cyan">
          label
        </Tag>
        <Tag id="labe7" color="sky">
          label
        </Tag>
        <Tag id="labe8" color="blue">
          label
        </Tag>
        <Tag id="labe9" color="indigo">
          label
        </Tag>
        <Tag id="labe10" color="violet">
          label
        </Tag>
        <Tag id="labe11" color="purple">
          label
        </Tag>
        <Tag id="labe12" color="fuchsia">
          label
        </Tag>
        <Tag id="labe13" color="pink">
          label
        </Tag>
        <Tag id="labe14" color="rose">
          label
        </Tag>
      </TagList>
    </TagGroup>
  );
};
