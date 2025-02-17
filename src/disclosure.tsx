import { Button, ButtonProps, composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

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
      className={composeRenderProps(
        props.className,
        (className, { isFocusVisible }) => {
          return twMerge([
            'group flex items-center gap-x-1 rounded-sm outline-hidden',
            isFocusVisible && [
              'outline',
              'outline-2',
              'outline-ring',
              'outline-offset-2',
            ],
            className,
          ]);
        },
      )}
    />
  );
}
