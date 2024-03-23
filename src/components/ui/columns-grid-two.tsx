import { component$, Slot } from '@builder.io/qwik';

export const ColumnsGridTwo = component$(() => {
  return (
    <div class={'grid grid-cols-1 gap-8 lg:grid-cols-2'}>
      <Slot />
    </div>
  );
});
