import { documentTypeToRouteMap } from '~/config/documentTypeToRouteMap';
import type { SupportedLocaleType } from '~/locale-config';

export const getLinkToSanityDocumentType = (
  type: keyof typeof documentTypeToRouteMap,
  locale: SupportedLocaleType,
  slug?: string,
) => {
  return `/${locale}/${documentTypeToRouteMap[type]}${slug}`;
};
