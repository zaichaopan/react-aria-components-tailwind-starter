import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from '../src/tabs';
import { Key } from 'react-aria-components';
import { NativeSelect, NativeSelectField } from '../src/native-select';
import { docs } from '../.storybook/docs';
import { Icon } from '../src/icon';
import { Strong } from '../src/text';
import {
  BellIcon,
  CreditCardIcon,
  UserIcon,
  Mic2Icon,
  CogIcon,
  VideoIcon,
  MessageSquareIcon,
  Disc2Icon,
  ScreenShareIcon,
  KeyboardIcon,
  Music2Icon,
  DiscAlbumIcon,
  MicVocalIcon,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const meta = {
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation">
          <Tab id="Overview">Overview</Tab>
          <Tab id="Activity">Activity</Tab>
          <Tab id="Settings">Settings</Tab>
          <Tab id="Collaborators">Collaborators</Tab>
          <Tab id="Notifications">Notifications</Tab>
        </TabList>

        <TabPanel id="Overview"></TabPanel>
        <TabPanel id="Activity"></TabPanel>
        <TabPanel id="Settings"></TabPanel>
        <TabPanel id="Collaborators"></TabPanel>
        <TabPanel id="Notifications"></TabPanel>
      </Tabs>
    </div>
  );
};

export const TabWithIcons = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation" className="px-4">
          <Tab id="profile">
            <Icon>
              <UserIcon />
            </Icon>
            Profile
          </Tab>

          <Tab id="billing">
            <Icon>
              <CreditCardIcon />
            </Icon>
            Billing
          </Tab>
          <Tab id="notifications">
            <Icon>
              <BellIcon />
            </Icon>
            Notifications
          </Tab>
        </TabList>

        <TabPanel id="profile"></TabPanel>

        <TabPanel id="billing"></TabPanel>
        <TabPanel id="notifications"></TabPanel>
      </Tabs>
    </div>
  );
};

export const VerticalOrientation = () => {
  return (
    <div className="p-4 sm:p-12">
      <Strong>Components</Strong>
      <Tabs orientation="vertical" className="mt-4">
        <TabList aria-label="Components">
          <Tab id="Alert">Alert</Tab>
          <Tab id="Avatar">Avatar</Tab>
          <Tab id="Badge">Badge</Tab>
          <Tab id="Button">Button</Tab>
          <Tab id="Checkbox">Checkbox</Tab>
          <Tab id="Dialog">Dialog</Tab>
        </TabList>

        <TabPanel id="Alert"></TabPanel>
        <TabPanel id="Avatar"></TabPanel>
        <TabPanel id="Badge"></TabPanel>
        <TabPanel id="Button"></TabPanel>
        <TabPanel id="Checkbox"></TabPanel>
        <TabPanel id="Dialog"></TabPanel>
      </Tabs>
    </div>
  );
};

export const PillTabs = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="pills">
        <TabList aria-label="Settings">
          <Tab id="My Account">My Account</Tab>
          <Tab id="Company">Company</Tab>
          <Tab id="Team Members">Team Members</Tab>
          <Tab id="Billing">Billing</Tab>
        </TabList>
        <TabPanel id="My Account"></TabPanel>
        <TabPanel id="Company"></TabPanel>
        <TabPanel id="Team Members"></TabPanel>
        <TabPanel id="Billing"></TabPanel>
      </Tabs>
    </div>
  );
};

export const VerticalPillTabs = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="pills" orientation="vertical">
        <TabList aria-label="Settings">
          <Tab id="General">
            <Icon>
              <CogIcon />
            </Icon>
            General
          </Tab>
          <Tab id="Video">
            <Icon>
              <VideoIcon />
            </Icon>
            Video
          </Tab>
          <Tab id="Audio">
            <Icon>
              <Mic2Icon />
            </Icon>
            Audio
          </Tab>
          <Tab id="Screen Share">
            <Icon>
              <ScreenShareIcon />
            </Icon>
            Screen Share
          </Tab>
          <Tab id="Team Chat">
            <Icon>
              <MessageSquareIcon />
            </Icon>
            Team Chat
          </Tab>
          <Tab id="Recording">
            <Icon>
              <Disc2Icon />
            </Icon>
            Recording
          </Tab>
          <Tab id="Keyboard Shortcuts">
            <Icon>
              <KeyboardIcon />
            </Icon>
            Keyboard Shortcuts
          </Tab>
        </TabList>

        <TabPanel id="General"></TabPanel>
        <TabPanel id="Video"></TabPanel>
        <TabPanel id="Audio"></TabPanel>
        <TabPanel id="Screen Share"></TabPanel>
        <TabPanel id="Team Chat"></TabPanel>
        <TabPanel id="Recording"></TabPanel>
        <TabPanel id="Keyboard Shortcuts"></TabPanel>
      </Tabs>
    </div>
  );
};

