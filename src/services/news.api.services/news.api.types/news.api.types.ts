
export interface ListQueryParams {
    // search keyword
    q?: string;
    sortBy?: SortBy;
    pageSize?: number;
    page?: number;
    from?: Date;
    to?: Date;

}

export enum SortBy {
    RELEVANCY = 'relevancy',
    POPULARITY = 'popularity',
    PUBLISHED_AT = 'publishedAt',
}

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


export interface ListResponse {
    totalResults: number;
    status: "ok",
    articles: Array<Article>
}

