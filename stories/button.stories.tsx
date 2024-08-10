import React from 'react';
import type { Meta } from '@storybook/react';
import type { Selection } from 'react-aria-components';
import {
  SquareArrowOutUpRight,
  FolderPlus,
  MicIcon,
  MicOffIcon,
  MoreHorizontalIcon,
  XIcon,
  DownloadIcon,
  CloudUploadIcon,
  UploadCloudIcon,
  PlusIcon,
  MinusIcon,
  ChevronRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react';
import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from '../src/button';
import { docs } from '../.storybook/docs';
import { Avatar } from '../src/avatar';
import { Link } from '../src/link';
import { Icon } from '../src/accessible-icon';
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  MenuButton,
  MenuSeparator,
  MenuItemLabel,
  MenuItemDescription,
} from '../src/menu';
import { SpinnerIcon } from '../src/icons';
import { TooltipTrigger, Tooltip } from '../src/tooltip';

const meta: Meta = {
  title: 'Button',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">**button**</a> allows a user to perform an action, with mouse, touch, and keyboard interactions.',
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
  return <Button>Button</Button>;
};

export const ButtonColors = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button>Button</Button>
      <Button color="destructive">Button</Button>
      <Button color="success">Button</Button>
    </div>
  );
};

ButtonColors.parameters = {
  docs: {
    description: {
      story:
        'Use the **color** prop to set the button color. The default color is **accent**.',
    },
  },
};

export const ButtonSizes = () => {
  return (
    <div className="flex items-end gap-3">
      <Button size="lg" variant="outline">
        Button
      </Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="sm">
        Button
      </Button>
    </div>
  );
};

ButtonSizes.parameters = {
  docs: {
    description: {
      story: 'Use the **size** the prop to set the button size.',
    },
  },
};

export const ButtonVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="plain">Button</Button>
      <Button variant="unstyle">Button</Button>
    </div>
  );
};

ButtonVariants.parameters = {
  docs: {
    description: {
      story:
        'Use the **variant** prop to render buttons with different styles. The default variant is **solid**.',
    },
  },
};

export const ButtonWithIcons = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button>
          <Icon>
            <CloudUploadIcon />
          </Icon>
          Deploy
        </Button>
        <Button variant="outline">
          <Icon>
            <DownloadIcon />
          </Icon>
          Export
        </Button>
        <Button size="lg">
          Live preview
          <Icon>
            <SquareArrowOutUpRight strokeWidth={1.5} />
          </Icon>
        </Button>
        <Button size="lg" variant="outline">
          Get template
          <Icon>
            <ChevronRightIcon />
          </Icon>
        </Button>
      </div>
      <div></div>
    </div>
  );
};

ButtonWithIcons.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="./?path=/docs/icon--docs" target="_blank">**Icon**</a> component to place a decorative icon at the start or end of a button. The icon size is automatically scaled based on the button size.',
    },
  },
};

export const ButtonWithIconOnly = () => {
  return (
    <div className="space-x-4">
      <Button isIconOnly size="lg">
        <Icon aria-label="Mic">
          <MicIcon />
        </Icon>
      </Button>
      <Button isIconOnly>
        <Icon aria-label="Create New Folder">
          <FolderPlus />
        </Icon>
      </Button>
      <Button variant="outline" isIconOnly>
        <Icon aria-label="More Options">
          <MoreHorizontalIcon />
        </Icon>
      </Button>
      <Button variant="plain" isIconOnly>
        <Icon aria-label="Close">
          <XIcon />
        </Icon>
      </Button>
    </div>
  );
};

ButtonWithIconOnly.parameters = {
  docs: {
    description: {
      story:
        'Use the **isIconOnly** prop to render an **icon-only** button. For non-decorative buttons, use the **aria-label** on the <a href="./?path=/docs/icon--docs" target="_blank">**Icon**</a> component. The icon size is automatically scaled based on the button size.',
    },
  },
};

export const ButtonWithDisabledState = () => {
  return <Button isDisabled>Button</Button>;
};

ButtonWithDisabledState.parameters = {
  docs: {
    description: {
      story: 'Use the **isDisabled** prop to disable buttons.',
    },
  },
};

export const ButtonWithPendingState = () => {
  const [isPending] = React.useState(true);

  return (
    <div className="flex gap-2">
      <Button isPending={isPending} pendingLabel="Searching">
        Search
      </Button>

      <Button variant="outline" isPending={isPending} pendingLabel="Searching">
        Search
      </Button>
    </div>
  );
};

ButtonWithPendingState.parameters = {
  docs: {
    description: {
      story:
        'Use the **isPending** prop to render a loading spinner and the **pendingLabel** prop to provide an accessible loading status.',
    },
  },
};

