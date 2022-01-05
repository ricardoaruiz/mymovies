import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { darken } from 'polished'

export const InputSearchContainer = styled.div`
    ${({ theme }) => css`
        position: relative;
        margin-top: 4rem;
        z-index: ${theme.layers.overlay};
    `};
`

export const InputSearch = styled.input`
    ${({ theme }) => css`
        outline: none;
        border: 1px solid ${theme.colors.gray};
        border-radius: 2.4rem;
        padding: 1.2rem;
        font-size: ${theme.font.sizes.small};
        width: 100%;

        &::placeholder {
            font-size: ${theme.font.sizes.small};
        }

        &:focus {
            border: 1px solid ${theme.colors.primary};
            border-right: none;
            &::placeholder {
                color: ${theme.colors.primary};
            }
        }

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.large};

            &::placeholder {
                font-size: ${theme.font.sizes.large};
            }
        `}
    `};
`

export const ButtonSearch = styled.button`
    ${({ theme }) => css`
        position: absolute;
        right: 0;

        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};

        padding: 1.2rem;
        border: 1px solid ${theme.colors.gray};
        border-left: none;
        border-top-right-radius: 2.4rem;
        border-bottom-right-radius: 2.4rem;
        cursor: pointer;

        &:hover {
            background-color: ${darken(0.1, theme.colors.primary)};
        }

        &:active {
            background-color: ${darken(0.2, theme.colors.primary)};
        }

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.large};
        `}
    `};
`
