import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { IndexQueryOptions, IndexQueryParams } from "./the.guardian.types";
import { env } from "~/environment";

const api = axios.create({
  baseURL: 'https://content.guardianapis.com',
  params: {
    "api-key": env.THE_GUARDIAN_API_KEY
  }
})


export const theGuardianService = {
  index: () => {
    const queryClient = useQueryClient(), queryKey = "THE_GUARDIAN_LIST";
    return {
      useQuery: (params?: IndexQueryParams, options?: IndexQueryOptions) => useQuery({
        queryKey: [queryKey, params],
        queryFn: ({ signal }) => api.get(`/search`, { signal, params: params }),
        ...options
      }),
      invalidate: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
      queryKey
    };
  }
  // show: () => {
  //   const queryClient = useQueryClient(), queryKey = "THE_GUARDIAN_SHOW";
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