import type { Meta } from '@storybook/react';
import { Skeleton } from '../src/skeleton';
import { docs } from '../.storybook/docs';

const meta: Meta = {
  title: 'Skeleton',
  parameters: {
    layout: 'centered',
    docs: {
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col space-y-8">
      {Array.from(Array(4)).map((_, index) => {
        return (
          <div key={index} className="flex items-center space-x-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-2 w-[100px]" />
              <Skeleton className="h-2 w-[250px]" />
              <Skeleton className="h-2 w-[220px]" />
              <Skeleton className="h-2 w-[180px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