export const ButtonWithCustomPendingUI = () => {
  const [isPending] = React.useState(true);

  return (
    <div className="flex gap-2">
      <Button isPending={isPending} isCustomPending pendingLabel="Deploying">
        {isPending ? (
          <>
            <Icon>
              <CloudUploadingIcon />
            </Icon>
            Deploying
          </>
        ) : (
          <>
            <Icon>
              <UploadCloudIcon />
            </Icon>
            Deploy
          </>
        )}
      </Button>

      <Button isPending={isPending} isCustomPending pendingLabel="Refreshing">
        {isPending && <SpinnerIcon className="text-zinc-300" />}
        Refresh
      </Button>
    </div>
  );
};

ButtonWithPendingState.parameters = {
  docs: {
    description: {
      story:
        'Use the **isCustomPending** prop if you need to implement a custom pending UI.',
    },
  },
};

export const ButtonWithAvatar = () => {
  return (
    <Button variant="unstyle">
      <Avatar
        alt="Jane"
        src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
      />
    </Button>
  );
};

ButtonWithAvatar.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="/?path=/docs/avatar--docs" target="_blank">**Avatar**</a> component along with the **unstyle** prop on the **Button** component to render image buttons.',
    },
  },
};

export const ButtonAsLink = () => {
  return (
    <Button asChild>
      <Link href="https://example.com" target="_blank">
        Login
      </Link>
    </Button>
  );
};

ButtonAsLink.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="https://www.jacobparis.com/content/react-as-child" target="_blank">**asChild**</a> prop to render a completely different component, e.g., render the <a href="./?path=/docs/link--docs" target="_blank">**Link**</a> component with button styles.',
    },
  },
};

export function ButtonToggle() {
  const [isPined, setIsPined] = React.useState(false);

  return (
    <ToggleButton
      isSelected={isPined}
      onChange={setIsPined}
      {...(!isPined && {
        variant: 'outline',
      })}
    >
      Pin
    </ToggleButton>
  );
}

ButtonToggle.parameters = {
  docs: {
    description: {
      story:
        'A <a href="https://react-spectrum.adobe.com/react-aria/ToggleButton.html#togglebutton" target="_blank">**toggle button**</a> allows a user to toggle a selection on or off, for example switching between two states or modes. Use the **isSelected** and **onChange** prop to control toggle state and behavior.',
    },
  },
};

export const ButtonToggleWithIconAndTooltip = () => {
  const [isMicMuted, setIsMicMuted] = React.useState(true);

  return (
    <TooltipTrigger>
      <ToggleButton
        variant="plain"
        isSelected={isMicMuted}
        onChange={setIsMicMuted}
        size="lg"
        className="w-16 flex-col gap-y-1.5 text-xs"
      >
        <Icon aria-label="Mute mic" className="size-6 ">
          {isMicMuted ? (
            <MicOffIcon strokeWidth={1.5} />
          ) : (
            <MicIcon strokeWidth={1.5} />
          )}
        </Icon>
        Mic
      </ToggleButton>
      <Tooltip>{isMicMuted ? 'Un-mute Microphone' : 'Mute Microphone'}</Tooltip>
    </TooltipTrigger>
  );
};

