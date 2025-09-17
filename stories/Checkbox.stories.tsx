import React from 'react';
import type { Meta } from '@storybook/react-vite';
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  Checkboxes,
} from '../src/checkbox';
import { Form } from '../src/form';
import { Button } from '../src/button';
import { Label, Description, FieldError, LabeledGroup } from '../src/field';
import { docs } from '../.storybook/docs';
import { Group } from 'react-aria-components';
import { Strong, Text } from '../src/text';
import { Icon } from '../src/icon';
import { twMerge } from 'tailwind-merge';
import { Link } from '../src/link';
import {
  ExternalLinkIcon,
  MessagesSquareIcon,
  MoonIcon,
  SunIcon,
  VibrateIcon,
} from 'lucide-react';
import { Badge } from '../src/badge';
import { MailIcon } from '../src/icons/outline/mail';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return <Checkbox>I accept to the terms and conditions</Checkbox>;
};

export const CheckboxDescription = () => {
  return (
    <CheckboxField className="max-w-sm">
      <Checkbox>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

export const DisabledState = () => {
  return (
    <CheckboxField className="max-w-sm">
      <Checkbox isDisabled>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

export const ReadonlyState = () => {
  return (
    <CheckboxField className="max-w-sm">
      <Checkbox isReadOnly>Subscribe</Checkbox>
      <Description>
        You will receive our newsletter once per week. Unsubscribe at any time.
      </Description>
    </CheckboxField>
  );
};

export const CheckboxGroups = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Checkboxes>
        <Checkbox value="email">Notify via email</Checkbox>
        <Checkbox value="sms">Notify via SMS</Checkbox>
        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const GroupDescription = () => {
  return (
    <CheckboxGroup>
      <Label>Notifications</Label>
      <Description>
        Please select your preferred method of communication.
      </Description>
      <Checkboxes>
        <CheckboxField>
          <Checkbox value="email">Notify via email</Checkbox>
          <Description>We'll send you a confirmation email</Description>
        </CheckboxField>

        <CheckboxField>
          <Checkbox value="sms">Notify via SMS</Checkbox>
          <Description>
            We'll send you a confirmation SMS.{' '}
            <Link className="text-blue-600">
              Learn more{' '}
              <Icon>
                <ExternalLinkIcon />
              </Icon>
            </Link>
          </Description>
        </CheckboxField>

        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const HorizontalLayout = () => {
  return (
    <CheckboxGroup orientation="horizontal">
      <Label>Notifications</Label>
      <Checkboxes>
        <Checkbox value="email">Notify via email</Checkbox>
        <Checkbox value="sms">Notify via SMS</Checkbox>
        <Checkbox value="telegram">Notify via telegram</Checkbox>
      </Checkboxes>
    </CheckboxGroup>
  );
};

export const LabelPlacement = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <Checkbox labelPlacement="start" defaultSelected>
        I accept the terms and conditions
      </Checkbox>

      <CheckboxGroup labelPlacement="start">
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <CheckboxField>
            <Checkbox value="email">Notify via email</Checkbox>
            <Description>We'll send you a confirmation email</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="sms">Notify via SMS</Checkbox>
            <Description>We'll send you a confirmation SMS</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="telegram">Notify via telegram</Checkbox>
            <Description>We'll send you a confirmation telegram</Description>
          </CheckboxField>
        </Checkboxes>
      </CheckboxGroup>
    </div>
  );
};

export const IndeterminateState = () => {
  const options = ['Notify via email', 'Notify via SMS', 'Notify via Telegram'];
  const [selected, setSelected] = React.useState<Array<string>>([]);

  return (
    <LabeledGroup>
      <Label className="mb-3">Notifications</Label>

      <Group className="space-y-3">
        <Checkbox
          isSelected={selected.length > 0}
          isIndeterminate={
            selected.length > 0 && selected.length !== options.length
          }
          onChange={(checked) => setSelected(checked ? options : [])}
        >
          Select all
        </Checkbox>

        {options.map((option) => (
          <Checkbox
            key={option}
            name={option}
            isSelected={selected.includes(option)}
            onChange={(checked) => {
              return setSelected((pending) => {
                return checked
                  ? [...pending, option]
                  : pending.filter((item) => item !== option);
              });
            }}
          >
            {option}
          </Checkbox>
        ))}
      </Group>
    </LabeledGroup>
  );
};

export const ValidationErrors = () => {
  return (
    <Form>
      <CheckboxGroup isRequired>
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <CheckboxField>
            <Checkbox value="email">Notify via email</Checkbox>
            <Description>We'll send you a confirmation email</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="sms">Notify via SMS</Checkbox>
            <Description>We'll send you a confirmation SMS</Description>
          </CheckboxField>

          <CheckboxField>
            <Checkbox value="telegram">Notify via telegram</Checkbox>
            <Description>We'll send you a confirmation telegram</Description>
          </CheckboxField>
        </Checkboxes>
        <FieldError />
      </CheckboxGroup>
      <Button type="submit">Save</Button>
    </Form>
  );
};

export function Cards() {
  return (
    <div className="mx-auto flex flex-col space-y-16">
      <CheckboxGroup variant="card">
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <Checkbox value="email" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via email</Strong>
              <Text>We'll send you a confirmation email</Text>
            </div>
          </Checkbox>

          <Checkbox value="sms" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via SMS</Strong>
              <Text>We'll send you a confirmation SMS</Text>
            </div>
          </Checkbox>

          <Checkbox value="telegram" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via telegram</Strong>
              <Text>We'll send you a confirmation telegram</Text>
            </div>
          </Checkbox>
        </Checkboxes>
      </CheckboxGroup>

      <CheckboxGroup
        orientation="horizontal"
        variant="card"
        labelPlacement="start"
      >
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>

        <Checkboxes>
          <Checkbox value="email" className="w-68">
            <div className="flex gap-2.5">
              <MailIcon />
              <div>
                <Strong>Notify via email</Strong>
                <Text>We'll send you a confirmation email</Text>
              </div>
            </div>
          </Checkbox>

          <Checkbox value="sms" className="w-68">
            <div className="flex gap-2.5">
              <Icon>
                <MessagesSquareIcon />
              </Icon>
              <div>
                <Strong>Notify via SMS</Strong>
                <Text>We'll send you a confirmation SMS</Text>
              </div>
            </div>
          </Checkbox>

          <Checkbox value="telegram" className="w-68">
            <div className="flex gap-2.5">
              <Icon className="h-[1lh]!">
                <VibrateIcon />
              </Icon>
              <div>
                <Strong>Notify via Telegram</Strong>
                <Text>We'll send you a confirmation telegram</Text>
              </div>
            </div>
          </Checkbox>
        </Checkboxes>
      </CheckboxGroup>

      <CheckboxGroup variant="card" labelPlacement="start">
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <Checkbox value="email" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via email</Strong>
              <Text>We'll send you a confirmation email</Text>
            </div>
          </Checkbox>

          <Checkbox value="sms" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via SMS</Strong>
              <Text>We'll send you a confirmation SMS</Text>
            </div>
          </Checkbox>

          <Checkbox value="telegram" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via telegram</Strong>
              <Text>We'll send you a confirmation telegram</Text>
            </div>
          </Checkbox>
        </Checkboxes>
      </CheckboxGroup>

      <CheckboxGroup orientation="horizontal" variant="card">
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <Checkbox value="email" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via email</Strong>
              <Text>We'll send you a confirmation email</Text>
            </div>
          </Checkbox>

          <Checkbox value="sms" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via SMS</Strong>
              <Text>We'll send you a confirmation SMS</Text>
            </div>
          </Checkbox>

          <Checkbox value="telegram" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via telegram</Strong>
              <Text>We'll send you a confirmation telegram</Text>
            </div>
          </Checkbox>
        </Checkboxes>
      </CheckboxGroup>

      <CheckboxGroup variant="card" compact>
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <Checkbox value="email" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via email</Strong>
              <Text>We'll send you a confirmation email</Text>
            </div>
          </Checkbox>

          <Checkbox value="sms" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via SMS</Strong>
              <Text>We'll send you a confirmation SMS</Text>
            </div>
          </Checkbox>

          <Checkbox value="telegram" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via telegram</Strong>
              <Text>We'll send you a confirmation telegram</Text>
            </div>
          </Checkbox>
        </Checkboxes>
      </CheckboxGroup>

      <CheckboxGroup orientation="horizontal" variant="card" compact>
        <Label>Notifications</Label>
        <Description>
          Please select your preferred method of communication.
        </Description>
        <Checkboxes>
          <Checkbox value="email" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via email</Strong>
              <Text>We'll send you a confirmation email</Text>
            </div>
          </Checkbox>

          <Checkbox value="sms" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via SMS</Strong>
              <Text>We'll send you a confirmation SMS</Text>
            </div>
          </Checkbox>

          <Checkbox value="telegram" className="w-68">
            <div className="flex flex-col gap-y-1">
              <Strong>Notify via telegram</Strong>
              <Text>We'll send you a confirmation telegram</Text>
            </div>
          </Checkbox>
        </Checkboxes>
      </CheckboxGroup>
    </div>
  );
}

export function Customization() {
  return (
    <div className="flex flex-col items-start gap-y-12">
      <CheckboxGroup orientation="horizontal" defaultValue={['Monday']}>
        <Label>Day of week</Label>
        <Checkboxes className="gap-x-1.5">
          {[
            { label: 'Mo', value: 'Monday' },
            { label: ' Tu', value: 'Tuesday' },
            { label: 'We', value: 'Wednesday' },
            { label: 'Th', value: 'Thursday' },
            { label: 'Fr', value: 'Friday' },
            { label: 'Sa', value: 'Saturday' },
            { label: 'Su', value: 'Sunday' },
          ].map((day) => {
            return (
              <Checkbox
                value={day.value}
                key={day.label}
                aria-label={day.value}
                className="rounded-md"
                render={({ isSelected }) => {
                  return (
                    <Badge
                      color="white"
                      data-selection-mode="multiple"
                      {...(isSelected && {
                        variant: 'solid',
                      })}
                      className={twMerge('px-4 py-2 text-sm/6')}
                    >
                      {day.label}
                    </Badge>
                  );
                }}
              />
            );
          })}
        </Checkboxes>
      </CheckboxGroup>

      <CheckboxGroup
        orientation="horizontal"
        defaultValue={['Fantasy', 'Science fiction', 'Biography']}
        className="max-w-72"
      >
        <Label>Genres</Label>
        <Checkboxes className='gap-x-2'>
          {[
            { label: 'Fantasy', value: 'Fantasy' },
            { label: 'Science fiction', value: 'Science fiction' },
            { label: 'Mystery', value: 'Mystery' },
            { label: 'Romance', value: 'Romance' },
            { label: 'Thriller', value: 'Thriller' },
            { label: 'Biography', value: 'Biography' },
            { label: 'Health', value: 'Health' },
            { label: 'Travel', value: 'Travel' },
            { label: 'Humor', value: 'Humor' },
            { label: 'Poetry', value: 'Poetry' },
          ].map((genre) => {
            return (
              <Checkbox
                value={genre.value}
                key={genre.label}
                aria-label={genre.value}
                className="rounded-full"
                render={({ isSelected }) => {
                  return (
                    <Badge
                      color="black"
                      data-selection-mode="multiple"
                      {...(isSelected && {
                        variant: 'solid',
                      })}
                      className={twMerge('rounded-full px-2.5 text-sm/6')}
                    >
                      {genre.label}
                    </Badge>
                  );
                }}
              />
            );
          })}
        </Checkboxes>
      </CheckboxGroup>

      <Checkbox
        className="rounded-lg"
        aria-label="Toggle dark mode"
        render={({ isSelected }) => {
          return (
            <span className="shadow-outline flex rounded-lg p-2.5">
              <Icon className="size-4">
                {isSelected ? <MoonIcon /> : <SunIcon />}
              </Icon>
            </span>
          );
        }}
      ></Checkbox>
    </div>
  );
}