import type { ClassList } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

type Props = {
  type?: 'info' | 'warning' | 'error' | 'success';
};

type CSSClassRecord = Record<string, ClassList>;
export const Alert = component$<Props>(({ type = 'info' }) => {
  const types: CSSClassRecord = {
    info: 'alert alert-info text-wrap',
    warning: 'alert alert-warning text-wrap',
    error: 'alert alert-danger text-wrap',
    success: 'alert alert-success text-wrap',
  };

  return (
    <div class={types[type]}>
      <Slot />
    </div>
  );
});
