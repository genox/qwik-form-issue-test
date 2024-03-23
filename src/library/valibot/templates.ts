import { email, minLength, optional, regex, string } from 'valibot';
import { inlineTranslate } from 'qwik-speak';

const t = inlineTranslate();
export const valibotRequiredEmailField = string([
  email(t('Please enter a valid e-mail address.')),
  minLength(1, t('This field is required.')),
]);
export const valibotPhoneField = string([
  regex(
    /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/,
    t('Please enter a valid phone number'),
  ),
  minLength(10, t('Please enter a valid phone number')),
]);
export const valibotRequiredStringField = string([minLength(1, t('This field is required.'))]);
export const valibotRequiredSetPasswordField = string([
  minLength(8, t('Your password needs more than 8 characters.')),
]);
export const valibotOptionalStringField = optional(string());
