export enum CommonRoutes {
  Error = 'error',
  CheckoutConfirmation = 'checkout/confirmation',
  CheckoutPayment = 'checkout/payment',
  PasswordReset = 'user/password-reset',
  PasswordUpdate = 'user/password-update',
  UserDashboardOrders = 'user/dashboard/orders',
  UserDashboard = 'user/dashboard',
  UserDashboardAddresses = 'user/dashboard/addresses',
  UserDashboardAccount = 'user/dashboard/account',
  UserDashboardSecurity = 'user/dashboard/security',
  UserSignin = 'user/signin',
  UserSignout = 'user/signout',
  UserSignup = 'user/signup',
  UserValidate = 'user/validate',
  Catalog = 'catalog',
  Checkout = 'checkout',
  Product = 'product',
  StripePayment = 'checkout/payment/stripe',
  Archive = 'archive',
  People = 'people',
}

enum DeCommonRoutes {
  Archive = 'archiv',
  People = 'personen',
}

export const commonRouteMap: Record<string, any> = {
  de: {
    ...CommonRoutes,
    ...DeCommonRoutes,
  },
  en: {
    ...CommonRoutes,
  },
};
