import type { Cookie } from '@builder.io/qwik-city';
import { isLocaleSupported } from '~/utils/locale/is-locale-supported';

export const getLocaleFromCookie = (cookie: Cookie) => {
  if (cookie.has('locale')) {
    const lang = cookie.get('locale')?.value || '';
    return isLocaleSupported(lang) ? lang : null;
  }
  return null;
};
