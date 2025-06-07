import { docs } from '../.storybook/docs';
import { Strong } from '../src/text';
import { ArrowRightIcon } from '../src/icons/outline/arrow-right';
import { ArrowUpRightIcon } from '../src/icons/outline/arrow-up-right';
import { CalendarIcon } from '../src/icons/outline/calendar';
import { CheckIcon } from '../src/icons/outline/check';
import { ChevronDownIcon } from '../src/icons/outline/chevron-down';
import { SearchIcon } from '../src/icons/outline/search';
import { ChevronLeftIcon } from '../src/icons/outline/chevron-left';
import { ChevronRightIcon } from '../src/icons/outline/chevron-right';
import { ChevronUpIcon } from '../src/icons/outline/chevron-up';
import { CopyIcon } from '../src/icons/outline/copy';
import { MinusIcon } from '../src/icons/outline/minus';
import { PlusIcon } from '../src/icons/outline/plus';
import { SpinnerIcon } from '../src/icons/outline/spinner';
import { XIcon } from '../src/icons/outline/x';
import { AvailableIcon } from '../src/icons/solid/available';
import { AwayIcon } from '../src/icons/solid/away';
import { BusyIcon } from '../src/icons/solid/busy';
import { DoNotDisturbIcon } from '../src/icons/solid/do-not-disturb';
import { ExclamationCircleIcon } from '../src/icons/outline/exclamation-circle';
import { EyeIcon } from '../src/icons/outline/eye';
import { EyeOffIcon } from '../src/icons/outline/eye-off';
import { InformationCircleIcon } from '../src/icons/outline/information-circle';
import { LinkIcon } from '../src/icons/outline/link';
import { ImageIcon } from '../src/icons/outline/image';
import { SettingIcon } from '../src/icons/outline/setting';
import { CheckCircleIcon as CheckCircleIcon } from '../src/icons/outline/check-circle';
import { ExclamationTriangleIcon } from '../src/icons/outline/exclamation-triangle';
import { CloudOffIcon } from '../src/icons/outline/cloud-off';
import { QuestionMarkCircleIcon } from '../src/icons/outline/question-mark-circle';
import { MailIcon } from '../src/icons/outline/mail';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const Icons = () => {
  return (
    <div className="max-w-lg space-y-12 [&_[data-ui=icon]]:size-6">
      <div>
        <Strong>Outline</Strong>
        <div className="flex flex-wrap gap-4 pt-4">
          <ArrowRightIcon />
          <ArrowUpRightIcon />
          <ChevronDownIcon />
          <ChevronUpIcon />
          <ChevronLeftIcon />
          <ChevronRightIcon />
          <XIcon />
          <CheckIcon />
          <CheckCircleIcon />
          <ExclamationTriangleIcon />
          <ExclamationCircleIcon />
          <InformationCircleIcon />
          <QuestionMarkCircleIcon />
          <CloudOffIcon />
          <PlusIcon />
          <MinusIcon />
          <CalendarIcon />
          <CopyIcon />
          <SearchIcon />
          <SettingIcon />
          <SpinnerIcon />
          <LinkIcon />
          <ImageIcon />
          <EyeIcon />
          <EyeOffIcon />
          <MailIcon />
        </div>
      </div>

      <div>
        <Strong>Solid</Strong>
        <div className="flex flex-wrap gap-4 pt-4">
          <AvailableIcon />
          <AwayIcon />
          <BusyIcon />
          <DoNotDisturbIcon />
        </div>
      </div>
    </div>
  );
};
