import { BFFResponse } from 'pages/api/types/bff'
import { TMDBResponse } from 'pages/api/types/tmdb'
import { BFFMovie, TMDBMovie } from '../types'

/**
 * Build success result
 * @param data
 * @returns
 */
export const buildBFFMoviesResult = (
    data: TMDBResponse<TMDBMovie[]>
): BFFResponse<BFFMovie[]> => {
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
                backdrop_path: `${process.env.TMDB_IMAGES_ORIGINAL_URL}${movie.backdrop_path}`,
                poster_path: `${process.env.TMDB_IMAGES_ORIGINAL_URL}${movie.poster_path}`,
            },
            votes: {
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
            },
        })),
    }
}
