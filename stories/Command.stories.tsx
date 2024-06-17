import type { Meta } from '@storybook/react';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
} from '../src/Command';
import { Text } from '../src/Text';
import { useAsyncList } from 'react-stately';

const meta: Meta = {
  title: 'CMD+K',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Item = { name: string; url: string; id: string };

export const Example = () => {
  const list = useAsyncList<Item>({
    async load({ signal, filterText }) {
      if (filterText === '' || !filterText) {
        list.removeSelectedItems();
        return { items: [] };
      }
      const res = await fetch('https://pokeapi.co/api/v2/pokemon', { signal });

      const json = (await res.json()) as {
        results: Array<{ name: string; url: string }>;
      };

      const items = json.results
        .filter((item) => {
          return item.name
            .toLocaleLowerCase()
            .includes(filterText?.toLocaleLowerCase());
        })
        .map((item) => {
          return {
            ...item,
            id: item.name,
          };
        });

      list.setSelectedKeys(new Set([items[0]?.id]));

      return {
        items,
      };
    },
  });

  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-center">
        <div className="flex w-full p-1 sm:w-1/3">
          <Command list={list}>
            <CommandInput></CommandInput>
            <CommandList>
              <CommandGroup<Item>>
                {(item) => {
                  return item.name;
                }}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
      <div className="flex-1 text-center">
        <Text>Coming soon...</Text>
      </div>
    </div>
  );
};
