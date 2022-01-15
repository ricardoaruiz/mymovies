export interface ResponseData<T> {
    page?: number
    total_pages?: number
    total_results?: number
    data: T
}

export interface QueryOptions<T> {
    retry?: boolean
    cacheTime?: number
    staleTime?: number
    enabled?: boolean
    refetchInterval?: number | false
    refetchOnMount?: boolean | 'always'
    refetchOnWindowFocus?: boolean | 'always'
    initialData?: T | (() => T) | any
    keepPreviousData?: boolean
    onSuccess?: (result: T) => void
}
