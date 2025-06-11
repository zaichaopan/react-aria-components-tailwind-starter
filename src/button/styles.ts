import { ClassNameValue, twMerge } from 'tailwind-merge';

type Color = 'accent' | 'red' | 'green';

type Size = 'sm' | 'lg';

type Variant = 'solid' | 'outline' | 'plain' | 'link' | 'unstyle';

export type ButtonStyleProps = {
  color?: Color;
  size?: Size;
  isCustomPending?: boolean;
  isIconOnly?: boolean;
  pendingLabel?: string;
  variant?: Variant;
};

export function getButtonStyles(
  {
    size,
    color,
    isIconOnly,
    variant = 'solid',
    isPending,
    isCustomPending,
  }: ButtonStyleProps & {
    isPending?: boolean;
  },
  className?: string | ClassNameValue[],
) {
  const base = [
    'relative rounded-md',
    'outline-hidden focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2',
    'disabled:opacity-50',
  ];

  if (variant === 'unstyle') {
    return twMerge(base, className);
  }

  const style = {
    base,
    variant: {
      base: 'group inline-flex gap-x-2 justify-center items-center font-semibold',
      solid: [
        'bg-(--btn-bg) text-(--btn-color) [&:not(:disabled)]:hover:opacity-85',
        color === 'red' || color === 'green'
          ? '[--btn-color:white]'
          : '[--btn-color:lch(from_var(--btn-bg)_calc((49.44_-_l)_*_infinity)_0_0)]',
      ],
      outline: [
        'text-(--btn-color)',
        'shadow-outline',
        'in-[[data-ui=button-group]]:shadow-none',
        'dark:in-[[data-ui=button-group]]:shadow-none',
        'bg-white dark:bg-white/5',
        '[&:not(:disabled)]:hover:bg-zinc-50',
        'dark:[&:not(:disabled)]:hover:bg-zinc-800',
      ],
      plain: [
        'text-(--btn-color)',
        '[&:not(:disabled)]:hover:bg-zinc-100',
        'dark:[&:not(:disabled)]:hover:bg-zinc-800',
      ],
      link: [
        'text-(--btn-color) underline [&:not(:hover)]:decoration-(--btn-color)/30 underline-offset-4',
      ],
    },
    size: {
      base: 'text-base/6 sm:text-sm/6 [&_svg[data-ui=icon]:not([class*=size-])]:size-(--icon-size)',
      sm: [
        isIconOnly
          ? 'size-8 sm:size-7 [--icon-size:--spacing(5)] sm:[--icon-size:--spacing(4)]'
          : variant !== 'link' &&
            'h-8 sm:h-7 [--icon-size:--spacing(3)] text-sm/6 sm:text-xs/6 px-3 sm:px-2',
      ],
      md: [
        // lg: 44px, sm:36px
        '[--icon-size:--spacing(5)] sm:[--icon-size:--spacing(4)]',
        isIconOnly
          ? 'p-2.5 sm:p-1.5 [&_svg[data-ui=icon]]:m-0.5 sm:[&_svg[data-ui=icon]]:m-1'
          : variant !== 'link' && 'px-3.5 sm:px-3 py-2.5 sm:py-1.5',
      ],
      lg: [
        '[--icon-size:--spacing(5)]',
        isIconOnly
          ? 'p-2.5 [&_svg[data-ui=icon]]:m-0.5'
          : variant !== 'link' && 'px-3.5 py-2.5',
      ],
    },
    color: {
      foreground: '[--btn-color:var(--color-foreground)]',
      accent: '[--btn-color:var(--color-accent)]',
      red: '[--btn-color:var(--color-red-600)]',
      green: '[--btn-color:var(--color-green-600)]',
    },
    iconColor: {
      base: isPending
        ? '[&_svg[data-ui=icon]:not([class*=text-])]:text-(--icon-color)'
        : '[&:not(:hover)_svg[data-ui=icon]:not([class*=text-])]:text-(--icon-color)',
      solid: !isIconOnly && '[--icon-color:var(--btn-color)]/75',
      outline: !isIconOnly && '[--icon-color:var(--color-muted)]/75',
      plain: !isIconOnly && '[--icon-color:var(--color-muted)]/75',
      link: !isIconOnly && '[--icon-color:var(--btn-color)]',
    },
    backgroundColor: {
      accent: '[--btn-bg:var(--color-accent)]',
      red: '[--btn-bg:var(--color-red-600)]',
      green: '[--btn-bg:var(--color-green-600)]',
    },
  };

  return twMerge([
    style.base,
    style.color[color ?? 'foreground'],
    style.size.base,
    style.size[size ?? 'md'],
    style.iconColor.base,
    style.iconColor[variant],
    style.backgroundColor[color ?? 'accent'],
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
      'group inline-flex w-max items-center',
      '[&>*:not(:first-child):not(:last-child)]:rounded-none',
      '[&>*[data-variant=solid]:not(:first-child)]:border-s',
      '[&>*[data-variant=solid]:not(:first-child)]:border-s-[oklch(from_var(--btn-bg)_calc(l*0.85)_c_h)]',

      '[&:has([data-variant=outline])]:rounded-md',
      '[&:has([data-variant=outline])]:shadow-outline',
      'dark:[&:has([data-variant=outline])]:p-px',
      'dark:[&:has([data-variant=outline])]:bg-white/5',
      'dark:[&:has([data-variant=outline])]:rounded-[calc(var(--radius-md)+1px)]',
      'dark:[&:has([data-variant=outline])>[data-variant=outline]]:[--color-border:oklch(1_0_0_/_0.05)]',
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
