import { Tag, TagGroup, TagList } from '../src/tag-group';
import { Label } from '../src/field';
import { docs } from '../.storybook/docs';

const meta = {
  parameters: {
    layout: 'centered',
    docs}
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
    <TagGroup
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

export const WithCustomColors = () => {
  return (
    <TagGroup selectionMode="single">
      <Label>Status</Label>
      <TagList>
        <Tag id="labe1" className="[--tag:oklch(.532_.157_131.589)]">
          label
        </Tag>
        <Tag id="labe2" className="[--tag:oklch(.496_.265_301.924)]">
          label
        </Tag>
        <Tag id="labe3" className="[--tag:oklch(.518_.253_323.949)]">
          label
        </Tag>
        <Tag id="labe4" className="[--tag:oklch(.514_.222_16.935)]">
          label
        </Tag>
        <Tag id="labe5" className="[--tag:oklch(.553_.195_38.402)]">
          label
        </Tag>
      </TagList>
    </TagGroup>
  );
};
