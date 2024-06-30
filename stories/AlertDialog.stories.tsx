import React from 'react';
import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { AlertDialog } from '../src/AlertDialog';
import { Button } from '../src/Button';
import { Modal } from '../src/Modal';
import { Text, TextLink } from '../src/Text';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '../src/Dialog';

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
      <Modal>
        <AlertDialog title="Update Available" primaryActionLabel="Install now">
          A new version is ready to be installed.
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
};

export const DestructiveAlerts = () => {
  return (
    <DialogTrigger>
      <Button color="destructive">Delete&hellip;</Button>
      <Modal>
        <AlertDialog
          title="Delete folder"
          destructive
          primaryActionLabel="Delete"
        >
          Are you sure you want to delete "Documents"? All contents will be
          permanently destroyed.
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
};

DestructiveAlerts.parameters = {
  docs: {
    description: {
      story: 'Use the **destructive** prop to render destructive alerts',
    },
  },
};

export const TitleOnlyAlerts = () => {
  return (
    <DialogTrigger>
      <Button color="destructive">Remove</Button>
      <Modal>
        <AlertDialog
          title="Remove preview?"
          destructive
          primaryActionLabel="Remove"
        ></AlertDialog>
      </Modal>
    </DialogTrigger>
  );
};

TitleOnlyAlerts.parameters = {
  docs: {
    description: {
      story: 'Dialog body is not required',
    },
  },
};

export const WithSecondaryActions = () => {
  return (
    <DialogTrigger>
      <Button outline>Secondary</Button>
      <Modal size="lg">
        <AlertDialog
          title="Rate this app"
          cancelLabel="No, thanks"
          primaryActionLabel="Rate now"
          secondaryActionLabel="Remind me later"
        >
          If you enjoy the app, would you mind taking a moment to rate it? It
          will take a few minutes.
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
};

WithSecondaryActions.parameters = {
  docs: {
    description: {
      story:
        'Use the **secondaryActionLabel** and **onSecondaryAction** prop of the **AlertDialog** component to add a secondary action button:',
    },
  },
};

export const WithControlledOpenState = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div>
      <Button onPress={() => setOpen(true)} plain>
        Try Again
      </Button>
      <Modal isOpen={isOpen} onOpenChange={setOpen}>
        <AlertDialog
          title="Unable to connect your account"
          primaryActionLabel="Try Again"
        >
          <Text className="py-1">
            Your changes were saved, but we could not connect your account due
            to a technical issue on our end. Please try connecting again. If the
            issue keeps happening, contact <TextLink>Customer Care.</TextLink>
          </Text>
        </AlertDialog>
      </Modal>
    </div>
  );
};

WithControlledOpenState.parameters = {
  docs: {
    description: {
      story:
        'Use the **isOpen** and **onOpenChange**  prop of **Modal** component to control alert dialog open state:',
    },
  },
};

export const AlertDialogsVsDialogs = () => {
  return (
    <DialogTrigger>
      <Button>Check new version</Button>
      <Modal size="md">
        <Dialog>
          {({ close }) => {
            return (
              <>
                <DialogHeader displayLevel={3}>
                  Not Update Available
                </DialogHeader>
                <DialogBody>
                  <Text>You are already using the latest version.</Text>
                </DialogBody>
                <DialogFooter>
                  <Button plain onPress={close}>
                    OK
                  </Button>
                </DialogFooter>
              </>
            );
          }}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

AlertDialogsVsDialogs.parameters = {
  docs: {
    description: {
      story: `**Use alert dialogs sparingly**
        \nAlert dialogs are interruptive, so they're best for displaying important information that users need to acknowledge before moving forward with a task or workflow. Use them only when absolutely necessary, not for low-signal notifications or excessive confirmations.`,
    },
  },
};
