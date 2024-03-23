import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Overlay } from '~/components/dev/overlay';
import { OnlineStateHandler } from '~/components/system/online-state-handler';


export const useRouteQueryParams = routeLoader$(async (requestEvent) => {
  const { query, params } = requestEvent;
  return {
    query,
    params,
  };
});

export default component$(() => {
  return (
    <>
      <Slot />
      <Overlay />
      <OnlineStateHandler />
    </>
  );
});
