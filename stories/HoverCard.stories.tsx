import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../src/hover-card';
import { docs } from '../.storybook/docs';
import { Link } from '../src/link';
import { Small, Strong, Text, TextLink } from '../src/text';
import { Avatar, AvatarGroup } from '../src/avatar';
import { Button } from '../src/button';

const meta = {
  title: 'Hover card',
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6 min-h-100 min-w-sm m-auto">
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
        <HoverCardContent className="flex max-w-76 flex-col gap-3 p-4">
          <div className="flex items-start justify-between">
            <Avatar
              size={48}
              className="rounded-full"
              alt="Devon Govett"
              src="https://pbs.twimg.com/profile_images/1703999923153436672/CsOAxp9d_400x400.jpg"
            ></Avatar>

            <Button>Following</Button>
          </div>

          <div className="flex flex-col">
            <Strong>Devon Govett</Strong>
            <Text className="sm:leading-4">@devongovett</Text>
          </div>

          <Text>
            Creator of{' '}
            <TextLink href="https://parceljs.org/" target="_blank">
              @parceljs
            </TextLink>
            . Engineer{' '}
            <TextLink href="https://adobe.com" target="_blank">
              @adobe
            </TextLink>{' '}
            working on React Aria and React Spectrum.
          </Text>

          <div className="flex justify-between">
            <Text>
              <Strong>134</Strong> Following
            </Text>
            <Text>
              <Strong>38.9K</Strong> Followers
            </Text>
          </div>

          <div className="flex gap-x-3">
            <AvatarGroup aria-label="followers">
              <Avatar
                size={28}
                className="rounded-full"
                alt="Mery"
                src="https://pbs.twimg.com/profile_images/1825609068767027200/L_4CGvSB_400x400.jpg"
              />
              <Avatar
                size={28}
                className="rounded-full"
                alt="Another User"
                src="https://pbs.twimg.com/profile_images/1907688428398850048/zAuYRr83_400x400.jpg"
              />
              <Avatar
                size={28}
                className="rounded-full"
                alt="Kent C. Dodds"
                src="https://pbs.twimg.com/profile_images/1567269493608714241/6ACZo99k_400x400.jpg"
              />
            </AvatarGroup>
            <Small>
              Followed by Mery, Colm Tuite, Kent C. Dodds and 3,456 others
            </Small>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
