import { config } from '~/speak-config';

export const isLocaleSupported = (locale: string) => {
  return config.supportedLocales.some((loc) => {
    return loc.lang === locale;
  });
};
