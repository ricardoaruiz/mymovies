import React from 'react'
import type { GetStaticProps, NextPage } from 'next'

import { HomeTemplate } from 'template'
import { nowPlayingMovies } from 'hooks/bff'
import { HomeTemplateProps } from 'template/HomeTemplate'

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
    const playingMoviesResponse = await nowPlayingMovies()

    return {
        revalidate: 1000 * 60 * 60 * 24, //um dia
        props: {
            playingNowMovies: playingMoviesResponse.data,
        },
    }
}

const Home: NextPage<HomeTemplateProps> = (params) => {
    return <HomeTemplate {...params} />
}

export default Home
