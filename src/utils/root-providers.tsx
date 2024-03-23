import { UiContextProvider } from '~/context/ui-context';
import { component$, Slot } from '@builder.io/qwik';
import { QwikCityProvider } from '@builder.io/qwik-city';

export const RootProviders = component$(() => {
  return (
    <QwikCityProvider>
      <UiContextProvider>
            <Slot />
      </UiContextProvider>
    </QwikCityProvider>
  );
});
