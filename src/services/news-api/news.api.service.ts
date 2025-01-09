import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  type MutationServiceOptions,
} from "~/types/common";
import type { IndexQueryOptions, IndexQueryParams, ShowQueryOptions } from "./news.api.types";

const prefix = `example.come`;

export const newsApiService = {
  index: () => {
    const queryClient = useQueryClient(), queryKey = "NEWS_API_LIST";
    return {
      useQuery: (params?: IndexQueryParams, options?: IndexQueryOptions) => useQuery({
        queryKey: [queryKey, params],
        queryFn: ({ signal }) => axios.get(`${prefix}`, { signal, params: params }),
        ...options
      }),
      invalidate: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
      queryKey
    };
  },
  show: () => {
    const queryClient = useQueryClient(), queryKey = "NEWS_API_SHOW";
    return {
      useQuery: (id: string, options?: ShowQueryOptions) => useQuery({
        queryKey: [queryKey, id],
        queryFn: ({ signal }) => axios.get(`${prefix}/${id}`, { signal }),
        ...options
      }),
      invalidate: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
      queryKey
    };
  },
  store: () => ({
    useMutation: (options?: MutationServiceOptions) => useMutation({ mutationFn: (payload) => axios.post(`${prefix}`, payload), ...options })
  })
}