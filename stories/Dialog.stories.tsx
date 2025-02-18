import React from 'react';
import type { Meta } from '@storybook/react';
import { Modal } from '../src/modal';
import {
  DialogTrigger,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogCloseButton,
} from '../src/dialog';
import { Button } from '../src/button';
import { Form } from '../src/form';
import {
  Description,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from '../src/field';
import {
  MenuButton,
  MenuTrigger,
  Menu,
  MenuItem,
  MenuPopover,
  MenuSection,
} from '../src/menu';
import {
  BellIcon,
  FingerprintIcon,
  MoveLeftIcon,
  MoveRightIcon,
  Star,
} from 'lucide-react';
import { Tab, TabList, TabPanel, Tabs } from '../src/tabs';
import { TooltipTrigger, Tooltip } from '../src/tooltip';
import { Small, Strong, Text, TextLink } from '../src/text';
import { docs } from '../.storybook/docs';
import { Heading, SubHeading } from '../src/heading';
import { CopyButton } from '../src/clipboard';
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemDescription,
  SelectListItemLabel,
  SelectPopover,
} from '../src/select';
import { Icon } from '../src/icon';
import { Checkbox } from '../src/checkbox';
import { Switch, SwitchField } from '../src/switch';

const meta: Meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const AlertDialogs = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button color="destructive" onPress={() => setIsOpen(true)}>
        Revoke access
      </Button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dialog alert>
          <DialogHeader>Revoke access</DialogHeader>
          <DialogBody>
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button color="destructive" onPress={() => setIsOpen(false)}>
              Revoke access
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </>
  );
};

export const CloseConfirmation = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    React.useState(false);
  const [post, setPost] = React.useState('');

  return (
    <div>
      <Button onPress={() => setIsEditDialogOpen(true)} variant="outline">
        Tweet
      </Button>

      <Modal
        size="md"
        isOpen={isEditDialogOpen}
        placement="top"
        isDismissable
        onOpenChange={() => {
          if (post !== '') {
            setIsConfirmationDialogOpen(true);
          } else {
            setIsEditDialogOpen(false);
          }
        }}
      >
        <Dialog>
          <DialogHeader>New Tweet</DialogHeader>

          <DialogBody className="py-1">
            <TextField
              autoFocus
              value={post}
              onChange={(value) => {
                setPost(value);
              }}
            >
              <Label className="sr-only">New tweet</Label>
              <TextArea placeholder="What's on your mind?" rows={8}></TextArea>
            </TextField>
            <div className="ms-auto mt-2 flex space-x-2.5">
              <DialogCloseButton>Cancel</DialogCloseButton>

              <Button
                onPress={() => {
                  setIsEditDialogOpen(false);
                }}
              >
                Tweet
              </Button>
            </div>
          </DialogBody>
        </Dialog>
      </Modal>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled
        isOpen={isConfirmationDialogOpen}
      >
        <Dialog alert>
          <DialogHeader>Discard tweet?</DialogHeader>
          <DialogBody>Your tweet will be lost.</DialogBody>
          <DialogFooter>
            <Button
              variant="plain"
              onPress={() => {
                setIsConfirmationDialogOpen(false);
              }}
            >
              Go back
            </Button>
            <Button
              color="destructive"
              onPress={() => {
                setIsConfirmationDialogOpen(false);
                setIsEditDialogOpen(false);
              }}
            >
              Discard
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </div>
  );
};

