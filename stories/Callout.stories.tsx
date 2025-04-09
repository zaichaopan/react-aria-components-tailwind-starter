import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import Callout, {
  CalloutActions,
  CalloutControl,
  CalloutDescription,
  CalloutHeading,
} from '../src/callout';
import { Strong, TextLink } from '../src/text';
import { Button } from '../src/button';
import { Icon } from '../src/icon';
import { PartyPopperIcon, SparklesIcon } from 'lucide-react';
import { Badge } from '../src/badge';
import { ExclamationCircleIcon } from '../src/icons/solid/exclamation-circle';
import { ArrowRightIcon } from '../src/icons/outline/arrow-right';
import { ArrowUpRightIcon } from '../src/icons/outline/arrow-up-right';
import { ExclamationTriangleIcon } from '../src/icons/solid/exclamation-triangle';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="space-y-6">
      <Callout>
        <CalloutHeading>SmartSync is here!</CalloutHeading>
      </Callout>

      <Callout>
        <CalloutHeading>SmartSync is here!</CalloutHeading>
        <CalloutControl />
      </Callout>

      <Callout>
        <CalloutHeading>
          SmartSync is here! Meet SmartSync &ndash; Turbocharge Your Workflow!
        </CalloutHeading>
        <CalloutControl />
      </Callout>

      <Callout>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
      </Callout>

      <Callout>
        <CalloutControl></CalloutControl>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
      </Callout>

      <Callout>
        <CalloutHeading>SmartSync is here!</CalloutHeading>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
      </Callout>

      <Callout>
        <CalloutControl />
        <CalloutHeading>SmartSync is here!</CalloutHeading>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
      </Callout>

      <Callout>
        <CalloutControl />
        <CalloutHeading>
          SmartSync is here! Meet SmartSync &ndash; Turbocharge Your Workflow!
        </CalloutHeading>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
      </Callout>

      <Callout>
        <CalloutHeading>
          <Icon>
            <PartyPopperIcon className="text-purple-500" />
          </Icon>
          SmartSync is here!
        </CalloutHeading>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
      </Callout>

      <Callout>
        <CalloutHeading>
          <Icon>
            <PartyPopperIcon className="text-purple-500" />
          </Icon>
          SmartSync is here! Meet SmartSync &ndash; Turbocharge Your Workflow!
        </CalloutHeading>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
        <CalloutActions>
          <Button variant="outline">
            Upgrade to Pro
            <ArrowRightIcon />
          </Button>
          <Button variant="plain">Dismiss</Button>
        </CalloutActions>
        <CalloutControl />
      </Callout>

      <Callout>
        <CalloutControl />
        <CalloutHeading>
          <Icon>
            <PartyPopperIcon className="text-purple-500" />
          </Icon>
          <span className="flex flex-wrap gap-x-2 gap-y-1">
            SmartSync is here! <Badge color="purple">Available with Pro</Badge>
          </span>
        </CalloutHeading>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
        <CalloutActions>
          <Button variant="outline">
            Upgrade to Pro
            <ArrowRightIcon />
          </Button>
        </CalloutActions>
      </Callout>

      <Callout className="max-w-lg" color="zinc" compact>
        <CalloutControl />
        <CalloutHeading>
          <Icon>
            <PartyPopperIcon className="text-purple-500" />
          </Icon>
          <span className="flex flex-wrap gap-x-2 gap-y-1">
            SmartSync is here! <Badge color="purple">Available with Pro</Badge>
          </span>
        </CalloutHeading>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
        <CalloutActions>
          <Button variant="outline">
            Upgrade to Pro
            <ArrowRightIcon />
          </Button>
        </CalloutActions>
      </Callout>
    </div>
  );
};

export const InlineCallout = () => {
  return (
    <div className="space-y-6">
      <Callout inline color="yellow" className="max-w-2xl">
        <CalloutHeading>
          <ExclamationTriangleIcon /> Under construction!
        </CalloutHeading>
        <CalloutDescription>
          This component is in alpha. More documentation is coming soon!
        </CalloutDescription>
      </Callout>

      <Callout inline color="yellow" className="max-w-2xl">
        <CalloutControl />
        <CalloutHeading>
          <ExclamationTriangleIcon /> Under construction!
        </CalloutHeading>
        <CalloutDescription>
          This component is in alpha. More documentation is coming soon!
        </CalloutDescription>
      </Callout>

      <Callout inline color="red" className="max-w-2xl">
        <CalloutControl />
        <CalloutHeading>
          <ExclamationCircleIcon /> Something went wrong. Try again or contact
          support.
        </CalloutHeading>

        <CalloutActions>
          <Button variant="outline">Send crash report</Button>
        </CalloutActions>
      </Callout>

      <Callout color="blue" inline className="max-w-2xl">
        <CalloutHeading>
          <ExclamationCircleIcon />
          Your have no credits left!
        </CalloutHeading>
        <CalloutDescription>
          Upgrade to get access to all of our premium feature and benefits.
        </CalloutDescription>

        <CalloutActions>
          <Button variant="outline">
            Upgrade to Pro
            <ArrowRightIcon />
          </Button>
        </CalloutActions>
      </Callout>

      <Callout color="blue" inline className="max-w-2xl">
        <CalloutControl />
        <CalloutHeading>
          <ExclamationCircleIcon />
          Your have no credits left!
        </CalloutHeading>
        <CalloutDescription>
          Upgrade to get access to all of our premium feature and benefits.
        </CalloutDescription>

        <CalloutActions>
          <Button variant="outline">
            Upgrade to Pro
            <ArrowRightIcon />
          </Button>
        </CalloutActions>
      </Callout>

      <Callout inline color="zinc" className="max-w-3xl">
        <CalloutHeading>
          <Icon>
            <SparklesIcon className="text-purple-600" />
          </Icon>
          Welcome to the March 2025 release. See what's new in the version 2.0
        </CalloutHeading>
        <CalloutActions>
          <Button variant="plain">
            Release notes
            <ArrowUpRightIcon />
          </Button>
        </CalloutActions>
      </Callout>

      <Callout color="yellow" className="max-w-full" inline>
        <CalloutHeading>
          <ExclamationTriangleIcon />
          We can't enable additional Uptime Monitors because you don't have a
          sufficient on-demand budget.
        </CalloutHeading>
        <CalloutActions>
          <Button variant="outline">See Usage</Button>
          <Button>Request Additional Quota</Button>
        </CalloutActions>
        <CalloutControl />
      </Callout>
    </div>
  );
};

export const Accessibility = () => {
  return (
    <Callout role="dialog" className="max-w-sm" aria-label="Cookies">
      <CalloutControl />
      <CalloutDescription>
        This site uses cookies to deliver its service and to analyze traffic. By
        browsing this site, you accept the&nbsp;
        <Strong>
          <TextLink>privacy policy.</TextLink>
        </Strong>
      </CalloutDescription>
      <CalloutActions>
        <Button variant="outline">Accept</Button>
        <Button variant="plain">Reject</Button>
      </CalloutActions>
    </Callout>
  );
};
