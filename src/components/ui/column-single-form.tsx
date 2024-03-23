import { component$, Slot } from '@builder.io/qwik';

export const ColumnSingleForm = component$(() => {
  return (
    <div class={'grid w-full grid-cols-1 gap-8 lg:w-96'}>
      <Slot />
    </div>
  );
});
