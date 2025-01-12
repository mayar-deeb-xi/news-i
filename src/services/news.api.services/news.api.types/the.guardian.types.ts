export interface ListQueryParams {
    // search keyword
    q?: string;
    "order-by"?: SortBy;
    "page-size"?: number;
    page?: number;
    "from-date"?: Date;
    "to-date"?: Date;
}

export enum SortBy {
    RELEVANCY = 'relevance',
    OLDEST = 'oldest',
    NEWEST = 'newest',
}

export interface Article {
    id: string
    type: string
    sectionId: string
    sectionName: string
    webPublicationDate: string
    webTitle: string
    webUrl: string
    apiUrl: string
    isHosted: boolean
    pillarId: string
    pillarName: string
}


export interface ListResponse {
    status: string
    userTier: string
    total: number
    startIndex: number
    pageSize: number
    currentPage: number
    pages: number
    orderBy: string
    results: Article[]
}

