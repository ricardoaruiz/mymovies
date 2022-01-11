/**
 * Represents a movie returned from API
 */
export type TMDBMovie = {
    id: number
    title: string
    original_title: string
    original_language: string
    overview: string
    release_date: string
    popularity: number
    isAdult: boolean
    backdrop_path: string
    poster_path: string
    vote_average: number
    vote_count: number
}

/**
 * Represents a movie returned from BFF
 */
export type BFFMovie = {
    id: number
    title: string
    original_title: string
    original_language: string
    overview: string
    release_date: string
    popularity: number
    isAdult: boolean
    images: BFFMovieImages
    votes: BFFMovieVotes
}

type BFFMovieImages = {
    backdrop_path: string
    poster_path: string
}

type BFFMovieVotes = {
    vote_average: number
    vote_count: number
}
