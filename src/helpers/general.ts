export const createLinkFromName = (name: string) => {
  return name.replaceAll(' ', '-').toLowerCase();
};
