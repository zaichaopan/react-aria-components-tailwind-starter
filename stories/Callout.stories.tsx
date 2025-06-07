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
import { ArrowRightIcon } from '../src/icons/outline/arrow-right';
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
        <CalloutTitle>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutTitle>
      </Callout>

      <Callout>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutTitle>
      </Callout>

      <Callout>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutTitle>
        <CalloutControl />
      </Callout>

      <Callout>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Info</CalloutTitle>
        <CalloutDescription>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutDescription>
        <CalloutControl />
      </Callout>

      <Callout>
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Info</CalloutTitle>
        <CalloutDescription>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutDescription>
        <CalloutActions>
          <Button>Enable 2FA</Button>
          <Button variant="plain">
            Learn more
            <Icon>
              <ArrowUpRightIcon />
            </Icon>
          </Button>
        </CalloutActions>
        <CalloutControl />
      </Callout>
    </div>
  );
};

export const Colors = () => {
  return (
    <div className="space-y-6 p-6">
      <Callout color="zinc">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Info</CalloutTitle>
        <CalloutDescription>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutDescription>

        <CalloutControl />
      </Callout>
      <Callout color="blue">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Info</CalloutTitle>
        <CalloutDescription>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutDescription>

        <CalloutControl />
      </Callout>
      <Callout color="green">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Info</CalloutTitle>
        <CalloutDescription>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutDescription>
        <CalloutControl />
      </Callout>
      <Callout color="yellow">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Info</CalloutTitle>
        <CalloutDescription>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutDescription>
        <CalloutControl />
      </Callout>
      <Callout color="red">
        <CalloutIcon>
          <InformationCircleIcon />
        </CalloutIcon>
        <CalloutTitle>Info</CalloutTitle>
        <CalloutDescription>
          GitHub users are now required to enable two-factor authentication as
          an additional security measure.
        </CalloutDescription>
        <CalloutControl />
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

      <Callout inline color="zinc">
        <CalloutControl />
        <CalloutTitle>
          Free Plan has a fixed upload file size limit of 50 MB.
        </CalloutTitle>
        <CalloutDescription>
          Upgrade to the Pro plan for a configurable upload file size limit of
          up to 50 GB.
        </CalloutDescription>

        <CalloutActions>
          <Button>
            Upgrade to Pro
            <ArrowRightIcon />
          </Button>
        </CalloutActions>
      </Callout>

      <Callout color="blue" inline>
        <CalloutIcon>
          <Icon>
            <ShieldCheckIcon />
          </Icon>
        </CalloutIcon>
        <CalloutTitle>
          Single sign-on to see results in the organization.
        </CalloutTitle>

        <CalloutActions>
          <Button variant="outline">Single sign-on</Button>
        </CalloutActions>
      </Callout>

      <Callout inline color="green">
        <CalloutIcon>
          <Icon>
            <SparklesIcon />
          </Icon>
        </CalloutIcon>
        <CalloutTitle>
          Welcome to the March 2025 release. See what's new in the version 2.0
        </CalloutTitle>
        <CalloutActions>
          <Button color="green">Upgrade Now</Button>

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
        <CalloutControl />
        <CalloutIcon>
          <ExclamationCircleIcon />
        </CalloutIcon>
        <CalloutTitle className="inline">
          Something went wrong. Try again or{' '}
          <TextLink>contact support</TextLink>.
        </CalloutTitle>

        <CalloutActions>
          <Button variant="outline">Send crash report</Button>
        </CalloutActions>
      </Callout>
    </div>
  );
};

export const Banners = () => {
  return (
    <Callout color="blue" inline center>
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

      <Callout role="alert">
        <CalloutControl />
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle className="inline">
          You will need <TextLink>admin privileges</TextLink> to install and
          access this application.
        </CalloutTitle>
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
        <CalloutControl />
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle className="inline">
          You will need <TextLink>admin privileges</TextLink> to install and
          access this application.
        </CalloutTitle>
      </Callout>

      <Callout role="alert" color="green">
        <CalloutControl />
        <CalloutIcon>
          <CheckCircleIcon />
        </CalloutIcon>
        <CalloutTitle>You account has been created</CalloutTitle>
        <CalloutDescription className="inline">
          You can now <TextLink>sign in</TextLink> with your new account
          credentials.
        </CalloutDescription>
      </Callout>

      <Callout role="alert" color="blue">
        <CalloutControl />
        <CalloutIcon>
          <ExclamationTriangleIcon />
        </CalloutIcon>
        <CalloutTitle>
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
          <Button variant='outline'>Save</Button>
          <Button variant="plain">Dismiss</Button>
        </CalloutActions>
      </Callout>
    </div>
  );
};
