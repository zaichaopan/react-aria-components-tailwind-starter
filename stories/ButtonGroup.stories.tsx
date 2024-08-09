import type { Meta } from '@storybook/react';
import {

  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Star,
} from 'lucide-react';
import { Button, ButtonGroup } from '../src/Button';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/Icon';

const meta: Meta = {
  title: 'ButtonGroup',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use **ButtonGroup** and **Button** component to compose button groups.',
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

export const Example = () => {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button outline>Button1</Button>
        <Button outline>Button2</Button>
        <Button outline>Button3</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button outline>
          <Icon>
            <Star />
          </Icon>
          Star
        </Button>
        <Button outline>1K</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button isIconOnly>
          <Icon aria-label="Zoom In">
            <Plus></Plus>
          </Icon>
        </Button>
        <Button isIconOnly>
          <Icon aria-label="Zoom Out">
            <Minus />
          </Icon>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button isIconOnly color='success'>
          <Icon aria-label="Zoom In">
            <Plus></Plus>
          </Icon>
        </Button>
        <Button isIconOnly color='success'>
          <Icon aria-label="Zoom Out">
            <Minus />
          </Icon>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button isIconOnly outline>
          <Icon aria-label="Previous">
            <ChevronLeft />
          </Icon>
        </Button>
        <Button isIconOnly outline>
          <Icon aria-label="Next">
            <ChevronRight />
          </Icon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const CustomSeparatorColor = () => {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup className="[--separator-color:theme(colors.white/0.15)]">
        <Button isIconOnly>
          <Icon aria-label="Zoom In">
            <Plus></Plus>
          </Icon>
        </Button>
        <Button isIconOnly>
          <Icon aria-label="Zoom Out">
            <Minus />
          </Icon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

CustomSeparatorColor.parameters = {
  docs: {
    description: {
      story:
        'If the **separator** is not visible for some button background, use **className="[--separator-color:\\*]"** to customize the color.',
    },
  },
};
