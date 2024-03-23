import { isLocaleSupported } from '~/utils/locale/is-locale-supported';

export const getLocaleFromParams = (params: Record<string, string>) => {
  if (!params) {
    return null;
  }
  if (params.locale) {
    const lang = params.locale;
    return isLocaleSupported(lang) ? lang : null;
  }
  return null;
};
