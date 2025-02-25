import type { Meta } from '@storybook/react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../src/hover-card';
import { docs } from '../.storybook/docs';
import { Link } from '../src/link';
import { Small,Text } from '../src/text';

const meta: Meta = {
  title: 'Hover card',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://developer.microsoft.com/en-us/fluentui#/controls/web/hovercard" target="_blank">**Hover cards**</a> show commands and information, such as metadata and activity, when someone hovers over an item.\n\n>**Hover cards are not accessible to anyone not using a mouse with hover capability**. It is strongly suggested that any information or functionality available in the hover card is also easily accessible through another means.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6 h-72 w-72">
      <HoverCard placement="top">
        <HoverCardTrigger>
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            className="relative"
          >
            Hover Me
          </Link>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-4 p-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  className="font-medium sm:leading-5"
                >
                  Tailwind CSS
                </Link>
                <Small className="text-muted">@tailwindCSS</Small>
              </div>

              <Text>
                Rapidly build modern websites without ever leaving your HTML{' '}
              </Text>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
