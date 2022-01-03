import React from 'react'

import Item from './components/Item'
import { MenuProps } from './types'

import * as S from './styles'

const Menu: React.VFC<MenuProps> = ({ items }) => {
    const [openedMenu, setOpenedMenu] = React.useState<
        string | null | undefined
    >(null)

    return (
        <S.Menu tabIndex={1} role="menu" aria-label="menu da aplicação">
            {items.map((item) => (
                <Item
                    key={item.main.id}
                    id={item.main.id}
                    label={item.main.label}
                    isOpen={openedMenu === item.main.id}
                    onMouseOver={() => setOpenedMenu(item.main.id)}
                    onMouseLeave={() => setOpenedMenu(null)}
                >
                    {item.subItems?.map((item) => (
                        <Item
                            key={item.id}
                            label={item.label}
                            href={item.href}
                            onClick={item.onClick}
                        />
                    ))}
                </Item>
            ))}
        </S.Menu>
    )
}

export default Menu
