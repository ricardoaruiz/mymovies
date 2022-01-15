import { QueryKey } from 'react-query'

import { BFFMovie } from 'pages/api/movies/types'
import { ResponseData, QueryOptions } from '../types'

export type NowPlayingMoviesResponseData = ResponseData<BFFMovie[]>

export type UseNowPlayingMoviesParams = {
    page: number
    key?: QueryKey
    options?: QueryOptions<ResponseData<BFFMovie[]>>
}
