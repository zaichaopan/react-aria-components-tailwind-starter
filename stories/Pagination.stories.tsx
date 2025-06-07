import { docs } from '../.storybook/docs';
import { ChevronLeftIcon } from '../src/icons/outline/chevron-left';
import { ChevronRightIcon } from '../src/icons/outline/chevron-right';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '../src/pagination';
import { Strong, Text } from '../src/text';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="mx-auto flex flex-col items-center space-y-12 py-6">
      <Pagination>
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />

          <PaginationPage href="?page=65">65</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>

      <Pagination>
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current variant="plain">
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />

          <PaginationPage href="?page=65">65</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>

      <Pagination>
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current variant="solid">
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />

          <PaginationPage href="?page=65">65</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>

      <Pagination>
        <PaginationPrevious
          href="?page=2"
          isIconOnly
          aria-label="Previous page"
        >
          <ChevronLeftIcon />
        </PaginationPrevious>
        3 of 10
        <PaginationNext href="?page=3" isIconOnly aria-label="Next page">
          <ChevronRightIcon />
        </PaginationNext>
      </Pagination>

      <div className="flex w-full items-center justify-around">
        <Text>
          Showing <Strong>1</Strong> to <Strong>10</Strong> of{' '}
          <Strong>20</Strong> results
        </Text>
        <Pagination>
          <PaginationPrevious href="?page=2" variant="outline">
            Previous
          </PaginationPrevious>

          <PaginationNext href="?page=3" variant="outline">
            Next
          </PaginationNext>
        </Pagination>
      </div>
    </div>
  );
};
