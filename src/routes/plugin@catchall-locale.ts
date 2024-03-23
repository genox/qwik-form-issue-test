import type { RequestHandler } from '@builder.io/qwik-city';
import { getLocaleFromPath } from '~/utils/locale/get-locale-from-path';
import { getLocaleFromCookie } from '~/utils/locale/get-locale-from-cookie';
import { getLocaleFromClient } from '~/utils/locale/get-locale-from-client';
import { getLocaleFromParams } from '~/utils/locale/get-locale-from-params';
import { logger } from '~/utils/logger';
import { getSlugFromParams } from '~/utils/locale/get-slug-from-params';
import { getSlugFromPath } from '~/utils/locale/get-slug-from-path';
import { config } from '~/speak-config';

const log = false;
export const getSanityDocumentTypeForRoute = (pathname: string) => {
  if (pathname.startsWith('/api/')) {
    return 'api';
  }
  if (pathname.includes('/catalog/')) {
    return 'catalog';
  }
  if (pathname.includes('/article/')) {
    return 'article';
  }
  return 'page';
};

export const onRequest: RequestHandler = ({
  request,
  cookie,
  locale,
  sharedMap,
  params,
  pathname,
}) => {
  let lang;
  let slug;

  try {
    // Get locale and gradually fallback to default locale
    lang =
      getLocaleFromParams(params) ||
      getLocaleFromPath(pathname) ||
      getLocaleFromCookie(cookie) ||
      getLocaleFromClient(request) ||
      config.defaultLocale.lang;

    slug = getSlugFromParams(params) || getSlugFromPath(pathname) || 'index';
  } catch (error) {
    log && logger.info('Error determining locale or slug:', error);
    // You can decide what to do here. For example, set default values.
    lang = config.defaultLocale.lang;
    slug = 'index';
  }

  sharedMap.set('request', {
    locale: lang,
    slug: slug,
    type: getSanityDocumentTypeForRoute(pathname),
  });

  // Set locale
  locale(lang);
  cookie.set('locale', lang, { path: '/' });

  log && logger.info('plugin@catchall-locale: locale set to', lang);
};
