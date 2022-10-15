export const isDev = (mode: string): boolean => {
  return mode === "development";
};

export const isProd = (mode: string): boolean => {
  return mode === "production";
};
