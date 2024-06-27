import { useVisuallyHidden } from 'react-aria';

export function VisuallyHidden(props: JSX.IntrinsicElements['div']) {
  const { visuallyHiddenProps } = useVisuallyHidden();
  return <div {...props} {...visuallyHiddenProps} />;
}
