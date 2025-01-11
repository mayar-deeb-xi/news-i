import { useQueries, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { newsApi, theGuardianApi } from "./news.api.axios";
import { newApiQueryKey, theGuardianQueryKey } from "./news.api.query.keys";
import { ListResponse as TheGuardianResponse } from "./news.api.types/the.guardian.types";
import type { ListResponse as NewsApiResponse } from "./news.api.types/news.api.types";
import type { ListResponse as NyTimesResponse } from "./news.api.types/ny.times.types";
import { AxiosResponse } from "axios";
import { QueryServiceOptions } from "~/types/common";


export type UseNewsApiServiceOptions = {
  params?: any;
  newsApiQueryOptions?: QueryServiceOptions<AxiosResponse<NewsApiResponse>>
  theGuardianQueryOptions?: QueryServiceOptions<AxiosResponse<TheGuardianResponse>>
  nyTimesQueryOptions?: QueryServiceOptions<AxiosResponse<NyTimesResponse>>
}


export const useNewsApiService = (options: UseNewsApiServiceOptions) => {
  const queryClient = useQueryClient();
  const { params, newsApiQueryOptions, theGuardianQueryOptions } = options;

  const response = useQueries<[UseQueryOptions<AxiosResponse<NewsApiResponse>>, UseQueryOptions<AxiosResponse<TheGuardianResponse>>, UseQueryOptions<AxiosResponse<NewsApiResponse>>]>({
    queries: [
      {
        queryKey: [newApiQueryKey, params],
        queryFn: ({ signal }) => newsApi.get<NewsApiResponse>(`/everything`, { signal, params: { ...params, domains: 'bbc.co.uk' } }),
        ...newsApiQueryOptions
      },
      {
        queryKey: [theGuardianQueryKey, params],
        queryFn: ({ signal }) => theGuardianApi.get<TheGuardianResponse>(`/search`, { signal, params: params }),
        ...theGuardianQueryOptions
      },
      {
        queryKey: [newApiQueryKey, params],
        queryFn: ({ signal }) => newsApi.get<NewsApiResponse>(`/everything`, { signal, params: { ...params, domains: 'engadget.com' } }),
        ...newsApiQueryOptions
      },
    ]
  }
  );

  return {
    res: response,
    invalidate: () => queryClient.invalidateQueries({ queryKey: [newApiQueryKey, theGuardianQueryKey] })
  }
}

export type UseNewsApiServiceReturn = ReturnType<typeof useNewsApiService>
