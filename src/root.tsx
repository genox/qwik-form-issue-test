import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import './global.css';
import { RootProviders } from '~/utils/root-providers';
import { ThemeInit } from '~/components/ui/theme/theme-init';
import { useQwikSpeak } from 'qwik-speak';
import { config } from '~/speak-config';
import { translationFn } from '~/speak-function';

export default component$(() => {
  useQwikSpeak({ config, translationFn });

  return (
    <QwikCityProvider>
      <RootProviders>
        <ThemeInit defaultTheme={'dark'} />
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="color-scheme" content="dark light" />
          <meta
            name="google-site-verification"
            content="USw3dEpvf7MyEem1tYsQMO18Rv0NqalD8uQam1eVFFs"
          />
        </head>
        <body>
            <RouterOutlet />
            <ServiceWorkerRegister />
        </body>
      </RootProviders>
    </QwikCityProvider>
  );
});
