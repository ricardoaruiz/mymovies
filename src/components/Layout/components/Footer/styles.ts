import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.footer`
    ${({ theme }) => css`
        display: flex;
        background-color: ${theme.colors.secondary};
        padding: 2rem 0 8rem;
        color: ${theme.colors.white};
    `};
`

export const FooterContent = styled.footer`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
        align-self: stretch;
        max-width: ${theme.grid.container};
        margin: 0 auto;
        padding: 0 1.5rem;

        ${media.greaterThan('medium')`
            flex-direction: row;
        `}
    `};
`

export const LogoContainer = styled.div`
    align-self: flex-start;

    ${media.greaterThan('medium')`
        margin-right: 2rem;
    `}
`

export const ItemContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-self: stretch;
        gap: ${theme.grid.gutter};
        padding-top: 3rem;
    `};
`

export const Item = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};

        & a {
            color: ${theme.colors.white};
            text-decoration: none;
            font-weight: ${theme.font.light};
            cursor: pointer;

            &:hover {
                color: ${theme.colors.primary};
            }
        }

        & li {
            margin-top: 0.25rem;
        }
    `};
`
