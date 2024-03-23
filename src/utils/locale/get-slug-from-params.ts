export const getSlugFromParams = (params: Record<string, string>) => {
  if (!params) {
    return null;
  }
  if (params.slug) {
    return params.slug;
  }
  return null;
};
