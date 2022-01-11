import { ResponseMeta } from '../types'

export type TMDBResponse<T> = ResponseMeta & {
    results: T
}
