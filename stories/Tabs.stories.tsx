import React from 'react';
import type { Meta } from '@storybook/react';
import { Tab, TabList, TabPanel, Tabs } from '../src/Tabs';
import { Key } from 'react-aria-components';
import { NativeSelect } from '../src/NativeSelect';
import { Heading } from '../src/Heading';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/Tabs.html#tabs" target="_blank">**Tabs**</a> organize content into multiple sections and allow users to navigate between them.',
      },
      controls: {
        exclude: /.*/g,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const tabs = [
  { id: 'dashboard', title: 'Dashboard' },
  { id: 'members', title: 'Members' },
  { id: 'billing', title: 'Billing' },
  { id: 'settings', title: 'Settings' },
];

export const Example = () => {
  const [tab, setTab] = React.useState<Key>('For');

  return (
    <div className="mt-6 w-full px-6">
      <div className="flex w-full flex-col 2xl:w-2/3">
        <NativeSelect
          className="block sm:hidden"
          value={tab}
          aria-label="Preference page"
          onChange={(e) => {
            setTab(e.target.value);
          }}
        >
          {tabs.map((tab) => {
            return <option value={tab.id}>{tab.title}</option>;
          })}
        </NativeSelect>

        <Tabs selectedKey={tab} onSelectionChange={setTab}>
          <TabList
            className="hidden sm:flex"
            aria-label="History of Ancient Rome"
            items={tabs}
          >
            {(item) => {
              return (
                <Tab id={item.id} className="">
                  {item.title}
                </Tab>
              );
            }}
          </TabList>

          <TabPanel id="dashboard">
            <Heading level={2} displayLevel={3}>
              Dashboard
            </Heading>
          </TabPanel>
          <TabPanel id="members">
            <Heading level={2} displayLevel={3}>
              Members
            </Heading>
          </TabPanel>
          <TabPanel id="billing">
            <Heading level={2} displayLevel={3}>
              Billings
            </Heading>
          </TabPanel>
          <TabPanel id="settings">
            <Heading level={2} displayLevel={3}>
              Settings
            </Heading>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export const VerticalTabs = () => {
  const [tab, setTab] = React.useState<Key>('For');

  return (
    <div className="mt-6 w-full px-6">
      <Tabs selectedKey={tab} onSelectionChange={setTab} orientation="vertical">
        <TabList
          className="gap-3"
          aria-label="History of Ancient Rome"
          items={tabs}
        >
          {(item) => {
            return (
              <Tab id={item.id} className="px-4">
                {item.title}
              </Tab>
            );
          }}
        </TabList>

        <TabPanel id="dashboard" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Dashboard
          </Heading>
        </TabPanel>
        <TabPanel id="members" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Members
          </Heading>
        </TabPanel>
        <TabPanel id="billing" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Billings
          </Heading>
        </TabPanel>
        <TabPanel id="settings" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Settings
          </Heading>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export const PillsTab = () => {
  const [tab, setTab] = React.useState<Key>('For');

  return (
    <div className="mt-6 w-full px-6">
      <Tabs variant="pills" selectedKey={tab} onSelectionChange={setTab}>
        <TabList
          className="gap-3"
          aria-label="History of Ancient Rome"
          items={tabs}
        >
          {(item) => {
            return (
              <Tab id={item.id} className="">
                {item.title}
              </Tab>
            );
          }}
        </TabList>

        <TabPanel id="dashboard" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Dashboard
          </Heading>
        </TabPanel>
        <TabPanel id="members" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Members
          </Heading>
        </TabPanel>
        <TabPanel id="billing" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Billings
          </Heading>
        </TabPanel>
        <TabPanel id="settings" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Settings
          </Heading>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export const VerticalPillsTab = () => {
  const [tab, setTab] = React.useState<Key>('For');

  return (
    <div className="mt-6 w-full px-6">
      <Tabs
        variant="pills"
        selectedKey={tab}
        onSelectionChange={setTab}
        orientation="vertical"
      >
        <TabList
          className="gap-3"
          aria-label="History of Ancient Rome"
          items={tabs}
        >
          {(item) => {
            return (
              <Tab id={item.id} className="">
                {item.title}
              </Tab>
            );
          }}
        </TabList>

        <TabPanel id="dashboard" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Dashboard
          </Heading>
        </TabPanel>
        <TabPanel id="members" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Members
          </Heading>
        </TabPanel>
        <TabPanel id="billing" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Billings
          </Heading>
        </TabPanel>
        <TabPanel id="settings" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Settings
          </Heading>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export const SegmentsTab = () => {
  const [tab, setTab] = React.useState<Key>('For');

  return (
    <div className="mt-6 w-full px-6">
      <Tabs variant="segment" selectedKey={tab} onSelectionChange={setTab}>
        <TabList
          className="gap-3"
          aria-label="History of Ancient Rome"
          items={tabs}
        >
          {(item) => {
            return <Tab id={item.id}>{item.title}</Tab>;
          }}
        </TabList>

        <TabPanel id="dashboard" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Dashboard
          </Heading>
        </TabPanel>
        <TabPanel id="members" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Members
          </Heading>
        </TabPanel>
        <TabPanel id="billing" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Billings
          </Heading>
        </TabPanel>
        <TabPanel id="settings" className="px-4 py-2">
          <Heading level={2} displayLevel={3}>
            Settings
          </Heading>
        </TabPanel>
      </Tabs>
    </div>
  );
};
