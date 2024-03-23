// type provided by library is causing issues
import type { FieldValues, MaybePromise } from '@modular-forms/qwik/dist/types/types';
import type { QRL, QwikSubmitEvent } from '@builder.io/qwik';

export type SubmitHandler<TFieldValues extends FieldValues> = QRL<
  (values: TFieldValues, event: QwikSubmitEvent<HTMLFormElement>) => MaybePromise<any>
>;
