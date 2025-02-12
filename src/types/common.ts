import {
  DefinedInitialDataOptions,
  QueryKey,
  UseMutationOptions,
} from "@tanstack/react-query";

export type Replace<T, K extends keyof T, V> = {
  [P in keyof T]: P extends K ? V : T[P];
};

export type ParameterType<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

export type QueryServiceOptions<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Partial<
  Omit<
    DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
>;

export type MutationServiceOptions<Request = any, Response = never> =
  | Omit<UseMutationOptions<Response, unknown, Request, unknown>, "mutationFn">
  | undefined;
