import { component$, Slot } from '@builder.io/qwik';

const Title = component$(() => {
  return (
    <h2 class={'card-title'}>
      <Slot />
    </h2>
  );
});

const Body = component$(() => {
  return (
    <div class={'card-body gap-6'}>
      <Slot />
    </div>
  );
});

const Actions = component$(() => {
  return (
    <div class="card-actions gap-3">
      <Slot />
    </div>
  );
});

type WrapperProps = {
  inactive?: boolean;
  type?: 'secondary';
};

const Wrapper = component$<WrapperProps>(({ type, inactive }) => {
  return (
    <div
      class={`card ${
        type === 'secondary' ? 'bg-secondary text-secondary-content' : 'bg-base-200'
      } ${inactive && 'pointer-events-none opacity-30 saturate-0'}`}>
      <Slot />
    </div>
  );
});

export const Card = {
  Title,
  Body,
  Wrapper,
  Actions,
};
