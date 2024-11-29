import { Button, ButtonProps } from 'react-aria-components';
import { composeTailwindRenderProps, focusVisibleOutline } from './utils';

export {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from 'react-aria-components';

export function DisclosureControl(props: ButtonProps) {
  return (
    <Button
      {...props}
      slot="trigger"
      className={composeTailwindRenderProps(props.className, [
        'group flex items-center gap-x-1 rounded outline-none',
        focusVisibleOutline,
      ])}
    />
  );
}
