import { twMerge } from 'tailwind-merge';
import { BadgeColor, getBadgeStyles } from './badge.styles';

export function Badge({
  className,
  color = 'zinc',
  variant,
  ...props
}: React.JSX.IntrinsicElements['div'] & {
  color?: BadgeColor;
  variant?: 'solid';
}) {
  return (
    <div
      {...props}
      className={twMerge(getBadgeStyles({ color, variant }), className)}
    />
  );
}
