import { MediaCard } from '../MediaCard/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.xxlarge};
        color: ${theme.colors.secondary};
    `};
`

export const MediaCardCarousel = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: nowrap;
        gap: 2rem;
        margin: 0 auto;
        overflow: auto;
        padding: 2rem 0;

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: ${theme.colors.secondary};
        }

        ${MediaCard} {
            flex-grow: 0;
            flex-shrink: 0;
        }
    `};
`
