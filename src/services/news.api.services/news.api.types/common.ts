

export type UnifiedParams = {
    q?: string;
    page?: number;
    limit: number;
    sortBy: SortBy;

    from?: Date;
    to?: Date;

}

export enum SortBy {
    RELEVANCY = 'relevancy',
    POPULARITY = 'popularity',
    PUBLISHED_AT = 'publishedAt',
}