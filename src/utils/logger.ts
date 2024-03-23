import type { ILogObj } from 'tslog';
import { Logger } from 'tslog';
import { isDev } from '@builder.io/qwik/build';

const dev: ILogObj = { type: 'pretty', minLevel: 0 };
const prod: ILogObj = { type: 'json', minLevel: 4, hideLogPositionForProduction: true };

const logger: Logger<ILogObj> = new Logger(isDev ? dev : prod);

export { logger };