export const NestedDialogs = () => {
  const [isInviteDialogOpen, setIsInviteDialogOpen] = React.useState(false);
  const [isCustomizeDialogOpen, setIsCustomizeDialogOpen] =
    React.useState(false);

  return (
    <div>
      <Button onPress={() => setIsInviteDialogOpen(true)} variant="outline">
        Invitation
      </Button>

      <Modal
        placement="top"
        isOpen={isInviteDialogOpen}
        isDismissable
        size="md"
      >
        <Dialog>
          <DialogHeader>
            <DialogTitle>Invitation</DialogTitle>
            <SubHeading>
              Learn how to use <Strong>email & SMS templating feature.</Strong>
            </SubHeading>
          </DialogHeader>

          <DialogBody className="px-0 pt-1">
            <div className="flex flex-col items-center space-y-2 bg-zinc-100 py-8 text-center dark:bg-zinc-800">
              <Small>Today 9:41 AM</Small>

              <Text>
                Danny Rico has invited you to join on Clerk{' '}
                <TextLink className="text-blue-600 no-underline">
                  https://invitedlink.com/HfrdfKrfr
                </TextLink>
              </Text>
            </div>
            <div className="px-6 pt-6">
              <SwitchField>
                <Switch defaultSelected>Delievered by Clerk</Switch>
                <Description>
                  If enaled, Clerk will use Twillo to deliver this SMS. If
                  disabled, Clerk will not send this SMS and you must listen to
                  the sms webook to send it on your own.
                </Description>
              </SwitchField>
            </div>
          </DialogBody>
        </Dialog>
        <DialogFooter>
          <Button
            className="sm:me-auto"
            variant="plain"
            onPress={() => {
              setIsCustomizeDialogOpen(true);
            }}
          >
            Request change
          </Button>

          <DialogCloseButton
            onPress={() => {
              setIsInviteDialogOpen(false);
            }}
          >
            Cancel
          </DialogCloseButton>
          <Button>Save</Button>
        </DialogFooter>
      </Modal>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled
        isOpen={isCustomizeDialogOpen}
        size="md"
        placement="top"
      >
        <Dialog>
          <DialogHeader className="pt-3">
            <Button
              variant="plain"
              className="-ms-2.5 self-start"
              onPress={() => {
                setIsCustomizeDialogOpen(false);
              }}
            >
              <Icon>
                <MoveLeftIcon></MoveLeftIcon>
              </Icon>
              Back
            </Button>
            <DialogTitle>Update message: Invitation</DialogTitle>
            <SubHeading>
              For security reasons the changes will apply after approval.
            </SubHeading>
          </DialogHeader>
          <DialogBody className="space-y-6 px-0 pt-2">
            <div className="flex flex-col items-center space-y-2 bg-zinc-100 py-4 text-center dark:bg-zinc-800">
              <Text className="opacity-45">
                on Clerk:{' '}
                <TextLink className="text-blue-600 no-underline">
                  https://invitedlink.com/HfrdfKrfr
                </TextLink>
              </Text>

              <div className="flex flex-col gap-y-2 py-6">
                <Small>Proposed message</Small>
                <Text>
                  Danny Rico has invited you to join on Clerk{' '}
                  <TextLink className="text-blue-600 no-underline">
                    https://invitedlink.com/HfrdfKrfr
                  </TextLink>
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 px-6">
              <TextField defaultValue="Invitation">
                <Label>Name</Label>
                <Input />
              </TextField>

              <TextField defaultValue="{{inviter_name}} has invited you to join them on {{app.name}} {{action_url}}">
                <Label>Message</Label>
                <TextArea rows={6}></TextArea>
              </TextField>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="plain">Reset</Button>
            <Button>Request Changes</Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </div>
  );
};

export const Drawers = () => {
  const placements = ['left', 'right'] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => {
        return (
          <DialogTrigger key={placement}>
            <Button variant="outline">
              Open Drawer
              <Icon>
                {placement === 'left' ? <MoveRightIcon /> : <MoveLeftIcon />}
              </Icon>
            </Button>

            <Modal drawer size="sm" placement={placement}>
              <Dialog>
                <DialogHeader>Dialog drawer</DialogHeader>
                <DialogCloseButton />
                <DialogBody>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi quae eveniet saepe quas quo sequi repudiandae voluptas
                  quia enim, ut qui ad quis optio voluptate. Ratione harum
                  quaerat cupiditate! Sunt veniam, ratione rem unde recusandae,
                  distinctio minus corrupti asperiores, delectus officia
                  consectetur. Accusantium ea facilis reiciendis nisi nostrum,
                  hic voluptate.
                </DialogBody>
              </Dialog>
            </Modal>
          </DialogTrigger>
        );
      })}
    </div>
  );
};

