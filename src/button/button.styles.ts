import { ClassNameValue, twMerge } from 'tailwind-merge';

type Color = 'accent' | 'red' | 'green';

type Size = 'sm' | 'md' | 'lg';

export type ButtonVariant = 'solid' | 'outline' | 'plain' | 'link' | 'unstyle';

export type ButtonStyleProps = {
  color?: Color;
  size?: Size;
  isCustomPending?: boolean;
  isIconOnly?: boolean;
  pendingLabel?: string;
  variant?: ButtonVariant;
};

export function getButtonStyles(
  {
    size = 'md',
    color,
    isIconOnly,
    variant = 'solid',
    isPending,
    isCustomPending,
    isDisabled,
    isFocusVisible,
    isHovered,
  }: ButtonStyleProps & {
    isPending?: boolean;
    isDisabled?: boolean;
    isFocusVisible?: boolean;
    isHovered?: boolean;
  },
  className?: string | ClassNameValue[],
) {
  const base = [
    'relative rounded-lg',
    isFocusVisible
      ? 'outline-2 outline-ring outline-offset-2'
      : 'outline-hidden',
    isDisabled && 'opacity-50',
  ];

  if (variant === 'unstyle') {
    return twMerge(base, className);
  }

  const style = {
    base,
    variant: {
      base: [
        'group inline-flex gap-x-2 justify-center items-center font-semibold',
        'text-base/6 text-(--btn-color) sm:text-sm/6 [&_svg[data-ui=icon]:not([class*=size-])]:size-(--icon-size)',
        !isHovered &&
          '[&_svg[data-ui=icon]:not([class*=text-])]:text-(--icon-color)',
        variant === 'solid'
          ? [
              '[--btn-bg:var(--accent)] [--btn-color:lch(from_var(--btn-bg)_calc((49.44_-_l)_*_infinity)_0_0)]',
              color === 'red' &&
                '[--btn-bg:var(--color-red-600)] [--btn-color:white]',
              color === 'green' &&
                '[--btn-bg:var(--color-green-600)] [--btn-color:white]',
            ]
          : [
              '[--btn-color:var(--foreground)]',
              color === 'accent' && '[--btn-color:var(--accent)]',
              color === 'red' &&
                '[--btn-color:var(--color-red-600)] dark:[--btn-color:var(--color-red-500)]',
              color === 'green' && '[--btn-color:var(--color-green-600)]',
            ],
      ],
      solid: [
        'bg-(--btn-bg)',
        isHovered && !isDisabled && 'opacity-85',
        !isIconOnly && '[--icon-color:var(--btn-color)]/75',
      ],
      outline: [
        'bg-white dark:bg-white/5',
        'shadow-outline in-[[data-ui=button-group]]:shadow-none dark:in-[[data-ui=button-group]]:shadow-none',
        isHovered && !isDisabled && 'bg-zinc-50 dark:bg-zinc-800',
        !isIconOnly && '[--icon-color:var(--muted)]/75',
      ],
      plain: [
        isHovered && !isDisabled && 'bg-zinc-100 dark:bg-zinc-800',
        !isIconOnly && '[--icon-color:var(--muted)]/75',
      ],
      link: [
        'underline underline-offset-4 decoration-(--btn-color)/25',
        isHovered && !isDisabled && 'decoration-(--btn-color)',
        !isIconOnly && '[--icon-color:var(--btn-color)]',
      ],
    },
    size: {
      sm: [
        // sm:36px
        isIconOnly
          ? 'size-8 sm:size-7 [--icon-size:--spacing(5)] sm:[--icon-size:--spacing(4)]'
          : variant !== 'link' &&
            'h-8 sm:h-7 [--icon-size:--spacing(3)] text-sm/6 sm:text-xs/6 px-3',
      ],
      md: [
        '[--icon-size:--spacing(5)] sm:[--icon-size:--spacing(4)]',
        isIconOnly
          ? 'p-2.5 sm:p-1.5 [&_svg[data-ui=icon]]:m-0.5 sm:[&_svg[data-ui=icon]]:m-1'
          : variant !== 'link' && 'px-3.5 py-2.5 sm:py-1.5',
      ],
      lg: [
        // lg: 44px,
        '[--icon-size:--spacing(5)]',
        isIconOnly
          ? 'p-2.5 [&_svg[data-ui=icon]]:m-0.5'
          : variant !== 'link' && 'px-3.5 py-2.5',
      ],
    },
  };

  return twMerge([
    style.base,
    style.size[size],
    style.variant.base,
    style.variant[variant],
    !isCustomPending && isPending && 'text-transparent',
    className,
  ]);
}

export function getButtonGroupStyles(
  {
    inline,
    orientation = 'horizontal',
  }: {
    inline?: boolean;
    orientation?: 'horizontal' | 'vertical';
  },
  className?: string | ClassNameValue[],
) {
  const style = {
    base: [
      'group inline-flex w-max items-center isolate',
      '[&>button:focus-visible]:z-10',
      '[&>*:not(:first-child):not(:last-child)]:rounded-none',
      '[&>*[data-variant=solid]:not(:first-child)]:border-s',
      '[&>*[data-variant=solid]:not(:first-child)]:border-s-[oklch(from_var(--btn-bg)_calc(l*0.85)_c_h)]',

      '[&:has([data-variant=outline])]:rounded-lg',
      '[&:has([data-variant=outline])]:shadow-outline',
      'dark:[&:has([data-variant=outline])]:p-px',
      'dark:[&:has([data-variant=outline])]:bg-white/5',
      'dark:[&:has([data-variant=outline])]:rounded-[calc(var(--radius-lg)+1px)]',
      'dark:[&:has([data-variant=outline])>[data-variant=outline]]:[--border:oklch(1_0_0_/_0.05)]',
    ],
    horizontal: [
      '[&>*:first-child]:rounded-e-none',
      '[&>*:last-child]:rounded-s-none',
      !inline && '[&:has([data-variant=outline])>*:not(:first-child)]:border-s',
    ],
    vertical: [
      'flex-col',
      '[&>*:first-child]:rounded-b-none',
      '[&>*:last-child]:rounded-t-none',
      !inline && '[&:has([data-variant=outline])>*:not(:first-child)]:border-t',
    ],
  };

  return twMerge([style.base, style[orientation], className]);
}
