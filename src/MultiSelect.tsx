import React, { useState } from 'react';
import {
  TagGroup,
  Tag,
  TagList,
  TagProps,
  ComboBox,
  ComboBoxProps as RACComboBoxProps,
  Key,
  ListBoxItemProps,
  composeRenderProps,
} from 'react-aria-components';
import { useListData, ListData } from 'react-stately';
import { useFilter } from 'react-aria';
import {
  DescriptionProvider,
  Group,
  Input,
  InputFieldGroup,
  WithDescriptionContext,
  WithLabelContext,
} from './Field';
import { Popover } from './Popover';
import { ListBox, ListBoxItem } from './ListBox';
import { Button, IconButton } from './Button';
import { twMerge } from 'tailwind-merge';
import { X } from 'lucide-react';

export interface ComboBoxFiledProps<T extends object>
  extends Omit<
    RACComboBoxProps<T>,
    | 'children'
    | 'validate'
    | 'allowsEmptyCollection'
    | 'inputValue'
    | 'selectedKey'
    | 'inputValue'
    | 'className'
    | 'value'
  > {
  children: React.ReactNode;
  items: Array<T>;
  selectedList: ListData<T>;
  validate?: (key: Array<Key>) => string | string[] | true | null | undefined;
  className?: string;
  onItemAdd?: (key: Key) => void;
  onItemRemove?: (key: Key) => void;
}

export interface ComboBoxProps<T extends object> {
  className?: string;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  tag: (item: T) => React.ReactNode;
  renderEmptyState: (inputValue: string) => React.ReactNode;
}

type ContextType<T> = {
  deleteLast: () => void;
  onRemove: (keys: Set<Key>) => void;
  setFieldState: React.Dispatch<
    React.SetStateAction<{ selectedKey: Key | null; inputValue: string }>
  >;
  setFilterText: (text: string) => void;
  onKeyDownCapture: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputValue: string;
  items: Array<T>;
};

const MultiSelectContext = React.createContext<ContextType<unknown> | null>(
  null,
);

function useMultiSelectContext<T>() {
  const context = React.useContext(MultiSelectContext);

  if (!context) {
    throw Error;
  }

  return context as ContextType<T>;
}

export function MultiSelectField<
  T extends {
    id: Key;
    textValue: string;
  },
>({
  children,
  items,
  selectedList,
  isRequired,
  validate,
  onItemRemove,
  onItemAdd,
  className,
  name,
  ...props
}: ComboBoxFiledProps<T>) {
  const { contains } = useFilter({ sensitivity: 'base' });
  const list = selectedList;
  const listKeys = list.items.map((i) => i.id);
  const filter = React.useCallback(
    (item: T, filterText: string) => {
      return (
        !listKeys.includes(item.id) && contains(item.textValue, filterText)
      );
    },
    [contains, listKeys],
  );

  const availableList = useListData({
    initialItems: items,
    filter,
  });

  const [fieldState, setFieldState] = useState<{
    selectedKey: Key | null;
    inputValue: string;
  }>({
    selectedKey: null,
    inputValue: '',
  });

  const onRemove = React.useCallback(
    (keys: Set<Key>) => {
      const key = keys.values().next().value;
      list.remove(key);
      setFieldState({
        inputValue: '',
        selectedKey: null,
      });
      onItemRemove?.(key);
    },
    [list, onItemRemove],
  );

  const onSelectionChange = (id: Key | null) => {
    if (!id) {
      return;
    }

    const item = availableList.getItem(id);

    if (!item) {
      return;
    }

    if (!listKeys.includes(id)) {
      list.append(item);
      setFieldState({
        inputValue: '',
        selectedKey: id,
      });
      onItemAdd?.(id);
    }

    availableList.setFilterText('');
  };

  const onInputChange = (value: string) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === '' ? null : prevState.selectedKey,
    }));

    availableList.setFilterText(value);
  };

  const deleteLast = React.useCallback(() => {
    if (list.items.length == 0) {
      return;
    }

    const lastKey = list.items[list.items.length - 1];

    if (lastKey !== null) {
      list.remove(lastKey.id);
      onItemRemove?.(lastKey.id);
    }

    setFieldState({
      inputValue: '',
      selectedKey: null,
    });
  }, [list, onItemRemove]);

  const onKeyDownCapture = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && fieldState.inputValue === '') {
        deleteLast();
      }
    },
    [deleteLast, fieldState.inputValue],
  );

  return (
    <>
      <Group>
        <MultiSelectContext.Provider
          value={{
            deleteLast,
            onRemove,
            setFieldState,
            setFilterText: availableList.setFilterText,
            onKeyDownCapture,
            items: list.items,
            inputValue: fieldState.inputValue,
          }}
        >
          <DescriptionProvider>
            <ComboBox
              className={twMerge('group flex min-w-[150px] flex-col gap-1', className)}
              items={availableList.items}
              selectedKey={fieldState.selectedKey}
              inputValue={fieldState.inputValue}
              onSelectionChange={onSelectionChange}
              onInputChange={onInputChange}
              allowsEmptyCollection
              validate={() => {
                if (isRequired) {
                  if (validate) {
                    return validate(listKeys);
                  }

                  return listKeys.length == 0
                    ? 'Please select an item in the list.'
                    : null;
                }

                validate?.(listKeys);
              }}
              {...props}
            >
              {children}
            </ComboBox>
          </DescriptionProvider>
        </MultiSelectContext.Provider>
      </Group>
      {name && <input hidden name={name} value={listKeys.join(',')} readOnly />}
    </>
  );
}

