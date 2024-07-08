import { useSeparator } from 'react-aria';
import { twMerge } from 'tailwind-merge';
import { SeparatorProps as RACSeparatorProps } from 'react-aria-components';

type SeparatorProps = RACSeparatorProps & {
  children?: React.ReactNode;
};

export function Separator({
  orientation = 'horizontal',
  className,
  children,
  ...props
}: SeparatorProps & JSX.IntrinsicElements['div']) {
  const { separatorProps } = useSeparator({ orientation });

  return (
    <div
      {...separatorProps}
      className={twMerge(
        'text-sm/6',
        children
          ? [
              'after:border-soft before:border-soft',
              orientation === 'vertical'
                ? [
                    'mx-2 flex flex-col items-center',
                    "before:content-['']",
                    'before:border-l',
                    'before:flex-1',
                    'before:mb-2',
                    "after:content-['']",
                    'after:border-r',
                    'after:flex-1',
                    'after:mt-2',
                  ]
                : [
                    'self-stretch',
                    'my-2 flex items-center',
                    "before:content-['']",
                    'before:border-t',
                    'before:flex-1',
                    'before:mr-2',
                    "after:content-['']",
                    'after:border-t',
                    'after:flex-1',
                    'after:ml-2',
                  ],
            ]
          : [
              'border-soft',
              orientation === 'vertical'
                ? 'mx-1 h-auto self-stretch border-l'
                : 'my-0.5 h-px w-full self-stretch border-b',
            ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
