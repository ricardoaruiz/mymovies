import React from 'react'

import { Avatar } from '../Avatar'
import Logo from '../Logo'
import Menu from '../Menu'
import { ItemMenu } from '../Menu/types'

import * as S from './styles'

const Header = () => {
    const [menuItems] = React.useState<ItemMenu[]>([
        {
            main: { id: 'movies', label: 'Filmes' },
            subItems: [
                {
                    id: 'popular-movies',
                    label: 'Populares',
                    href: '/popular-movies',
                },
                {
                    id: 'playing-movies',
                    label: 'Em cartaz',
                    href: '/playing-movies',
                },
                {
                    id: 'upcomming-movies',
                    label: 'Próximas estréias',
                    href: '/upcomming-movies',
                },
            ],
        },
        {
            main: { id: 'series', label: 'Séries' },
            subItems: [
                {
                    id: 'popular-series',
                    label: 'Populares',
                    href: '/popular-series',
                },
                {
                    id: 'playing-series',
                    label: 'Em exibição',
                    href: '/playing-series',
                },
                {
                    id: 'ontv-series',
                    label: 'Na TV',
                    href: '/ontv-series',
                },
            ],
        },
        {
            main: { id: 'people', label: 'Pessoas' },
            subItems: [
                {
                    id: 'popular-people',
                    label: 'Populares',
                    onClick: popularPeople,
                },
            ],
        },
    ])

    function popularPeople() {
        console.log('Pessoas populares...')
    }

    return (
        <S.Header>
            <S.HeaderContent>
                <Logo href="/" />
                <Menu items={menuItems} />
                <S.AvatarContainer>
                    <Avatar
                        imgURL="/images/avatar.jpeg"
                        onClick={() => console.log('avatar clicked')}
                    />
                </S.AvatarContainer>
            </S.HeaderContent>
        </S.Header>
    )
}

export default Header
