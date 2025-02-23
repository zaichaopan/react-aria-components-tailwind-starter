import type { Meta } from '@storybook/react';
import { docs } from '../.storybook/docs';
import { useEffect, useMemo, useState } from 'react';
import {
  DialogTrigger,
  UNSTABLE_Autocomplete,
  useFilter,
} from 'react-aria-components';
import { Button } from '../src/button';
import { Kbd } from '../src/kbd';
import { Modal } from '../src/modal';
import { Dialog } from '../src/dialog';
import { TextField, Input } from '../src/field';
import { Menu, MenuItem } from '../src/menu';

const meta: Meta = {
  title: 'CommandPalette',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A **Command Palette** is an interface that allows users to quickly run commands or navigate to content within an application. It is built on the top of a <a href="https://react-spectrum.adobe.com/react-aria/Autocomplete.html#autocomplete" target="_blank">**Autocomplete**</a>.',
      },
      ...docs,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export function CommandPaletteExample() {
  const commands = [
    { id: 'new-file', label: 'Create new file…' },
    { id: 'new-folder', label: 'Create new folder…' },
    { id: 'assign', label: 'Assign to…' },
    { id: 'assign-me', label: 'Assign to me' },
    { id: 'status', label: 'Change status…' },
    { id: 'priority', label: 'Change priority…' },
    { id: 'label-add', label: 'Add label…' },
    { id: 'label-remove', label: 'Remove label…' },
  ];

  const [isOpen, setOpen] = useState(false);
  const { contains } = useFilter({ sensitivity: 'base' });
  const isMac = useMemo(() => /Mac/.test(navigator.platform), []);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'k' && (isMac ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div>
      <DialogTrigger isOpen={isOpen} onOpenChange={setOpen}>
        <Button>
          Press here or type{' '}
          <Kbd className="text-(--btn-color)">{isMac ? '⌘' : 'Ctrl'}</Kbd> +{' '}
          <Kbd className="text-(--btn-color)">K</Kbd> to open command palette
        </Button>
        <Modal isDismissable>
          <Dialog className="p-3">
            <UNSTABLE_Autocomplete filter={contains}>
              <TextField aria-label="Search commands">
                <Input autoFocus placeholder="Search commands…" />
              </TextField>
              <Menu items={commands} className="mt-1">
                {({ label }) => <MenuItem>{label}</MenuItem>}
              </Menu>
            </UNSTABLE_Autocomplete>
          </Dialog>
        </Modal>
      </DialogTrigger>
    </div>
  );
}
