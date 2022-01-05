import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Menu = styled.nav`
    display: flex;
    width: 100%;
    padding: 0 0.5rem;
    align-self: stretch;
    align-items: center;
`

export const MobileMenu = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

type SlideMenuProps = {
    isOpen: boolean
}

const slideMenuModifiers = {
    open: () => css`
        left: 0px;
    `,
    close: () => css`
        left: -800px;
    `,
}

export const SliderMenu = styled.div<SlideMenuProps>`
    ${({ theme, isOpen = false }) => css`
        position: fixed;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        top: 7rem;
        left: 0;
        width: 100%;
        height: calc(100vh - 7rem);
        border-top: 1px solid ${darken(0.2, theme.colors.secondary)};
        background-color: ${theme.colors.secondary};
        z-index: ${theme.layers.modal};
        transition: all 0.3s;
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);

        ${isOpen ? slideMenuModifiers.open() : slideMenuModifiers.close()}
    `};
`

export const SliderMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    overflow-y: auto;

    position: absolute;
    top: 0;
    right: 0;
    left: 80px;
    bottom: 0;
`

export const DeskMenu = styled.div`
    display: flex;
    align-self: stretch;
    align-items: center;
`

export const AvatarContainer = styled.div`
    align-self: center;
    margin: 1rem 0 0.5rem;
`

export const Divider = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 1px;
        background-color: ${darken(0.2, theme.colors.secondary)};
    `};
`

export const MenuItemsMobileContainer = styled.div`
    margin-top: 2rem;
`
