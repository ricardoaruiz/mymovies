import React from 'react'
import type { NextPage } from 'next'

import * as S from './index.styles'
import { Layout } from 'components'

const Home: NextPage = () => {
    return (
        <Layout>
            <S.Title>MyMovies</S.Title>
        </Layout>
    )
}

export default Home
