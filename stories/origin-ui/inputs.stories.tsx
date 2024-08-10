import { Button } from '../../src/button';
import { Small, Text, TextLink } from '../../src/text';
import {
  Description,
  LabeledGroup,
  Input,
  Label,
  TextField,
  FieldError,
} from '../../src/field';
import { InputGroup, InputAddon, InputSeparator } from '../../src/input-group';
import { NativeSelect, NativeSelectField } from '../../src/native-select';
import { Icon } from '../../src/accessible-icon';
import { PasswordInput } from '../../src/password-input';
import { SearchIcon, SpinnerIcon } from '../../src/icons';
import { Kbd } from '../../src/kbd';
import { NumberField, NumberInput } from '../../src/number-field';
import { Heading } from '../../src/heading';
import { DateField, DateInput } from '../../src/date-field';
import { TimeField } from '../../src/time-field';
import {
  DatePicker,
  DatePickerButton,
  DatePickerInput,
} from '../../src/date-picker';
import {
  DateRangePicker,
  DateRangePickerButton,
  DateRangePickerInput,
} from '../../src/date-range-picker';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemLabel,
  SelectPopover,
} from '../../src/select';

const meta = {
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

function Box({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        'p-6 md:p-10 md:p-12',
        'border-border/50',
        'md:[&:not(:nth-child(2n))]:border-e',
        'lg:[&:not(:nth-child(2n))]:border-e-0',
        'lg:[&:not(:nth-child(3n))]:border-e',
        '[&:not(:nth-child(-n+1))]:border-t',
        'md:[&:not(:nth-child(-n+1))]:border-t-0',
        'md:[&:not(:nth-child(-n+2))]:border-t',
        'lg:[&:not(:nth-child(-n+2))]:border-t-0',
        'lg:[&:not(:nth-child(-n+3))]:border-t',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export const Inputs = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-16 sm:px-6 lg:px-8">
      <Heading className="text-center">Input</Heading>
      <Text className="text-center">
        A growing collection of input components built with React Aria
        Components. Inspired by{' '}
        <TextLink href="https://originui.com/inputs" target="_blank">
          OriginUI/Inputs
        </TextLink>
      </Text>
      <div className="grid pt-10 md:grid-cols-2 lg:grid-cols-3">
        <Box>
          <TextField>
            <Label>Simple input</Label>
            <Input placeholder="email" />
          </TextField>
        </Box>

        <Box>
          <TextField isRequired>
            <Label requiredHint>Simple input</Label>
            <Input placeholder="email" />
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with help text</Label>
            <Input placeholder="email" />
            <Description>We won't share your email with anyone</Description>
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label className="flex gap-x-3">
              Email
              <Small className="bg-zinc-800/5 items-center flex rounded px-1.5">Optional</Small>
            </Label>
            <Input placeholder="email" />
            <Description>We won't share your email with anyone</Description>
          </TextField>
        </Box>

        <Box>
          <TextField isInvalid defaultValue="invalid@example.com">
            <Label>Input with error</Label>
            <Input placeholder="email" />
            <FieldError>Email is invalid</FieldError>
          </TextField>
        </Box>

        <Box>
          <TextField isDisabled>
            <Label>Disabled input</Label>
            <Input placeholder="email" />
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with start icon</Label>
            <InputGroup inline role="presentation">
              <InputAddon>&#x40;</InputAddon>
              <Input placeholder="email" />
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with end icon</Label>
            <InputGroup inline role="presentation">
              <Input placeholder="email" />
              <InputAddon>
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <rect
                        width="18.5"
                        height="15.5"
                        x="2.75"
                        y="4.25"
                        rx="3"
                      />
                      <path d="m2.75 8l8.415 3.866a2 2 0 0 0 1.67 0L21.25 8" />
                    </g>
                  </svg>
                </Icon>
              </InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with start inline add-on</Label>
            <InputGroup role="presentation" inline>
              <InputAddon>https://</InputAddon>
              <Input placeholder="google.com" className="ps-16" />
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with end inline add-on</Label>
            <InputGroup role="presentation" inline>
              <Input placeholder="google.com" className="pe-14" />
              <InputAddon>.com</InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with end add-on</Label>
            <InputGroup role="presentation">
              <Input placeholder="google.com" />
              <InputAddon>.com</InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with inline add-ons</Label>

            <InputGroup role="presentation" inline>
              <InputAddon>€</InputAddon>
              <Input placeholder="0.00" className="pe-10 ps-7" />
              <InputAddon>EUR</InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <LabeledGroup>
            <Label> Input with inline start and end add-on</Label>
            <InputGroup>
              <TextField>
                <Label> Input</Label>
                <InputGroup role="presentation" inline>
                  <InputAddon>€</InputAddon>
                  <Input placeholder="0.00" className="ps-7" />
                </InputGroup>
              </TextField>
              <InputSeparator />
              <InputAddon>EUR</InputAddon>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label> Input with start and end add-on</Label>
            <InputGroup>
              <InputAddon>€</InputAddon>
              <InputSeparator />
              <TextField>
                <Label> Input</Label>
                <Input placeholder="0.00" />
              </TextField>
              <InputSeparator />
              <InputAddon>EUR</InputAddon>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with start native select</Label>
            <InputGroup>
              <NativeSelectField>
                <Label>Protocol</Label>
                <NativeSelect name="protocol">
                  <option value="https">https://</option>
                  <option value="http://">http://</option>
                  <option value="ftp://">ftp://</option>
                  <option value="sftp://">sftp://</option>
                </NativeSelect>
              </NativeSelectField>
              <InputSeparator />
              <TextField>
                <Label>Input with start select</Label>
                <Input placeholder="192.168.1.1" />
              </TextField>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with inline start native select</Label>
            <InputGroup inline>
              <NativeSelectField>
                <Label>Protocol</Label>
                <NativeSelect name="protocol">
                  <option value="https">https://</option>
                  <option value="http://">http://</option>
                  <option value="ftp://">ftp://</option>
                  <option value="sftp://">sftp://</option>
                </NativeSelect>
              </NativeSelectField>
              <InputSeparator />
              <TextField>
                <Label>Input with start select</Label>
                <Input placeholder="192.168.1.1" />
              </TextField>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with end native select</Label>
            <InputGroup>
              <TextField>
                <Label>Input with end select</Label>
                <Input placeholder="google" />
              </TextField>
              <InputSeparator />
              <NativeSelectField>
                <Label>Domain suffix</Label>
                <NativeSelect name="domain_suffix">
                  <option value=".com">.com</option>
                  <option value=".org">.org</option>
                  <option value=".net">.net</option>
                </NativeSelect>
              </NativeSelectField>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with inline end native select</Label>
            <InputGroup inline>
              <TextField>
                <Label>Input with end select</Label>
                <Input placeholder="google" />
              </TextField>
              <InputSeparator />
              <NativeSelectField>
                <Label>Domain suffix</Label>
                <NativeSelect name="domain_suffix">
                  <option value=".com">.com</option>
                  <option value=".org">.org</option>
                  <option value=".net">.net</option>
                </NativeSelect>
              </NativeSelectField>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with start select</Label>
            <InputGroup>
              <Select defaultSelectedKey="ca">
                <Label>Country</Label>
                <SelectButton></SelectButton>

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
              <InputSeparator />
              <TextField>
                <Label>Phone number</Label>
                <Input placeholder="+1 (123) 457-7890" />
              </TextField>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with inline start select</Label>
            <InputGroup inline>
              <Select defaultSelectedKey="ca">
                <Label>Country</Label>
                <SelectButton></SelectButton>

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
              <InputSeparator />
              <TextField>
                <Label>Phone number</Label>
                <Input placeholder="+1 (123) 457-7890" />
              </TextField>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with end select</Label>
            <InputGroup>
              <TextField>
                <Label>Phone number</Label>
                <Input placeholder="+1 (123) 457-7890" />
              </TextField>

              <InputSeparator />

              <Select defaultSelectedKey="ca">
                <Label>Country</Label>
                <SelectButton></SelectButton>

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
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with inline end select</Label>
            <InputGroup inline>
              <TextField>
                <Label>Phone number</Label>
                <Input placeholder="+1 (123) 457-7890" />
              </TextField>

              <InputSeparator />

              <Select defaultSelectedKey="ca">
                <Label>Country</Label>
                <SelectButton></SelectButton>

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
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input start add-ons and end select</Label>
            <InputGroup>
              <InputAddon>$</InputAddon>
              <InputSeparator />
              <TextField>
                <Label>Price</Label>
                <Input placeholder="0.00" />
              </TextField>
              <InputSeparator />
              <Select defaultSelectedKey="CA">
                <Label>Currency</Label>
                <SelectButton></SelectButton>
                <SelectPopover placement="bottom end" className="w-36">
                  <SelectListBox>
                    <SelectListItem id="CA" textValue="CA">
                      <SelectListItemLabel>CA</SelectListItemLabel>
                    </SelectListItem>
                    <SelectListItem id="USD" textValue="USD">
                      <SelectListItemLabel>USD</SelectListItemLabel>
                    </SelectListItem>
                  </SelectListBox>
                </SelectPopover>
              </Select>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input inline start add-ons and end select</Label>
            <InputGroup>
              <TextField>
                <Label>Price</Label>
                <InputGroup inline>
                  <InputAddon>$</InputAddon>
                  <Input placeholder="0.00" />
                </InputGroup>
              </TextField>
              <InputSeparator />
              <Select defaultSelectedKey="CA">
                <Label>Currency</Label>
                <SelectButton></SelectButton>
                <SelectPopover placement="bottom end" className="w-36">
                  <SelectListBox>
                    <SelectListItem id="CA" textValue="CA">
                      <SelectListItemLabel>CA</SelectListItemLabel>
                    </SelectListItem>
                    <SelectListItem id="USD" textValue="USD">
                      <SelectListItemLabel>USD</SelectListItemLabel>
                    </SelectListItem>
                  </SelectListBox>
                </SelectPopover>
              </Select>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input inline add-ons and inline end select</Label>
            <InputGroup inline>
              <TextField>
                <Label>Price</Label>
                <InputGroup inline>
                  <InputAddon>$</InputAddon>
                  <Input placeholder="0.00" />
                </InputGroup>
              </TextField>
              <InputSeparator />
              <Select defaultSelectedKey="CA">
                <Label>Currency</Label>
                <SelectButton></SelectButton>
                <SelectPopover placement="bottom end" className="w-36">
                  <SelectListBox>
                    <SelectListItem id="CA" textValue="CA">
                      <SelectListItemLabel>CA</SelectListItemLabel>
                    </SelectListItem>
                    <SelectListItem id="USD" textValue="USD">
                      <SelectListItemLabel>USD</SelectListItemLabel>
                    </SelectListItem>
                  </SelectListBox>
                </SelectPopover>
              </Select>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with start native select and end button</Label>
            <InputGroup>
              <NativeSelectField>
                <Label>Role</Label>
                <NativeSelect name="role">
                  <option value="members">Members</option>
                  <option value="admin">Admin</option>
                </NativeSelect>
              </NativeSelectField>

              <InputSeparator />

              <TextField>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
              </TextField>

              <InputSeparator />

              <Button>Send</Button>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with inline start native select and end button</Label>
            <InputGroup inline>
              <NativeSelectField>
                <Label>Role</Label>
                <NativeSelect name="role">
                  <option value="members">Members</option>
                  <option value="admin">Admin</option>
                </NativeSelect>
              </NativeSelectField>

              <InputSeparator />

              <TextField>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
              </TextField>

              <InputSeparator />

              <Button>Send</Button>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with end native select and button</Label>
            <InputGroup>
              <TextField>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
              </TextField>

              <InputSeparator />

              <NativeSelectField>
                <Label>Role</Label>
                <NativeSelect name="role">
                  <option value="members">Members</option>
                  <option value="admin">Admin</option>
                </NativeSelect>
              </NativeSelectField>

              <InputSeparator />

              <Button>Send</Button>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with inline end native select and button</Label>
            <InputGroup inline>
              <TextField>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
              </TextField>

              <InputSeparator />

              <NativeSelectField>
                <Label>Role</Label>
                <NativeSelect name="role">
                  <option value="members">Members</option>
                  <option value="admin">Admin</option>
                </NativeSelect>
              </NativeSelectField>

              <InputSeparator />

              <Button>Send</Button>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with end icon button</Label>
            <InputGroup>
              <TextField>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
              </TextField>
              <InputSeparator />

              <Button isIconOnly variant="outline">
                <Icon aria-label="Download">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
                    />
                  </svg>
                </Icon>
              </Button>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <LabeledGroup>
            <Label>Input with end button</Label>
            <InputGroup>
              <TextField>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
              </TextField>

              <InputSeparator />

              <Button variant="outline">Send</Button>
            </InputGroup>
          </LabeledGroup>
        </Box>

        <Box>
          <div className="flex gap-2">
            <TextField>
              <Label>Input with button</Label>
              <Input type="email" placeholder="Email" />
            </TextField>

            <Button variant="outline" className="self-end">
              Send
            </Button>
          </div>
        </Box>

        <Box>
          <TextField name="password">
            <Label>Show/hide password input</Label>
            <PasswordInput placeholder="Password" />
          </TextField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with clear button</Label>
            <InputGroup inline>
              <Input
                className="peer"
                placeholder="Type something&hellip;"
              ></Input>
              <InputAddon className="pe-1 peer-placeholder-shown:invisible">
                <Button variant="plain" size="sm" isIconOnly>
                  <Icon aria-label="Clear">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249c12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0c12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248"
                      />
                    </svg>
                  </Icon>
                </Button>
              </InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <TextField type="search">
            <Label>Search input with &lt;kbd&gt;</Label>
            <InputGroup inline>
              <Input className="[&::-webkit-search-cancel-button]:hidden" />
              <InputAddon className="pe-1">
                <div className="flex rounded-md border px-1 py-1">
                  <Kbd className="sm:text-xs">⌘</Kbd>
                  <Kbd className="sm:text-xs">K</Kbd>
                </div>
              </InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <TextField type="search">
            <Label>Search input with icon and button</Label>
            <InputGroup inline>
              <InputAddon>
                <SearchIcon />
              </InputAddon>
              <Input className="[&::-webkit-search-cancel-button]:hidden" />
              <InputAddon className="pe-1">
                <Button variant="plain" isIconOnly size="sm">
                  <Icon aria-label="Submit search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"
                      />
                    </svg>
                  </Icon>
                </Button>
              </InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <TextField type="search">
            <Label>Search input with loader</Label>

            <InputGroup inline className="">
              <InputAddon>
                <SpinnerIcon />
              </InputAddon>
              <Input
                className="[&::-webkit-search-cancel-button]:hidden"
                placeholder="Search&hellip;"
              />
              <InputAddon className="pe-1">
                <Button variant="plain" isIconOnly size="sm">
                  <Icon aria-label="Press to speak">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2m7 9v3" />
                      </g>
                    </svg>
                  </Icon>
                </Button>
              </InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <NumberField defaultValue={1024}>
            <Label>Number input with plus/minus buttons</Label>
            <NumberInput className="text-center" />
          </NumberField>
        </Box>

        <Box>
          <TextField>
            <Label>Input with character limit</Label>
            <InputGroup role="presentation" inline>
              <Input />
              <InputAddon>0/50</InputAddon>
            </InputGroup>
          </TextField>
        </Box>

        <Box>
          <DateField>
            <Label>Date input</Label>
            <DateInput />
          </DateField>
        </Box>

        <Box>
          <TimeField>
            <Label>Time input</Label>
            <DateInput />
          </TimeField>
        </Box>

        <Box>
          <DatePicker>
            <Label>Date picker</Label>
            <DatePickerInput></DatePickerInput>
          </DatePicker>
        </Box>

        <Box>
          <DatePicker>
            <Label>Date picker button</Label>
            <DatePickerButton>Select date</DatePickerButton>
            <FieldError />
          </DatePicker>
        </Box>

        <Box>
          <DateRangePicker>
            <Label>Date range picker</Label>
            <DateRangePickerInput />
          </DateRangePicker>
        </Box>

        <Box>
          <DateRangePicker>
            <Label>Date range picker button</Label>
            <DateRangePickerButton>Select dates</DateRangePickerButton>
          </DateRangePicker>
        </Box>
      </div>
    </div>
  );
};