export const VerticalPillTabsWithAccentBackground = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="pills" orientation="vertical">
        <TabList aria-label="Settings">
          <Tab
            id="General"
            className={({ isSelected, isFocusVisible }) =>
              twMerge(
                isSelected
                  ? 'bg-accent dark:bg-accent text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]'
                  : '',
                isSelected && isFocusVisible && 'bg-accent/80',
              )
            }
          >
            <Icon>
              <CogIcon />
            </Icon>
            General
          </Tab>
          <Tab
            id="Video"
            className={({ isSelected }) =>
              isSelected ? 'bg-accent dark:bg-accent text-white' : ''
            }
          >
            <Icon>
              <VideoIcon />
            </Icon>
            Video
          </Tab>
          <Tab
            id="Audio"
            className={({ isSelected }) =>
              isSelected ? 'bg-accent dark:bg-accent text-white' : ''
            }
          >
            <Icon>
              <Mic2Icon />
            </Icon>
            Audio
          </Tab>
          <Tab
            id="Screen Share"
            className={({ isSelected }) =>
              isSelected ? 'bg-accent dark:bg-accent text-white' : ''
            }
          >
            <Icon>
              <ScreenShareIcon />
            </Icon>
            Screen Share
          </Tab>
          <Tab
            id="Team Chat"
            className={({ isSelected }) =>
              isSelected ? 'bg-accent dark:bg-accent text-white' : ''
            }
          >
            <Icon>
              <MessageSquareIcon />
            </Icon>
            Team Chat
          </Tab>
          <Tab
            id="Recording"
            className={({ isSelected }) =>
              isSelected ? 'bg-accent dark:bg-accent text-white' : ''
            }
          >
            <Icon>
              <Disc2Icon />
            </Icon>
            Recording
          </Tab>
          <Tab
            id="Keyboard Shortcuts"
            className={({ isSelected }) =>
              isSelected ? 'bg-accent dark:bg-accent text-white' : ''
            }
          >
            <Icon>
              <KeyboardIcon />
            </Icon>
            Keyboard Shortcuts
          </Tab>
        </TabList>

        <TabPanel id="General"></TabPanel>
        <TabPanel id="Video"></TabPanel>
        <TabPanel id="Audio"></TabPanel>
        <TabPanel id="Screen Share"></TabPanel>
        <TabPanel id="Team Chat"></TabPanel>
        <TabPanel id="Recording"></TabPanel>
        <TabPanel id="Keyboard Shortcuts"></TabPanel>
      </Tabs>
    </div>
  );
};

