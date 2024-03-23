import { compact } from 'lodash-es';
import { isLocaleSupported } from '~/utils/locale/is-locale-supported';

export const getLocaleFromPath = (path: string) => {
  const catchall = compact(path.split('/'));
  if (catchall.length > 0) {
    const lang = catchall[0];
    return isLocaleSupported(lang) ? lang : null;
  }
  return null;
};
