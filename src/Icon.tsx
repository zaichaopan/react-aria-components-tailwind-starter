import React from 'react';
import { VisuallyHidden } from './VisuallyHidden';

interface IconProps {
  children: React.ReactNode;
  'aria-label'?: string;
}

export function Icon({ children, 'aria-label': ariaLabel }: IconProps) {
  const child = React.Children.only(children);
  
  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
        'aria-hidden': 'true',
        'aria-label': undefined,
        focusable: 'false',
      })}
      {ariaLabel ? <VisuallyHidden>{ariaLabel}</VisuallyHidden> : null}
    </>
  );
}
