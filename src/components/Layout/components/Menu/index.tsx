import React from 'react'

import { Avatar } from '../Avatar'
import { CloseIcon, MenuIcon } from '../../../Icons'
import Item from './components/Item'
import { MenuProps } from './types'
import { useMedia } from '../../../../hooks/useMedia'

import * as S from './styles'

const Menu: React.VFC<MenuProps> = ({ items }) => {
    const { isMobile } = useMedia()
    const sliderRef = React.useRef() as React.MutableRefObject<HTMLDivElement>

    const [openedMenu, setOpenedMenu] = React.useState<
        string | null | undefined
    >(null)
    const [openedSliderMenu, setOpenedSliderMenu] = React.useState(false)

    /**
     *
     */
    const handleOpenMenuClick = React.useCallback(() => {
        setOpenedSliderMenu(true)
        sliderRef.current.focus()
    }, [])

    /**
     *
     */
    const handleOpenMenuKeypress = React.useCallback(
        (event: React.KeyboardEvent<SVGElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                setOpenedSliderMenu(true)
                sliderRef.current.focus()
            }
        },
        []
    )

    /**
     *
     */
    const handleCloseMenuClick = React.useCallback(() => {
        setOpenedSliderMenu(false)
    }, [])

    /**
     *
     */
    const handleCloseMenuKeypress = React.useCallback(
        (event: React.KeyboardEvent<SVGElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                setOpenedSliderMenu(false)
            }
        },
        []
    )

    /**
     *
     */
    const handleCloseMenuOnEsc = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            event.key === 'Escape' && setOpenedSliderMenu(false)
        },
        []
    )

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
                    onClick={() => {
                        item.main.onClick && item.main.onClick()
                        !item.subItems?.length && setOpenedSliderMenu(false)
                    }}
                    href={item.main.href}
                    onMouseOver={() => setOpenedMenu(item.main.id)}
                    onMouseLeave={() => setOpenedMenu(null)}
                >
                    {item.subItems?.map((item) => (
                        <Item
                            key={item.id}
                            label={item.label}
                            href={item.href}
                            type={type}
                            onClick={() => {
                                item.onClick && item.onClick()
                                setOpenedSliderMenu(false)
                            }}
                        />
                    ))}
                </Item>
            ))
        },
        [items, openedMenu]
    )

    return (
        <S.Menu tabIndex={-1} role="menu" aria-label="menu da aplicação">
            {/*  */}
            {isMobile && (
                <S.MobileMenu aria-label="menu mobile">
                    {!openedSliderMenu && (
                        <MenuIcon
                            width="4rem"
                            height="4rem"
                            onClick={handleOpenMenuClick}
                            onKeyDown={handleOpenMenuKeypress}
                            aria-label="open menu button"
                            tabIndex={1}
                        />
                    )}
                    {openedSliderMenu && (
                        <CloseIcon
                            width="4rem"
                            height="4rem"
                            onClick={handleCloseMenuClick}
                            onKeyDown={handleCloseMenuKeypress}
                            aria-label="close menu button"
                            tabIndex={1}
                        />
                    )}

                    <S.SliderMenu
                        isOpen={openedSliderMenu}
                        aria-hidden={!openedSliderMenu}
                        aria-label="slider menu, press esc to close"
                        tabIndex={1}
                        onKeyDown={handleCloseMenuOnEsc}
                        ref={sliderRef}
                    >
                        <S.AvatarContainer>
                            <Avatar imgURL="/images/avatar.jpeg" size="large" />
                        </S.AvatarContainer>

                        <S.Divider />

                        <S.MenuItemsMobileContainer>
                            {menuItems('mobile')}
                        </S.MenuItemsMobileContainer>
                    </S.SliderMenu>
                </S.MobileMenu>
            )}

            {/*  */}
            {!isMobile && (
                <S.DeskMenu aria-label="menu desktop">
                    {menuItems('desk')}
                </S.DeskMenu>
            )}
        </S.Menu>
    )
}

export default Menu
