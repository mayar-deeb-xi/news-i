import { useQueries, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { newsApi, theGuardianApi } from "./news.api.axios";
import { newApiQueryKey, newApiQueryKey2, theGuardianQueryKey } from "./news.api.query.keys";
import { ListResponse as TheGuardianResponse } from "./news.api.types/the.guardian.types";
import type { ListResponse as NewsApiResponse } from "./news.api.types/news.api.types";
import { AxiosResponse } from "axios";
import { QueryServiceOptions } from "~/types/common";
import { newsApiListQueryParamsMapper, theGuardianListQueryParamsMapper } from "./news.api.utils";


export type UseNewsApiServiceOptions = {
  params?: any;
  newsApiQueryOptions?: QueryServiceOptions<AxiosResponse<NewsApiResponse>>
  newsApiQueryOptions2?: QueryServiceOptions<AxiosResponse<NewsApiResponse>>
  theGuardianQueryOptions?: QueryServiceOptions<AxiosResponse<TheGuardianResponse>>
}


export const useNewsApiService = (options: UseNewsApiServiceOptions) => {
  const queryClient = useQueryClient();
  const { params, newsApiQueryOptions, theGuardianQueryOptions, newsApiQueryOptions2 } = options;

  const response = useQueries<[UseQueryOptions<AxiosResponse<NewsApiResponse>>, UseQueryOptions<AxiosResponse<TheGuardianResponse>>, UseQueryOptions<AxiosResponse<NewsApiResponse>>]>({
    queries: [
      {
        queryKey: [newApiQueryKey, params],
        queryFn: ({ signal }) => newsApi.get<NewsApiResponse>(`/everything`, { signal, params: { ...newsApiListQueryParamsMapper(params, options), domains: 'bbc.co.uk' } }),
        ...newsApiQueryOptions
      },
      {
        queryKey: [theGuardianQueryKey, params],
        queryFn: ({ signal }) => theGuardianApi.get<TheGuardianResponse>(`/search`, { signal, params: theGuardianListQueryParamsMapper(params, options) }),
        ...theGuardianQueryOptions
      },
      {
        queryKey: [newApiQueryKey2, params],
        queryFn: ({ signal }) => newsApi.get<NewsApiResponse>(`/everything`, { signal, params: { ...newsApiListQueryParamsMapper(params, options), domains: 'engadget.com' } }),
        ...newsApiQueryOptions2
      },
    ]
  }
  );

  return {
    res: response,
    invalidate: () => queryClient.invalidateQueries({ queryKey: [newApiQueryKey, theGuardianQueryKey, newApiQueryKey2] })
  }
}

export type UseNewsApiServiceReturn = ReturnType<typeof useNewsApiService>
