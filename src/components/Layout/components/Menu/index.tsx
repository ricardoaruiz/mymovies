import React from 'react'
import Item from './components/Item'

import * as S from './styles'

const Menu = () => {
    const [openedMenu, setOpenedMenu] = React.useState<string | null>(null)

    return (
        <S.Menu tabIndex={1} role="menu" aria-label="menu da aplicação">
            <Item
                id="movies"
                label="Filmes"
                isOpen={openedMenu === 'movies'}
                onMouseOver={() => setOpenedMenu('movies')}
                onMouseLeave={() => setOpenedMenu(null)}
            >
                <Item label="Populares" href="/popular-movies" />
                <Item label="Em cartaz" href="/playing-movies" />
                <Item
                    label="Próximas estreias nos cinemas"
                    onClick={() => alert('próximas estreias no cinema')}
                />
            </Item>

            <Item
                id="series"
                label="Séries"
                isOpen={openedMenu === 'series'}
                onMouseOver={() => setOpenedMenu('series')}
                onMouseLeave={() => setOpenedMenu(null)}
            >
                <Item label="Populares" href="/popular-series" />
                <Item label="Em exibição" href="/playing-series" />
                <Item label="Na TV" onClick={() => alert('séries na tv')} />
            </Item>

            <Item
                id="people"
                label="Pessoas"
                isOpen={openedMenu === 'people'}
                onMouseOver={() => setOpenedMenu('people')}
                onMouseLeave={() => setOpenedMenu(null)}
            >
                <Item
                    label="Pessoas populares"
                    onClick={() => alert('pessoas populares')}
                />
            </Item>
        </S.Menu>
    )
}

export default Menu
