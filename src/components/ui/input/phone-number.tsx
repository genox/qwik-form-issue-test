import type { QRL } from '@builder.io/qwik';
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { InputMask } from 'imask';
import IMask from 'imask';

type TextInputProps = {
  name: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'date';
  label?: string;
  placeholder?: string;
  value: string | undefined;
  error: string;
  required?: boolean;
  ref: QRL<(element: HTMLInputElement) => void>;
  onInput$: (event: Event, element: HTMLInputElement) => void;
  onChange$: (event: Event, element: HTMLInputElement) => void;
  onBlur$: (event: Event, element: HTMLInputElement) => void;
};

export const TextInputPhoneNumber = component$(({ label, error, ...props }: TextInputProps) => {
  const { name, required } = props;
  const inputRef = useSignal<HTMLInputElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track, cleanup }) => {
    track(() => inputRef.value);
    if (!inputRef.value) {
      return;
    }

    let mask: InputMask<any>;
    const element = inputRef.value;
    setTimeout(() => {
      mask = IMask(element, { mask: '+{41} (00) 000 00 00', lazy: false, overwrite: 'shift' });
    });
    cleanup(() => {
      mask.destroy();
    });
  });

  return (
    <div class={'form-control mt-4 w-full'}>
      {label && (
        <label class="label" for={name}>
          <span class="label-text">
            {label} {required && <span>*</span>}
          </span>
        </label>
      )}
      <input
        {...props}
        ref={inputRef}
        id={name}
        aria-invalid={!!error}
        aria-errormessage={`${name}-error`}
        class="input input-bordered w-full"
      />
      {error && (
        <div id={`${name}-error`} class={'badge badge-info mt-3 text-sm'}>
          {error}
        </div>
      )}
    </div>
  );
});
