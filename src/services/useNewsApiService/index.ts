import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKey1 } from "./news.api.query.keys";
import { AxiosResponse } from "axios";
import { QueryServiceOptions } from "~/types/common";
import { api } from "../axios/axios";
import { NewsApiResponse } from "./news.api.types";



export type UseNewsApiServiceOptions = {
  params?: any;
  queryOptions?: QueryServiceOptions<AxiosResponse<NewsApiResponse>>

}


export const useNewsApiService = (options: UseNewsApiServiceOptions) => {
  const queryClient = useQueryClient();
  const { params, queryOptions } = options;

  const response = useQuery<AxiosResponse<NewsApiResponse>>({
    queryKey: [QueryKey1, params],
    queryFn: ({ signal }) => api.get<NewsApiResponse>(`/everything`, { signal, params }),
    ...queryOptions
  });

  return {
    res: response,
    invalidate: () => queryClient.invalidateQueries({ queryKey: [QueryKey1] })
  }
}

export type UseNewsApiServiceReturn = ReturnType<typeof useNewsApiService>
