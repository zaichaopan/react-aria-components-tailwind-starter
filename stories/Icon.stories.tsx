import { Icon } from '../src/icon';
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
import { CheckCircleIcon } from '../src/icons/solid/check-circle';
import { ExclamationCircleIcon } from '../src/icons/solid/exclamation-circle';
import { ExclamationTriangleIcon } from '../src/icons/solid/exclamation-triangle';
import { EyeIcon } from '../src/icons/solid/eye';
import { EyeOffIcon } from '../src/icons/solid/eye-off';
import { FaceFrownIcon } from '../src/icons/solid/face-frown';
import { InformationCircleIcon } from '../src/icons/solid/information-circle';
import { QuestionMarkCircle } from '../src/icons/solid/question-mark-circle';
import { XCircleIcon } from '../src/icons/solid/x-circle';
import { LinkIcon } from '../src/icons/outline/link';
import { ImageIcon } from '../src/icons/solid/image';
import { SettingIcon } from '../src/icons/outline/setting';

const meta = {
  parameters: {
    layout: 'centered',
    docs,
  },
};

export default meta;

export const BasicExample = () => {
  return (
    <Icon aria-label="email">
      <SearchIcon />
    </Icon>
  );
};

export const Icons = () => {
  return (
    <div className="max-w-lg space-y-12 [&_[data-ui=icon]]:size-6">
      <div>
        <Strong>Outline</Strong>
        <div className="flex flex-wrap gap-4 pt-4">
          <ArrowRightIcon />
          <ArrowUpRightIcon />
          <ChevronDownIcon />
          <ChevronLeftIcon />
          <ChevronRightIcon />
          <ChevronUpIcon />
          <CheckIcon />
          <XIcon />
          <PlusIcon />
          <MinusIcon />
          <CalendarIcon />
          <CopyIcon />
          <SearchIcon />
          <SettingIcon />
          <SpinnerIcon />
          <InformationCircleIcon />
          <LinkIcon />
        </div>
      </div>

      <div>
        <Strong>Solid</Strong>
        <div className="flex flex-wrap gap-4 pt-4">
          <AvailableIcon />
          <AwayIcon />
          <BusyIcon />
          <DoNotDisturbIcon />
          <CheckCircleIcon />
          <ExclamationCircleIcon />
          <ExclamationTriangleIcon />
          <QuestionMarkCircle />
          <XCircleIcon />
          <ImageIcon />
          <EyeIcon />
          <EyeOffIcon />
          <FaceFrownIcon />
        </div>
      </div>
    </div>
  );
};
