import { Heading, SubHeading } from '../src/heading';
import { docs } from '../.storybook/docs';

const meta = {
  title: 'Heading',
  parameters: {
    layout: 'centered',
    docs
    },
  };


export default meta;

export const BasicExample = () => {
  return (
    <div className="space-y-4">
      <Heading>H1: The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={2}>
        H2: The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={3}>
        H3: The quick brown fox jumps over the lazy dog
      </Heading>
      <SubHeading>
        Sub heading: The quick brown fox jumps over the lazy dog
      </SubHeading>
    </div>
  );
};

export const RenderAsDiv = () => {
  return (
    <div className="space-y-4">
      <Heading>Display level 1</Heading>
      <Heading elementType="div" displayLevel={2}>
        Display level 2
      </Heading>
      <Heading elementType="div" displayLevel={3}>
        Display level 3
      </Heading>
    </div>
  );
};

// export const AutoFocusHeading = () => {
//   return (
//     <div className="max-w-md space-y-2">
//       <Heading autoFocus>Auto focus heading</Heading>
//     </div>
//   );
// };


