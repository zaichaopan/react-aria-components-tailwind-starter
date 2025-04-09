import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import Callout, {
  CalloutActions,
  CalloutControl,
  CalloutDescription,
  CalloutHeading,
  CalloutIcon,
} from '../src/callout';
import { Strong, TextLink } from '../src/text';
import { Button } from '../src/button';
import { Icon } from '../src/icon';
import {
  CloudUploadIcon,
  PartyPopperIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from 'lucide-react';
import { Badge } from '../src/badge';
import { ExclamationCircleIcon } from '../src/icons/solid/exclamation-circle';
import { ArrowRightIcon } from '../src/icons/outline/arrow-right';
import { ArrowUpRightIcon } from '../src/icons/outline/arrow-up-right';
import { ExclamationTriangleIcon } from '../src/icons/solid/exclamation-triangle';
import { ProgressBar } from '../src/progress-bar';
import { Avatar } from '../src/avatar';

const meta: Meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <Callout>
        <CalloutHeading>SmartSync is here!</CalloutHeading>
        <CalloutControl />
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
        <CalloutIcon>
          <Icon>
            <PartyPopperIcon className="text-purple-500" />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>SmartSync is here!</CalloutHeading>
        <CalloutControl />
      </Callout>
      <Callout>
        <CalloutControl />
        <CalloutIcon>
          <Icon>
            <PartyPopperIcon className="text-purple-500" />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>SmartSync is here!</CalloutHeading>
        <CalloutDescription>
          Say hello to SmartSync, our latest feature that seamlessly connects
          your tools and automates repetitive tasks.
        </CalloutDescription>
      </Callout>

      <Callout>
        <CalloutIcon>
          <Icon>
            <PartyPopperIcon className="text-purple-500" />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>
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
        </CalloutActions>
        <CalloutControl />
      </Callout>

      <Callout className="max-w-lg" color="zinc" compact>
        <CalloutControl />
        <CalloutIcon>
          <Icon>
            <PartyPopperIcon className="text-purple-500" />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>
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
    <div className="flex flex-col items-center space-y-6 py-6">
      <Callout inline color="red" className="max-w-2xl">
        <CalloutControl />
        <CalloutIcon>
          <ExclamationCircleIcon />
        </CalloutIcon>
        <CalloutHeading>
          Something went wrong. Try again or contact support.
        </CalloutHeading>

        <CalloutActions>
          <Button variant="outline">Send crash report</Button>
        </CalloutActions>
      </Callout>

      <Callout color="blue" inline className="max-w-2xl">
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutHeading>Your have no credits left!</CalloutHeading>
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
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutHeading>Your have no credits left!</CalloutHeading>
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

      <Callout color="blue" inline className="max-w-2xl py-2">
        <CalloutIcon>
          <Icon>
            <ShieldCheckIcon />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>
          Single sign-on to see results in the acme organization.
        </CalloutHeading>

        <CalloutActions>
          <Button variant="outline" size="sm">
            Single sign-on
          </Button>
        </CalloutActions>
      </Callout>

      <Callout inline color="zinc" className="max-w-3xl">
        <CalloutIcon>
          <Icon>
            <SparklesIcon className="text-purple-600" />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>
          Welcome to the March 2025 release. See what's new in the version 2.0
        </CalloutHeading>
        <CalloutActions>
          <Button variant="plain">
            Release notes
            <ArrowUpRightIcon />
          </Button>
        </CalloutActions>
      </Callout>

      <Callout inline color="yellow" className="max-w-3xl py-2">
        <CalloutHeading>
          Catharina requested you review on this pull request
        </CalloutHeading>
        <CalloutActions>
          <Button color="green" size="sm">
            Add your review
          </Button>
        </CalloutActions>
      </Callout>

      <Callout inline color="zinc" className="max-w-full py-2">
        <CalloutControl size="sm" />
        <CalloutIcon>
          <ExclamationCircleIcon />
        </CalloutIcon>
        <CalloutHeading>
          Language changes detected. Please reset Teams to see the change.
        </CalloutHeading>

        <CalloutActions>
          <Button variant="outline" size="sm">
            Apply and restart
          </Button>
        </CalloutActions>
      </Callout>

      <Callout color="yellow" className="max-w-full" inline>
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutHeading>
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

export const Banners = () => {
  return (
    <div className="w-full space-y-4 py-6">
      <Callout color="blue" inline center>
        <CalloutIcon>
          <Icon>
            <ShieldCheckIcon />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>
          Attack Challenge Mode is enabled for this project
        </CalloutHeading>
        <CalloutActions>
          <Button variant="link">Disabled</Button>
        </CalloutActions>
      </Callout>

      <Callout color="yellow" inline center>
        <CalloutIcon>
          <Icon>
            <RotateCcwIcon />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>
          This project was rolled back by @johnphamous
        </CalloutHeading>
        <CalloutActions>
          <Button variant="link">Undo Rollback</Button>
        </CalloutActions>
      </Callout>

      <Callout color="red" inline center>
        <CalloutIcon>
          <Icon>
            <ExclamationTriangleIcon />
          </Icon>
        </CalloutIcon>
        <CalloutHeading>
          Payment failed, update credit card information before your account is
          shut down
        </CalloutHeading>
        <CalloutActions>
          <Button variant="link">Add credit card</Button>
        </CalloutActions>
      </Callout>

      <Callout color="red" inline center>
        <CalloutIcon>
          <Icon>
            <ExclamationTriangleIcon />
          </Icon>
        </CalloutIcon>

        <CalloutHeading>
          Payment failed, update credit card information before your account is
          shut down
        </CalloutHeading>
        <CalloutActions>
          <Button variant="link">Add credit card</Button>
        </CalloutActions>
        <CalloutControl />
      </Callout>

      <Callout
        inline
        center
        className="bg-linear-65 from-pink-200 via-purple-100 to-fuchsia-100 dark:from-pink-600 dark:via-purple-500 dark:to-fuchsia-600"
      >
        <CalloutHeading className="inline">
          <span className="font-semibold text-nowrap">Laracon 2025</span>{' '}
          &#x2022; The flagship Laravel conference of the year.
        </CalloutHeading>
        <CalloutActions>
          <Button>
            Register now <ArrowRightIcon />
          </Button>
        </CalloutActions>
        <CalloutControl />
      </Callout>
    </div>
  );
};

export const Customization = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <Callout className="max-w-sm [--callout-bg:var(--color-blue-500)] [--callout-description:var(--color-white)]">
        <CalloutDescription>
          Added Environment variable successfully. A new deployment is needed
          for charges to be take effect. Redeploy now?
        </CalloutDescription>
        <CalloutActions className="justify-end">
          <Button variant="plain" className="text-white">
            Dismiss
          </Button>
          <Button>Redeploy</Button>
        </CalloutActions>
      </Callout>

      <Callout className="max-w-sm">
        <CalloutControl />
        <CalloutIcon className="me-3">
          <span className="flex justify-start rounded-md border p-2">
            <Icon>
              <CloudUploadIcon className="size-6" />
            </Icon>
          </span>
        </CalloutIcon>
        <CalloutHeading>Uploading 'xxxxx.jpg'</CalloutHeading>
        <CalloutDescription>
          Please wait while we upload your file
          <ProgressBar value={80} isIndeterminate className="pt-2" />
        </CalloutDescription>
        <CalloutActions>
          <Button variant="plain">Cancel</Button>
          <Button variant="plain">Upload another</Button>
        </CalloutActions>
      </Callout>

      <Callout className="max-w-sm">
        <CalloutControl />
        <CalloutIcon className="me-3">
          <Avatar
            alt="M A"
            src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </CalloutIcon>
        <CalloutHeading>Maia sent you a friend request</CalloutHeading>
        <CalloutDescription>
          Hey, wanna dress up as wizards and ride around on hoverboards?
        </CalloutDescription>
        <CalloutActions>
          <Button>Accept</Button>
          <Button variant="plain">Decline</Button>
        </CalloutActions>
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
        <Button>Accept all</Button>
        <Button variant="plain">Reject all</Button>
      </CalloutActions>
    </Callout>
  );
};
