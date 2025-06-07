import React from 'react';
import { docs } from '../.storybook/docs';
import { Button } from '../src/button';
import {
  Step,
  StepCounter,
  StepIndicatorHeading,
  StepList,
  StepPanel,
  Stepper,
} from '../src/stepper';
import { Icon } from '../src/icon';
import { CarIcon, CircleUserRoundIcon, CreditCardIcon } from 'lucide-react';
import { ChevronRightIcon } from '../src/icons/outline/chevron-right';
import { Form } from '../src/form';
import { Description, Input, Label, TextField } from '../src/field';
import { Heading, SubHeading } from '../src/heading';
import { Text } from '../src/text';
import { ChevronLeftIcon } from '../src/icons/outline/chevron-left';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectPopover,
} from '../src/select';
import {
  Checkbox,
  Checkboxes,
  CheckboxField,
  CheckboxGroup,
} from '../src/checkbox';
import { Radio, RadioGroup, Radios } from '../src/radio-group';
import Callout, { CalloutIcon, CalloutTitle } from '../src/callout';
import { CheckCircleIcon } from '../src/icons/outline/check-circle';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  const steps = 3;
  const [value, setValue] = React.useState(0);

  return (
    <div className="flex flex-col p-8">
      <Stepper value={value} steps={steps} onStepChange={setValue}>
        {({ isFirstStep, isCompleted, prev, next }) => {
          return (
            <div className="space-y-12">
              <StepList className="mx-auto max-w-xl">
                <Step step={1} counter={<StepCounter />}>
                  Personal information
                </Step>
                <Step step={2} counter={<StepCounter />}>
                  Household status
                </Step>
                <Step step={3} counter={<StepCounter />}>
                  Supporting documents
                </Step>
              </StepList>

              <div className="flex justify-center gap-x-4">
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isFirstStep}
                  onPress={prev}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isCompleted}
                  onPress={next}
                >
                  Next
                </Button>
              </div>
            </div>
          );
        }}
      </Stepper>
    </div>
  );
};

export function StepTitleAlignment() {
  const steps = 3;
  const [value, setValue] = React.useState(0);
  return (
    <div className="flex flex-col p-8">
      <Stepper value={value} steps={steps} onStepChange={setValue}>
        {({ isFirstStep, isCompleted, prev, next }) => {
          return (
            <div className="space-y-12">
              <StepList centered={false}>
                <Step step={1} counter={<StepCounter />}>
                  Personal information
                </Step>
                <Step step={2} counter={<StepCounter />}>
                  Household status
                </Step>
                <Step step={3} counter={<StepCounter />}>
                  Supporting documents
                </Step>
              </StepList>

              <div className="flex justify-center gap-x-4">
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isFirstStep}
                  onPress={prev}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isCompleted}
                  onPress={next}
                >
                  Next
                </Button>
              </div>
            </div>
          );
        }}
      </Stepper>
    </div>
  );
}

export function NoStepTitle() {
  const steps = 3;
  const [value, setValue] = React.useState(0);

  return (
    <div className="flex flex-col p-8">
      <Stepper value={value} steps={steps} onStepChange={setValue}>
        {({ isFirstStep, isCompleted, prev, next }) => {
          return (
            <div className="space-y-12">
              <StepList>
                <Step
                  step={1}
                  counter={<StepCounter />}
                  aria-label="Personal information"
                />
                <Step
                  step={2}
                  counter={<StepCounter />}
                  aria-label="Household status"
                />
                <Step
                  step={3}
                  counter={<StepCounter />}
                  aria-label="Supporting documents"
                />
              </StepList>
              <div className="flex justify-center gap-x-4">
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isFirstStep}
                  onPress={prev}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isCompleted}
                  onPress={next}
                >
                  Next
                </Button>
              </div>
            </div>
          );
        }}
      </Stepper>
    </div>
  );
}

