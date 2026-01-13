import { docs } from '../.storybook/docs';
import { Card, CardHeader, CardBody, CardFooter } from '../src/card';
import { Separator } from '../src/separator';
import { Small, Strong, Text } from '../src/text';
import { Icon } from '../src/icon';
import { Avatar, AvatarGroup } from '../src/avatar';
import { Heading } from '../src/heading';
import { Link } from '../src/link';
import { SettingIcon } from '../src/icons/outline/setting';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="mt-6 flex max-w-prose flex-col gap-4">
      <Card className="">
        <CardHeader>Cash</CardHeader>
        <CardBody className="flex flex-col">
          <Heading elementType="div">$256,091</Heading>
          <Separator soft className="mt-4 mb-2" />
          <Small>Updated yesterday</Small>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="flex flex-col py-4">
          <div>
            <Text> Minimum password length</Text>
            <Strong>8 characters</Strong>
          </div>
          <Separator soft className="my-3" />
          <div>
            <Text>Reject compromised passwords</Text>
            <Strong>On</Strong>
          </div>

          <Separator soft className="my-3" />
          <div>
            <Text>Enforce minimum password length</Text>
            <Strong>Off</Strong>
          </div>

          <Separator soft className="my-3" />
          <div>
            <Text>Password rules</Text>
            <Strong>Nones</Strong>
          </div>

          <Separator soft className="my-3" />

          <Link>
            <Icon>
              <SettingIcon />
            </Icon>
            Update password requirements
          </Link>
        </CardBody>
      </Card>

      <Card className="max-w-lg [--border-radius:var(--radius-3xl)] [--card-padding:--spacing(2)]">
        <CardBody>
          <Heading
            elementType="div"
            displayLevel={2}
            className="leading-tight text-amber-600"
          >
            Tuesday, January 12, 2026 at 8 AM
          </Heading>
          <Heading elementType="div">
            Design Systems Deep Dive for Scalable Products
          </Heading>
          <Text>Riley Thompson</Text>
          <div className="flex items-center gap-x-3 pt-3">
            <AvatarGroup aria-label="Online users">
              {[
                {
                  name: 'M A',
                  src: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=3386&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                  name: 'D P',
                  src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2306&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
                },
                {
                  name: 'M C',
                  src: 'https://images.unsplash.com/photo-1706951261002-1bfcc612664f?q=80&w=2306&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
                },
                {
                  name: 'M H',
                  src: 'https://images.unsplash.com/photo-1645002124895-009a4c3ea3af?q=80&w=2306&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
                },
                {
                  name: 'M J',
                  src: 'https://images.unsplash.com/photo-1679611978819-f10168367155?q=80&w=2306&auto=format&fit=facearea&facepad=4&w=256&h=256',
                },
              ].map((user) => {
                return (
                  <Avatar
                    key={user.name}
                    size={32}
                    className="rounded-full"
                    alt={user.name}
                    src={user.src}
                  />
                );
              })}
            </AvatarGroup>

            <Strong>+50 people</Strong>
          </div>
        </CardBody>
        <CardFooter>
          <Text>
            Learn how design systems create consistent, scalable UI through
            shared components, tokens, and workflows—helping teams build and
            evolve products efficiently.
          </Text>
        </CardFooter>
      </Card>
    </div>
  );
};
