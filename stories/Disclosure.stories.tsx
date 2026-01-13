import {
  DisclosureGroup,
  Disclosure,
  DisclosurePanel,
  DisclosureControl,
} from '../src/disclosure';
import { docs } from '../.storybook/docs';
import {
  ChevronDown,
  EarthIcon,
  PuzzleIcon,
  SparklesIcon,
  Users2Icon,
  WrenchIcon,
} from 'lucide-react';
import { Heading } from '../src/heading';
import { Icon } from '../src/icon';
import { PlusIcon } from '../src/icons/outline/plus';

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
          System Requirements refer to the set of minimum and recommended
          hardware and software specifications that a computer system must meet
          in order to successfully install, run, and operate a particular
          application, operating system, or video game. These specifications are
          outlined by developers or manufacturers to ensure that the software
          functions as intended without performance issues, compatibility
          errors, or system crashes. Meeting the minimum requirements guarantees
          basic usability, while meeting the recommended requirements ensures
          optimal performance, smoother operation, faster processing, and access
          to all available features. By adhering to these guidelines, users can
          avoid technical problems and enjoy a stable and efficient user
          experience.
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export const DefaultExpanded = () => {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <Disclosure defaultExpanded>
        <DisclosureControl className="w-full justify-between">
          System Requirements
          <Icon>
            <ChevronDown className="duration-300 group-aria-expanded:rotate-180" />
          </Icon>
        </DisclosureControl>
        <DisclosurePanel>
          System Requirements refer to the set of minimum and recommended
          hardware and software specifications that a computer system must meet
          in order to successfully install, run, and operate a particular
          application, operating system, or video game. These specifications are
          outlined by developers or manufacturers to ensure that the software
          functions as intended without performance issues, compatibility
          errors, or system crashes. Meeting the minimum requirements guarantees
          basic usability, while meeting the recommended requirements ensures
          optimal performance, smoother operation, faster processing, and access
          to all available features. By adhering to these guidelines, users can
          avoid technical problems and enjoy a stable and efficient user
          experience.
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export const DisclosureGroups = () => {
  return (
    <div className="mx-auto max-w-md p-6">
      <DisclosureGroup
        className="flex flex-col"
        defaultExpandedKeys={['system requirements']}
      >
        <Heading className="self-center pb-6">Frequent asked questions</Heading>
        <Disclosure
          defaultExpanded
          id="system requirements"
          className="border-b last:border-b-0"
        >
          <DisclosureControl>
            <Icon>
              <WrenchIcon />
            </Icon>
            What is design engineering?
            <PlusIcon className="ms-auto transition-all group-aria-expanded:rotate-45" />
          </DisclosureControl>
          <DisclosurePanel className="ps-7">
            Where design intuition meets code execution — enabling you to see UI
            problems and build solutions from the ground up.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="manage account" className="border-b last:border-b-0">
          <DisclosureControl>
            <Icon>
              <PuzzleIcon />
            </Icon>
            What is the craft of UI?
            <PlusIcon className="ms-auto transition-all group-aria-expanded:rotate-45" />
          </DisclosureControl>

          <DisclosurePanel className="ps-7">
            A course about building things *well* — mastering the web platform
            so you’re not limited by tools or libraries.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="download" className="border-b last:border-b-0">
          <DisclosureControl>
            <Icon>
              <EarthIcon />
            </Icon>
            Why focus on the web platform?
            <PlusIcon className="ms-auto transition-all group-aria-expanded:rotate-45" />
          </DisclosureControl>
          <DisclosurePanel className="ps-7">
            Because when you work *with* the web — not fight it — you unlock
            performance, accessibility, and durability that last.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure id="billing address" className="border-b last:border-b-0">
          <DisclosureControl>
            <Icon>
              <SparklesIcon />
            </Icon>
            Why does craft matter?
            <PlusIcon className="ms-auto transition-all group-aria-expanded:rotate-45" />
          </DisclosureControl>
          <DisclosurePanel className="ps-7">
            Because it’s more than making something work — it’s making something
            feel right: inclusive, resilient, and scalable.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure
          id="personal information"
          className="border-b last:border-b-0"
        >
          <DisclosureControl>
            <Icon>
              <Users2Icon />
            </Icon>
            Who is this for?
            <PlusIcon className="ms-auto transition-all group-aria-expanded:rotate-45" />
          </DisclosureControl>
          <DisclosurePanel className="ps-7">
            Designers who code, developers who design — anyone ready to stop
            chasing snippets and become the person who *can build anything*.
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
    </div>
  );
};
