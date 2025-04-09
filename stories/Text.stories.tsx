import { Text, Strong, TextLink } from '../src/text';
import { docs } from '../.storybook/docs';

const meta = {
  parameters: {
    layout: 'centered',
    docs
    },
  };

export default meta;

export const BasicExample = () => {
  return (
    <Text>
      <Strong>React Aria </Strong> is a library of unstyled React components and
      hooks that helps you build{' '}
      <Strong>accessible, high quality UI components</Strong> for your
      application or design system. It provides components for common UI
      patterns, with{' '}
      <TextLink href="https://react-spectrum.adobe.com/react-aria/accessibility.html">
        accessibility
      </TextLink>
      ,{' '}
      <TextLink href="https://react-spectrum.adobe.com/react-aria/internationalization.html">
        internationalization
      </TextLink>
      ,{' '}
      <TextLink href="https://react-spectrum.adobe.com/react-aria/interactions.html">
        interactions
      </TextLink>
      , and behavior built in, allowing you to focus on your unique design and
    </Text>
  );
};

export const ElementTypes = () => {
  return (
    <Text elementType="div">
      <TextLink highlight>TailwindCSS</TextLink> is a utility-first CSS framework packed with
      classes like <Strong className="text-sky-500">flex</Strong>,{' '}
      <Strong className="text-sky-500">pt-4</Strong>,{' '}
      <Strong className="text-sky-500">text-center</Strong> and{' '}
      <Strong className="text-sky-500">rotate-90</Strong> that can be composed
      to build any design, directly in your markup.
    </Text>
  );
};
