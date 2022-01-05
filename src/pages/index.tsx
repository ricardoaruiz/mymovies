import React from 'react'
import type { NextPage } from 'next'

import { Layout } from 'components'

import * as S from './index.styles'

const Home: NextPage = () => {
    return (
        <Layout>
            <S.Title>Home</S.Title>
        </Layout>
    )
}

export default Home
