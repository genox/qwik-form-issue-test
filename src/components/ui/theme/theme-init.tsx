import { $, component$, useContext, useOnWindow, useTask$ } from '@builder.io/qwik';
import { UiContext } from '~/context/ui-context';
import { isServer } from '@builder.io/qwik/build';

type Props = {
  defaultTheme: string;
};

export const setThemeOnHtml = (theme: string) => {
  const element = document.querySelector('html');
  element?.setAttribute('data-theme', theme);
};
export const ThemeInit = component$<Props>(({ defaultTheme }) => {
  const uiContext = useContext(UiContext);

  useTask$(({ track }) => {
    const theme = track(() => uiContext.theme);
    if (isServer) {
      return;
    }
    setThemeOnHtml(theme);
  });

  useOnWindow(
    'DOMContentLoaded',
    $(() => {
      let agentTheme = defaultTheme;

      // Check if matchMedia is supported
      if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // The user has indicated they prefer a dark theme
          agentTheme = 'dark';
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          // The user has indicated they prefer a light theme
          agentTheme = 'light';
        }
      }
      setThemeOnHtml(agentTheme);
    }),
  );

  return null;
});
