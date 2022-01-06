import React from 'react'

import { Container, Hero, Layout } from 'components'

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

            <Container>
                <h3>Conteúdo home</h3>
            </Container>
        </Layout>
    )
}

export default HomeTemplate
