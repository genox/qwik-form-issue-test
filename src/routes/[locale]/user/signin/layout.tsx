import { component$, Slot } from '@builder.io/qwik';
import { routeAction$, zod$ } from '@builder.io/qwik-city';
import { z } from 'groqd';

export const useLoginAction = routeAction$(
  async (data) => {
    console.log(data);

    return {
      success: true,
      data: data,
    };
  },
  zod$({
    email: z.string(),
    password: z.string().array(),
  }),
);

export default component$(() => {
  return (
    <div class={'container mx-auto px-4 md:px-8 lg:px-8 xl:px-24'}>
      <article class={'mx-auto flex max-w-full flex-col items-center gap-12'}>
        <Slot />
      </article>
    </div>
  );
});
