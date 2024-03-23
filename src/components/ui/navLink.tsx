import type { PropFunction } from '@builder.io/qwik';
import { $, component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

type Props = {
  href: string;
  title?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  cssClass?: string | string[];
  onClickSideEffect$?: PropFunction<() => void>;
  mpaLink?: boolean;
  type?: keyof typeof linkType;
};

const linkType = {
  info: 'link link-info link-hover',
  warning: 'link link-warning link-hover',
  error: 'link link-error link-hover',
  success: 'link link-success link-hover',
  primary: 'link link-primary link-hover',
  secondary: 'link link-secondary link-hover',
  accent: 'link link-accent link-hover',
  neutral: 'link link-neutral link-hover',
  simple: 'link link-hover',
  element: 'w-full h-full flex items-center justify-center link-hover',
  'btn-neutral': 'btn btn-neutral',
};

export const NavLink = component$<Props>(
  ({
    href,
    cssClass = '',
    mpaLink,
    onClickSideEffect$,
    target = '',
    type = 'simple',
    title = '',
  }) => {
    const onClick$ = $(async () => {
      if (typeof onClickSideEffect$ !== 'function') return;
      await onClickSideEffect$?.();
    });

    return (
      <>
        {mpaLink ? (
          <a
            href={href}
            onClick$={onClick$}
            target={target}
            title={title}
            class={`${linkType[type]} ${cssClass}`}>
            <Slot />
          </a>
        ) : (
          <Link
            href={href}
            onClick$={onClick$}
            target={target}
            title={title}
            class={`${linkType[type]} ${cssClass}`}>
            <Slot />
          </Link>
        )}
      </>
    );
  },
);
