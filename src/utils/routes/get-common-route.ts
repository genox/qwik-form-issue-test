import { commonRouteMap, CommonRoutes } from '~/config/common-route-map';
import type { SupportedLocaleType } from '~/locale-config';

export const getCommonRoute = (type: CommonRoutes, locale: SupportedLocaleType) => {
  const enumKey = Object.keys(commonRouteMap[locale]).find(
    (key) => CommonRoutes[key as keyof typeof CommonRoutes] === type,
  );
  const enumValue = commonRouteMap[locale][enumKey as keyof (typeof commonRouteMap)[typeof locale]];
  return `/${locale}/${enumValue}`;
};
