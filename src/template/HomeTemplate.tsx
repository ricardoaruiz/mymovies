import React from 'react'

import { BFFMovie } from 'pages/api/movies/types'

import { Card } from 'components/MediaCardCarousel/types'
import { Container, Hero, Layout, MediaCardCarousel } from 'components'
import { NowPlayingMoviesResponseData } from 'hooks/bff/movies/types'
import { useNowPlayingMovies } from 'hooks/bff'

export type HomeTemplateProps = {
    playingNowMovies: NowPlayingMoviesResponseData
}

const HomeTemplate: React.VFC<HomeTemplateProps> = ({ playingNowMovies }) => {
    const [playingNowMoviesDataPage, setplayingNowMoviesDataPage] =
        React.useState(1)
    const [playingNowMoviesData, setPlayingNowMoviesData] =
        React.useState<NowPlayingMoviesResponseData>(playingNowMovies)

    const { isLoading: isLoadingPlayingNowMoviesData } = useNowPlayingMovies({
        page: playingNowMoviesDataPage,
        options: {
            enabled: playingNowMoviesDataPage > 1,
            cacheTime: 10000,
            onSuccess: (result) => {
                setPlayingNowMoviesData((state) => ({
                    ...state,
                    data: [...state.data, ...result.data],
                }))
            },
        },
    })

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
            playingNowMoviesDataPage < playingNowMoviesData.total_pages
        ) {
            setplayingNowMoviesDataPage((state) => state + 1)
        }
    }, [playingNowMoviesDataPage, playingNowMoviesData.total_pages])

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
                    isLoading={isLoadingPlayingNowMoviesData}
                    cards={mapMovieCards(playingNowMoviesData.data)}
                    onCardClicked={handleClickCardPlayingMovies}
                    onScrolledEnd={handleScrolledEndPlayinMovies}
                />
            </Container>
        </Layout>
    )
}

export default HomeTemplate
