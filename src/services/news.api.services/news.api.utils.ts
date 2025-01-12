import { SortBy, UnifiedParams } from "./news.api.types/common"
import { ListQueryParams as NewsApiListQueryParams } from "./news.api.types/news.api.types"
import { ListQueryParams as TheGuardianListQueryParams, SortBy as TheGuardianSortBy } from "./news.api.types/the.guardian.types"
import { UseNewsApiServiceOptions } from "./useNewsApiService"


export const newsApiListQueryParamsMapper = (params: UnifiedParams, serviceOptions: UseNewsApiServiceOptions): NewsApiListQueryParams => {

    // const apiCount = ['newsApiQueryOptions', 'newsApiQueryOptions2', 'theGuardianQueryOptions']
    //     .filter(key => typeof serviceOptions?.[key]?.enabled !== 'boolean' || serviceOptions?.[key]?.enabled).length ?? 1;

    return {
        q: params.q,
        page: params.page,
        pageSize: params.limit,
        sortBy: params.sortBy,
        from: params.from,
        to: params.to
    }
}


export const theGuardianListQueryParamsMapper = (params: UnifiedParams, serviceOptions: UseNewsApiServiceOptions): TheGuardianListQueryParams => {


    const sortMap = {
        [SortBy.POPULARITY]: undefined,
        [SortBy.PUBLISHED_AT]: TheGuardianSortBy.NEWEST,
        [SortBy.RELEVANCY]: TheGuardianSortBy.RELEVANCY,
    }

    return {
        q: params.q,
        page: params.page,
        "page-size": params.limit,
        "order-by": sortMap[params.sortBy],
        "from-date": params.from,
        "to-date": params.to
    }
}