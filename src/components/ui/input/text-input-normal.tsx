import { component$ } from '@builder.io/qwik';

type TextInputProps = {
  name: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'date';
  label?: string;
  placeholder?: string;
  value: string | undefined;
  error: string;
  required?: boolean;
};

export const TextInputNormal = component$(({ label, error, ...props }: TextInputProps) => {
  const { name, required } = props;
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
        name={name}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
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
