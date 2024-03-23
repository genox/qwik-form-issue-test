import { isLocaleSupported } from '~/utils/locale/is-locale-supported';

export const getLocaleFromClient = (request: Request) => {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const lang = acceptLanguage.split(';')[0]?.split(',')[0].split('-')[0];
    return isLocaleSupported(lang) ? lang : null;
  }
  return null;
};
