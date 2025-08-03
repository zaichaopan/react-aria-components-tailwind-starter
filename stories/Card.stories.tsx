import { docs } from '../.storybook/docs';
import { Button } from '../src/button';
import { Card, CardHeader, CardBody, CardFooter } from '../src/card';
import { Checkbox } from '../src/checkbox';
import { Input, Label, TextField } from '../src/field';
import { Form } from '../src/form';
import { PlusIcon } from '../src/icons/outline/plus';
import { Separator } from '../src/separator';
import { Small, Text } from '../src/text';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>Tasks</CardHeader>
        <CardBody className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <Checkbox>Do 30 minutes of yoga</Checkbox>
            <Small>08/2/25</Small>
          </div>

          <Separator soft />

          <div className="flex items-center justify-between gap-4">
            <Checkbox>Dentist appointment</Checkbox>
            <Small>08/2/25</Small>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          Today's Posts
          <Button isIconOnly variant="plain" size="sm" className="ms-auto">
            <PlusIcon className="text-muted" />
          </Button>
        </CardHeader>
        <CardBody className="space-y-2">
          <div className="flex items-center justify-between gap-x-6">
            How React Batches State Updates to Optimize Rendering
            <Button variant="outline" size="sm">
              Published
            </Button>
          </div>

          <Separator soft />

          <div className="flex items-center justify-between gap-x-6">
            10 AI Tools Every Developer Must Try in 2025
            <Button variant="outline" size="sm">
              Published
            </Button>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <Form className="p-6">
            <TextField>
              <Label>Email address</Label>
              <Input placeholder="Enter your email address" />
            </TextField>
            <TextField>
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
            </TextField>
            <Button>Continue</Button>
          </Form>
        </CardBody>

        <CardFooter>Already have an account? Sign In</CardFooter>
      </Card>
    </div>
  );
};
