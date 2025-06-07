import React from 'react';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { FileTrigger } from '../src/file-trigger';
import { Avatar } from '../src/avatar';
import { PlusIcon } from '../src/icons/outline/plus';
import { Strong, Text } from '../src/text';
import { Input, Label, TextField } from '../src/field';
import { Form } from '../src/form';
import { InformationCircleIcon } from '../src/icons/outline/information-circle';
import { XIcon } from '../src/icons/outline/x';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  const [file, setFile] = React.useState<Array<string> | null>(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          if (!e) {
            return;
          }

          const files = Array.from(e);
          const filenames = files.map((file) => file.name);
          setFile(filenames);
        }}
      >
        <Button variant="outline">Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  );
};

export const ChangeProfile = () => {
  const [src, setSrc] = React.useState<string | undefined>(undefined);

  return (
    <div className="flex items-center gap-2">
      <Avatar alt="T W" className="rounded-full" src={src}></Avatar>
      <FileTrigger
        onSelect={(e) => {
          if (!e) {
            return;
          }

          const file = Array.from(e)[0];
          setSrc(URL.createObjectURL(file));
        }}
      >
        <Button variant="outline">Change</Button>
      </FileTrigger>
    </div>
  );
};

export const ProfileSettings = () => {
  const [src, setSrc] = React.useState<string | undefined>(undefined);


  return (
    <div className="grid max-w-3xl gap-12 sm:grid-cols-3">
      <div className="flex flex-col items-center gap-y-4">
        <div className="relative isolate">
          <Avatar
            alt="T W"
            className="rounded-full"
            src={src}
            fallback="icon"
            size={64}
          ></Avatar>
          {src ? (
            <Button
              isIconOnly
              color="red"
              className="ring-background absolute end-0 top-0 z-10 size-5 translate-x-1/4 rounded-full ring-2 sm:size-5"
            >
              <XIcon className="size-3.5 text-white" />
            </Button>
          ) : (
            <FileTrigger
              onSelect={(e) => {
                if (!e) {
                  return;
                }

                const file = Array.from(e)[0];
                setSrc(URL.createObjectURL(file));
              }}
            >
              <Button
                isIconOnly
                className="ring-background absolute end-0 top-0 z-10 size-5 translate-x-1/4 rounded-full ring-2 [--btn-bg:var(--color-zinc-400)] sm:size-5"
              >
                <PlusIcon className="size-3.5 text-white" />
              </Button>
            </FileTrigger>
          )}
        </div>

        {!src && (
          <>
            <div className="flex flex-col items-center">
              <Strong>Upload Image</Strong>
              <Text>Max file size: 1MB</Text>
            </div>

            <FileTrigger
              onSelect={(e) => {
                if (!e) {
                  return;
                }

                const file = Array.from(e)[0];
                setSrc(URL.createObjectURL(file));
              }}
            >
              <Button variant="outline">Add Image</Button>
            </FileTrigger>
          </>
        )}
      </div>
      <Form className="grid sm:col-span-2">
        <TextField>
          <Label hint="required">Name</Label>
          <Input />
        </TextField>
        <TextField>
          <Label className="inline-flex items-center gap-x-0.5">
            Title
            <Button
              aria-hidden
              size="sm"
              variant="plain"
              className="not-hover:text-muted size-6 sm:size-6"
              tooltip="This is a tooltip"
              isIconOnly
            >
              <InformationCircleIcon className="size-4" />
            </Button>
          </Label>

          <Input />
        </TextField>

        <div className="flex justify-end gap-x-4 pt-6">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </Form>
    </div>
  );
};
