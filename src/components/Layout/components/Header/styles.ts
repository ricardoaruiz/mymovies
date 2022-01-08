import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header<{ hide: boolean }>`
    ${({ theme, hide }) => css`
        display: flex;
        align-items: center;
        height: 7rem;
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.white};
        transition: all 0.4s;

        ${media.greaterThan('medium')`
            position: fixed;
            top: ${!hide ? 0 : '-7rem'};
            left: 0;
            right: 0;
            z-index: ${theme.layers.alwaysOnTop};
        `}
    `};
`
export const HeaderContent = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        flex: 1;
        padding: 0 1.5rem;
        max-width: ${theme.grid.container};
        margin: 0 auto;
    `};
`

export const AvatarContainer = styled.div`
    display: none;

    ${media.greaterThan('medium')`
        display: flex;
        flex: 1;
    `}
`
