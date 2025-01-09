import type { AxiosResponse } from "axios";
import type { QueryServiceOptions } from "~/types/common";


export interface IndexQueryParams { }

export type IndexQueryOptions = QueryServiceOptions<AxiosResponse<IndexResponse>>

export interface IndexResponse {

}

export interface ShowResponse {

}

export type ShowQueryOptions = QueryServiceOptions<AxiosResponse<ShowResponse>>
