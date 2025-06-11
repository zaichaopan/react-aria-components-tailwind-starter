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
import { Input, Label, TextField } from '../src/field';
import { NativeSelect, NativeSelectField } from '../src/native-select';

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

              <StepList className="gap-x-0 [--separator-radius:0]">
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

export function CompleteExample() {
  const steps = 3;
  const [value, setValue] = React.useState(0);

  return (
    <div className="mx-auto max-w-xl space-y-12 p-12">
      <Stepper value={value} steps={steps} onStepChange={setValue}>
        {({ isFirstStep, isLastStep, isCompleted, next, prev }) => {
          return (
            <div className="space-y-12">
              <StepList>
                <Step step={1} counter={<StepCounter />}>
                  Client information
                </Step>

                <Step step={2} counter={<StepCounter />}>
                  Contact Information
                </Step>

                <Step step={3} counter={<StepCounter />}>
                  Ethics Questionnaire
                </Step>
              </StepList>

              <StepIndicatorHeading className="sr-only">
                Step {value + 1}/{steps}
              </StepIndicatorHeading>

              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Submitting...');
                  next();
                }}
              >
                <StepPanel step={1}>
                  <section className="space-y-6">
                    <TextField name="email">
                      <Label requiredHint>Email</Label>
                      <Input type="email" />
                    </TextField>

                    <TextField name="username">
                      <Label requiredHint>Username</Label>
                      <Input />
                    </TextField>
                  </section>
                </StepPanel>

                <StepPanel step={2}>
                  <section className="space-y-6">
                    <TextField name="firstName">
                      <Label requiredHint>First Name</Label>
                      <Input />
                    </TextField>

                    <TextField name="lastName">
                      <Label requiredHint>Last Name</Label>
                      <Input />
                    </TextField>
                  </section>
                </StepPanel>

                <StepPanel step={3}>
                  <section>
                    <NativeSelectField>
                      <Label>City</Label>
                      <NativeSelect>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="London">London</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Moscow">Moscow</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="New York">New York</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Tokyo">Tokyo</option>
                      </NativeSelect>
                    </NativeSelectField>
                  </section>
                </StepPanel>

                <div className="flex justify-end gap-x-4">
                  <Button
                    variant="outline"
                    type="button"
                    className="min-w-24"
                    isDisabled={isFirstStep}
                    onPress={prev}
                  >
                    Previous
                  </Button>
                  {isLastStep || isCompleted ? (
                    <Button
                      key="submit"
                      type="submit"
                      variant="outline"
                      className="min-w-24"
                      isDisabled={isCompleted}
                    >
                      Finish
                    </Button>
                  ) : (
                    <Button
                      key="button"
                      type="button"
                      variant="outline"
                      className="min-w-24"
                      onPress={next}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </Form>
            </div>
          );
        }}
      </Stepper>
    </div>
  );
}
