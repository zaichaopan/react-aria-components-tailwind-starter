import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../src/hover-card';
import { docs } from '../.storybook/docs';
import { Link } from '../src/link';
import { Small,Text } from '../src/text';

const meta = {
  title: 'Hover card',
  parameters: {
    layout: 'centered',
    docs
  },
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
