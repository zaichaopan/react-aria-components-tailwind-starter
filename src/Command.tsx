import React from 'react';
import { SearchField, SearchInput } from './Field';
import { AsyncListData } from 'react-stately';
import { twMerge } from 'tailwind-merge';
import { SearchFieldProps } from 'react-aria-components';
import { Text } from './Text';
import { ScrollIntoView } from './ScrollIntoView';

const CommandContext = React.createContext<{
  list: AsyncListData<object & { id: string }>;
  listId: string;
  handleKeyDown: (e: React.KeyboardEvent) => void;
} | null>(null);

function useCommandContext() {
  const context = React.useContext(CommandContext);

  if (!context) {
    throw new Error('CommandContext is required');
  }
  return context;
}

export function Command({
  list,
  children,
  ...props
}: {
  children: React.ReactNode;
  list: AsyncListData<{ id: string }>;
} & JSX.IntrinsicElements['div']) {
  const listId = React.useId();
  const selectedKey = [...list.selectedKeys][0];
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      function shift(toward: 1 | -1) {
        if (!list.items || list.items.length === 0) {
          return;
        }

        const currentIndex = list.items.findIndex(
          (item) => item.id === selectedKey,
        );

        if (currentIndex === -1) {
          list.removeSelectedItems();
          return;
        }

        const newIndex =
          (currentIndex + toward + list.items.length) % list.items.length;

        list.setSelectedKeys(new Set([list.items[newIndex].id]));
      }

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
        if (selectedKey) {
          alert('selected: ' + [...list.selectedKeys][0]);
        }
      }
      return;
    },
    [list, selectedKey],
  );

  return (
    <CommandContext.Provider value={{ list, listId, handleKeyDown }}>
      <div className="flex flex-col" {...props}>
        {children}
      </div>
    </CommandContext.Provider>
  );
}

export function CommandInput({
  onClear,
  onChange,
  ...props
}: SearchFieldProps) {
  const { list, listId, handleKeyDown } = useCommandContext();
  const selectedKey = [...list.selectedKeys][0];

  return (
    <SearchField
      value={list.filterText}
      onChange={(value) => {
        list.setFilterText(value);
        onChange?.(value);
      }}
      onClear={() => {
        list.setFilterText('');
        onClear?.();
      }}
      onKeyDown={handleKeyDown}
      aria-label="Search"
      {...props}
    >
      <SearchInput
        className="rounded-b-none border-b-0 border-border ring-0"
        placeholder="Search"
        aria-haspopup="listbox"
        role="combobox"
        aria-expanded
        aria-autocomplete="list"
        {...(selectedKey && {
          ['aria-activedescendant']: `${selectedKey}`,
        })}
        aria-controls={listId}
        autoComplete="off"
        autoFocus
      />
    </SearchField>
  );
}

export function CommandList({ children }: { children: React.ReactNode }) {
  const { listId } = useCommandContext();
  return (
    <div role="presentation" className="w-full bg-background">
      <div
        id={listId}
        role="listbox"
        tabIndex={-1}
        className="max-h-[50vh] overflow-y-auto rounded-b-md border p-1 shadow "
        aria-label="Suggestions"
      >
        {children}
      </div>
    </div>
  );
}

export function CommandGroup<T>({
  children,
}: {
  children: (item: T) => React.ReactNode;
}) {
  const { list } = useCommandContext();
  const selectedKey = [...list.selectedKeys][0];

  return (
    <QueryResult
      list={list}
      Uninitialized={
        <div className="px-3 text-center">
          <Text>Type something</Text>
        </div>
      }
      Loading={<div className="flex justify-center py-4">Loading...</div>}
      Failure={
        <div className="flex justify-center py-4">Something went gong</div>
      }
      Success={(items) => {
        return items.map((item) => {
          const isSelected = selectedKey === item.id;
          return (
            <ScrollIntoView<HTMLDivElement> active={isSelected}>
              {(ref) => {
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => {
                      list.setSelectedKeys(new Set([item.id]));
                    }}
                    id={`${item.id}`}
                    role="option"
                    ref={ref}
                    tabIndex={-1}
                    aria-selected={isSelected}
                    className={twMerge(
                      'rounded p-2 text-sm',
                      isSelected && 'bg-accent text-white',
                    )}
                  >
                    {children(item as T)}
                  </div>
                );
              }}
            </ScrollIntoView>
          );
        });
      }}
      Empty={(filterText) => {
        return <div className="px-3">Not result for {filterText}</div>;
      }}
    ></QueryResult>
  );
}

function QueryResult<T extends object & { id: string }>({
  Uninitialized,
  Empty,
  Loading,
  Failure,
  Success,
  list,
}: {
  Uninitialized: React.ReactNode;
  Empty: (filterText: string) => React.ReactNode;
  Loading: React.ReactNode;
  Failure: React.ReactNode;
  Success: (item: Array<T>) => React.ReactNode;
  list: AsyncListData<T>;
}) {
  if (list.filterText === '' && list.loadingState === 'idle') {
    return Uninitialized;
  }

  if (list.loadingState === 'loading') {
    return Loading;
  }

  if (list.loadingState === 'error') {
    return Failure;
  }

  if (list.loadingState === 'idle' && list.items.length === 0) {
    return Empty(list.filterText);
  }

  return Success(list.items);
}
