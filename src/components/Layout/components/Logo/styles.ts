import styled, { css } from 'styled-components'

import { LogoProps } from './types'

export const Logo = styled.div<Partial<LogoProps>>`
    ${({ href }) => css`
        margin-right: 1rem;
        cursor: ${href ? 'pointer' : 'default'};
    `};
`

const logoImageModifiers = {
    small: () => css`
        width: 2.5rem;
        height: 2.5rem;
    `,
    medium: () => css`
        width: 5rem;
        height: 5rem;
    `,
    large: () => css`
        width: 7.5rem;
        height: 7.5rem;
    `,
    xlarge: () => css`
        width: 10rem;
        height: 10rem;
    `,
    xxlarge: () => css`
        width: 12.5rem;
        height: 12.5rem;
    `,
}

export const LogoImage = styled.div<Partial<LogoProps>>`
    ${({ imgURL, size = 'medium' }) => css`
        background-image: url(${imgURL});
        background-position: center center;
        background-size: cover;
        ${logoImageModifiers[size]};
    `};
`

const logoTextModifiers = {
    small: () => css`
        font-size: 3rem;
        & small {
            font-size: 1.5rem;
        }
    `,
    medium: () => css`
        font-size: 4rem;
        & small {
            font-size: 2rem;
        }
    `,
    large: () => css`
        font-size: 5rem;
        & small {
            font-size: 2.5rem;
        }
    `,
    xlarge: () => css`
        font-size: 6rem;
        & small {
            font-size: 3rem;
        }
    `,
    xxlarge: () => css`
        font-size: 7rem;
        & small {
            font-size: 3.5rem;
        }
    `,
}

export const LogoText = styled.div<Partial<LogoProps>>`
    ${({ theme, size = 'medium' }) => css`
        color: ${theme.colors.primary};
        font-size: 3rem;
        ${logoTextModifiers[size]};

        & small {
            font-size: 1.5rem;
        }
    `};
`
