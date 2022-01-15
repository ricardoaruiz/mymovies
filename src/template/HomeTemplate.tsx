import React from 'react'

import { BFFMovie } from 'pages/api/movies/types'

import { Card } from 'components/MediaCardCarousel/types'
import { Container, Hero, Layout, MediaCardCarousel } from 'components'
import { NowPlayingMoviesResponseData } from 'hooks/bff/movies/types'
import { nowPlayingMoviesClient } from 'hooks/bff'

export type HomeTemplateProps = {
    playingNowMovies: NowPlayingMoviesResponseData
}

const HomeTemplate: React.VFC<HomeTemplateProps> = ({ playingNowMovies }) => {
    const page = React.useRef<number>(2)
    const [isLoading, setIsLoading] = React.useState(false)

    const [playingNowMoviesData, setPlayingNowMoviesData] =
        React.useState<NowPlayingMoviesResponseData>(playingNowMovies)

    /**
     *
     */
    const fetchMorePlayingMovies = React.useCallback(async () => {
        setIsLoading(true)
        const morePlayingMovies = await nowPlayingMoviesClient(page.current)
        setTimeout(() => {
            setPlayingNowMoviesData((state) => ({
                ...state,
                data: [...state.data, ...morePlayingMovies.data],
            }))
            setIsLoading(false)
        }, 2000)
    }, [])

    /**
     *
     */
    const mapMovieCards = React.useCallback((movies: BFFMovie[]): Card[] => {
        return movies.map(
            ({ id, title, release_date, images: { poster_path } }) => ({
                id,
                imgURL: poster_path,
                title,
                date: release_date,
            })
        )
    }, [])

    /**
     *
     */
    const handleScrolledEndPlayinMovies = React.useCallback(() => {
        if (
            playingNowMoviesData.total_pages &&
            page.current <= playingNowMoviesData.total_pages
        ) {
            fetchMorePlayingMovies()
            page.current += 1
        }
    }, [fetchMorePlayingMovies, playingNowMoviesData.total_pages])

    /**
     *
     */
    const handleClickCardPlayingMovies = React.useCallback(
        (id: string | number) => {
            console.log(`card clicked: ${id}`)
        },
        []
    )

    return (
        <Layout>
            <Container isFullWidthMobile>
                <Hero
                    imgURL="/images/hero1-img.jpg"
                    title="Bem-vindo(a)."
                    subtitle="Milhões de filmes, séries e pessoas para descobrir. Explore já."
                    onSearch={(searchTerm) => console.log(searchTerm)}
                />
            </Container>

            <Container mt="2rem" mb="2rem">
                <MediaCardCarousel
                    title="Filmes em cartaz"
                    isLoading={isLoading}
                    cards={mapMovieCards(playingNowMoviesData.data)}
                    onCardClicked={handleClickCardPlayingMovies}
                    onScrolledEnd={handleScrolledEndPlayinMovies}
                />
            </Container>
        </Layout>
    )
}

export default HomeTemplate
