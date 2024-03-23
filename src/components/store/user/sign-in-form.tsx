import { $, component$, getLocale, useSignal, useStore } from '@builder.io/qwik';
import { getCommonRoute } from '~/utils/routes/get-common-route';
import { useRouteQueryParams } from '~/routes/layout';
import { Alert } from '~/components/ui/alert';
import { NavLink } from '~/components/ui/navLink';
import { inlineTranslate } from 'qwik-speak';
import { CommonRoutes } from '~/config/common-route-map';
import { Card } from '~/components/ui/card';
import { Form } from '@builder.io/qwik-city';
import { useLoginAction } from '~/routes/[locale]/user/signin/layout';
import { TextInputNormal } from '~/components/ui/input/text-input-normal';

export const SignInForm = component$(() => {
  const t = inlineTranslate();
  const action = useLoginAction();

  const strings = {
    signIn: t('signin@@Sign in'),
    loginFailed: t('Login failed, please try again.'),
    forgotPassword: t('Forgot your password?'),
    register: t('Register here'),
    email: t('E-mail'),
    password: t('Password'),
  };

  const locale = getLocale();
  const loginFailed = useSignal(false);
  const queryParams = useRouteQueryParams();

  const formStore = useStore({
    state: 'unsubmitted',
    fields: {
      email: queryParams.value.query.get('email') || '',
      password: '',
      csrfToken: '',
    },
    errors: {
      email: '',
      password: '',
    },
  });

  const onSubmit = $(async (values:any) => {
    loginFailed.value = false;
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (res.status === 200) {
      const callbackUrl = queryParams.value.query.get('callbackUrl');
      if (callbackUrl) {
        window.location.href = callbackUrl;
      } else {
        window.location.href = '/';
      }
    } else {
      loginFailed.value = true;
    }
  });

  const pwresetLink = `${getCommonRoute(CommonRoutes.PasswordReset, locale)}?email=${
    formStore.fields.email
  }`;

  const signupLink = `${getCommonRoute(CommonRoutes.UserSignup, locale)}?email=${
    formStore.fields.email
  }&callbackUrl=${queryParams.value.query.get('callbackUrl') || ''}`;

  return (
    <Card.Wrapper>
      <Card.Body>
        <Card.Title>{strings.signIn}</Card.Title>
        {loginFailed.value && (
          <div class={'mt-4'}>
            <Alert type={'warning'}>{strings.loginFailed}</Alert>
          </div>
        )}
        <Form action={action}>
          <TextInputNormal name="email" value={''} error={''} type="email" label={t('E-Mail')} />
          <TextInputNormal
            name="password"
            value={''}
            error={''}
            type="password"
            label={t('Password')}
          />
          <div class="form-control mt-8 w-full max-w-xs">
            <button class={'btn btn-secondary'} type={'submit'}>
              {t('Sign in')}
            </button>
          </div>
          <div class="form-control mt-8 w-full max-w-xs text-center">
            <p>
              <NavLink href={pwresetLink}>{strings.forgotPassword}</NavLink>
            </p>
          </div>
          <div class="form-control mt-4 w-full max-w-xs text-center">
            <p>
              <NavLink href={signupLink}>{strings.register}</NavLink>
            </p>
          </div>
        </Form>
      </Card.Body>
    </Card.Wrapper>
  );
});