export const ButtonGroups = () => {
  return (
    <div className="flex flex-col space-y-5">
      <ButtonGroup>
        <Button variant="outline">Oldest</Button>
        <Button variant="outline">Newest</Button>
        <Button variant="outline">Top</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button isIconOnly>
          <Icon aria-label="Zoom In">
            <PlusIcon />
          </Icon>
        </Button>
        <Button isIconOnly>
          <Icon aria-label="Zoom Out">
            <MinusIcon aria-label="Zoom Out" />
          </Icon>
        </Button>
      </ButtonGroup>

      <ButtonGroup inline>
        <Button isIconOnly variant="outline">
          <Icon aria-label="Zoom In">
            <PlusIcon />
          </Icon>
        </Button>
        <Button isIconOnly variant="outline">
          <Icon aria-label="Zoom Out">
            <MinusIcon aria-label="Zoom Out" />
          </Icon>
        </Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical">
        <Button isIconOnly variant="outline">
          <Icon aria-label="Zoom In">
            <PlusIcon />
          </Icon>
        </Button>
        <Button isIconOnly variant="outline">
          <Icon aria-label="Zoom Out">
            <MinusIcon aria-label="Zoom Out" />
          </Icon>
        </Button>
      </ButtonGroup>

      <ButtonGroup inline orientation="vertical">
        <Button isIconOnly variant="outline">
          <Icon aria-label="Zoom In">
            <PlusIcon />
          </Icon>
        </Button>
        <Button isIconOnly variant="outline">
          <Icon aria-label="Zoom Out">
            <MinusIcon aria-label="Zoom Out" />
          </Icon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

ButtonGroups.parameters = {
  docs: {
    description: {
      story:
        'Use the **ButtonGroup** and **Button** component to create button groups.',
    },
  },
};

export const ToggleButtonGroups = () => {
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);

  return (
    <ToggleButtonGroup>
      <ToggleButton
        variant={isBold ? 'solid' : 'outline'}
        isSelected={isBold}
        onChange={setIsBold}
      >
        <Icon>
          <BoldIcon />
        </Icon>
        Bold
      </ToggleButton>
      <ToggleButton
        variant={isItalic ? 'solid' : 'outline'}
        isSelected={isItalic}
        onChange={setIsItalic}
      >
        <Icon>
          <ItalicIcon></ItalicIcon>
        </Icon>
        Italic
      </ToggleButton>
      <ToggleButton
        variant={isUnderline ? 'solid' : 'outline'}
        isSelected={isUnderline}
        onChange={setIsUnderline}
      >
        <Icon>
          <UnderlineIcon />
        </Icon>
        Underline
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const SplitButtons = () => {
  const [selectedOption, setSelectedOption] = React.useState<Selection>(
    new Set(['merge']),
  );

  const descriptionsMap = {
    merge:
      'All commits from the source branch are added to the destination branch via a merge commit.',
    squash:
      'All commits from the source branch are added to the destination branch as a single commit.',
    rebase:
      'All commits from the source branch are added to the destination branch individually.',
  };

  const labelsMap = {
    merge: 'Create a merge commit',
    squash: 'Squash and merge',
    rebase: 'Rebase and merge',
  };

  // Convert the Set to an Array and get the first value.
  const selectedOptionValue = Array.from(selectedOption)[0];

  return (
    <ButtonGroup>
      <Button color="success">
        {labelsMap[selectedOptionValue as keyof typeof labelsMap]}
      </Button>
      <MenuTrigger>
        <MenuButton
          variant="solid"
          color="success"
          isIconOnly
          aria-label="More merge options"
        />
        <MenuPopover placement="bottom end">
          <Menu
            disallowEmptySelection
            aria-label="Merge options"
            selectedKeys={selectedOption}
            selectionMode="single"
            onSelectionChange={setSelectedOption}
          >
            <MenuItem id="merge">
              <MenuItemLabel> {labelsMap['merge']}</MenuItemLabel>
              <MenuItemDescription>
                {descriptionsMap['merge']}
              </MenuItemDescription>
            </MenuItem>
            <MenuSeparator />
            <MenuItem id="squash">
              <MenuItemLabel> {labelsMap['squash']}</MenuItemLabel>
              <MenuItemDescription>
                {descriptionsMap['squash']}
              </MenuItemDescription>
            </MenuItem>

            <MenuItem id="rebase">
              <MenuItemLabel> {labelsMap['rebase']}</MenuItemLabel>
              <MenuItemDescription>
                {descriptionsMap['rebase']}
              </MenuItemDescription>
            </MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </ButtonGroup>
  );
};

SplitButtons.parameters = {
  docs: {
    description: {
      story:
        'A common use case for the ButtonGroup component is to display a group of two buttons one for the selected value and another for the dropdown.',
    },
  },
};

function CloudUploadingIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="size-5 text-white/75"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.5 18.25a.75.75 0 0 1 0-1.5c1.66 0 2.25-.83 2.25-3.18a3.57 3.57 0 0 0-3.25-3.25a3.3 3.3 0 0 0-1 .18a.74.74 0 0 1-1-.49a5.25 5.25 0 0 0-10.25 1.56c0 3.44.76 5.18 2.25 5.18a.75.75 0 0 1 0 1.5c-2.5 0-3.75-2.25-3.75-6.68a6.75 6.75 0 0 1 13-2.68a4.4 4.4 0 0 1 .8-.07a5.07 5.07 0 0 1 4.75 4.75c-.05 1.28-.05 4.68-3.8 4.68"
      ></path>
      <path
        fill="currentColor"
        d="M14.83 15.65a.77.77 0 0 1-.53-.22l-2.3-2.3l-2.3 2.3a.75.75 0 0 1-1.06-1.06l2.83-2.83a.74.74 0 0 1 1.06 0l2.83 2.83a.75.75 0 0 1 0 1.06a.8.8 0 0 1-.53.22"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 15"
          to="0 -3"
          dur="1s"
          fill="freeze"
          repeatCount="indefinite"
          keyTimes="0; 1"
          values="0 15; 0 -3"
        />

        <animate
          attributeName="opacity"
          from="1"
          to="0.25"
          dur="1s"
          fill="freeze"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="currentColor"
        d="M12 19.18a.75.75 0 0 1-.75-.75v-6.36a.75.75 0 0 1 1.5 0v6.36a.75.75 0 0 1-.75.75"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 15"
          to="0 -3"
          dur="1s"
          fill="freeze"
          repeatCount="indefinite"
          keyTimes="0; 1"
          values="0 15; 0 -3"
        />

        <animate
          attributeName="opacity"
          from="1"
          to="0.25"
          dur="1s"
          fill="freeze"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
