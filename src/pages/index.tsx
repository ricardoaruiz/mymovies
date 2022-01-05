import React from 'react'
import type { NextPage } from 'next'

import { Container, Hero, Layout } from 'components'

// import * as S from './index.styles'

const Home: NextPage = () => {
    return (
        <Layout>
            <Container isFullWidthMobile>
                <Hero imgURL="/images/hero1-img.jpg" />
            </Container>

            <Container>
                <h3>Conteúdo home</h3>
            </Container>
        </Layout>
    )
}

export default Home
