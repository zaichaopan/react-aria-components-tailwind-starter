import React from 'react';
import { Button, ButtonGroup, ToggleButton } from '../../src/button';
import { Strong, Text, TextLink } from '../../src/text';
import { Icon } from '../../src/accessible-icon';
import { SpinnerIcon } from '../../src/icons';
import { Kbd } from '../../src/kbd';
import { Heading } from '../../src/heading';
import { Avatar } from '../../src/avatar';
import { CopyButton } from '../../src/clipboard';
import {
  ActivityIcon,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Archive,
  ArrowLeftIcon,
  ArrowRight,
  ArrowUpRightIcon,
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  EllipsisIcon,
  FilesIcon,
  FilmIcon,
  FlipHorizontal,
  FlipVertical,
  Link as LinkIcon,
  Mail,
  Mic,
  MicOffIcon,
  PlusIcon,
  Printer,
  QrCode,
  SparklesIcon,
  SquareArrowOutUpRight,
  Star,
  ThumbsUpIcon,
  Trash,
} from 'lucide-react';
import { Link } from '../../src/link';
import { twMerge } from 'tailwind-merge';
import { FileTrigger } from 'react-aria-components';
import { Tooltip, TooltipTrigger } from '../../src/tooltip';

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
        'text-center',
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

export const Buttons = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-16 sm:px-6 lg:px-8">
      <Heading className="text-center">Button</Heading>
      <Text className="text-center">
        A growing collection of button components built with React Aria
        Components. Inspired by{' '}
        <TextLink href="https://originui.com/buttons" target="_blank">
          OriginUI/Buttons
        </TextLink>
      </Text>
      <div className="grid pt-10 md:grid-cols-2 lg:grid-cols-3">
        <Box>
          <Button>Button</Button>
        </Box>

        <Box>
          <Button isDisabled>Button</Button>
        </Box>

        <Box>
          <Button className="rounded-full">Button</Button>
        </Box>

        <Box>
          <Button>
            <Icon>
              <Archive />
            </Icon>
            Button
          </Button>
        </Box>

        <Box>
          <Button color="destructive">
            <Icon>
              <Trash />
            </Icon>
            Button
          </Button>
        </Box>

        <Box>
          <Button color="success">
            Button
            <Icon>
              <ActivityIcon />
            </Icon>
          </Button>
        </Box>

        <Box>
          <Button variant="outline">
            Button
            <Icon>
              <SparklesIcon />
            </Icon>
          </Button>
        </Box>

        <Box>
          <Button variant="plain">
            <Icon>
              <ArrowLeftIcon />
            </Icon>
            Button
          </Button>
        </Box>

        <Box>
          <Button asChild variant="plain">
            <Link className="gap-x-1 font-medium">
              <Icon>
                <ChevronLeft />
              </Icon>
              Go back
            </Link>
          </Button>
        </Box>

        <Box>
          <Button>
            Button
            <Icon>
              <ArrowRight />
            </Icon>
          </Button>
        </Box>

        <Box>
          <Button asChild>
            <Link
              className="rounded-full"
              href="https://github.com/zaichaopan/react-aria-components-tailwind-starter"
              target="_blank"
            >
              <Icon>
                <GithubIcon className="text-zinc-200" />
              </Icon>
              Start
              <Icon>
                <ArrowUpRightIcon />
              </Icon>
            </Link>
          </Button>
        </Box>

        <Box>
          <Button>
            <Icon>
              <Mail />
            </Icon>
            Button
            <Icon>
              <ArrowRight />
            </Icon>
          </Button>
        </Box>

        <Box className="space-x-2">
          <Button variant="plain">Cancel</Button>
          <Button>Save</Button>
        </Box>

        <Box>
          <Button isPending>Save</Button>
        </Box>

        <Box>
          <Button isPending isCustomPending pendingLabel="Saving">
            <SpinnerIcon />
            Save
          </Button>
        </Box>

        <Box>
          <Button variant="outline" className="gap-x-4">
            Message
            <span className="flex h-5 items-center rounded-md border px-1 text-[0.625rem] font-normal">
              18
            </span>
          </Button>
        </Box>

        <Box>
          <Button variant="outline" className="gap-x-4">
            <Icon>
              <Printer />
            </Icon>
            Print
            <div className="flex h-5 items-center rounded-md border px-1">
              <Kbd className="sm:text-[0.625rem]">⌘</Kbd>
              <Kbd className="sm:text-[0.625rem]">P</Kbd>
            </div>
          </Button>
        </Box>

        <Box>
          <Button className="rounded-full">
            <Avatar
              alt="L K"
              className="size-5 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            ></Avatar>
            @lenoardkrasner
          </Button>
        </Box>

        <Box>
          <Button variant="unstyle">
            <Avatar
              alt="L K"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            />
          </Button>
        </Box>

        <Box>
          <div className="inline-flex items-center gap-x-3">
            <Avatar
              alt="L K"
              className="self-center rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            ></Avatar>

            <FileTrigger>
              <Button>Upload image</Button>
            </FileTrigger>
          </div>
        </Box>

        <Box>
          <Button variant="outline">
            <Icon>
              <PlusIcon />
            </Icon>
            New
          </Button>
        </Box>

        <Box>
          <Button variant="outline" isIconOnly className="rounded-full">
            <Icon aria-label="Add">
              <PlusIcon />
            </Icon>
          </Button>
        </Box>

        <Box>
          <Button variant="outline" isIconOnly>
            <Icon aria-label="Add">
              <PlusIcon />
            </Icon>
          </Button>
        </Box>

        <Box>
          <Button variant="plain" isIconOnly>
            <Icon aria-label="Bookmark">
              <Bookmark />
            </Icon>
          </Button>
        </Box>

        <Box>
          <ToggleButtonExample />
        </Box>

        <Box>
          <div className="inline-flex items-stretch">
            <Button variant="outline" isIconOnly className="rounded-e-none">
              <Icon aria-label="Increase">
                <ChevronUp />
              </Icon>
            </Button>

            <div className="flex items-center border-y px-2 text-sm">235</div>

            <Button variant="outline" isIconOnly className="rounded-s-none">
              <Icon aria-label="Decrease">
                <ChevronDown />
              </Icon>
            </Button>
          </div>
        </Box>

        <Box>
          <div className="inline-flex items-stretch">
            <Button isIconOnly className="rounded-e-none">
              <Icon aria-label="Increase">
                <ChevronUp />
              </Icon>
            </Button>

            <div className="flex items-center border-y border-accent bg-accent px-2 text-sm text-white">
              235
            </div>

            <Button isIconOnly className="rounded-s-none">
              <Icon aria-label="Decrease">
                <ChevronDown />
              </Icon>
            </Button>
          </div>
        </Box>

        <Box>
          <CopyButton
            copyValue="https://github.com/zaichaopan/react-aria-components-tailwind-starter"
            label='Copy link'
            labelAfterCopied='Link Copied'
            variant="outline"
            icon={
              <Icon>
                <LinkIcon />
              </Icon>
            }
          />
        </Box>

        <Box>
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
        </Box>

        <Box>
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
        </Box>

        <Box>
          <ButtonGroup>
            <Button isIconOnly>
              <Icon aria-label="Left">
                <AlignLeft />
              </Icon>
            </Button>
            <Button isIconOnly>
              <Icon aria-label="Center">
                <AlignCenter />
              </Icon>
            </Button>

            <Button isIconOnly>
              <Icon aria-label="Right">
                <AlignRight />
              </Icon>
            </Button>
          </ButtonGroup>
        </Box>

        <Box>
          <ButtonGroup>
            <Button variant="outline" className="font-medium">
              Left
            </Button>
            <Button variant="outline" className="font-medium">
              Center
            </Button>
            <Button variant="outline" className="font-medium">
              Right
            </Button>
          </ButtonGroup>
        </Box>

        <Box>
          <ButtonGroup>
            <Button isIconOnly>
              <Icon aria-label="QR code">
                <QrCode />
              </Icon>
            </Button>
            <Button>Sign in</Button>
          </ButtonGroup>
        </Box>

        <Box>
          <ButtonGroup>
            <Button variant="outline">Preview</Button>
            <Button variant="outline" isIconOnly>
              <Icon aria-label="Go to preview">
                <SquareArrowOutUpRight />
              </Icon>
            </Button>
          </ButtonGroup>
        </Box>

        <Box>
          <Button variant="outline">
            <Icon>
              <ThumbsUpIcon />
            </Icon>
            Like
            <div
              className={[
                'ps-3',
                'relative',
                'h-full',
                'text-xs',
                "before:content-['']",
                'before:absolute',
                'before:border-s',
                'before:w-[1px]',
                'before:h-[44px]',
                'before:start-0',
                'sm:before:h-[34px]',
                'before:-top-[14px]',
                'sm:before:-top-[9px]',
              ].join(' ')}
            >
              86
            </div>
          </Button>
        </Box>

        <Box>
          <Button>
            <Icon>
              <Star />
            </Icon>
            Star
            <span className="text-xs">18</span>
          </Button>
        </Box>

        <Box>
          <div className="space-x-2">
            <Button variant="outline" isIconOnly>
              <Icon aria-label="Login with Google">
                <GoogleIcon />
              </Icon>
            </Button>
            <Button variant="outline" isIconOnly>
              <Icon aria-label="Login with Facebook">
                <FacebookIcon />
              </Icon>
            </Button>

            <Button variant="outline" isIconOnly>
              <Icon aria-label="Login with X">
                <XIcon />
              </Icon>
            </Button>

            <Button variant="outline" isIconOnly>
              <Icon aria-label="Login with Github">
                <GithubIcon />
              </Icon>
            </Button>
          </div>
        </Box>

        <Box>
          <div className="flex flex-col space-y-3">
            <Button className="border-[#DB4437] bg-[#DB4437] hover:bg-[#DB4437]/90 pressed:bg-[#DB4437]">
              <Icon>
                <GoogleIcon className="text-zinc-200" />
              </Icon>
              <div className="flex-1">Login With Google</div>
            </Button>
            <Button className="border-[#1877f2] bg-[#1877f2] hover:bg-[#1877f2]/90 pressed:bg-[#1877f2]">
              <Icon>
                <FacebookIcon className="text-zinc-200" />
              </Icon>

              <div className="flex-1">Login with Facebook</div>
            </Button>

            <Button className="border-[#14171a] bg-[#14171a] hover:bg-[#14171a]/90 pressed:bg-[#14171a]">
              <Icon>
                <XIcon className="text-zinc-200" />
              </Icon>
              <div className="flex-1">Login with X</div>
            </Button>

            <Button className="border-back bg-black hover:bg-black/90 pressed:bg-black dark:bg-zinc-800">
              <Icon>
                <GithubIcon className="text-zinc-200" />
              </Icon>
              <div className="flex-1">Login with Github</div>
            </Button>
          </div>
        </Box>

        <Box>
          <Button
            variant="unstyle"
            className="group inline-flex items-center gap-x-4 rounded-lg border p-4"
          >
            <div className="text-left">
              <Strong>Talent Agency</Strong>
              <Text elementType="div">Matches for roster</Text>
            </div>
            <Icon>
              <ChevronRight className="size-4 transition group-hover:translate-x-0.5" />
            </Icon>
          </Button>
        </Box>
      </div>
    </div>
  );
};

function ToggleButtonExample() {
  const [isMuted, setIsMuted] = React.useState(false);

  return (
    <TooltipTrigger>
      <ToggleButton
        isSelected={isMuted}
        onChange={setIsMuted}
        variant="plain"
        className="flex-col gap-y-1 px-4 sm:text-xs"
        aria-controls="Mute microphone"
      >
        <Icon>
          {isMuted ? (
            <MicOffIcon className="size-5" strokeWidth={1.5} />
          ) : (
            <Mic className="size-5" strokeWidth={1.5}></Mic>
          )}
        </Icon>
        Mic
      </ToggleButton>
      <Tooltip>{isMuted ? 'Un-mute microphone' : 'Mute microphone'}</Tooltip>
    </TooltipTrigger>
  );
}

function GoogleIcon({ className, ...props }: React.JSX.IntrinsicElements['svg']) {
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

function FacebookIcon({ className, ...props }: React.JSX.IntrinsicElements['svg']) {
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

function XIcon({ className, ...props }: React.JSX.IntrinsicElements['svg']) {
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

function GithubIcon({ className, ...props }: React.JSX.IntrinsicElements['svg']) {
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
