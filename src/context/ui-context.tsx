import { component$, createContextId, Slot, useContextProvider, useStore } from '@builder.io/qwik';


type UiContextType = {
  theme: string;
  pageStyleVariant: string;
  pageLoading: boolean;
  cartOpen: boolean;
  online: boolean;
};

export const UiContext = createContextId<UiContextType>('ui-context');

export const UiContextProvider = component$(() => {
  const initialState: UiContextType = {
    theme: 'dark',
    pageStyleVariant: 'default',
    pageLoading: false,
    cartOpen: false,
    online: true,
  };

  const state = useStore<UiContextType>(initialState);

  useContextProvider(UiContext, state);

  return (
    <>
      <Slot />
    </>
  );
});
