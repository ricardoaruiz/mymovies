import { NextApiRequest, NextApiResponse } from 'next'

import tmdbAPI from 'config/tmdb-api'
import { BFFResponse } from 'pages/api/types/bff'
import { TMDBResponse } from 'pages/api/types/tmdb'
import { TMDBMovie, BFFMovie } from '../types'
import { buildErrorObject, buildParamsFromQuery } from 'utils/http/helpers'
import { buildBFFMoviesResult } from '../builders/bff-result'

const URL = '/movie'

export default async (
    uri: string,
    req: NextApiRequest,
    res: NextApiResponse<BFFResponse<BFFMovie[]> | null>
) => {
    try {
        const url = getUrl(uri)

        const response = await tmdbAPI.get<TMDBResponse<TMDBMovie[]>>(
            `${url}${buildParamsFromQuery(req)}`
        )

        const result = buildBFFMoviesResult(response.data)

        res.status(200).json(result)
    } catch (error) {
        buildErrorObject(error, res)
    }
}

/**
 * Get complete URL
 * @param uri
 * @returns complete URL
 */
function getUrl(uri: string) {
    if (uri.startsWith('discover') || uri.startsWith('/discover')) {
        return uri.includes('/') ? `${uri}${URL}` : `/${uri}${URL}`
    }
    return `${URL}${uri.startsWith('/') ? uri : `/${uri}`}`
}
