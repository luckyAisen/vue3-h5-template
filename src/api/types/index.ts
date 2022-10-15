export * from "./request";

export type FetchData<T> = {
  code?: number;
  msg?: string;
  data: T;
  [propName: string]: unknown;
  [propName: number]: unknown;
};
