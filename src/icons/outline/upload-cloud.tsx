import { Icon } from '../../icon';

export function UploadCloudIcon({
  'aria-label': arialLabel,
  ...props
}: React.JSX.IntrinsicElements['svg']) {
  return (
    <Icon aria-label={arialLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 13v8" />
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="m8 17 4-4 4 4" />
      </svg>
    </Icon>
  );
}
