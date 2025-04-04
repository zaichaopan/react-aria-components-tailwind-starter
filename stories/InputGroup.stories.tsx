import { Group } from 'react-aria-components';
import {
  CircleHelpIcon,
  CreditCardIcon,
  KeyRoundIcon,
  MailIcon,
  MicIcon,
  SearchIcon,
} from 'lucide-react';
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
import { CopyButton } from '../src/clipboard';
import { Tooltip } from '../src/tooltip';
import { twMerge } from 'tailwind-merge';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex w-72 flex-col gap-y-10">
      <TextField>
        <Label>Email</Label>
        <div className="group grid grid-cols-[auto_1fr]">
          <span className="col-start-1 row-start-1 grid place-content-center px-3 group-has-autofill:z-10">
            <Icon className="text-muted size-5 sm:size-4">
              <MailIcon />
            </Icon>
          </span>
          <Input
            type="email"
            placeholder="m@example.com"
            className="col-span-full row-start-1 ps-9"
            autoComplete="email"
          />
        </div>
      </TextField>

      <TextField>
        <Label>Company website</Label>
        <div className="group grid grid-cols-[auto_1fr]">
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

      <TextField>
        <Label>Company website</Label>
        <div className="flex">
          <span className="text-foreground border-input flex items-center rounded-s-md border border-e-0 px-2.5 text-base/6 shadow-xs sm:text-sm/6">
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
        <Label>Label</Label>
        <div className="group grid grid-cols-[1fr_auto]">
          <Input
            placeholder="4444-4444-4444-4444"
            className="col-span-full row-start-1 pe-10"
            autoComplete="email"
          />
          <span className="-col-end-1 row-start-1 grid place-content-center px-3">
            <Icon className="text-muted/90 size-5 sm:size-4">
              <CreditCardIcon />
            </Icon>
          </span>
        </div>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <div className="group grid grid-cols-[auto_1fr_auto]">
          <span className="text-muted col-start-1 row-start-1 grid place-content-center px-3 text-base/6 group-has-autofill:z-10 sm:text-sm/6">
            $
          </span>

          <Input
            placeholder="0.00"
            className="col-span-full row-start-1 ps-7 pe-10"
          />
          <span className="text-muted -col-end-1 row-start-1 grid place-content-center px-3 text-base/6 sm:text-sm/6">
            USD
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
        <Group
          className={twMerge(
            'group isolate flex shadow-xs',
            '[&:has([data-ui=text-field][data-invalid]:not(:focus-within))_[data-ui=native-select-field]:not(:focus-within)_select]:border-destructive',

            '[&:has([data-ui=text-field]_input:focus)]:ring-2',
            '[&:has([data-ui=text-field]_input:focus)]:ring-ring',
            '[&:has([data-ui=text-field]_input:focus)]:rounded-md',
            '[&:has([data-ui=text-field]_input:focus)_[data-ui=native-select-field]_select]:border-transparent',

            '[&:has([data-ui=text-field]:not([data-invalid])_input:not(:focus))>[data-ui=text-field]_input]:ring-0',
            '[&:has([data-ui=text-field]:not([data-invalid])_input:not(:focus))>[data-ui=text-field]_input]:border-input',
          )}
        >
          <NativeSelectField>
            <NativeSelect
              aria-label="Choose country"
              className="focus-visible:ring-ring rounded-e-none border-e-0 shadow-none focus-visible:rounded-md focus-visible:border-transparent focus-visible:ring-2"
            >
              <option value="CA">CA</option>
              <option value="US">US</option>
            </NativeSelect>
          </NativeSelectField>
          <TextField className="flex-1" aria-label="Phone number">
            <Input
              placeholder="123-457-789"
              className="rounded-s-none border-s-0 ps-1 shadow-none focus:border-transparent focus:ring-0"
            />
          </TextField>
        </Group>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone number</Label>
        <Group
          className={twMerge(
            'group isolate flex shadow-xs',
            '[&:has([data-ui=text-field][data-invalid]:not(:focus-within))_[data-ui=native-select-field]:not(:focus-within)_select]:border-destructive',

            '[&:has([data-ui=text-field]_input:focus)]:ring-2',
            '[&:has([data-ui=text-field]_input:focus)]:ring-ring',
            '[&:has([data-ui=text-field]_input:focus)]:rounded-md',

            '[&:has([data-ui=text-field]_input:focus)_[data-ui=native-select-field]_select]:border-transparent',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:ring-0',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:border-transparent',
          )}
        >
          <TextField className="flex-1" aria-label="Phone number">
            <Input
              placeholder="123-457-789"
              className="rounded-e-none border-e-0 shadow-none focus:ring-0"
            />
          </TextField>

          <NativeSelectField>
            <NativeSelect
              aria-label="Choose country"
              className="focus-visible:ring-ring rounded-s-none border-s-0 shadow-none focus-visible:rounded-md focus-visible:border-transparent focus-visible:ring-2"
            >
              <option value="CA">CA</option>
              <option value="US">US</option>
            </NativeSelect>
          </NativeSelectField>
        </Group>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Price</Label>
        <Group
          className={twMerge(
            'group isolate flex shadow-xs',
            '[&:has([data-ui=text-field][data-invalid]:not(:focus-within))_[data-ui=native-select-field]:not(:focus-within)_select]:border-destructive',

            '[&:has([data-ui=text-field]_input:focus)]:ring-2',
            '[&:has([data-ui=text-field]_input:focus)]:ring-ring',
            '[&:has([data-ui=text-field]_input:focus)]:rounded-md',

            '[&:has([data-ui=text-field]_input:focus)_[data-ui=native-select-field]_select]:border-transparent',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:ring-0',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:border-transparent',
          )}
        >
          <TextField className="flex-1" aria-label="Price">
            <div className="group grid grid-cols-[auto_1fr]">
              <span className="text-muted col-start-1 row-start-1 grid place-content-center px-3 text-base/6 group-has-autofill:z-10 sm:text-sm/6">
                $
              </span>
              <Input
                placeholder="0.00"
                className="col-span-full row-start-1 rounded-e-none border-e-0 ps-7 pe-10 shadow-none focus:rounded-e-md focus:ring-0"
              />
            </div>
          </TextField>

          <NativeSelectField>
            <NativeSelect
              aria-label="Choose currency"
              className="focus-visible:ring-ring min-w-max rounded-s-none border-s-0 shadow-none focus-visible:rounded-md focus-visible:border-transparent focus-visible:ring-2"
            >
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

        <Group
          className={twMerge(
            'group isolate flex shadow-xs',
            '[&:has([data-ui=text-field][data-invalid]:not(:focus-within))_[data-ui=select]_button:not(:focus-visible)]:border-destructive',

            '[&:has([data-ui=text-field]_input:focus)]:ring-2',
            '[&:has([data-ui=text-field]_input:focus)]:ring-ring',
            '[&:has([data-ui=text-field]_input:focus)]:rounded-md',

            '[&:has([data-ui=text-field]_input:focus)_[data-ui=select]_button]:border-transparent',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:ring-0',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:border-transparent',
          )}
        >
          <Select
            defaultSelectedKey="ca"
            className="w-max min-w-max"
            aria-label="Country"
          >
            <SelectButton className="rounded-e-none border-e-0 shadow-none focus-visible:rounded-md focus-visible:border-transparent focus-visible:ring-2"></SelectButton>

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

          <TextField className="flex-1" aria-label="Phone number">
            <Input
              placeholder="+1 (123) 457-7890"
              className="rounded-s-none border-s-0 ps-1 shadow-none focus:rounded-s-md focus:ring-0"
            />
          </TextField>
        </Group>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone</Label>
        <Group
          className={twMerge(
            'group isolate flex shadow-xs',
            '[&:has([data-ui=text-field][data-invalid]:not(:focus-within))_[data-ui=select]_button:not(:focus-visible)]:border-destructive',

            '[&:has([data-ui=text-field]_input:focus)]:ring-2',
            '[&:has([data-ui=text-field]_input:focus)]:ring-ring',
            '[&:has([data-ui=text-field]_input:focus)]:rounded-md',

            '[&:has([data-ui=text-field]_input:focus)_[data-ui=select]_button]:border-transparent',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:ring-0',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:border-transparent',
          )}
        >
          <TextField className="flex-1">
            <Label className="sr-only">Phone number</Label>
            <Input
              placeholder="+1 (123) 457-7890"
              className="rounded-e-none border-e-0 shadow-none focus:ring-0"
            />
          </TextField>

          <Select defaultSelectedKey="ca" className="w-max min-w-max">
            <Label className="sr-only">Country</Label>
            <SelectButton className="rounded-s-none border-s-0 shadow-none focus-visible:rounded-md focus-visible:border-transparent focus-visible:ring-2"></SelectButton>

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
        <Group
          // className="group [&:has([data-ui=text-field][data-invalid]:not(:focus-within))_:is([data-ui=select]_button,[data-ui=native-select-field]:not(:focus-within)_select):not(:focus-visible)]:border-destructive isolate flex shadow-xs"

          className={twMerge(
            'group isolate flex shadow-xs',
            '[&:has([data-ui=text-field][data-invalid]:not(:focus-within))_:is([data-ui=select]_button,[data-ui=native-select-field]:not(:focus-within)_select):not(:focus-visible)]:border-destructive',

            '[&:has([data-ui=text-field]_input:focus)]:ring-2',
            '[&:has([data-ui=text-field]_input:focus)]:ring-ring',
            '[&:has([data-ui=text-field]_input:focus)]:rounded-md',

            '[&:has([data-ui=text-field]_input:focus)_[data-ui=select]_button]:border-transparent',
            '[&:has([data-ui=text-field]_input:focus)_[data-ui=native-select-field]_select]:border-transparent',

            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:ring-0',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:border-transparent',
          )}
        >
          <Select
            defaultSelectedKey="ca"
            className="w-max min-w-max"
            aria-label="Phone Country Code"
          >
            <SelectButton className="rounded-e-none border-e-0 shadow-none focus-visible:rounded-md focus-visible:border-transparent focus-visible:ring-2"></SelectButton>

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

          <TextField aria-label="Phone number">
            <Input
              placeholder="+1 (123) 457-7890"
              className="rounded-none border-x-0 ps-0 shadow-none focus:rounded-md focus:ring-0"
            />
          </TextField>

          <NativeSelectField>
            <NativeSelect
              aria-label="Work phone number type"
              name="work_phone_number_type"
              className="min-w-max rounded-s-none border-s-0 shadow-none focus-visible:rounded-md focus-visible:border-transparent focus-visible:ring-2"
            >
              <option value="Mobile">Mobile</option>
              <option value="Phone">Phone</option>
              <option value="Page">Page</option>
              <option value="Fax">Fax</option>
            </NativeSelect>
          </NativeSelectField>
        </Group>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number</Label>
        <Group
          className={twMerge(
            'group isolate flex shadow-xs',
            '[&:has([data-ui=text-field][data-invalid]:not(:focus-within))_[data-ui=select]_button:not(:focus-visible)]:border-destructive',

            '[&:has([data-ui=text-field]_input:focus)]:ring-2',
            '[&:has([data-ui=text-field]_input:focus)]:ring-ring',
            '[&:has([data-ui=text-field]_input:focus)]:rounded-md',

            '[&:has([data-ui=text-field]_input:focus)_[data-ui=select]_button]:border-transparent',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:ring-0',
            '[&:has([data-ui=text-field]_input:focus)>[data-ui=text-field]_input]:border-transparent',
          )}
        >
          <Select
            defaultSelectedKey="ca"
            className="w-max min-w-max"
            aria-label="Phone Country Code"
          >
            <SelectButton className="rounded-e-none border-e-0 shadow-none focus-visible:rounded-md focus-visible:border-transparent focus-visible:ring-2"></SelectButton>

            <SelectPopover className="w-36" placement="bottom start">
              <SelectListBox>
                <SelectListItem id="ca" textValue="Canada">
                  CA
                </SelectListItem>
                <SelectListItem id="us" textValue="United States">
                  US
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>

          <TextField className="flex-1" aria-label="Phone number">
            <div className="group grid grid-cols-[auto_1fr]">
              <span className="text-foreground col-start-1 row-start-1 grid place-content-center text-base/6 group-has-autofill:z-10 sm:text-sm/6">
                +1
              </span>

              <Input
                placeholder="Enter your phone number"
                className="col-span-full row-start-1 rounded-s-none border-s-0 ps-6 shadow-none focus:rounded-md focus:ring-0"
                autoComplete="email"
              />
            </div>
          </TextField>
        </Group>
      </LabeledGroup>
    </div>
  );
};

