import React from 'react'

import Item from './components/Item'
import { MenuProps } from './types'

import * as S from './styles'
import { CloseIcon, MenuIcon } from '../../../Icons'

const Menu: React.VFC<MenuProps> = ({ items }) => {
    const [openedMenu, setOpenedMenu] = React.useState<
        string | null | undefined
    >(null)
    const [openedSliderMenu, setOpenedSliderMenu] = React.useState(false)

    /**
     *
     */
    const menuItems = React.useCallback(
        (type: 'mobile' | 'desk') => {
            return items.map((item) => (
                <Item
                    key={item.main.id}
                    id={item.main.id}
                    label={item.main.label}
                    isOpen={openedMenu === item.main.id}
                    type={type}
                    onMouseOver={() => setOpenedMenu(item.main.id)}
                    onMouseLeave={() => setOpenedMenu(null)}
                >
                    {item.subItems?.map((item) => (
                        <Item
                            key={item.id}
                            label={item.label}
                            href={item.href}
                            type={type}
                            onClick={item.onClick}
                        />
                    ))}
                </Item>
            ))
        },
        [items, openedMenu]
    )

    return (
        <S.Menu tabIndex={1} role="menu" aria-label="menu da aplicação">
            {/*  */}
            <S.MobileMenu>
                {!openedSliderMenu && (
                    <MenuIcon
                        width="4rem"
                        height="4rem"
                        onClick={() => setOpenedSliderMenu(true)}
                    />
                )}
                {openedSliderMenu && (
                    <CloseIcon
                        width="4rem"
                        height="4rem"
                        onClick={() => setOpenedSliderMenu(false)}
                    />
                )}

                <S.SliderMenu isOpen={openedSliderMenu}>
                    <S.SliderMenuContent>
                        {menuItems('mobile')}
                    </S.SliderMenuContent>
                </S.SliderMenu>
            </S.MobileMenu>

            {/*  */}
            <S.DeskMenu>{menuItems('desk')}</S.DeskMenu>
        </S.Menu>
    )
}

export default Menu
