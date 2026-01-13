import React from 'react';
import { docs } from '../.storybook/docs';
import { DropZone } from '../src/dropzone';
import { FileTrigger, isFileDropItem } from 'react-aria-components';
import { Button } from '../src/button';
import { Small, Text } from '../src/text';
import { TrashIcon } from '../src/icons/outline/trash';
import { UploadCloudIcon } from '../src/icons/outline/upload-cloud';
import { Bar, BarValueText, ProgressBar } from '../src/progress-bar';
import { Label } from '../src/field';
import { Separator } from '../src/separator';
import { CheckCircleIcon } from '../src/icons/outline/check-circle';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  const [file, setFile] = React.useState<File | undefined>(undefined);

  return (
    <div className="space-y-4">
      <DropZone
        className="w-full"
        getDropOperation={(types) =>
          types.has('image/jpeg') || types.has('image/png') ? 'copy' : 'cancel'
        }
        onDrop={async (e) => {
          const item = e.items
            .filter(isFileDropItem)
            .find(
              (item) => item.type === 'image/jpeg' || item.type === 'image/png',
            );

          if (item) {
            setFile(await item.getFile());
          }
        }}
      >
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-1 self-center rounded-lg border p-2">
            <UploadCloudIcon className="size-6" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-0.5">
            <div className="inline-flex items-center">
              <Text>Drop files here or</Text> &nbsp;
              <FileTrigger
                acceptedFileTypes={['image/png', 'image/jpeg']}
                allowsMultiple={false}
                onSelect={async (e) => {
                  if (e) {
                    const files = Array.from([...e]);
                    const item = files[0];

                    if (item) {
                      setFile(item);
                    }
                  }
                }}
              >
                <Button variant="link" color="accent">
                  click to upload
                </Button>
              </FileTrigger>
            </div>
            <Small>SVG, PNG, JPG or GIF up to 10MB</Small>
          </div>
        </div>
      </DropZone>

      {file && (
        <div className="flex gap-3 rounded-lg border p-4">
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className="size-8 rounded-md object-cover"
          />
          <div>
            <Text>{file.name}</Text>

            <ProgressBar value={100}>
              <Label className="flex gap-x-2">
                <Text elementType="span">
                  {(file.size / 1024).toFixed(2)} KB
                </Text>

                <Separator
                  role={null}
                  orientation="vertical"
                  className="h-3 self-center border-zinc-300 dark:border-zinc-500"
                />

                <span className="flex items-center gap-x-1 text-green-600">
                  <CheckCircleIcon className="size-4" />
                  Complete
                </span>
              </Label>
              <div className="flex items-center gap-2">
                <Bar />
                <BarValueText />
              </div>
            </ProgressBar>
          </div>
          <Button
            variant="plain"
            size="sm"
            isIconOnly
            onPress={() => setFile(undefined)}
          >
            <TrashIcon />
          </Button>
        </div>
      )}
    </div>
  );
};
