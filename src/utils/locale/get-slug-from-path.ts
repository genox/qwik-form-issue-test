import { compact, some } from 'lodash-es';
import { hasLocaleInPath } from '~/utils/locale/has-locale-in-path';

const blackListedSlugs = ['api', 'docs', 'blog', 'blog-post', 'q-data.json'];

export const getSlugFromPath = (path: string) => {
  const catchall = compact(path.split('/'));
  if (hasLocaleInPath(path)) {
    return some(blackListedSlugs, (slug) => catchall[1].includes(slug)) ? null : catchall[1];
  }
  if (!hasLocaleInPath(path) && catchall.length > 0 && catchall[0] !== '') {
    return some(blackListedSlugs, (slug) => catchall[0].includes(slug)) ? null : catchall[0];
  }
  return null;
};
