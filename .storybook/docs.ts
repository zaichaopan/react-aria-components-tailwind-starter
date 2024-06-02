import { StoryContext } from '@storybook/react';

export const docs =  {
  source: {
    type: 'code',
    format: 'dedent',
    transform: (code: string, storyContext: StoryContext) => {
      code = code.replace(
        /\(args: any\) => {\n\s+return\s((.|\n)*);\n}$/,
        '$1',
      );
      code = code.replace(/\(\) => {\n\s+return\s((.|\n)*);\n}$/, '$1');

      // handle having function
      code = code.replace(
        /\(\) => {\n\s+const((.|\n)*);\n}$/,
        `function ${storyContext.name.replace(/\s/g, '')} {\n  const $1;\n}`,
      );

      code = code.replace(
        /\(args: any\) => {\n\s+const((.|\n)*);\n}$/,
        `function ${storyContext.name.replace(/\s/g, '')} {\n  const $1;\n}`,
      );

      

      // add new line between return
      code = code.replace(
        /(;\n\s+)(return\s<)/,
        `$1\n  $2`,
      );

      code = code.replace(/\(args: any\) => ((.|\n)*)$/, '$1');
      code = code.replace(/\s{\.\.\.args}\s/, ' ');
      code = code.replace(/\s{\.\.\.args}>/, '>');
      return code;
    },
  },
};
