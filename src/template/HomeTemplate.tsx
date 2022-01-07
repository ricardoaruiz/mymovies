import React from 'react'

import { Container, Hero, Layout } from 'components'
import { MediaCardCarousel } from 'components/MediaCardCarousel'

const getCards = () => {
    return Array.from({ length: 15 }, (_, i) => {
        return {
            id: i,
            imgURL:
                i % 2 === 0
                    ? '/images/cards/spiderman.jpg'
                    : '/images/cards/venon.jpg',
            title:
                i % 2 === 0
                    ? `Home aranha de volta ao lar${i}`
                    : `Venon: Tempo de carnificina${i}`,
            date: i % 2 === 0 ? '17 de jul de 2017' : '21 de ago de 2021',
        }
    })
}

const HomeTemplate = () => {
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
                    cards={getCards()}
                    onCardClicked={(id) => console.log(`card clicked: ${id}`)}
                />
            </Container>
        </Layout>
    )
}

export default HomeTemplate
