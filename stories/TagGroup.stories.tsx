import React from 'react';
import { Tag, TagGroup, TagList } from '../src/tag-group';
import { Input, Label, LabeledGroup, TextField } from '../src/field';
import { docs } from '../.storybook/docs';
import { Group, Selection } from 'react-aria-components';

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
    <TagGroup selectionMode="single">
      <Label>Status</Label>
      <TagList>
        <Tag id="white" color="white">
          label
        </Tag>
        <Tag id="zinc" color="zinc">
          label
        </Tag>
        <Tag id="red" color="red">
          label
        </Tag>
        <Tag id="yellow" color="yellow">
          label
        </Tag>
        <Tag id="orange" color="orange">
          label
        </Tag>
        <Tag id="lime" color="lime">
          label
        </Tag>
        <Tag id="green" color="green">
          label
        </Tag>
        <Tag id="emerald" color="emerald">
          label
        </Tag>
        <Tag id="teal" color="teal">
          label
        </Tag>
        <Tag id="cyan" color="cyan">
          label
        </Tag>
        <Tag id="sky" color="sky">
          label
        </Tag>
        <Tag id="blue" color="blue">
          label
        </Tag>
        <Tag id="indigo" color="indigo">
          label
        </Tag>
        <Tag id="violet" color="violet">
          label
        </Tag>
        <Tag id="purple" color="purple">
          label
        </Tag>
        <Tag id="fuchsia" color="fuchsia">
          label
        </Tag>
        <Tag id="pink" color="pink">
          label
        </Tag>
        <Tag id="rose" color="rose">
          label
        </Tag>
      </TagList>
    </TagGroup>
  );
};

export function Solid() {
  return (
    <TagGroup>
      <Label>Status</Label>
      <TagList>
        <Tag id="zinc" color="zinc" variant="solid">
          label
        </Tag>
        <Tag id="red" color="red" variant="solid">
          label
        </Tag>
        <Tag id="yellow" color="yellow" variant="solid">
          label
        </Tag>
        <Tag id="orange" color="orange" variant="solid">
          label
        </Tag>
        <Tag id="lime" color="lime" variant="solid">
          label
        </Tag>
        <Tag id="green" color="green" variant="solid">
          label
        </Tag>
        <Tag id="emerald" color="emerald" variant="solid">
          label
        </Tag>
        <Tag id="teal" color="teal" variant="solid">
          label
        </Tag>
        <Tag id="cyan" color="cyan" variant="solid">
          label
        </Tag>
        <Tag id="sky" color="sky" variant="solid">
          label
        </Tag>
        <Tag id="blue" color="blue" variant="solid">
          label
        </Tag>
        <Tag id="indigo" color="indigo" variant="solid">
          label
        </Tag>
        <Tag id="violet" color="violet" variant="solid">
          label
        </Tag>
        <Tag id="purple" color="purple" variant="solid">
          label
        </Tag>
        <Tag id="fuchsia" color="fuchsia" variant="solid">
          label
        </Tag>
        <Tag id="pink" color="pink" variant="solid">
          label
        </Tag>
        <Tag id="rose" color="rose" variant="solid">
          label
        </Tag>
      </TagList>
    </TagGroup>
  );
}

export function TagInput() {
  const [skillIds, setSkillIds] = React.useState<Selection>(
    new Set(['javascript', 'react']),
  );
  const [inputValue, setInputValue] = React.useState('');

  function handleKeyDown(e: React.KeyboardEvent) {
    console.log(e.key);
    if (e.key === 'Enter' || e.key === ',' || e.key === ';') {
      e.preventDefault();
      addTag();
    }
  }

  function addTag() {
    const tagNames = inputValue.split(/[,;]/);

    tagNames.forEach((tagName) => {
      const formattedName = tagName
        .trim()
        .replace(/\s\s+/g, ' ')
        .replace(/\t|\\t|\r|\\r|\n|\\n/g, '');

      if (formattedName === '') {
        return;
      }

      const hasTagExists = Array.from(skillIds).find(
        (id) => id.toLocaleString() === formattedName.toLocaleString(),
      );

      if (!hasTagExists) {
        console.log('adding tag', formattedName, [
          ...Array.from(skillIds),
          formattedName,
        ]);
        return setSkillIds(new Set([...Array.from(skillIds), formattedName]));
      }
    });

    setInputValue('');
  }

  return (
    <LabeledGroup>
      <Label>Skills</Label>
      <Group className="w-full space-y-3 sm:w-80">
        <TextField
          aria-label="Skills"
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
          }}
          onKeyDown={handleKeyDown}
        >
          <Input />
        </TextField>

        {skillIds ? (
          <TagGroup
            aria-label="Selected skills"
            onRemove={(value) => {
              setSkillIds((prev) => {
                if (prev !== 'all') {
                  return new Set(
                    Array.from(prev).filter(
                      (id) => id !== value.values().next().value,
                    ),
                  );
                }
                return value;
              });
            }}
          >
            <TagList>
              {Array.from(skillIds).map((id) => {
                return (
                  <Tag key={id} id={id} color="white">
                    {id}
                  </Tag>
                );
              })}
            </TagList>
          </TagGroup>
        ) : null}
      </Group>
    </LabeledGroup>
  );
}