export const Sizes = () => {
  const sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    'fullWidth',
  ] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => {
        return (
          <DialogTrigger key={size}>
            <Button variant="outline">{size}</Button>
            <Modal size={size}>
              <Dialog>
                <DialogHeader> A {size} size dialog</DialogHeader>
                <DialogCloseButton />
                <DialogBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  mollitia ullam fugiat dicta placeat. Officia, hic harum id
                  neque laborum sunt aliquam distinctio, rerum odit soluta sint
                  quam quos laudantium accusamus ipsum molestias repellendus
                  numquam. Consequuntur amet unde dolor natus dolorum quia
                  doloribus inventore, fuga eius quo ipsum architecto adipisci.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus vel excepturi magnam recusandae rerum.
                  Reprehenderit provident voluptatibus repellat nobis
                  doloremque?
                </DialogBody>
              </Dialog>
            </Modal>
          </DialogTrigger>
        );
      })}
    </div>
  );
};

export const Headers = () => {
  return (
    <DialogTrigger>
      <Button>About</Button>
      <Modal>
        <Dialog>
          <DialogHeader>About</DialogHeader>
          <DialogBody>
            <Text>
              Copyright © {new Date().getFullYear()} Acme Inc. All rights
              reserved.
            </Text>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>OK</DialogCloseButton>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const NonTextContentHeaders = () => {
  return (
    <DialogTrigger>
      <Button variant="plain">Forget password</Button>
      <Modal size="xs">
        <Dialog>
          <DialogHeader className="flex-col">
            <div className="border-border/50 mb-3 max-w-max self-center rounded-full border p-3 shadow-xs">
              <Icon>
                <FingerprintIcon />
              </Icon>
            </div>
            <DialogTitle>Forget password</DialogTitle>
            <SubHeading>No worries, we'll send reset instructions.</SubHeading>
          </DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Form className="space-y-3 py-2">
              <TextField isRequired>
                <Label className="sr-only">Email</Label>
                <Input placeholder="Enter your email"></Input>
                <FieldError />
              </TextField>
              <Button type="submit" className="w-full">
                Reset password
              </Button>
            </Form>
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const WithoutHeader = () => {
  return (
    <DialogTrigger>
      <Button variant="outline">Open</Button>
      <Modal>
        <Dialog>
          <DialogBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            quasi ducimus adipisci est quidem doloribus reprehenderit, nihil
            sapiente molestias nam voluptate perspiciatis culpa molestiae
            ratione itaque quisquam rem. Tenetur itaque id ratione repellendus
            expedita pariatur voluptates explicabo officia eaque maiores?
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Close</DialogCloseButton>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const Footers = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDialogWithCheckboxOpen, setIsDialogWithCheckboxOpen] =
    React.useState(false);

  return (
    <>
      <Button
        variant="outline"
        onPress={() => setIsOpen(true)}
        className="me-4"
      >
        Publish
      </Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dialog>
          <DialogHeader>Confirm Publish</DialogHeader>
          <DialogBody>
            Are you sure you want to publish this document?
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton className="sm:me-auto">Cancel</DialogCloseButton>
            <Button onPress={() => setIsOpen(false)} variant="outline">
              Save as draft
            </Button>
            <Button onPress={() => setIsOpen(false)}>Publish</Button>
          </DialogFooter>
        </Dialog>
      </Modal>

      <Button variant="plain" onPress={() => setIsDialogWithCheckboxOpen(true)}>
        Don't ask again
      </Button>
      <Modal
        size="lg"
        isOpen={isDialogWithCheckboxOpen}
        onOpenChange={setIsDialogWithCheckboxOpen}
      >
        <Dialog>
          <DialogHeader>Set yourself to active?</DialogHeader>
          <DialogBody>
            You're currently set to away, but it looks like you're back. Want to
            update your availability?
          </DialogBody>
          <DialogFooter>
            <Checkbox className="sm:me-auto">Don't ask again</Checkbox>
            <DialogCloseButton>No Thanks</DialogCloseButton>
            <Button
              onPress={() => setIsDialogWithCheckboxOpen(false)}
              variant="solid"
              color="success"
            >
              Set to Active
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </>
  );
};

export const CloseButtons = () => {
  return (
    <DialogTrigger>
      <Button>Add Block</Button>
      <Modal size="md">
        <Dialog>
          <DialogHeader>Add Block to Project</DialogHeader>
          <DialogCloseButton />
          <DialogBody className="space-y-4 pb-2">
            <Text>
              Run this command to add this Block to an existing project or to
              create a new one.
            </Text>

            <TextField isReadOnly>
              <Label className="sr-only">Install command</Label>

              <div className="group grid grid-cols-[auto_1fr_auto]">
                <Input
                  type="text"
                  value="npm i tailwindcss-react-aria-components"
                  className="col-span-full row-start-1 truncate px-9"
                  placeholder="Search..."
                />

                <CopyButton
                  size="sm"
                  variant="plain"
                  className="-col-end-1 row-start-1 me-1 self-center"
                  copyValue="npm i tailwindcss-react-aria-components"
                ></CopyButton>
              </div>
            </TextField>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton variant="solid">Close</DialogCloseButton>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const LongContent = () => {
  return (
    <DialogTrigger>
      <Button>Terms Service</Button>
      <Modal isDismissable size="xl">
        <Dialog>
          <DialogHeader>Sample free terms of service template</DialogHeader>
          <DialogBody>
            <Text>
              This generic terms of service template will help you see how
              everything we talked about so far comes together to form a legal
              agreement. Keep in mind that this is just an example terms of
              service template and does not cover many of the important topics.
            </Text>
            <Heading level={3} className="mt-5 mb-4 font-bold">
              Privacy Policy
            </Heading>
            <Text className="text-foreground">
              Before you continue using our website we advise you to read our
              privacy policy [link to privacy policy] regarding our user data
              collection. It will help you better understand our practices.
            </Text>
            <Heading level={3} className="mt-5 mb-4 font-bold">
              Copyright
            </Heading>
            <Text className="text-foreground">
              Content published on this website (digital downloads, images,
              texts, graphics, logos) is the property of [name] and/or its
              content creators and protected by international copyright laws.
              The entire compilation of the content found on this website is the
              exclusive property of [name], with copyright authorship for this
              compilation by [name].
            </Text>
            <Heading level={3} className="mt-5 mb-4 font-bold">
              Communications
            </Heading>
            <Text className="text-foreground">
              The entire communication with us is electronic. Every time you
              send us an email or visit our website, you are going to be
              communicating with us. You hereby consent to receive
              communications from us. If you subscribe to the news on our
              website, you are going to receive regular emails from us. We will
              continue to communicate with you by posting news and notices on
              our website and by sending you emails. You also agree that all
              notices, disclosures, agreements, and other communications we
              provide to you electronically meet the legal requirements that
              such communications be in writing.
            </Text>
            <Heading level={3} className="mt-5 mb-4 font-bold">
              Applicable Law
            </Heading>
            <Text className="text-foreground">
              By visiting this website, you agree that the laws of the [your
              location], without regard to principles of conflict laws, will
              govern these terms of service, or any dispute of any sort that
              might come between [name] and you, or its business partners and
              associates.
            </Text>
            <Heading level={3} className="mt-5 mb-4 font-bold">
              Disputes
            </Heading>
            <Text className="text-foreground">
              Any dispute related in any way to your visit to this website or to
              products you purchase from us shall be arbitrated by state or
              federal court [your location] and you consent to exclusive
              jurisdiction and venue of such courts.
            </Text>
            <Heading level={3} className="mt-5 mb-4 font-bold">
              Comments, Reviews, and Emails
            </Heading>
            <Text className="text-foreground">
              Visitors may post content as long as it is not obscene, illegal,
              defamatory, threatening, infringing of intellectual property
              rights, invasive of privacy, or injurious in any other way to
              third parties. Content has to be free of software viruses,
              political campaigns, and commercial solicitation. We reserve all
              rights (but not the obligation) to remove and/or edit such
              content. When you post your content, you grant [name]
              non-exclusive, royalty-free and irrevocable right to use,
              reproduce, publish, modify such content throughout the world in
              any media.
            </Text>
            <Heading level={3} className="mt-5 mb-4 font-bold">
              License and Site Access
            </Heading>
            <Text className="text-foreground">
              We grant you a limited license to access and make personal use of
              this website. You are not allowed to download or modify it. This
              may be done only with written consent from us.
            </Text>
            <Heading level={3} className="mt-5 mb-4 font-bold">
              User Account
            </Heading>
            <Text className="text-foreground">
              If you are an owner of an account on this website, you are solely
              responsible for maintaining the confidentiality of your private
              user details (username and password). You are responsible for all
              activities that occur under your account or password. We reserve
              all rights to terminate accounts, edit or remove content and
              cancel orders at their sole discretion.
            </Text>
          </DialogBody>

          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button>I agree</Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const MinHeight = () => {
  return (
    <DialogTrigger>
      <Button> Channel settings</Button>
      <Modal size="xl">
        <Dialog className="h-[min(85vh,820px)]">
          <DialogHeader>
            <div className="flex flex-1 flex-col">
              <DialogTitle>Channel settings</DialogTitle>
              <DialogCloseButton />
              <div className="flex flex-wrap gap-2 pt-2">
                <MenuTrigger>
                  <TooltipTrigger>
                    <MenuButton
                      aria-label="Start Conversation"
                      className="py-0.5 text-xs/6"
                    >
                      <Star className="h-4 w-4" strokeWidth={1.5} />
                    </MenuButton>
                    <Tooltip>Start Channel</Tooltip>
                  </TooltipTrigger>
                  <MenuPopover placement="bottom start">
                    <Menu>
                      <MenuSection title="Move to..">
                        <MenuItem>Started</MenuItem>
                        <MenuItem>Move to conversation</MenuItem>
                      </MenuSection>
                    </Menu>
                  </MenuPopover>
                </MenuTrigger>
                <Select
                  className="w-auto"
                  aria-label="Notification Settings"
                  defaultSelectedKey="all"
                >
                  <SelectButton>
                    <Icon className="text-muted size-4">
                      <BellIcon />
                    </Icon>
                    Get notifications for
                  </SelectButton>
                  <SelectPopover>
                    <SelectListBox>
                      <SelectListItem id="all" textValue="All Messages">
                        <SelectListItemLabel>All messages</SelectListItemLabel>
                        <SelectListItemDescription>
                          Get notification for all messages
                        </SelectListItemDescription>
                      </SelectListItem>

                      <SelectListItem id="mention" textValue="@Mentions">
                        <SelectListItemLabel>@Mentions</SelectListItemLabel>
                        <SelectListItemDescription>
                          Get notifications for @mentions, @here and @channel
                          only
                        </SelectListItemDescription>
                      </SelectListItem>

                      <SelectListItem
                        id="mute_channel"
                        textValue="Mute Channel"
                      >
                        <SelectListItemLabel>Mute Channel</SelectListItemLabel>
                        <SelectListItemDescription>
                          Prevent this channel from bolding for unread messages
                          and only receive a badge if you're mentioned
                        </SelectListItemDescription>
                      </SelectListItem>
                    </SelectListBox>
                  </SelectPopover>
                </Select>
              </div>
            </div>
          </DialogHeader>
          <DialogCloseButton />
          <DialogBody className="overflow-hidden px-0">
            <Tabs className="overflow-auto p-0 pb-0 text-base/6 sm:text-sm/6">
              <div className="sticky top-0 bg-white dark:bg-zinc-900">
                <TabList
                  aria-label="History of Ancient Rome"
                  className="space-x-4 px-6"
                >
                  <Tab className="py-2" id="about">
                    About
                  </Tab>
                  <Tab className="py-2" id="members">
                    Members <span className="ps-2">24</span>
                  </Tab>
                  <Tab className="py-2" id="integrations">
                    Integrations
                  </Tab>
                  <Tab className="py-2" id="settings">
                    Settings
                  </Tab>
                </TabList>
              </div>

              <TabPanel id="about" className="flex flex-col gap-4 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur laudantium dolorum consectetur culpa repellat
                labore dolorem modi reprehenderit. Unde praesentium fugiat
                provident velit, reprehenderit labore pariatur quo vero
                obcaecati nostrum. Necessitatibus quae sint fugit et architecto
                odit, quaerat sapiente amet excepturi, placeat assumenda dicta
                veniam, iste quasi consequatur enim pariatur obcaecati.
                Voluptatibus esse possimus porro nisi repellendus atque facilis
                facere eum magnam doloremque, repudiandae veniam labore nobis
                neque, omnis ea dolorem illo, tempora similique reiciendis in
                iure placeat quibusdam? Atque id corporis, neque aliquam, ullam
                officiis tenetur animi recusandae doloribus pariatur repudiandae
                numquam officia natus sit placeat! Numquam, fugit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Ab unde optio
                magni rerum, ex dolorum, laboriosam, ea asperiores deserunt
                culpa laudantium illum deleniti mollitia provident voluptatum
                quam aspernatur debitis iste tempora architecto voluptatem! Quod
                voluptas laudantium suscipit ut a perferendis? Eos cupiditate,
                fugit, at enim perferendis, ullam placeat aperiam quisquam amet
                ab error et officiis laboriosam similique in animi atque ipsa.
                Reprehenderit repellat iure doloribus rem dolorem, expedita
                fugit, facere soluta, at a non eligendi itaque. Laudantium
                quidem vel natus nostrum labore neque ad sint, pariatur dolore
                soluta, alias ab similique debitis aperiam eius, voluptate a
                iste error impedit quo corporis illo nobis dolor ipsa?
                Recusandae repellat sapiente tenetur, quod dicta pariatur quae
                vitae! Vero sapiente culpa temporibus reiciendis ut eligendi
                ipsam? Quasi nobis non reiciendis debitis, consequatur
                reprehenderit deleniti doloremque inventore aut error commodi
                vitae quia cumque illum a eaque, aspernatur quo enim ipsam!
                Aspernatur incidunt iste fugit quas totam quae atque impedit
                iure, commodi vero maiores, ad eum explicabo tenetur culpa neque
                voluptas. Soluta distinctio placeat eum omnis explicabo vel,
                delectus molestiae voluptatibus dignissimos vitae, rem ratione
                tempora assumenda eaque asperiores quidem voluptates, ab
                expedita dolores consectetur! Omnis culpa asperiores explicabo
                at qui, exercitationem vel id debitis necessitatibus, in, dolore
                enim minus saepe! Vel sunt excepturi reprehenderit autem dolorum
                perferendis obcaecati provident! Saepe iure veniam
                exercitationem officia nobis minima alias magni iusto fugiat
                pariatur ut ipsum, debitis accusamus ipsa dolore vero adipisci!
                Harum expedita culpa voluptate ut fuga, sapiente sunt eum maxime
                nihil hic ratione dignissimos minima! Esse, mollitia nisi
                repellendus, unde cum atque, sunt qui possimus asperiores
                doloremque modi inventore excepturi fuga itaque iure reiciendis
                saepe consequuntur! Possimus fuga laboriosam, sunt perspiciatis
                nostrum at neque pariatur quod itaque suscipit. Voluptatem quas
                dolore nihil aspernatur explicabo unde sed nesciunt quos
                dignissimos, nobis reprehenderit quia ullam itaque autem labore?
              </TabPanel>
              <TabPanel id="members"></TabPanel>
              <TabPanel id="integrations"></TabPanel>
              <TabPanel id="settings"></TabPanel>
            </Tabs>
          </DialogBody>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const CloseWhenClickingOutside = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal isDismissable size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField
                isRequired
                className="grid grid-cols-4 gap-x-4"
                autoFocus
              >
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const CloseWithESCKey = () => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal isKeyboardDismissDisabled size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField
                isRequired
                className="grid grid-cols-4 gap-x-4"
                autoFocus
              >
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export const AutoFocusWhenOpen = (args: any) => {
  return (
    <DialogTrigger>
      <Button>Edit profile</Button>
      <Modal {...args} size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField
                isRequired
                className="grid grid-cols-4 gap-x-4"
                autoFocus
              >
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};


export const ControlledOpenState = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <MenuTrigger>
        <MenuButton>Options</MenuButton>
        <MenuPopover className="animate-none">
          <Menu>
            <MenuItem onAction={() => setOpen(true)}>Edit profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>

      <Modal isOpen={isOpen} onOpenChange={setOpen}>
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField
                isRequired
                className="grid grid-cols-4 gap-x-4"
                autoFocus
              >
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3"></Input>
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </>
  );
};
