import { docs } from '../.storybook/docs';

const meta = {
  parameters: {
    layout: 'centered',
    docs}
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center p-8">
      {Array.from(Array(4)).map((_, index) => {
        return (
          <div key={index} className="flex gap-x-2 items-center space-x-2">
            <div className="h-12 w-12 rounded-full skeleton" />
            <div className="flex flex-col gap-y-2">
              <div className="h-2 w-[100px] skeleton" />
              <div className="h-2 w-[250px] skeleton" />
              <div className="h-2 w-[220px] skeleton" />
              <div className="h-2 w-[180px] skeleton" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

