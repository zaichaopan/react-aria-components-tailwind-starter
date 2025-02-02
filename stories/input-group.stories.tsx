import type { Meta } from '@storybook/react';
import { Group } from 'react-aria-components';
import { MailIcon, MicIcon, SendHorizonalIcon } from 'lucide-react';
import { Button } from '../src/button';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/icon';
import { NativeSelect, NativeSelectField } from '../src/native-select';
import {
  Description,
  Input,
  Label,
  LabeledGroup,
  TextField,
} from '../src/field';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemLabel,
  SelectPopover,
} from '../src/select';

const meta: Meta = {
  title: 'Input Groups',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Compose input groups with <a href="./?path=/docs/text-field-input--docs" target="_blank">**TextField**</a>, <a href="./?path=/docs/button--docs" target="_blank">**Button**</a>, <a href="./?path=/docs/native-select--docs" target="_blank">**NativeSelect**</a> and <a href="./?path=/docs/select--docs" target="_blank">**Select**</a>.',
      },
      ...docs,
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex w-72 flex-col gap-y-10">
      <TextField>
        <Label>Email</Label>
        <div className="group grid grid-cols-[auto_1fr]">
          <span className="col-start-1 row-start-1 grid place-content-center px-3 group-has-[:autofill]:z-10">
            <Icon className="size-5 text-muted/90 sm:size-4">
              <MailIcon />
            </Icon>
          </span>
          <Input
            type="email"
            placeholder="john@example.com"
            className="col-span-full row-start-1 ps-9"
            autoComplete="email"
          />
        </div>
      </TextField>

      <TextField>
        <Label>Company website</Label>
        <div className="group grid grid-cols-[auto_1fr]">
          <span className="col-start-1 row-start-1 grid place-content-center ps-2.5 text-base/6 text-foreground group-has-[:autofill]:z-10 sm:text-sm/6">
            https://
          </span>
          <Input
            type="text"
            placeholder="www.example.com"
            className="col-span-full row-start-1 ps-16 sm:ps-[calc(theme(size.14)+4px)]"
            autoComplete="email"
          />
        </div>
      </TextField>

      <TextField>
        <Label>Company website</Label>
        <div className="flex">
          <span className="flex items-center rounded-s border border-e-0 px-2.5 text-base/6 text-foreground sm:text-sm/6">
            https://
          </span>
          <Input
            type="text"
            placeholder="www.example.com"
            className="rounded-s-none"
            autoComplete="email"
          />
        </div>
      </TextField>

      <TextField className="col-span-full row-start-1">
        <Label>Email</Label>
        <div className="group grid grid-cols-[1fr_auto]">
          <Input
            type="email"
            placeholder="john@example.com"
            className="col-span-full row-start-1 pe-10"
            autoComplete="email"
          />
          <span className="-col-end-1 row-start-1 grid place-content-center px-3">
            <Icon className="size-5 text-muted/90 sm:size-4">
              <MailIcon />
            </Icon>
          </span>
        </div>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <div className="group grid grid-cols-[auto_1fr_auto]">
          <span className="col-start-1 row-start-1 grid place-content-center px-3 text-base/6 text-muted group-has-[:autofill]:z-10 sm:text-sm/6">
            €
          </span>

          <Input
            placeholder="0.00"
            className="col-span-full row-start-1 pe-10 ps-7"
          />
          <span className="-col-end-1 row-start-1 grid place-content-center px-3 text-base/6 text-muted sm:text-sm/6">
            EUR
          </span>
        </div>
      </TextField>
    </div>
  );
};

