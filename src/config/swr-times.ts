export const SWR_CACHE_CONTROL = {
  long: {
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 60,
  },
  short: {
    staleWhileRevalidate: 60 * 60,
    maxAge: 5,
  },
};
