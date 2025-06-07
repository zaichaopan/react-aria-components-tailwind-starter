import React from 'react';
import type { Meta } from '@storybook/react-vite';
import type { Selection } from 'react-aria-components';
import {
  SquareArrowOutUpRight,
  FolderPlus,
  MicIcon,
  MicOffIcon,
  MoreHorizontalIcon,
  DownloadIcon,
  CloudUploadIcon,
  UploadCloudIcon,
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
  GitCommitHorizontalIcon,
  GitBranchIcon,
  RefreshCwIcon,
} from 'lucide-react';
import {
  Button,
  ButtonGroup,
  getButtonStyles,
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
import { Tooltip } from '../src/tooltip';
import { NotificationBadge } from '../src/notification-badge';
import { SpinnerIcon } from '../src/icons/outline/spinner';
import { ChevronDownIcon } from '../src/icons/outline/chevron-down';
import { ChevronUpIcon } from '../src/icons/outline/chevron-up';
import { PlusIcon } from '../src/icons/outline/plus';
import { MinusIcon } from '../src/icons/outline/minus';
import { ChevronRightIcon } from '../src/icons/outline/chevron-right';
import { XIcon } from '../src/icons/outline/x';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return <Button>Button</Button>;
};

export const ButtonColors = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button>Button</Button>
      <Button color="green">Button</Button>
      <Button color="red">Button</Button>
    </div>
  );
};

export const CustomBackgroundAndColor = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button className="[--btn-bg:var(--color-cyan-400)]">
        <Icon>
          <CloudUploadIcon />
        </Icon>
        Save changes
      </Button>
    </div>
  );
};

export const ButtonSizes = () => {
  return (
    <div className="flex items-end gap-3">
      <Button size="lg">Button</Button>
      <Button>Button</Button>
      <Button size="sm">Button</Button>
    </div>
  );
};

export const ButtonVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="plain">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="unstyle">Button</Button>
    </div>
  );
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
          <ChevronRightIcon />
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export const IconOnlyButtons = () => {
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
        <XIcon aria-label="Close" />
      </Button>
    </div>
  );
};

export const ButtonWithTooltip = () => {
  return (
    <Button variant="plain" isIconOnly size="lg" tooltip="Direct message">
      <Icon aria-label="Message">
        <MessageCircleMoreIcon />
      </Icon>
    </Button>
  );
};

export const DisabledState = () => {
  return <Button isDisabled>Button</Button>;
};

export const DisabledButtonAndTooltip = () => {
  return (
    <Button
      isDisabled
      size="lg"
      allowTooltipOnDisabled
      variant="plain"
      isIconOnly
      tooltip="You don't have the permission to edit"
    >
      <Icon aria-label="Edit">
        <Edit3Icon />
      </Icon>
    </Button>
  );
};

export const PendingState = () => {
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

export const CustomPendingUI = () => {
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
        {isPending && <SpinnerIcon />}
        Refresh
      </Button>
    </div>
  );
};

export const AvatarButton = () => {
  return (
    <Button variant="unstyle">
      <Avatar
        alt="M A"
        src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </Button>
  );
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
    <Link
      className={getButtonStyles({ variant: 'solid' }, 'hover:no-underline')}
      href="https://example.com"
      target="_blank"
    >
      Login
    </Link>
  );
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
      <Icon aria-label="Mute mic" className="text-foreground size-6">
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
          <PlusIcon aria-label="Zoom In" />
        </Button>
        <Button isIconOnly variant="outline">
          <MinusIcon aria-label="Zoom Out" />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline" isIconOnly>
          <ChevronUpIcon aria-label="Increase" />
        </Button>

        <div
          className={getButtonStyles({
            variant: 'outline',
          })}
        >
          235
        </div>

        <Button variant="outline" isIconOnly>
          <ChevronDownIcon aria-label="Decrease" />
        </Button>
      </ButtonGroup>
    </div>
  );
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
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">
          {labelsMap[selectedOptionValue as keyof typeof labelsMap]}
        </Button>
        <MenuTrigger>
          <MenuButton isIconOnly aria-label="More merge options" />
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

      <ButtonGroup>
        <Button variant="outline">
          <Icon>
            <RefreshCwIcon />
          </Icon>
          Rebuild
        </Button>
        <MenuTrigger>
          <MenuButton isIconOnly aria-label="More rebuild options" />
          <MenuPopover placement="bottom end">
            <Menu aria-label="More rebuild options">
              <MenuItem>
                <Icon>
                  <GitCommitHorizontalIcon />
                </Icon>
                <MenuItemLabel>Rebuild this commit</MenuItemLabel>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <GitBranchIcon />
                </Icon>
                <MenuItemLabel>Rebuild this branch</MenuItemLabel>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <PlusIcon />
                </Icon>
                <MenuItemLabel>New build</MenuItemLabel>
              </MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </ButtonGroup>
    </div>
  );
};

export function ButtonCustomization() {
  return (
    <div className="flex flex-col space-y-3">
      <Button className="[--btn-bg:var(--color-red-600)]">
        <Icon>
          <GoogleIcon />
        </Icon>
        <div className="flex-1">Login With Google</div>
      </Button>

      <Button className="[--btn-bg:#14171a] dark:[--btn-bg:var(--color-zinc-800)]">
        <Icon>
          <TwitterIcon />
        </Icon>
        <div className="flex-1">Login with X</div>
      </Button>

      <Button className="[--btn-bg:var(--color-blue-700)]">
        <Icon>
          <FacebookIcon />
        </Icon>
        <div className="flex-1">Login with Facebook</div>
      </Button>

      <Button className="rounded-full">
        <Avatar
          alt="Marissa Whitaker"
          className="size-5 rounded-full"
          src="https://images.unsplash.com/photo-1717694371848-70ddf2293c7c?q=80&w=2306&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        ></Avatar>
        @marissawhitaker
      </Button>

      <div className="flex justify-center">
        <Button variant="outline" className="py-0 sm:py-0">
          <Icon>
            <ThumbsUpIcon />
          </Icon>
          Like
          <span className="border-border/75 border-l py-1 ps-2">86</span>
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
      className="size-5"
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

function GoogleIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
    </svg>
  );
}

function FacebookIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
    </svg>
  );
}

function TwitterIcon(props: React.JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
    </svg>
  );
}
