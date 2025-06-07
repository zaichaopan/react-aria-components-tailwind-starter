import { Button } from '../../src/button';
import { docs } from '../../.storybook/docs';
import { Form } from '../../src/form';
import { Strong, Text } from '../../src/text';
import {
  Description,
  LabeledGroup,
  Input,
  Label,
  TextArea,
  TextField,
} from '../../src/field';
import { Separator } from '../../src/separator';
import { FileTrigger, Group } from 'react-aria-components';
import { DropZone } from '../../src/dropzone';
import { Heading } from '../../src/heading';
import { Avatar } from '../../src/avatar';
import { DatePicker, DatePickerInput } from '../../src/date-picker';
import { UploadCloudIcon } from '../../src/icons/outline/upload-cloud';

const meta = {
  title: 'Layouts/Form/Two Columns',
  parameters: {
    layout: 'centered',
    docs: {
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const TwoColumns = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Form className="mx-auto grid space-y-12 gap-x-8 sm:grid-cols-3">
        <LabeledGroup className="col-span-full grid grid-cols-subgrid gap-y-6">
          <div className="space-y-1">
            <Label displayLevel={2}>Profile</Label>
            <Text>This is how others will see you on the site.</Text>
          </div>

          <Group className="grid max-w-2xl gap-x-6 gap-y-8 sm:col-span-2 sm:grid-cols-6">
            <TextField className="sm:col-span-5">
              <Label>Username</Label>
              <Input />
              <Description>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </Description>
            </TextField>

            <div className="col-span-full">
              <Heading displayLevel={3} elementType="div" className="my-2">
                Profile photo
              </Heading>
              <div className="flex items-center gap-x-6">
                <Avatar
                  className="size-14 self-center rounded-full"
                  alt="J C"
                ></Avatar>

                <div className="space-y-1">
                  <FileTrigger>
                    <Button variant="outline">Upload image</Button>
                  </FileTrigger>
                  <Text>*.png or *.jpeg files up to 10MB</Text>
                </div>
              </div>
            </div>

            <div className="col-span-full grid grid-cols-1">
              <Heading displayLevel={3} className="mb-2" elementType="div">
                Cover photo
              </Heading>

              <DropZone className="w-full">
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-1 self-center rounded-lg border p-2">
                    <UploadCloudIcon className="text-muted size-6" />
                  </div>
                  <div className="flex flex-1 flex-col items-center">
                    <div className="inline-flex items-center">
                      <FileTrigger>
                        <Button variant="link" color="accent">
                          Click to upload
                        </Button>
                      </FileTrigger>
                      &nbsp;
                      <Text>or drag and drop</Text>
                    </div>
                    <Text>SVG, PNG, JPG or GIF up to 10MB</Text>
                  </div>
                </div>
              </DropZone>
            </div>

            <TextField className="sm:col-span-4" name="company_website">
              <Label>Company website</Label>
              <div
                className="group grid grid-cols-[auto_1fr]"
                data-ui="control"
              >
                <span className="text-foreground col-start-1 row-start-1 grid place-content-center ps-2.5 text-base/6 group-has-autofill:z-10 sm:text-sm/6">
                  https://
                </span>
                <Input
                  placeholder="www.example.com"
                  className="col-span-full row-start-1 ps-16 sm:ps-[--spacing(15)]"
                  autoComplete="email"
                />
              </div>
            </TextField>

            <TextField
              className="col-span-full"
              defaultValue="I own a computer."
            >
              <Label>Bio</Label>
              <TextArea rows={5}></TextArea>

              <Description>
                You can <Strong>@mention</Strong> other users and organizations
                to link to them.
              </Description>
            </TextField>
          </Group>
        </LabeledGroup>

        <Separator className="col-span-full" />

        <LabeledGroup className="col-span-full grid grid-cols-subgrid gap-y-6">
          <div className="space-y-1">
            <Label displayLevel={2}>Account</Label>
            <Text>
              Update your account settings. Set your preferred language and
              timezone.
            </Text>
          </div>

          <Group className="grid max-w-2xl gap-x-6 gap-y-8 sm:col-span-2 sm:grid-cols-6">
            <TextField className="col-span-full grid grid-cols-subgrid">
              <Label className="col-span-full">Name</Label>
              <Input placeholder="Your name" className="sm:col-span-3" />
              <Description className="col-span-full">
                This is the name that will be displayed on your profile and in
                emails.
              </Description>
            </TextField>

            <DatePicker className="col-span-full grid grid-cols-subgrid">
              <Label className="col-span-full">Date of birth</Label>
              <DatePickerInput></DatePickerInput>
              <Description className="col-span-full">
                Your date of birth is used to calculate your age.
              </Description>
            </DatePicker>
          </Group>
        </LabeledGroup>

        <Separator className="col-span-full" />

        <div className="col-span-full space-x-2 justify-self-end">
          <Button variant="plain">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </Form>
    </div>
  );
};
