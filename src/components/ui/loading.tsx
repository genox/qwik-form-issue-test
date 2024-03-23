import { component$ } from '@builder.io/qwik';

type Props = {
  size?: number;
  fill?: boolean;
};
export const Loading = component$<Props>(({ size, fill }) => {
  const style = size ? `width: ${size}px; height: ${size}px;` : '';
  return (
    <div
      class={`flex h-full w-full items-center justify-center ${
        fill ? 'absolute inset-0 bg-base-100/40' : ''
      }`}
      style={style}>
      <div class={`loading loading-spinner loading-sm`}></div>
    </div>
  );
});
