import {
  DisclosureGroup,
  Disclosure,
  DisclosurePanel,
  DisclosureControl,
} from '../src/disclosure';
import { docs } from '../.storybook/docs';
import { Text } from '../src/text';
import { ChevronDown } from 'lucide-react';
import { Heading } from '../src/heading';
import { Icon } from '../src/icon';

const meta = {
  title: 'Disclosure',
  parameters: {
    layout: 'fullscreen',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <div className="p-6">
      <Disclosure>
        <DisclosureControl>System Requirements</DisclosureControl>
        <DisclosurePanel>
          <Text>Details about system requirements here.</Text>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export const DefaultExpanded = () => {
  return (
    <div className="p-6">
      <Disclosure defaultExpanded>
        <DisclosureControl>System Requirements</DisclosureControl>
        <DisclosurePanel>
          <Text>Details about system requirements here.</Text>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export const ToggleIcon = () => {
  return (
    <div className="space-y-6 p-6">
      <Disclosure defaultExpanded>
        <DisclosureControl className="w-full gap-x-2 sm:w-86">
          System Requirements
          <Icon>
            <ChevronDown className="transition-all group-aria-expanded:rotate-180" />
          </Icon>
        </DisclosureControl>

        <DisclosurePanel>
          Details about system requirements here.
        </DisclosurePanel>
      </Disclosure>

      <Disclosure defaultExpanded>
        <DisclosureControl className="gap-x-2">
          <Icon>
            <ChevronDown className="transition-all group-aria-expanded:rotate-180" />
          </Icon>
          System Requirements
        </DisclosureControl>

        <DisclosurePanel className="ps-7">
          Details about system requirements here.
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export const DisclosureGroups = () => {
  return (
    <div className="p-6">
      <DisclosureGroup
        className="flex flex-col sm:w-86"
        defaultExpandedKeys={['system requirements']}
      >
        <Heading className="self-center pb-6">
          Frequently asked questions
        </Heading>
        <Disclosure
          defaultExpanded
          id="system requirements"
          className="border-b last:border-b-0"
        >
          <DisclosureControl>
            <Icon>
              <ChevronDown className="transition-all group-aria-expanded:rotate-180" />
            </Icon>
            System Requirements
          </DisclosureControl>
          <DisclosurePanel className="ps-7">
            Details about system requirements here.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="manage account" className="border-b last:border-b-0">
          <DisclosureControl>
            <Icon>
              <ChevronDown
                className="transition-all group-aria-expanded:rotate-180"
                strokeWidth={1.5}
              />
            </Icon>
            Manage your account
          </DisclosureControl>

          <DisclosurePanel className="ps-7">
            Details on managing your account.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="download" className="border-b last:border-b-0">
          <DisclosureControl>
            <Icon>
              <ChevronDown className="transition-all group-aria-expanded:rotate-180" />
            </Icon>
            Download, Install, and Set Up
          </DisclosureControl>
          <DisclosurePanel className="ps-7">
            Instructions on how to download, install, and set up.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="billing address" className="border-b last:border-b-0">
          <DisclosureControl>
            <Icon>
              <ChevronDown className="transition-all group-aria-expanded:rotate-180" />
            </Icon>
            Billing Address
          </DisclosureControl>
          <DisclosurePanel className="ps-7">
            Billing address form here.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure
          id="personal information"
          className="border-b last:border-b-0"
        >
          <DisclosureControl>
            <Icon>
              <ChevronDown className="transition-all group-aria-expanded:rotate-180" />
            </Icon>
            Personal Information
          </DisclosureControl>
          <DisclosurePanel className="ps-7">
            Details about personal information here
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
    </div>
  );
};
