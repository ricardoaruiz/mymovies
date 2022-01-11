import { ResponseMeta } from '../types'

export type BFFResponse<T> = ResponseMeta & {
    data?: T | null
    error?: BFFResponseError
}

export type BFFResponseError = {
    message: string
}
