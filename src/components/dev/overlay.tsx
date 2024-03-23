import { component$ } from '@builder.io/qwik';
import { APP_MODE, APP_VERSION, SITE_DOMAIN } from '~/config/env';

export const Overlay = component$(() => {
  return (
    <>
      {APP_MODE === 'production' ? (
        <div class={'fixed hidden'}>{APP_VERSION}</div>
      ) : (
        <div class={'badge badge-neutral fixed bottom-2 left-2 right-auto top-auto text-xs'}>
          <div>
            {SITE_DOMAIN} {APP_VERSION}
            <span class="ml-1 sm:hidden md:hidden lg:hidden xl:hidden">default (&lt; 640px)</span>
            <span class="ml-1 hidden font-extrabold sm:inline md:hidden">sm</span>
            <span class="ml-1 hidden font-extrabold md:inline lg:hidden">md</span>
            <span class="ml-1 hidden font-extrabold lg:inline xl:hidden">lg</span>
            <span class="ml-1 hidden font-extrabold xl:inline">xl</span>
          </div>
        </div>
      )}
    </>
  );
});
