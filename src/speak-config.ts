import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
  defaultLocale: { lang: 'en', currency: 'CHF', timeZone: 'Europe/Zurich' },
  supportedLocales: [
    { lang: 'de', currency: 'CHF', timeZone: 'Europe/Zurich' },
    { lang: 'en', currency: 'CHF', timeZone: 'Europe/Zurich' },
  ],
  // Translations available in the whole app
  assets: ['app'],
  // Translations with dynamic keys available in the whole app
  runtimeAssets: ['runtime'],
};