export const InputWithButton = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="group border-input flex gap-x-2 rounded-md border shadow-xs">
        <TextField className="flex-1" aria-label="Email">
          <Input
            type="email"
            placeholder="Your email address"
            className="border-none ring-0 shadow-none"
          />
        </TextField>

        <Button variant="plain" className="rounded-s-none border-s">
          Subscribe
        </Button>
      </div>

      <div className="group flex">
        <TextField className="flex-1" aria-label="Key">
          <div className="group grid grid-cols-[auto_1fr_auto]">
            <span className="col-start-1 row-start-1 grid place-content-center px-3 group-has-autofill:z-10">
              <Icon className="text-muted size-5 sm:size-4">
                <KeyRoundIcon />
              </Icon>
            </span>

            <Input
              type="text"
              className="col-span-full row-start-1 px-9"
              value="X7K9P2M4Q8R5T3V6W9Y1Z0"
            />

            <CopyButton
              size="sm"
              isIconOnly
              variant="plain"
              className="[&:not(:hover)]:text-muted -col-end-1 row-start-1 me-1 self-center"
              copyValue="X7K9P2M4Q8R5T3V6W9Y1Z0"
            ></CopyButton>
          </div>
        </TextField>
      </div>

      <div className="group flex">
        <TextField className="flex-1" aria-label="Search">
          <div className="group grid grid-cols-[auto_1fr_auto]">
            <span className="col-start-1 row-start-1 grid place-content-center px-3 group-has-autofill:z-10">
              <Icon className="text-muted size-5 sm:size-4">
                <SearchIcon />
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
              className="[&:not(:hover)]:text-muted -col-end-1 row-start-1 me-1 self-center"
            >
              <Icon aria-label="Announce">
                <MicIcon />
              </Icon>
            </Button>
          </div>
        </TextField>
      </div>

      <div className="group flex">
        <TextField className="flex-1" aria-label="Account">
          <div className="group grid grid-cols-[1fr_auto]">
            <Input
              type="text"
              className="col-span-full row-start-1 pe-9"
              placeholder="Account number"
            />

            <Button
              variant="plain"
              isIconOnly
              size="sm"
              tooltip={<Tooltip>This is a simple tooltip</Tooltip>}
              className="[&:not(:hover)]:text-muted -col-end-1 row-start-1 me-1 self-center"
            >
              <Icon aria-label="Help">
                <CircleHelpIcon />
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
          <span className="text-muted ms-auto font-normal">Optional</span>
        </Label>
        <Input placeholder="your@example.com" />
        <Description>We won't share your email with anyone</Description>
      </TextField>
    </div>
  );
};
