import React from 'react';
import { VisuallyHidden } from './VisuallyHidden';

interface IconProps {
  icon?: React.ReactNode;
  'aria-label'?: string;
  className?: string;
}

export function Icon(props: IconProps) {
  const child = React.Children.only(props.icon);
  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
        'aria-hidden': 'true',
        focusable: 'false',
      })}
      {props['aria-label'] ? (
        <VisuallyHidden>{props['aria-label']}</VisuallyHidden>
      ) : null}
    </>
  );
}
