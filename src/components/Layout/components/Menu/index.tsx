import React from 'react'
import Item from './components/Item'

import * as S from './styles'

const Menu = () => {
    return (
        <S.Menu>
            <Item label="Filmes">
                <Item label="Populares" href="popular-movies" />
                <Item label="Em cartaz" />
                <Item label="Próximas estreias nos cinemas" />
            </Item>
            <Item label="Séries" href="/series">
                <Item label="Populares" href="/popular-series" />
                <Item label="Em exibição" />
                <Item label="Na TV" />
            </Item>
            <Item label="Pessoas">
                <Item
                    label="Pessoas populares"
                    onClick={() => alert('pessoas popures')}
                />
            </Item>
        </S.Menu>
    )
}

export default Menu