export function NoStepCounter() {
  const steps = 3;
  const [value, setValue] = React.useState(0);

  return (
    <div className="flex flex-col space-y-12 p-8">
      <Stepper value={value} steps={steps} onStepChange={setValue}>
        {({ isFirstStep, isCompleted, prev, next }) => {
          return (
            <div className="space-y-12">
              <StepList>
                <Step step={1}>Personal information</Step>
                <Step step={2}>Household status</Step>
                <Step step={3}>Supporting documents</Step>
              </StepList>

              <StepList>
                <Step step={1}>Personal information</Step>
                <Step step={2}>Household status</Step>
                <Step step={3}>Supporting documents</Step>
              </StepList>

              <StepList className="gap-x-0">
                <Step step={1} aria-label="Personal information" />
                <Step step={2} aria-label="Household status" />
                <Step step={3} aria-label="Supporting documents" />
              </StepList>

              <StepList className="mx-auto max-w-lg [--separator-h:--spacing(1)]">
                <Step step={1} aria-label="Personal information" />
                <Step step={2} aria-label="Household status" />
                <Step step={3} aria-label="Supporting documents" />
              </StepList>

              <div className="flex justify-center gap-x-4">
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isFirstStep}
                  onPress={prev}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isCompleted}
                  onPress={next}
                >
                  Next
                </Button>
              </div>
            </div>
          );
        }}
      </Stepper>
    </div>
  );
}

export function Customization() {
  const steps = 3;
  const [value, setValue] = React.useState(0);

  return (
    <div className="flex flex-col space-y-12 p-8">
      <Stepper value={value} steps={steps} onStepChange={setValue}>
        {({ isFirstStep, isCompleted, prev, next }) => {
          return (
            <div className="space-y-12">
              <StepList className="[--counter-highlight:var(--color-green-700)] [--counter-padding:--spacing(2)] [--counter-size:--spacing(9)]">
                <Step
                  step={1}
                  counter={
                    <StepCounter className="p-2">
                      <Icon>
                        <CircleUserRoundIcon />
                      </Icon>
                    </StepCounter>
                  }
                >
                  Personal info
                </Step>
                <Step
                  step={2}
                  counter={
                    <StepCounter className="p-2">
                      <Icon>
                        <CarIcon />
                      </Icon>
                    </StepCounter>
                  }
                >
                  Shipping method
                </Step>
                <Step
                  step={3}
                  counter={
                    <StepCounter className="p-2">
                      <CreditCardIcon />
                    </StepCounter>
                  }
                >
                  Payment
                </Step>
              </StepList>

              <StepList>
                <Step
                  className={({ completed, current }) => {
                    return [
                      'flex-initial flex-row',
                      completed || current
                        ? 'text-(--counter-highlight)'
                        : 'text-muted',
                    ];
                  }}
                  step={1}
                  counter={<StepCounter className="rounded-md" />}
                  separator={<ChevronRightIcon className="size-4" />}
                >
                  Personal Info
                </Step>
                <Step
                  className={({ completed, current }) => {
                    return [
                      'flex-initial flex-row',
                      completed || current
                        ? 'text-(--counter-highlight)'
                        : 'text-muted',
                    ];
                  }}
                  step={2}
                  counter={<StepCounter className="rounded-md" />}
                  separator={<ChevronRightIcon className="size-4" />}
                >
                  Contact Info
                </Step>
                <Step
                  className={({ completed, current }) => {
                    return [
                      'flex-initial flex-row',
                      completed || current
                        ? 'text-(--counter-highlight)'
                        : 'text-muted',
                    ];
                  }}
                  step={3}
                  counter={<StepCounter className="rounded-md" />}
                  separator={<ChevronRightIcon className="size-4" />}
                >
                  Secure Info
                </Step>
              </StepList>

              <div className="flex justify-center gap-x-4">
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isFirstStep}
                  onPress={prev}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="min-w-24"
                  isDisabled={isCompleted}
                  onPress={next}
                >
                  Next
                </Button>
              </div>
            </div>
          );
        }}
      </Stepper>
    </div>
  );
}