export function MultiSelect<
  T extends {
    id: Key;
    textValue: string;
  },
>({ className, renderEmptyState, ...props }: ComboBoxProps<T>) {
  const {
    items,
    setFieldState,
    setFilterText,
    onRemove,
    onKeyDownCapture,
    inputValue,
  } = useMultiSelectContext<T>();

  const triggerRef = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState(0);

  const tagGroupId = React.useId();

  React.useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.target.clientWidth);
      }
    });

    observer.observe(trigger);
    return () => {
      observer.unobserve(trigger);
    };
  }, []);

  return (
    <WithLabelContext>
      {(labelContext) => {
        return (
          <WithDescriptionContext>
            {(descriptionContext) => {
              return (
                <>
                  <InputFieldGroup
                    defaultValue={inputValue}
                    className={twMerge('h-fit w-[350px]', className)}
                    ref={triggerRef}
                    onBlur={() => {
                      setFieldState({
                        inputValue: '',
                        selectedKey: null,
                      });
                      setFilterText('');
                    }}
                  >
                    <div className="inline-flex flex-1 flex-wrap gap-x-0.5 px-1 py-0.5">
                      <TagGroup
                        onRemove={onRemove}
                        aria-labelledby={labelContext?.['aria-labelledBy']}
                        className="contents"
                        id={tagGroupId}
                      >
                        <TagList items={items} className="contents">
                          {props.tag}
                        </TagList>
                      </TagGroup>

                      <div className="flex flex-1">
                        <Input
                          aria-describedby={[
                            tagGroupId,
                            descriptionContext?.['aria-describedby'] ?? '',
                          ].join(' ')}
                          onKeyDownCapture={onKeyDownCapture}
                        />
                      </div>
                    </div>

                    <Button text className="p-1.5"></Button>
                  </InputFieldGroup>

                  <Popover
                    style={{ width: `${width}px` }}
                    triggerRef={triggerRef}
                    className="max-w-none duration-0"
                  >
                    <ListBox<T>
                      renderEmptyState={() => renderEmptyState(inputValue)}
                      selectionMode="multiple"
                      className="flex max-h-[inherit] flex-col gap-1.5 overflow-auto p-1.5 outline-none has-[header]:pt-0 sm:gap-0"
                    >
                      {props.children}
                    </ListBox>
                  </Popover>
                </>
              );
            }}
          </WithDescriptionContext>
        );
      }}
    </WithLabelContext>
  );
}

export function SelectionTag({ children, ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  return (
    <Tag
      textValue={textValue}
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge(
          'my-auto flex h-fit items-center gap-1 rounded border p-0.5 text-xs',
          className,
        );
      })}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <IconButton
              slot="remove"
              className="m-auto size-5 h-fit rounded p-0 px-0.5"
              text
              aria-label="Remove"
              icon={<X strokeWidth={1.5} />}
            ></IconButton>
          )}
        </>
      )}
    </Tag>
  );
}

export function MultiSelectItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);

  return (
    <ListBoxItem
      {...props}
      textValue={textValue}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled, isFocused }) => {
          return twMerge([
            'group flex flex-1 cursor-default select-none items-center gap-1 text-nowrap rounded p-1.5 text-base/6 outline-0 sm:text-sm/6',
            isDisabled && 'opacity-50',
            isFocused && 'bg-accent text-white',
            className,
          ]);
        },
      )}
    >
      {props.children}
    </ListBoxItem>
  );
}