export const InputWithNativeSelect = () => {
  return (
    <div className="flex w-72 flex-col gap-y-10">
      <LabeledGroup>
        <Label>Phone number</Label>
        <Group className="group flex">
          <NativeSelectField>
            <Label className="sr-only">Choose country</Label>
            <NativeSelect className="w-max min-w-max rounded-e-none border-e-0 focus-visible:border-transparent focus-visible:ring-2">
              <option value="CA">CA</option>
              <option value="US">US</option>
            </NativeSelect>
          </NativeSelectField>
          <TextField className="flex-1">
            <Label className="sr-only">Phone number</Label>
            <Input
              placeholder="123-457-789"
              className="rounded-s-none focus:rounded-s-md"
            />
          </TextField>
        </Group>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone number</Label>
        <Group className="group flex">
          <TextField className="flex-1">
            <Label className="sr-only">Phone number</Label>
            <Input
              placeholder="123-457-789"
              className="rounded-e-none focus:rounded-e-md group-[&:has(select:focus)]:border-e-0"
            />
          </TextField>

          <NativeSelectField>
            <Label className="sr-only">Choose country</Label>
            <NativeSelect className="min-w-max rounded-s-none border-s-0 focus-visible:border-s">
              <option value="CA">CA</option>
              <option value="US">US</option>
            </NativeSelect>
          </NativeSelectField>
        </Group>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Price</Label>
        <Group className="group flex">
          <TextField className="flex-1">
            <Label className="sr-only">Price</Label>
            <div className="group grid grid-cols-[auto_1fr]">
              <span className="col-start-1 row-start-1 grid place-content-center px-3 text-base/6 text-muted group-has-[:autofill]:z-10 sm:text-sm/6">
                $
              </span>

              <Input
                placeholder="0.00"
                className="col-span-full row-start-1 rounded-e-none pe-10 ps-7 focus:rounded-e-md group-[&:has(select:focus)]:border-e-0"
              />
            </div>
          </TextField>

          <NativeSelectField>
            <Label className="sr-only">Choose currency</Label>
            <NativeSelect className="min-w-max rounded-s-none border-s-0 focus-visible:border-s">
              <option value="US">US</option>
              <option value="CA">CA</option>
            </NativeSelect>
          </NativeSelectField>
        </Group>
      </LabeledGroup>
    </div>
  );
};

export const InputWithSelect = () => {
  return (
    <div className="flex w-80 flex-col space-y-10">
      <LabeledGroup>
        <Label>Phone</Label>
        <Group className="group flex">
          <Select defaultSelectedKey="ca" className="w-max min-w-max">
            <Label className="sr-only">Country</Label>
            <SelectButton className="rounded-e-none border-e-0 focus-visible:border-e"></SelectButton>

            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="ca" textValue="Canada">
                  <SelectListItemLabel>
                    &#127464;&#127462; CA
                  </SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="us" textValue="United States">
                  <SelectListItemLabel>
                    &#127482;&#127480; US
                  </SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>

          <TextField className="flex-1">
            <Label className="sr-only">Phone number</Label>
            <Input
              placeholder="+1 (123) 457-7890"
              className="rounded-s-none focus:rounded-s-md group-[&:has(button:focus)]:border-s-0"
            />
          </TextField>
        </Group>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone</Label>
        <Group className="group flex">
          <TextField className="flex-1">
            <Label className="sr-only">Phone number</Label>
            <Input
              placeholder="+1 (123) 457-7890"
              className="rounded-e-none focus:rounded-e-md group-[&:has(button:focus)]:border-e-0"
            />
          </TextField>

          <Select defaultSelectedKey="ca" className="w-max min-w-max">
            <Label className="sr-only">Country</Label>
            <SelectButton className="rounded-s-none border-s-0 focus-visible:border-s"></SelectButton>

            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="ca" textValue="Canada">
                  <SelectListItemLabel>
                    &#127464;&#127462; CA
                  </SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="us" textValue="United States">
                  <SelectListItemLabel>
                    &#127482;&#127480; US
                  </SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
        </Group>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number</Label>
        <Group className="group flex">
          <Select defaultSelectedKey="ca" className="w-max min-w-max">
            <Label className="sr-only">Phone Country Code</Label>
            <SelectButton className="rounded-e-none border-e-0 focus-visible:border-e"></SelectButton>

            <SelectPopover className="w-36" placement="bottom start">
              <SelectListBox>
                <SelectListItem id="ca" textValue="Canada">
                  <SelectListItemLabel>
                    <span aria-hidden className="mr-1.5 inline-block">
                      &#127464;&#127462;
                    </span>
                    CA
                  </SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="us" textValue="United States">
                  <SelectListItemLabel>
                    <span aria-hidden className="mr-1.5 inline-block">
                      &#127482;&#127480;
                    </span>
                    US
                  </SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>

          <TextField>
            <Label className="sr-only">Phone number</Label>
            <Input
              placeholder="+1 (123) 457-7890"
              className="rounded-none focus:rounded-md group-[&:has(button:focus)]:border-s-0 group-[&:has(select:focus)]:border-e-0"
            />
          </TextField>

          <NativeSelectField>
            <Label className="sr-only">Work phone number type</Label>
            <NativeSelect
              name="work_phone_number_type"
              className="min-w-max rounded-s-none border-s-0 focus-visible:border-s"
            >
              <option value="Mobile">Mobile</option>
              <option value="Phone">Phone</option>
              <option value="Page">Page</option>
              <option value="Fax">Fax</option>
            </NativeSelect>
          </NativeSelectField>
        </Group>
      </LabeledGroup>
    </div>
  );
};

