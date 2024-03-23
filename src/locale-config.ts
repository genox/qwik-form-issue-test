import type { config } from '~/speak-config';

export type SupportedLocaleType = (typeof config.supportedLocales)[number]['lang'];
