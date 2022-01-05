import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HeroProps } from './types'

export const Hero = styled.div<Pick<HeroProps, 'imgURL'>>`
    ${({ theme, imgURL }) => css`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 2rem;

        background: url(${imgURL});
        background-position: center center;
        background-size: cover;
        min-height: 35rem;
        color: ${theme.colors.white};

        ${media.greaterThan('medium')`
            padding: 0 6rem;
        `}

        &::before {
            content: ' ';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: ${theme.layers.base};
        }
    `};
`

export const Title = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.xxlarge};
        margin-bottom: 0.5rem;
        z-index: ${theme.layers.overlay};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.hudge};
        `}
    `};
`

export const SubTitle = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.xlarge};
        z-index: ${theme.layers.overlay};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}
    `};
`
