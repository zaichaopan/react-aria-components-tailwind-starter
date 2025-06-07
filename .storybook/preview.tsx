import '../src/styles/index.css';
import './preview.css';
import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  globalTypes: {
    mode: {
      description: 'Light/dak mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Mode',
        dynamicTitle: true,
        items: [
          {
            icon: 'sun',
            value: 'light',
            title: 'Light Mode',
          },
          {
            icon: 'moon',
            value: 'dark',
            title: 'Dark Mode',
          },
        ],
      },
    },
    theme: {
      description: 'Accent Color',
      defaultValue: 'theme-zinc',
      toolbar: {
        title: 'Accent Color',
        dynamicTitle: true,
        items: [
          {
            value: 'theme-zinc',
            title: 'Zinc',
          },
          {
            value: 'theme-blue',
            title: 'Blue',
          },
          {
            value: 'theme-indigo',
            title: 'Indigo',
          },
          {
            value: 'theme-violet',
            title: 'Violet',
          },
          {
            value: 'theme-purple',
            title: 'Purple',
          },
        ],
      },
    },
    textDirection: {
      description: 'Text Direction',
      defaultValue: 'ltr',
      toolbar: {
        dynamicTitle: true,
        items: [
          {
            value: 'ltr',
            title: 'LTR',
          },
          {
            value: 'rtl',
            title: 'RTL',
          },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      // change theme
      [
        `${context.globals.theme}`,
        ...(document
          .querySelector('html')
          ?.className.split(' ')
          .filter((name) => name.includes('theme-')) ?? []),
      ].forEach((name) => {
        if (name === '') {
          name = 'theme-zinc';
        }

        document.querySelector('html')?.classList.toggle(name);
      });

      // change mode
      document
        .querySelectorAll('.docs-story')
        ?.forEach((item) => item.classList.add('bg-background'));

      const htmlClass = document.querySelector('html')?.className ?? '';
      const mode = context.globals.mode;

      if (mode === 'light') {
        if (!htmlClass.includes('light')) {
          document.querySelector('html')?.classList.remove('dark');
          document.querySelector('html')?.classList.toggle('light');
        }
      } else if (mode === 'dark') {
        if (!htmlClass.includes('dark')) {
          document.querySelector('html')?.classList.remove('light');
          document.querySelector('html')?.classList.toggle('dark');
        }
      }

      const html = document.querySelector('html');

      if (html) {
        html.dir = context.globals.textDirection;
      }

      return <Story />;
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    grids: { disabled: true },
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {},
    },
    options: {
      storySort: {
        order: ['Avatar', '*'],
      },
    },
  },
};

export default preview;
