import React from 'react';
import { SearchField, SearchInput } from './Field';
import { useAsyncList } from 'react-stately';
import { twMerge } from 'tailwind-merge';
import { DialogTrigger } from 'react-aria-components';
import { Button } from './Button';
import { CommandModal } from './Modal';
import { Dialog, DialogBody } from './Dialog';
import { Icon } from './Icon';
import { Search } from 'lucide-react';
import { Text } from './Text';
import { ScrollIntoView } from './ScrollIntoView';

export function Command() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener('keydown', down);

    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <DialogTrigger>
      <div className="flex w-full p-1 sm:w-1/3">
        <Button
          className="flex-1 justify-start"
          outline
          onPress={() => setIsModalOpen(true)}
        >
          <Icon
            icon={<Search />}
            aria-label="Search"
            className="self-start"
          ></Icon>
          <span className="flex-1">⌘ +K</span>
        </Button>
      </div>

      <CommandModal
        className="w-full p-1 sm:w-1/3"
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      >
        <Dialog>
          <DialogBody className="gap-0 px-0">
            <CommandField close={() => setIsModalOpen(false)} />
          </DialogBody>
        </Dialog>
      </CommandModal>
    </DialogTrigger>
  );
}

export function CommandField({ close }: { close: () => void }) {
  const [searchText, setSearchText] = React.useState('');
  const [selectedKey, setSelectedKey] = React.useState<string | null>(null);
  const listId = React.useId();

  const list = useAsyncList<{
    name: string;
    url: string;
    id: string;
  }>({
    async load({ signal, filterText }) {
      if (filterText === '' || !filterText) {
        setSelectedKey(null);
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

      setSelectedKey(items[0]?.id);

      return {
        items,
      };
    },
  });

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.code === 'ArrowDown') {
      shift(1);
      return;
    }

    if (e.code === 'ArrowUp') {
      e.preventDefault();
      shift(-1);
      return;
    }

    if (e.code === 'Enter') {
      alert('selected: ' + selectedKey);
    }
    return;
  }

  function shift(toward: 1 | -1) {
    if (!list.items) {
      return;
    }

    setSelectedKey((currentSelected) => {
      const currentIndex = list.items.findIndex(
        (item) => item.id === currentSelected,
      );

      if (currentIndex === -1) {
        return list.items[0].id;
      }

      const newIndex =
        (currentIndex + toward + list.items.length) % list.items.length;

      return list.items[newIndex].id;
    });
  }

  return (
    <div className="flex w-full flex-col bg-background p-1">
      <SearchField
        value={searchText}
        onChange={(value) => {
          setSearchText(value);
          list.setFilterText(value);
        }}
        onClear={() => {
          setSearchText('');
          list.setFilterText('');
          close();
        }}
        onKeyDown={handleKeyDown}
        aria-label="Search"
      >
        <SearchInput
          className="rounded-b-none border-b-0 border-border ring-0"
          placeholder="Search"
          aria-haspopup="listbox"
          role="combobox"
          aria-expanded
          aria-autocomplete="list"
          {...(selectedKey && {
            ['aria-activedescendant']: `${listId}-${selectedKey}`,
          })}
          aria-controls={listId}
          autoComplete="off"
          autoFocus
        />
      </SearchField>

      <div role="presentation" className="w-full">
        <div
          id={listId}
          role="listbox"
          tabIndex={-1}
          className="max-h-[50vh] overflow-y-auto rounded-b-md border p-1 shadow "
          aria-label="Suggestions"
        >
          {list.filterText === '' ? (
            <div className="px-3 text-center">
              <Text>Type something</Text>
            </div>
          ) : list.isLoading ? (
            <div className="flex justify-center py-4">Loading...</div>
          ) : list.items.length > 0 ? (
            list.items.map((item) => {
              const isSelected = selectedKey === item.id;
              return (
                <CommandItem
                  key={item.id}
                  onMouseEnter={() => setSelectedKey(item.id)}
                  isSelected={isSelected}
                  id={`${listId}-${item.id}`}
                >
                  {item.name}
                </CommandItem>
              );
            })
          ) : (
            <div className="px-3">Not result</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CommandItem({
  isSelected,
  id,
  children,
  onMouseEnter,
}: {
  isSelected: boolean;
  id: string;
  children: React.ReactNode;
  onMouseEnter: () => void;
}) {
  return (
    <ScrollIntoView<HTMLDivElement> active={isSelected}>
      {(ref) => {
        return (
          <div
            onMouseEnter={onMouseEnter}
            id={id}
            role="option"
            ref={ref}
            tabIndex={-1}
            aria-selected={isSelected}
            className={twMerge(
              'rounded p-2 text-sm',
              isSelected && 'bg-accent text-white',
            )}
          >
            {children}
          </div>
        );
      }}
    </ScrollIntoView>
  );
}
