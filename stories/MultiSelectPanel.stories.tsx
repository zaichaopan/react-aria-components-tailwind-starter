import React from 'react';
import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { Dialog, DialogTrigger } from '../src/Dialog';
import { Button } from '../src/Button';
import { Popover } from '../src/Popover';
import { GridList, GridListItem } from '../src/GridList';
import { Text } from '../src/Text';
import { Heading } from '../src/Heading';
import { Icon } from '../src/Icon';
import { ChevronDown } from 'lucide-react';
import { Selection } from 'react-aria-components';
import { Separator } from '../src/Separator';
import { SearchField, SearchInput } from '../src/Field';
import { useFilter } from 'react-aria';

const meta: Meta = {
  title: 'MultiSelectPanel',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://primer.style/components/selectpanel/react/alpha" target="_blank">Select panel</a> is a semantic dialog that allows for complex selection options within an overlay.',
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = () => {
  const options = [
    { id: 'enhancement', name: 'Enhancement' },
    { id: 'bug', name: 'Bug' },
    { id: 'good_fist_issue', name: 'Good first issue' },
    { id: 'design', name: 'Design' },
    { id: 'blocker', name: 'Blocker' },
    { id: 'backend', name: 'Backend' },
    { id: 'front_end', name: 'Front end' },
  ];

  const [searchText, SetSearchText] = React.useState('');

  const { contains } = useFilter({
    sensitivity: 'base',
  });

  const matchedOptions = options.filter((option) => {
    return contains(option.name, searchText);
  });

  const [selectedKeys, setSelectedKeys] = React.useState<Selection | undefined>(
    undefined,
  );

  const selectedLabels = options.filter((option) => {
    return [...(selectedKeys ?? [])].includes(option.id);
  });

  const displayLabels =
    selectedLabels.length >= 3
      ? `${selectedLabels.length} labels selected`
      : selectedLabels.length >= 1
        ? selectedLabels.map((item) => item.name).join(', ')
        : ' Select labels';

  return (
    <DialogTrigger>
      <Button outline>
        {displayLabels}
        <Icon>
          <ChevronDown />
        </Icon>
      </Button>
      <Popover className=" max-w-[auto]">
        <Dialog className="flex flex-col p-2">
          <div className="flex flex-col gap-1 px-3 pb-2">
            <Heading level={2} displayLevel={4}>
              Select labels
            </Heading>
            <Text>Use labels to organize issues and pull requests</Text>
            <SearchField
              aria-label="Filter labels"
              autoFocus
              value={searchText}
              onChange={(value) => {
                SetSearchText(value);
              }}
            >
              <SearchInput placeholder="Filter labels" />
            </SearchField>
          </div>
          <Separator />
          <GridList
            aria-label="Select labels"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            items={new Set(matchedOptions)}
            selectionMode="multiple"
            className="border-0"
          >
            {(item) => {
              return <GridListItem id={item.id}>{item.name}</GridListItem>;
            }}
          </GridList>
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
};
