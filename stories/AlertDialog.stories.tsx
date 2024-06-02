import React from 'react';
import type { Meta } from '@storybook/react';
import { DialogTrigger } from 'react-aria-components';
import { AlertDialog } from '../src/AlertDialog';
import { Button } from '../src/Button';
import { AlertModal } from '../src/Modal';
import { docs } from '../.storybook/docs';
import { Text, TextLink } from '../src/Text';

const meta: Meta = {
  title: 'AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/Dialog.html#alert-dialog" target="_blank">**Alert dialogs**</a> are a special type of dialog meant to present a prompt that the user must confirm before an action proceeds.',
      },
      ...docs,
    },
  },
  argTypes: {
    title: {
      description: 'Alert dialog title',
      control: false,
    },
    destructive: {
      description: 'Whether the primary action is destructive',
      control: false,
    },
    cancelLabel: {
      description: 'Cancel action button label',
      control: false,
      table: {
        defaultValue: {
          summary: 'Cancel',
        },
      },
    },
    onCancelAction: {
      description: 'What action to execute after cancel button is clicked',
      control: false,
    },
    primaryActionLabel: {
      description: 'Primary action button label',
      control: false,
    },
    onPrimaryAction: {
      description: 'What action to execute after primary button is clicked',
      control: false,
    },
    secondaryActionLabel: {
      description: 'Secondary action button label',
      control: false,
    },
    onSecondaryAction: {
      description: 'What action to execute after secondary button is clicked',
      control: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = () => {
  return (
    <DialogTrigger>
      <Button>Update</Button>
      <AlertModal>
        <AlertDialog title="App is out of date" primaryActionLabel="Download">
          Download the newest version to keep listening.
        </AlertDialog>
      </AlertModal>
    </DialogTrigger>
  );
};

export const DestructiveAlertDialogs = () => {
  return (
    <DialogTrigger>
      <Button color="destructive">Delete&hellip;</Button>
      <AlertModal>
        <AlertDialog
          title="Delete folder"
          destructive
          primaryActionLabel="Delete"
        >
          Are you sure you want to delete "Documents"? All contents will be
          permanently destroyed.
        </AlertDialog>
      </AlertModal>
    </DialogTrigger>
  );
};

DestructiveAlertDialogs.parameters = {
  docs: {
    description: {
      story: 'Use the **destructive** prop of the **AlertDialog** component to render destructive alert dialogs:',
    },
  },
};

export const CancelActions = () => {
  return (
    <DialogTrigger>
      <Button outline>OK</Button>
      <AlertModal>
        <AlertDialog title="File Rename" cancelLabel="OK">
          Can't rename "Photos" because a file with that name already exists.
          Please choose a different name.
        </AlertDialog>
      </AlertModal>
    </DialogTrigger>
  );
};

CancelActions.parameters = {
  docs: {
    description: {
      story:
        'Use the **cancelLabel** and **onCancelAction** of the **AlertDialog** component to configure cancel actions:',
    },
  },
};

export const SecondaryActions = () => {
  return (
    <DialogTrigger>
      <Button outline>Secondary</Button>
      <AlertModal size="lg">
        <AlertDialog
          title="Rate this app"
          cancelLabel="No, thanks"
          primaryActionLabel="Rate now"
          secondaryActionLabel="Remind me later"
        >
          If you enjoy the app, would you mind taking a moment to rate it? It
          will take a few minutes.
        </AlertDialog>
      </AlertModal>
    </DialogTrigger>
  );
};

SecondaryActions.parameters = {
  docs: {
    description: {
      story:
        'Use the **secondaryActionLabel** and **onSecondaryAction** prop of the **AlertDialog** component to add a secondary action button:',
    },
  },
};

export const ControlledOpenState = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div>
      <Button onPress={() => setOpen(true)} text>
        Try Again
      </Button>
      <AlertModal isOpen={isOpen} onOpenChange={setOpen}>
        <AlertDialog
          title="Unable to connect your account"
          destructive
          primaryActionLabel="Try Again"
        >
          <Text>
            Your changes were saved, but we could not connect your account due
            to a technical issue on our end. Please try connecting again. If the
            issue keeps happening, contact <TextLink>Customer Care.</TextLink>
          </Text>
        </AlertDialog>
      </AlertModal>
    </div>
  );
};

ControlledOpenState.parameters = {
  docs: {
    description: {
      story:
        'Use the **isOpen** and **onOpenChange**  prop of **AlertModal** component to control alert dialog open state:',
    },
  },
};
