import { compact } from 'lodash-es';
import { config } from '~/speak-config';

export const hasLocaleInPath = (path: string) => {
  const catchall = compact(path.split('/'));
  if (catchall.length > 1) {
    return config.supportedLocales.some((locale) => {
      return locale.lang === catchall[0];
    });
  }
  return false;
};
