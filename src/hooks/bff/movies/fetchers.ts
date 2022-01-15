import bff from 'config/bff'

import { NowPlayingMoviesResponseData } from './types'

/**
 * Movie URL
 */
const MOVIES_URL = '/movies'

export const NOW_PLAYING_MOVIES_KEY = 'nowPlayingMovies'

/**
 * List movies in cinema client side
 * @param currentPage default 1
 * @returns
 */
export const nowPlayingMoviesClient = async (
    currentPage = 1
): Promise<NowPlayingMoviesResponseData> => {
    return nowPlayingMovies(currentPage, true)
}

/**
 * List movies in cinema server side
 * @param page default 1
 * @returns Movies list
 */
export const nowPlayingMovies = async (
    currentPage = 1,
    isClient = false
): Promise<NowPlayingMoviesResponseData> => {
    const url = getURL(
        isClient,
        `${MOVIES_URL}/now_playing?page=${currentPage}`
    )

    const response = await bff.get<NowPlayingMoviesResponseData>(url)

    return response.data
}

/**
 *
 * @param isClient
 * @param uri
 * @returns
 */
const getURL = (isClient: boolean, uri: string) => {
    return isClient ? `api${uri}` : uri
}
