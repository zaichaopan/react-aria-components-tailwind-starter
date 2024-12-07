import type { Meta } from '@storybook/react';
import { Heading, SubHeading } from '../src/heading';
import { docs } from '../.storybook/docs';

const meta: Meta = {
  title: 'Heading',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Heading** component renders semantic HTML headings (h1–h3). Use the **level** prop to set heading level. The default level is **1**. Use the **displayLevel** to render display style of another level.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
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

RenderAsDiv.parameters = {
  docs: {
    description: {
      story:
        'Use **elementType="div"**to render a div instead of HTML headings.',
    },
  },
};

export const AutoFocusHeading = () => {
  return (
    <div className="max-w-md space-y-2">
      <Heading autoFocus>Auto focus heading</Heading>
    </div>
  );
};

AutoFocusHeading.parameters = {
  docs: {
    description: {
      story:
        'Use **autoFocus** to focus the heading. \n\n>This is useful in SPA after navigation. A screen reader will then announce the new heading when it gets focus.',
    },
  },
};
