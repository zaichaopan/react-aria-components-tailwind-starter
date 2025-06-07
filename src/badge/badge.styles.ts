const colors = {
  zinc: '[--badge:var(--color-zinc-500)]',
  red: '[--badge:var(--color-red-500)]',
  orange: '[--badge:var(--color-orange-500)]',
  amber: '[--badge:var(--color-amber-500)]',
  yellow: '[--badge:var(--color-yellow-500)]',
  lime: '[--badge:var(--color-lime-500)]',
  green: '[--badge:var(--color-green-500)]',
  emerald: '[--badge:var(--color-emerald-500)]',
  teal: '[--badge:var(--color-teal-500)]',
  cyan: '[--badge:var(--color-cyan-500)]',
  sky: '[--badge:var(--color-sky-500)]',
  blue: '[--badge:var(--color-blue-500)]',
  indigo: '[--badge:var(--color-indigo-500)]',
  violet: '[--badge:var(--color-violet-500)]',
  purple: '[--badge:var(--color-purple-500)]',
  fuchsia: '[--badge:var(--color-fuchsia-500)]',
  pink: '[--badge:var(--color-pink-500)]',
  rose: '[--badge:var(--color-rose-500)]',
};

export type BadgeColor = keyof typeof colors | 'white';

export type BadgeVariant = 'solid';

export function getBadgeStyles({
  color = 'zinc',
  variant,
}: {
  color?: BadgeColor;
  variant?: BadgeVariant;
}) {
  const base = [
    'flex max-w-fit cursor-default items-center gap-x-1 rounded-md px-2 py-0.5 text-xs/5 font-medium outline-0 transition [&>[data-ui=icon]:not([class*=size-])]:size-3.5',
  ];

  if (color === 'white') {
    return [
      base,
      variant === 'solid'
        ? 'border border-accent bg-accent text-[--btn-color:lch(from_var(--accent)_calc((49.44_-_l)_*_infinity)_0_0)] hover:opacity-85'
        : 'border hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:border-zinc-700',
    ];
  }

  return [
    base,
    'text-(--color)',
    'bg-(--bg)',
    colors[color] ?? colors.zinc,
    variant === 'solid'
      ? [
          '[--bg:color-mix(in_oklab,_var(--badge)_90%,_black)]',
          '[--color:color-mix(in_oklab,_var(--badge)_5%,_white)]',
          'data-selection-mode:hover:[--bg:color-mix(in_oklab,_var(--badge)_85%,_black)]',
        ]
      : [
          // light
          '[--bg:color-mix(in_oklab,_var(--badge)_15%,_white)]',
          '[--color:color-mix(in_oklab,_var(--badge)_80%,_black)]',
          'data-selection-mode:hover:[--bg:color-mix(in_oklab,_var(--badge)_30%,_white)]',

          // dark
          'dark:[--bg:color-mix(in_oklab,_var(--badge)_40%,_black)]',
          'dark:[--color:color-mix(in_oklab,_var(--badge)_98%,_black)]',

          'data-selection-mode:hover:dark:[--bg:color-mix(in_oklab,_var(--badge)_40%,_black)]',
        ],
  ];
}
