import {
  InputProps,
  Group,
  SearchField as RACSearchField,
  SearchFieldProps as RACSearchFieldProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, inputField } from './utils';
import { Button } from './button';
import { Input } from './field';
import { SearchIcon, SpinnerIcon, XIcon } from './icons';

export interface SearchFieldProps extends RACSearchFieldProps {}

export function SearchField(props: SearchFieldProps) {
  return (
    <RACSearchField
      {...props}
      className={composeTailwindRenderProps(props.className, inputField)}
    ></RACSearchField>
  );
}

export function SearchInput({
  isPending,
  ...props
}: InputProps & { isPending?: boolean }) {
  return (
    <Group
      data-ui="control"
      className={[
        'isolate',
        'grid',
        'grid-cols-[calc(theme(size.5)+20px)_1fr_calc(theme(size.5)+20px)]',
        'sm:grid-cols-[calc(theme(size.4)+20px)_1fr_calc(theme(size.4)+20px)]',
      ].join(' ')}
    >
      {isPending ? (
        <SpinnerIcon className="z-10 col-start-1 row-start-1 size-5 place-self-center text-muted sm:size-4" />
      ) : (
        <SearchIcon className="z-10 col-start-1 row-start-1 size-5 place-self-center text-muted sm:size-4" />
      )}

      <Input
        {...props}
        className={composeTailwindRenderProps(props.className, [
          '[&::-webkit-search-cancel-button]:hidden',
          'col-span-full row-start-1 pe-10 ps-10 sm:pe-9 sm:ps-8',
        ])}
      />
      <Button
        isIconOnly
        variant="plain"
        size="sm"
        className="-col-end-1 row-start-1 place-self-center group-data-empty:invisible"
      >
        <XIcon aria-label="Clear" />
      </Button>
    </Group>
  );
}
