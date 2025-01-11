import type { AxiosResponse } from "axios";
import type { QueryServiceOptions } from "~/types/common";


export interface IndexQueryParams {
    // search keyword
    q?: string;
    sortBy?: "relevancy" | "popularity" | "publishedAt";
    pageSize?: number;
    page?: number;
    from?: Date;
    to?: Date;

}

export interface ApiError {
    status: "error",
    code: string,
    message: string
}

export interface ApiRootResponse {
    status: "ok",
}

export type IndexQueryOptions = QueryServiceOptions<AxiosResponse<IndexResponse>>


export interface Article {
    source: {
        id?: null;
        name: string;
    };
    author?: string;
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    content: string;
    publishedAt: Date;
}


export interface IndexResponse extends ApiRootResponse {
    totalResults: number;
    articles: Array<any>
}

export interface ShowResponse {

}

export type ShowQueryOptions = QueryServiceOptions<AxiosResponse<ShowResponse>>
