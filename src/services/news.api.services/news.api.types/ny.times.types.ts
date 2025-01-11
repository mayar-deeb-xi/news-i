
export interface ListQueryParams {
    // search keyword
    q?: string;
    begin_date?: Date;
    end_date?: Date;
    sort?: "relevance" | "oldest" | "newest";
    page?: number;
    pageSize?: number;

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

