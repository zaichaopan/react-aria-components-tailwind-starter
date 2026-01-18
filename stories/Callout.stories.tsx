import type { Meta } from '@storybook/react-vite';
import { docs } from '../.storybook/docs';
import Callout, {
  CalloutActions,
  CalloutControl,
  CalloutDescription,
  CalloutTitle,
  CalloutIcon,
} from '../src/callout';
import { Strong, TextLink } from '../src/text';
import { Button } from '../src/button';
import { Icon } from '../src/icon';
import {
  BellRingIcon,
  PlayCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from 'lucide-react';
import { ExclamationCircleIcon } from '../src/icons/outline/exclamation-circle';
import { ArrowUpRightIcon } from '../src/icons/outline/arrow-up-right';
import { InformationCircleIcon } from '../src/icons/outline/information-circle';
import { CloudOffIcon } from '../src/icons/outline/cloud-off';
import { CheckCircleIcon } from '../src/icons/outline/check-circle';
import { ExclamationTriangleIcon } from '../src/icons/outline/exclamation-triangle';

const meta: Meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="space-y-6 p-6">
      <Callout>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Our terms of service has been updated</CalloutTitle>
        <CalloutDescription>
          We've updated our terms to clarify how we handle data, billing, and
          user permissions. Please review and accept the latest terms to avoid
          impacting your service.
        </CalloutDescription>
        <CalloutActions>
          <Button variant="outline">Set reminder</Button>
          <Button>Review Terms</Button>
        </CalloutActions>
        <CalloutControl />
      </Callout>
    </div>
  );
};

export const CalloutTitles = () => {
  return (
    <div className="space-y-6 p-6">
      <Callout>
        <CalloutTitle>
          Your current access level limits what you can view or modify
        </CalloutTitle>
      </Callout>

      <Callout>
        <CalloutTitle>
          Your current access level limits what you can view or modify
        </CalloutTitle>
        <CalloutControl />
      </Callout>

      <Callout>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Your current access level limits what you can view or modify
        </CalloutTitle>
      </Callout>
      <Callout>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Your current access level limits what you can view or modify
        </CalloutTitle>
        <CalloutControl />
      </Callout>
    </div>
  );
};

export const CalloutDescriptions = () => {
  return (
    <Callout>
      <CalloutIcon>
        <InformationCircleIcon />
      </CalloutIcon>
      <CalloutDescription>
        We're working on centralizing SCIM and invite settings. For now, setup
        is handled within individual product settings.{' '}
        <TextLink>Learn more</TextLink>
      </CalloutDescription>
    </Callout>
  );
};

export const Colors = () => {
  return (
    <div className="space-y-6 p-6">
      <Callout color="red">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout color="blue">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout color="yellow">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout color="green">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout className="[--callout:var(--color-violet-500)]">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout className="[--callout:var(--color-lime-500)]">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout className="[--callout:var(--color-pink-500)]">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout className="[--callout:var(--color-sky-500)]">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout className="[--callout:var(--color-teal-500)]">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>

      <Callout className="[--callout:var(--color-zinc-500)] dark:[--callout:var(--color-zinc-300)]">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Scheduled maintenance on Saturday, 2-4 AM PT
        </CalloutTitle>
        <CalloutDescription>
          Track status updates on status.acme.com{' '}
          <TextLink>status.acme.com</TextLink>.
        </CalloutDescription>
      </Callout>
    </div>
  );
};

export const InlineCallout = () => {
  return (
    <div className="space-y-6 p-2">
      <Callout inline>
        <CalloutIcon>
          <Icon>
            <PlayCircleIcon />
          </Icon>
        </CalloutIcon>
        <CalloutTitle>Use this Github action with your project</CalloutTitle>
        <CalloutDescription>
          Add this action to an existing workflow or create a new one
        </CalloutDescription>
        <CalloutActions>
          <Button variant="outline">View on Marketplace</Button>
        </CalloutActions>
        <CalloutControl />
      </Callout>

      <Callout inline>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Scheduled maintenance</CalloutTitle>
        <CalloutDescription>
          We'll be offline 2 - 4 AM UTC on July 14 while we upgrade our
          database.
        </CalloutDescription>
        <CalloutActions>
          <Button variant="outline">Dismiss</Button>
        </CalloutActions>
      </Callout>

      <Callout color="blue" inline>
        <CalloutIcon className="py-1">
          <Icon>
            <ShieldCheckIcon />
          </Icon>
        </CalloutIcon>
        <CalloutTitle className="py-1">
          Single sign-on to see results in the organization.
        </CalloutTitle>

        <CalloutActions>
          <Button variant="outline" size="sm">
            Single sign-on
          </Button>
        </CalloutActions>
      </Callout>

      <Callout inline center className='[--callout:var(--color-purple-600)]'>
        <CalloutIcon>
          <Icon>
            <SparklesIcon />
          </Icon>
        </CalloutIcon>
        <CalloutTitle>
          Welcome to the March 2025 release. See what's new in the version 2.0
        </CalloutTitle>
        <CalloutActions>
          <Button>Upgrade Now</Button>

          <Button variant="plain">
            Release notes
            <ArrowUpRightIcon />
          </Button>
        </CalloutActions>
        <CalloutControl />
      </Callout>

      <Callout color="yellow" inline>
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle>
          We can't enable additional Uptime Monitors because you don't have a
          sufficient on-demand budget.{' '}
        </CalloutTitle>
        <CalloutActions>
          <Button>Request Additional Quota</Button>
          <Button variant="outline">See Usage</Button>
        </CalloutActions>
      </Callout>

      <Callout inline color="red">
        {/* <CalloutControl /> */}
        <CalloutIcon>
          <ExclamationCircleIcon />
        </CalloutIcon>
        <CalloutTitle className="inline">
          Something went wrong. Try again or{' '}
          <TextLink>contact support</TextLink>.
        </CalloutTitle>

        <CalloutActions>
          <Button>Send crash report</Button>
          <Button variant="outline">Dismiss</Button>
        </CalloutActions>
      </Callout>
    </div>
  );
};

