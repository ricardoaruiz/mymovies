import styled, { css } from 'styled-components'

export const Header = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        height: 7rem;
        background-color: #032541;
        color: ${theme.colors.white};
    `};
`
