import { component$ } from '@builder.io/qwik';
import { SignInForm } from '~/components/store/user/sign-in-form';
import { ColumnSingleForm } from '~/components/ui/column-single-form';

export default component$(() => {
  return (
    <ColumnSingleForm>
      <SignInForm />
    </ColumnSingleForm>
  );
});
