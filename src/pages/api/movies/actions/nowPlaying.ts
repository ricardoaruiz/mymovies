import { NextApiRequest, NextApiResponse } from 'next'

import tmdbAPI from 'config/tmdb-api'
import { BFFResponse } from 'pages/api/types/bff'
import { TMDBResponse } from 'pages/api/types/tmdb'
import { TMDBMovie, BFFMovie } from '../types'
import { buildErrorObject, buildParamsFromQuery } from 'utils/http/helpers'

const NOW_PAYING_MOVIES_URL = '/movie/now_playing'

export default async (
    req: NextApiRequest,
    res: NextApiResponse<BFFResponse<BFFMovie[]> | null>
) => {
    try {
        const response = await tmdbAPI.get<TMDBResponse<TMDBMovie[]>>(
            `${NOW_PAYING_MOVIES_URL}${buildParamsFromQuery(req)}`
        )

        const result = buildBFFResult(response.data)

        res.status(200).json(result)
    } catch (error) {
        buildErrorObject(error, res)
    }
}

/**
 * Build success result
 * @param data
 * @returns
 */
function buildBFFResult(
    data: TMDBResponse<TMDBMovie[]>
): BFFResponse<BFFMovie[]> {
    const { page, total_pages, total_results, results } = data

    return {
        page,
        total_pages,
        total_results,
        data: results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            original_title: movie.original_title,
            original_language: movie.original_language,
            overview: movie.overview,
            release_date: movie.release_date,
            popularity: movie.popularity,
            isAdult: movie.isAdult,
            images: {
                backdrop_path: movie.backdrop_path,
                poster_path: movie.poster_path,
            },
            votes: {
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
            },
        })),
    }
}
