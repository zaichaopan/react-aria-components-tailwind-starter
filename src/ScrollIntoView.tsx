import React from 'react';

export const ScrollIntoView = <E extends HTMLElement>({
    active,
    children,
  }: {
    active: boolean;
    children: (ref: React.RefObject<E>) => JSX.Element;
  }) => {
    const ref = React.useRef<E>(null);
  
    if (active) {
      ref.current?.scrollIntoView({ block: 'nearest', inline: 'start' });
    }
  
    return children(ref);
  };
  