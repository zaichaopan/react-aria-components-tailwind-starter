import { useVisuallyHidden } from 'react-aria';

export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  const { visuallyHiddenProps } = useVisuallyHidden();
  return <div {...visuallyHiddenProps}>{children}</div>;
}