export const VerticalPillTabsWithAccentColor = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="pills" orientation="vertical">
        <TabList aria-label="Settings">
          <Tab
            id="General"
            className={({ isSelected }) =>
              isSelected
                ? 'bg-accent/10 text-accent dark:bg-accent dark:text-[lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)]'
                : ''
            }
          >
            <Icon>
              <CogIcon />
            </Icon>
            General
          </Tab>
          <Tab
            id="Video"
            className={({ isSelected }) =>
              isSelected
                ? 'bg-accent/10 text-accent dark:bg-accent dark:text-white'
                : ''
            }
          >
            <Icon>
              <VideoIcon />
            </Icon>
            Video
          </Tab>
          <Tab
            id="Audio"
            className={({ isSelected }) =>
              isSelected
                ? 'bg-accent/10 text-accent dark:bg-accent dark:text-white'
                : ''
            }
          >
            <Icon>
              <Mic2Icon />
            </Icon>
            Audio
          </Tab>
          <Tab
            id="Screen Share"
            className={({ isSelected }) =>
              isSelected
                ? 'bg-accent/10 text-accent dark:bg-accent dark:text-white'
                : ''
            }
          >
            <Icon>
              <ScreenShareIcon />
            </Icon>
            Screen Share
          </Tab>
          <Tab
            id="Team Chat"
            className={({ isSelected }) =>
              isSelected
                ? 'bg-accent/10 text-accent dark:bg-accent dark:text-white'
                : ''
            }
          >
            <Icon>
              <MessageSquareIcon />
            </Icon>
            Team Chat
          </Tab>
          <Tab
            id="Recording"
            className={({ isSelected }) =>
              isSelected
                ? 'bg-accent/10 text-accent dark:bg-accent dark:text-white'
                : ''
            }
          >
            <Icon>
              <Disc2Icon />
            </Icon>
            Recording
          </Tab>
          <Tab
            id="Keyboard Shortcuts"
            className={({ isSelected }) =>
              isSelected
                ? 'bg-accent/10 text-accent dark:bg-accent dark:text-white'
                : ''
            }
          >
            <Icon>
              <KeyboardIcon />
            </Icon>
            Keyboard Shortcuts
          </Tab>
        </TabList>

        <TabPanel id="General"></TabPanel>
        <TabPanel id="Video"></TabPanel>
        <TabPanel id="Audio"></TabPanel>
        <TabPanel id="Screen Share"></TabPanel>
        <TabPanel id="Team Chat"></TabPanel>
        <TabPanel id="Recording"></TabPanel>
        <TabPanel id="Keyboard Shortcuts"></TabPanel>
      </Tabs>
    </div>
  );
};

export const SegmentTabs = () => {
  return (
    <div className="space-y-12 p-4 sm:p-12">
      <Tabs variant="segment">
        <TabList aria-label="Music">
          <Tab id="Free Apps">Free Apps </Tab>
          <Tab id="Paid Apps">Paid Apps</Tab>
        </TabList>
        <TabPanel id="Free Apps"></TabPanel>
        <TabPanel id="Paid Apps"></TabPanel>
      </Tabs>

      <Tabs variant="segment">
        <TabList
          aria-label="Music"
          className="w-full max-w-lg [--border-radius:var(--radius-md)]"
        >
          <Tab id="Last 24 Hours" className="py-0">
            Last 24 Hours
          </Tab>
          <Tab id="Last 10 Days" className="py-0">
            Last 10 Days
          </Tab>
        </TabList>

        <TabPanel id="Last 24 Hours"></TabPanel>
        <TabPanel id="Last 10 Days"></TabPanel>
      </Tabs>
    </div>
  );
};

export const SegmentTabWithIcons = () => {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="segment">
        <TabList aria-label="Music">
          <Tab id="Artists">
            <Icon>
              <MicVocalIcon />
            </Icon>
            Artists
          </Tab>
          <Tab id="Albums">
            <Icon>
              <DiscAlbumIcon />
            </Icon>
            Albums
          </Tab>
          <Tab id="Songs">
            <Icon>
              <Music2Icon />
            </Icon>
            Songs
          </Tab>
        </TabList>

        <TabPanel id="Artists"></TabPanel>
        <TabPanel id="Albums"></TabPanel>
        <TabPanel id="Songs"></TabPanel>
      </Tabs>
    </div>
  );
};

const tabs = [
  { title: 'Overview' },
  { title: 'Activity' },
  { title: 'Settings' },
  { title: 'Collaborators' },
  { title: 'Notifications' },
];

export const MobilFriendlyTabs = () => {
  const [tab, setTab] = React.useState<Key>('Overview');

  return (
    <div className="p-4 sm:p-12">
      <NativeSelectField className="block sm:hidden">
        <NativeSelect
          value={tab}
          aria-label="Preference page"
          onChange={(e) => {
            setTab(e.target.value);
          }}
        >
          {tabs.map((tab) => {
            return (
              <option key={tab.title} value={tab.title}>
                {tab.title}
              </option>
            );
          })}
        </NativeSelect>
      </NativeSelectField>

      <Tabs selectedKey={tab} onSelectionChange={setTab}>
        <TabList
          className="hidden sm:flex"
          aria-label="Navigation"
          items={tabs}
        >
          {(item) => {
            return <Tab id={item.title}>{item.title}</Tab>;
          }}
        </TabList>

        {tabs.map((tab) => {
          return <TabPanel key={tab.title} id={tab.title}></TabPanel>;
        })}
      </Tabs>
    </div>
  );
};
