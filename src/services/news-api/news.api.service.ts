import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { IndexQueryOptions, IndexQueryParams } from "./news.api.types";
import { env } from "~/environment";

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: env.NEWS_API_KEY
  }
})


export const newsApiService = {
  index: () => {
    const queryClient = useQueryClient(), queryKey = "NEWS_API_LIST";
    return {
      useQuery: (params?: IndexQueryParams, options?: IndexQueryOptions) => useQuery({
        queryKey: [queryKey, params],
        queryFn: ({ signal }) => api.get(`/everything`, { signal, params: params }),
        ...options
      }),
      invalidate: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
      queryKey
    };
  }
  // show: () => {
  //   const queryClient = useQueryClient(), queryKey = "NEWS_API_SHOW";
  //   return {
  //     useQuery: (id: string, options?: ShowQueryOptions) => useQuery({
  //       queryKey: [queryKey, id],
  //       queryFn: ({ signal }) => api.get(`${prefix}/${id}`, { signal }),
  //       ...options
  //     }),
  //     invalidate: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
  //     queryKey
  //   };
  // },
  // store: () => ({
  //   useMutation: (options?: MutationServiceOptions) => useMutation({ mutationFn: (payload) => api.post(`${prefix}`, payload), ...options })
  // })
}