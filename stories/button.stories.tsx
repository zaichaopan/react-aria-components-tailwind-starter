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
  MessageCircleMoreIcon,
  Edit3Icon,
  FilesIcon,
  FilmIcon,
  EllipsisIcon,
  FlipHorizontal,
  FlipVertical,
  ThumbsUpIcon,
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
import { Icon } from '../src/icon';
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
import { ChevronDownIcon, ChevronUpIcon, SpinnerIcon } from '../src/icons';
import { Tooltip } from '../src/tooltip';
import { twMerge } from 'tailwind-merge';
import { NotificationBadge } from '../src/notification-badge';

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

export const ButtonWithCustomBackgroundAndColor = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button className="bg-cyan-400 text-zinc-900">Save changes</Button>
    </div>
  );
};

ButtonWithCustomBackgroundAndColor.parameters = {
  docs: {
    description: {
      story:
        'Use the **bg-**  and **text-** utility to set the custom button color.',
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

export const ButtonWithTooltip = () => {
  return (
    <Button
      variant="plain"
      isIconOnly
      size="lg"
      tooltip={<Tooltip>Direct message</Tooltip>}
    >
      <Icon aria-label="Message">
        <MessageCircleMoreIcon />
      </Icon>
    </Button>
  );
};

ButtonWithTooltip.parameters = {
  docs: {
    description: {
      story:
        'The **tooltip** prop accepts tooltip created by <a href="./?path=/docs/tooltip--docs" target="_blank">**Tooltip**</a> component.',
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

export const ButtonWithDisabledStateAndTooltip = () => {
  return (
    <Button
      isDisabled
      size="lg"
      allowTooltipOnDisabled
      variant="plain"
      isIconOnly
      tooltip={<Tooltip>You don't have the permission to edit</Tooltip>}
    >
      <Icon aria-label="Edit">
        <Edit3Icon />
      </Icon>
    </Button>
  );
};

ButtonWithDisabledStateAndTooltip.parameters = {
  docs: {
    description: {
      story:
        'The tooltip will not be displayed when the button is disabled to ensure accessibility. If you wan to allow tooltip on disabled button, use the **allowTooltipOnDisabled** prop.',
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
        alt="L K"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
      />
    </Button>
  );
};

ButtonWithAvatar.parameters = {
  docs: {
    description: {
      story:
        'Use the <a href="./?path=/docs/avatar--docs" target="_blank">**Avatar**</a> component along with the **unstyle** prop on the **Button** component to render image buttons.',
    },
  },
};

export const ButtonWithBadge = () => {
  return (
    <Button aria-label="Chat - 6 new messages">
      Messages
      <NotificationBadge variant="numeric" value={6} />
    </Button>
  );
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

export const ToggleButtonWithIconAndTooltip = () => {
  const [isMicMuted, setIsMicMuted] = React.useState(true);

  return (
    <ToggleButton
      tooltip={
        <Tooltip>
          {isMicMuted ? 'Un-mute Microphone' : 'Mute Microphone'}
        </Tooltip>
      }
      variant="plain"
      isSelected={isMicMuted}
      onChange={setIsMicMuted}
      size="lg"
      className="w-16 flex-col gap-y-0.5 text-xs"
    >
      <Icon aria-label="Mute mic" className="size-6 text-foreground">
        {isMicMuted ? (
          <MicOffIcon strokeWidth={1.5} />
        ) : (
          <MicIcon strokeWidth={1.5} />
        )}
      </Icon>
      Mic
    </ToggleButton>
  );
};

export const ButtonGroups = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <ButtonGroup>
        <Button variant="outline">Oldest</Button>
        <Button variant="outline">Newest</Button>
        <Button variant="outline">Top</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">
          <Icon>
            <FilesIcon />
          </Icon>
          Files
        </Button>
        <Button variant="outline">
          <Icon>
            <FilmIcon />
          </Icon>
          Media
        </Button>

        <Button isIconOnly variant="outline">
          <Icon aria-label="More">
            <EllipsisIcon />
          </Icon>
        </Button>
      </ButtonGroup>
      <ButtonGroup className="inline-flex">
        <Button isIconOnly variant="outline">
          <Icon aria-label="Flip horizontal">
            <FlipHorizontal />
          </Icon>
        </Button>
        <Button isIconOnly variant="outline">
          <Icon aria-label="Flip vertical">
            <FlipVertical />
          </Icon>
        </Button>
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

      <ButtonGroup>
        <Button variant="outline" isIconOnly>
          <Icon aria-label="Increase">
            <ChevronUpIcon />
          </Icon>
        </Button>
        <Button variant="outline" asChild>
          <div>235</div>
        </Button>

        <Button variant="outline" isIconOnly>
          <Icon aria-label="Decrease">
            <ChevronDownIcon />
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

export function ButtonCustomization() {
  return (
    <div className="flex flex-col space-y-3">
      <Button className="bg-[#DB4437]">
        <Icon>
          <GoogleIcon className="text-zinc-200" />
        </Icon>
        <div className="flex-1">Login With Google</div>
      </Button>

      <Button className="bg-[#14171a] dark:bg-zinc-800">
        <Icon>
          <TwitterIcon className="text-zinc-200" />
        </Icon>
        <div className="flex-1">Login with X</div>
      </Button>

      <Button className="bg-[#1877f2]">
        <Icon>
          <FacebookIcon className="text-zinc-200" />
        </Icon>

        <div className="flex-1">Login with Facebook</div>
      </Button>

      <Button className="bg-zinc-700 dark:bg-zinc-800">
        <Icon>
          <GithubIcon className="text-zinc-200" />
        </Icon>
        <div className="flex-1">Login with Github</div>
      </Button>

      <Button className="rounded-full">
        <Avatar
          alt="L K"
          className="size-5 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        ></Avatar>
        @lenoardkrasner
      </Button>

      <div className="flex justify-center">
        <Button variant="outline" className="py-0 sm:py-0">
          <Icon>
            <ThumbsUpIcon />
          </Icon>
          Like
          <span className="border-l border-border/75 py-1 ps-2">86</span>
        </Button>
      </div>
    </div>
  );
}

ButtonCustomization.parameters = {
  docs: {
    description: {
      story:
        'We can fully customize the button style by just using TailwindCSS classes.',
    },
  },
};

function CloudUploadingIcon(props: React.JSX.IntrinsicElements['svg']) {
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

function GoogleIcon({
  className,
  ...props
}: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={twMerge('text-[#DB4437]', className)}
      {...props}
    >
      <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
    </svg>
  );
}

function FacebookIcon({
  className,
  ...props
}: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={twMerge('text-[#1877f2]', className)}
      {...props}
    >
      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
    </svg>
  );
}

function TwitterIcon({
  className,
  ...props
}: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={twMerge('text-[#14171a] dark:text-zinc-200', className)}
      {...props}
    >
      <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
    </svg>
  );
}

function GithubIcon({
  className,
  ...props
}: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={twMerge('text-black dark:text-zinc-200', className)}
      {...props}
    >
      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
    </svg>
  );
}