export function MultiStepsForm() {
  const steps = [
    { title: 'Personal Information', description: 'Tell us about yourself' },
    { title: 'Address Information', description: 'Where are you located?' },
    { title: 'Preferences', description: 'What are you interested in?' },
  ];

  const [value, setValue] = React.useState(0);
  const [submitting, setSubmitting] = React.useState(false);

  return (
    <div className="mx-auto max-w-xl p-12">
      <Stepper value={value} steps={steps.length} onStepChange={setValue}>
        {({ isFirstStep, isLastStep, isCompleted, next, prev }) => {
          return isCompleted ? (
            <Callout className="mt-6" color="green">
              <CalloutIcon>
                <CheckCircleIcon />
              </CalloutIcon>
              <CalloutTitle>
                Congratulations! Registration completed.
              </CalloutTitle>
            </Callout>
          ) : (
            <>
              <Heading>Registration</Heading>
              <SubHeading>
                Complete all steps to finish your Registration
              </SubHeading>

              <Text aria-hidden>
                Step {value + 1} of {steps.length}
              </Text>
              <div className="space-y-6 pt-2">
                <StepList className="gap-x-0 [--separator-h:--spacing(3)]">
                  {steps.map((step, index) => {
                    return <Step step={index + 1} aria-label={step.title} />;
                  })}
                </StepList>

                <StepIndicatorHeading>
                  <Heading displayLevel={2} elementType="div">
                    {steps[value].title}
                  </Heading>
                  <SubHeading className="mt-0">
                    {steps[value].description}
                  </SubHeading>
                </StepIndicatorHeading>

                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    setTimeout(() => {
                      setSubmitting(false);
                      next();
                    }, 1000);
                  }}
                >
                  <StepPanel step={1}>
                    <section className="grid gap-x-6 gap-y-8 sm:grid-cols-6">
                      <TextField name="firstName" className="sm:col-span-3">
                        <Label>First Name</Label>
                        <Input placeholder="First name" />
                      </TextField>

                      <TextField name="lastName" className="sm:col-span-3">
                        <Label>Last Name</Label>
                        <Input placeholder="Last name" />
                      </TextField>

                      <TextField name="email" className="col-span-full">
                        <Label hint="required">Email</Label>
                        <Input type="email" placeholder="me@example.com" />
                      </TextField>

                      <TextField name="phoneNumber" className="col-span-full">
                        <Label hint="required">Phone Number</Label>
                        <Input placeholder="(555)123-4567" />
                      </TextField>
                    </section>
                  </StepPanel>

                  <StepPanel step={2}>
                    <section className="grid gap-x-6 gap-y-8 sm:grid-cols-6">
                      <TextField name="street" className="col-span-full">
                        <Label>Street Address</Label>
                        <Input placeholder="123 Main St" />
                      </TextField>

                      <TextField name="City" className="sm:col-span-3">
                        <Label>City</Label>
                        <Input placeholder="New York" />
                      </TextField>

                      <Select
                        placeholder="Select a state"
                        name="State"
                        className="sm:col-span-3"
                      >
                        <Label>State</Label>
                        <SelectButton></SelectButton>
                        <SelectPopover>
                          <SelectListBox>
                            <SelectListItem>New York</SelectListItem>
                            <SelectListItem>California</SelectListItem>
                            <SelectListItem>Texas</SelectListItem>
                            <SelectListItem>Florida</SelectListItem>
                          </SelectListBox>
                        </SelectPopover>
                      </Select>

                      <TextField name="zipCode" className="col-span-full">
                        <Label hint="required">ZIP Code</Label>
                        <Input placeholder="12345" />
                      </TextField>
                    </section>
                  </StepPanel>

                  <StepPanel step={3}>
                    <section className="grid gap-x-6 gap-y-8 sm:grid-cols-6">
                      <CheckboxGroup name="interest" className="col-span-full">
                        <Label>Interest</Label>
                        <Description>Select all that apply to you</Description>
                        <Checkboxes>
                          <Checkbox value="technology">Technology</Checkbox>
                          <Checkbox value="design">Design</Checkbox>
                          <Checkbox value="marketing">Marketing</Checkbox>
                          <Checkbox value="business">Business</Checkbox>
                          <Checkbox value="education">Education</Checkbox>
                        </Checkboxes>
                      </CheckboxGroup>

                      <RadioGroup
                        name="contactMethod"
                        className="col-span-full"
                      >
                        <Label>Preferred Contact Method</Label>
                        <Radios>
                          <Radio value="email">Email</Radio>
                          <Radio value="phone">Phone</Radio>
                          <Radio value="both">Both</Radio>
                        </Radios>
                      </RadioGroup>

                      <CheckboxField className="col-span-full">
                        <Checkbox>Subscribe to newsletter</Checkbox>
                        <Description>
                          Receive updates about new features and announcements
                        </Description>
                      </CheckboxField>
                    </section>
                  </StepPanel>

                  <div className="flex justify-between gap-x-4 pt-12">
                    <Button
                      variant="outline"
                      type="button"
                      className="min-w-24"
                      isDisabled={isFirstStep}
                      onPress={prev}
                    >
                      <ChevronLeftIcon />
                      Previous
                    </Button>
                    {isLastStep ? (
                      <Button
                        isPending={submitting}
                        key="submit"
                        type="submit"
                        className="min-w-24"
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        key="button"
                        type="button"
                        className="min-w-24"
                        onPress={next}
                      >
                        Next <ChevronRightIcon />
                      </Button>
                    )}
                  </div>
                </Form>
              </div>
            </>
          );
        }}
      </Stepper>
    </div>
  );
}
