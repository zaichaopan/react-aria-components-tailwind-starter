import { docs } from '../.storybook/docs';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '../src/pagination';

const meta = {
  parameters: {
    layout: 'centered',
    docs
  },
};

export default meta;

export const BasicExample = () => {
  return (
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
  );
};
