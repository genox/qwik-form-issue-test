import { $, component$, useContext, useOnWindow } from '@builder.io/qwik';
import { UiContext } from '~/context/ui-context';
import { logger } from '~/utils/logger';

export const OnlineStateHandler = component$(() => {
  const uiContext = useContext(UiContext);
  useOnWindow(
    'online',
    $(() => {
      logger.info('online');
      uiContext.online = true;
    }),
  );
  useOnWindow(
    'offline',
    $(() => {
      logger.warn('offline');
      uiContext.online = false;
    }),
  );
  return <></>;
});
