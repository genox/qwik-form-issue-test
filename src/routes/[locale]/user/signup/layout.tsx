import { component$, Slot } from '@builder.io/qwik';

import { routeLoader$ } from '@builder.io/qwik-city';
import type { InitialValues } from '@modular-forms/qwik';
import {
    valibotRequiredEmailField,
    valibotRequiredSetPasswordField,
    valibotRequiredStringField,
} from '~/library/valibot/templates';
import type { Input } from 'valibot';
import { object } from 'valibot';

export const AccountRegisterFormSchema = object({
  firstName: valibotRequiredStringField,
  lastName: valibotRequiredStringField,
  email: valibotRequiredEmailField,
  password: valibotRequiredSetPasswordField,
});

export type AccountRegisterFormType = Input<typeof AccountRegisterFormSchema>;

export const useSignUpFormLoader = routeLoader$<InitialValues<AccountRegisterFormType>>(
  ({ query }) => ({
    firstName: '',
    lastName: '',
    email: query.get('email') || '',
    password: '',
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
