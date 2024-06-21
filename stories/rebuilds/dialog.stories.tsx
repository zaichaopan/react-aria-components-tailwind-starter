import type { Meta } from '@storybook/react';
import { Small, Text } from '../../src/Text';
import { DialogTrigger } from 'react-aria-components';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '../../src/Dialog';
import { Modal } from '../../src/Modal';
import { Form } from '../../src/Form';
import { Select, SelectField, SelectItem } from '../../src/Select';
import { Description, Input, Label, TextField } from '../../src/Field';
import { Button } from '../../src/Button';
import { Radio, RadioGroup, RadioGroupContent } from '../../src/RadioGroup';

const meta: Meta = {
  title: 'Layouts/Dialog',
  parameters: {
    layout: 'centered',
  },
};

export function Dialogs() {
  return (
    <DialogTrigger>
      <Button>Add workspace</Button>
      <Modal size="2xl">
        <Dialog>
          {({ close }) => {
            return (
              <>
                <DialogHeader noCloseButton>Add new workspace</DialogHeader>
                <DialogBody>
                  <Text>With free plan, you can add up to 10 workspaces</Text>
                  <Form
                    className="flex flex-1 flex-col gap-6 py-4"
                    id="edit-profile-form"
                  >
                    <div className="grid flex-1 flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                      <TextField className="flex-1">
                        <Label>Workspace name</Label>
                        <Input placeholder="my_workspace"></Input>
                      </TextField>
                      <SelectField
                        defaultSelectedKey={'empty-workspace'}
                        className="flex-1"
                      >
                        <Label>Starter kit</Label>
                        <Select>
                          <SelectItem id="empty-workspace">
                            None - Empty workspace
                          </SelectItem>
                          <SelectItem>Workspace 1</SelectItem>
                          <SelectItem>Workspace 2</SelectItem>
                        </Select>
                      </SelectField>
                    </div>

                    <div className="flex flex-1">
                      <SelectField
                        defaultSelectedKey={'europe-west-01'}
                        className="flex-1"
                      >
                        <Label>Database region</Label>
                        <Select>
                          <SelectItem id="europe-west-01">
                            europe-west-01
                          </SelectItem>
                          <SelectItem>europe-west-02</SelectItem>
                          <SelectItem>europe-west-03</SelectItem>
                        </Select>
                        <Description>
                          For best performance, choose a region closest to your
                          application.
                        </Description>
                      </SelectField>
                    </div>

                    <div className="flex flex-1">
                      <RadioGroup
                        orientation="horizontal"
                        defaultValue="basic"
                        className="flex-1"
                      >
                        <Label>Database configuration</Label>
                        <RadioGroupContent className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 [&_[slot=radio]]:mt-1.5">
                          <Radio
                            value="basic"
                            className="items-start rounded-md border p-3 shadow-sm data-[selected=true]:border-accent data-[selected=true]:ring-1 data-[selected=true]:ring-accent/15"
                          >
                            <div className="flex flex-col ">
                              <Text className="text-foreground">
                                Basic performance
                              </Text>
                              <Small>1/8 vCPU, 1GB RAM</Small>
                            </div>
                          </Radio>
                          <Radio
                            value="advanced"
                            className="items-start rounded-md border p-3 shadow-sm data-[selected=true]:border-accent data-[selected=true]:ring-1 data-[selected=true]:ring-accent/15"
                          >
                            <div className="flex flex-col">
                              <Text className="text-foreground">
                                Advanced performance
                              </Text>
                              <Small>1/8 vCPU, 1GB RAM</Small>
                            </div>
                          </Radio>
                          <Radio
                            value="turbo"
                            className="items-start rounded-md border p-3 shadow-sm data-[selected=true]:border-accent data-[selected=true]:ring-1 data-[selected=true]:ring-accent/15"
                          >
                            <div className="flex flex-col">
                              <Text className="text-foreground">
                                Turbo performance
                              </Text>
                              <Small>1/8 vCPU, 1GB RAM</Small>
                            </div>
                          </Radio>
                        </RadioGroupContent>
                      </RadioGroup>
                    </div>
                  </Form>
                </DialogBody>
                <DialogFooter>
                  <Button plain onPress={close}>
                    Go back
                  </Button>
                  <Button form="edit-profile-form" type="submit">
                    Add workspace
                  </Button>
                </DialogFooter>
              </>
            );
          }}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

export default meta;
