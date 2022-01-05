import React from 'react'

import { HeroProps } from './types'
import { InputSearch } from 'components'

import * as S from './styles'

const Hero: React.VFC<HeroProps> = ({ imgURL }) => {
    return (
        <S.Hero
            imgURL={imgURL}
            tabIndex={1}
            aria-label="Bem-vindo(a). Milhões de filmes, séries e pessoas para descobrir. Explore já."
        >
            <S.Title>Bem-vindo(a).</S.Title>
            <S.SubTitle>
                Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </S.SubTitle>

            <InputSearch
                placeholder="Buscar por um filme, série ou pessoa..."
                onSearch={(searchTerm) => console.log(`onSearch ${searchTerm}`)}
            />
        </S.Hero>
    )
}

export default Hero