export const InputWithButton = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="group flex">
        <TextField className="flex-1">
          <Label className="sr-only">Email</Label>
          <Input type="email" placeholder="Email" className="rounded-e-none" />
        </TextField>

        <Button
          variant="outline"
          className="rounded-s-none border-s-0 border-border shadow-none"
        >
          Send
        </Button>
      </div>

      <div className="group flex">
        <TextField className="flex-1">
          <Label className="sr-only">Email</Label>
          <div className="group grid grid-cols-[auto_1fr]">
            <span className="col-start-1 row-start-1 grid place-content-center px-3 group-has-[:autofill]:z-10">
              <Icon className="size-5 text-muted/90 sm:size-4">
                <MailIcon />
              </Icon>
            </span>
            <Input
              type="email"
              placeholder="john@example.com"
              className="col-span-full row-start-1 rounded-e-none ps-9"
              autoComplete="email"
            />
          </div>
        </TextField>

        <Button className="rounded-s-none border-s-0 border-border shadow-none">
          <Icon aria-label="Send">
            <SendHorizonalIcon />
          </Icon>
          Invite
        </Button>
      </div>

      <div className="group flex gap-x-2 rounded-lg border p-1.5">
        <TextField className="flex-1 w-72">
          <Label className="sr-only">Email</Label>

          <Input
            type="email"
            placeholder="Email Address"
            className="border-transparent focus:border-ring"
            autoComplete="email"
          />
        </TextField>

        <Button>Join Waitlist</Button>
      </div>

      <div className="group flex">
        <TextField className="flex-1">
          <Label>Search</Label>
          <div className="group grid grid-cols-[auto_1fr_auto]">
            <span className="col-start-1 row-start-1 grid place-content-center px-3 group-has-[:autofill]:z-10">
              <Icon className="size-5 text-muted/90 sm:size-4">
                <MailIcon />
              </Icon>
            </span>

            <Input
              type="text"
              className="col-span-full row-start-1 px-9"
              placeholder="Search..."
            />

            <Button
              variant="plain"
              isIconOnly
              size="sm"
              className="-col-end-1 row-start-1 me-1 self-center"
            >
              <Icon aria-label="Announce">
                <MicIcon />
              </Icon>
            </Button>
          </div>
        </TextField>
      </div>
    </div>
  );
};

export const InputWithHints = () => {
  return (
    <div className="flex w-72 flex-col gap-y-6">
      <TextField>
        <Label requiredHint>Email</Label>
        <Input type="email" placeholder="your@example.com" />
      </TextField>

      <TextField>
        <Label className="flex gap-x-3">
          Email
          <span className="ms-auto font-normal text-muted">Optional</span>
        </Label>
        <Input placeholder="your@example.com" />
        <Description>We won't share your email with anyone</Description>
      </TextField>
    </div>
  );
};
