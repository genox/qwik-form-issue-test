import { component$ } from '@builder.io/qwik';
import { SignUpForm } from '~/components/store/user/sign-up-form';
import { ColumnSingleForm } from '~/components/ui/column-single-form';

export default component$(() => {
  return (
    <ColumnSingleForm>
      <SignUpForm />
    </ColumnSingleForm>
  );
});
