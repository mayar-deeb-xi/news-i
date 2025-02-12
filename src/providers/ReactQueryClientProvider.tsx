import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useMemo } from "react";

export const ReactQueryClientProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            throwOnError(error) {
              enqueueSnackbar(error.message, { variant: "error" });
              return false;
            },
          },
          mutations: {
            onError(error) {
              enqueueSnackbar(error.message, { variant: "error" });
            },
          },
        },
      }),
    [],
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