export const Banners = () => {
  return (
    <div className="space-y-6">
      <Callout inline center color="blue">
        <CalloutIcon>
          <Icon>
            <BellRingIcon />
          </Icon>
        </CalloutIcon>
        <CalloutTitle className="inline">
          Slack needs your permissions to enable notifications.{' '}
          <Button variant="link">Enable notifications</Button>
        </CalloutTitle>
        <CalloutControl />
      </Callout>

      <Callout inline center color="yellow">
        <CalloutIcon className="py-1">
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle className="inline py-1 font-normal">
          <Strong>Not getting notification?</Strong> You'll need to change your
          OS settings to allow Teams notifications.
        </CalloutTitle>
        <CalloutActions>
          <Button variant="outline" className="text-nowrap" size="sm">
            Manage OS settings
          </Button>
        </CalloutActions>
        <CalloutControl size="sm" />
      </Callout>
    </div>
  );
};

export const AsDialog = () => {
  return (
    <Callout role="dialog" className="m-6 max-w-sm" aria-label="Cookies">
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

export const AsAlert = () => {
  return (
    <div className="space-y-6 p-6">
      <Callout role="alert">
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle>No Internet Connection</CalloutTitle>
        <CalloutDescription>
          Please check your internet connection and try again.
        </CalloutDescription>
      </Callout>

      <Callout role="alert" inline>
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle>No Internet Connection</CalloutTitle>
        <CalloutActions>
          <Button variant="outline">Try again</Button>
        </CalloutActions>
      </Callout>

      <Callout role="alert" color="blue">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Your admin now manages your account</CalloutTitle>
        <CalloutDescription className="inline">
          Contact your admin to change your account details.{' '}
          <TextLink>Learn more about managed account</TextLink>
        </CalloutDescription>
      </Callout>

      <Callout role="alert" color="yellow">
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle>No Internet Connection</CalloutTitle>
        <CalloutDescription>
          Please check your internet connection and try again.
        </CalloutDescription>
      </Callout>

      <Callout role="alert" color="yellow">
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle>
          Connect your instagram account to your shop before proceeding.
        </CalloutTitle>
        <CalloutActions>
          <Button variant="outline" size="sm">
            Connect account
          </Button>
        </CalloutActions>
      </Callout>

      <Callout role="alert" color="yellow">
        <CalloutControl />
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle>Your session is about to expire</CalloutTitle>
        <CalloutDescription className="inline">
          You will be logged out in 5 minutes. Please save you work and{' '}
          <TextLink>refresh</TextLink> the page.
        </CalloutDescription>
      </Callout>

      <Callout role="alert" color="red">
        <CalloutControl size="sm" className="py-1" />
        <CalloutIcon className="py-1">
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle className="inline py-1">
          You will need <TextLink>admin privileges</TextLink> to install and
          access this application.
        </CalloutTitle>
      </Callout>

      <Callout inline center role="alert" color="yellow">
        <CalloutIcon>
          <CloudOffIcon />
        </CalloutIcon>
        <CalloutTitle>
          You are offline. Your changes will be saved locally until you are back
          online.
        </CalloutTitle>
      </Callout>

      <Callout
        inline
        role="alert"
        className="shadow-outline dark text-foreground mx-auto max-w-lg border-0 bg-zinc-800 sm:rounded-full"
      >
        <CalloutIcon>
          <ExclamationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Notification text</CalloutTitle>
        <CalloutActions>
          <Button variant="outline">Save</Button>
          <Button variant="plain">Dismiss</Button>
        </CalloutActions>
      </Callout>
    </div>
  );
};
