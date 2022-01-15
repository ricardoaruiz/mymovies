import React from 'react'

import { BFFMovie } from 'pages/api/movies/types'

import { Card } from 'components/MediaCardCarousel/types'
import { Container, Hero, Layout, MediaCardCarousel } from 'components'

export type HomeTemplateProps = {
    playingNowMovies: BFFMovie[]
}

const HomeTemplate: React.VFC<HomeTemplateProps> = ({ playingNowMovies }) => {
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
                    cards={mapMovieCards(playingNowMovies)}
                    onCardClicked={(id) => console.log(`card clicked: ${id}`)}
                />
            </Container>
        </Layout>
    )
}

export default HomeTemplate
