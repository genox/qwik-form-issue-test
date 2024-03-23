import { $, component$, getLocale, useSignal } from '@builder.io/qwik';
import { useRouteQueryParams } from '~/routes/layout';
import { getCommonRoute } from '~/utils/routes/get-common-route';
import { useNavigate } from '@builder.io/qwik-city';
import { useForm, valiForm$ } from '@modular-forms/qwik';
import { inlineTranslate } from 'qwik-speak';
import { Alert } from '~/components/ui/alert';
import { TextInput } from '~/components/ui/input/text-field';
import type { AccountRegisterFormType } from '~/routes/[locale]/user/signup/layout';
import { AccountRegisterFormSchema, useSignUpFormLoader, } from '~/routes/[locale]/user/signup/layout';
import type { SubmitHandler } from '~/components/store/user/submit-handler';
import { CommonRoutes } from '~/config/common-route-map';
import { Card } from '~/components/ui/card';

import { NavLink } from '~/components/ui/navLink';

export const SignUpForm = component$(() => {
  const locale = getLocale();
  const nav = useNavigate();
  const queryParams = useRouteQueryParams();
  const email = useSignal<string>('');
  const t = inlineTranslate();
  const [registerForm, { Form, Field }] = useForm<AccountRegisterFormType>({
    loader: useSignUpFormLoader(),
    validate: valiForm$(AccountRegisterFormSchema),
  });

  const registerStatus = useSignal<'success' | 'error' | 'resent' | null>(null);

  const handleSubmit$: SubmitHandler<AccountRegisterFormType> = $(async (values:any) => {
    console.log('values', values);
  });

  const callbackUrl = queryParams.value.query.get('callbackUrl') || '/';

  const navigateToLogin$ = $(async () => {
    await nav(
      `${getCommonRoute(CommonRoutes.UserSignin, locale)}?email=${
        registerForm.internal.fields.email?.value
      }`,
    );
  });

  const resendActivation$ = $(async () => {
    if (!email.value) return;
    console.log('resend activation email');
  });

  return (
    <Card.Wrapper>
      <Card.Body>
        <Card.Title>{t('Create account')}</Card.Title>
        {registerStatus.value === 'error' && (
          <div class={'mt-4'}>
            <Alert type={'warning'}>
              {t(
                'Account could not be created, have you already registered? Try to log in or request a new password.',
              )}
            </Alert>
          </div>
        )}
        {registerStatus.value === 'success' ? (
          <div class={'mt-4'}>
            <Alert type={'success'}>
              {t(
                "Your account has been created, please confirm your e-mail address. Click on the button in the e-mail we sent you just now. If you can't find it, please check your spam folder, too.",
              )}
            </Alert>
            <div class="form-control mt-8 flex w-full max-w-xs flex-col gap-8">
              <button class={'btn btn-neutral'} type={'button'} onClick$={resendActivation$}>
                {t('Resend activation e-mail')}
              </button>
              <button class={'btn btn-neutral'} type={'button'} onClick$={navigateToLogin$}>
                {t('Login now')}
              </button>
            </div>
          </div>
        ) : (
          <Form onSubmit$={handleSubmit$}>
            <p class={'mt-4'}>
              {t('Please enter a valid e-mail address and your desired password.')}
            </p>
            <Field name="firstName">
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label={t('First name')}
                />
              )}
            </Field>
            <Field name="lastName">
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label={t('Last name')}
                />
              )}
            </Field>
            <Field name="email">
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="email"
                  label={t('E-mail')}
                  placeholder={t('user@domain.com')}
                />
              )}
            </Field>
            <Field name="password">
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="password"
                  label={t('Password')}
                />
              )}
            </Field>
            <div class="form-control mt-8 w-full max-w-xs">
              <button
                class={'btn btn-secondary'}
                disabled={registerForm.submitting}
                type={'submit'}>
                {t('Create account')}
              </button>
            </div>
            <div class="form-control mt-8 w-full max-w-xs text-center">
              <p>
                <NavLink href={callbackUrl}>{t('Back')}</NavLink>
              </p>
            </div>
          </Form>
        )}
      </Card.Body>
    </Card.Wrapper>
  );
});
