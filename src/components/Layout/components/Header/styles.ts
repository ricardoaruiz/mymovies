import styled, { css } from 'styled-components'

export const Header = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        height: 7rem;
        background-color: #032541;
        color: ${theme.colors.white};
        padding: 0 1rem;
    `};
`
export const Logo = styled.div`
    ${({ theme }) => css`
        margin-right: 1rem;
        color: ${theme.colors.primary};
        font-size: 3rem;

        & small {
            font-size: 1.5rem;
        }
    `};
`
