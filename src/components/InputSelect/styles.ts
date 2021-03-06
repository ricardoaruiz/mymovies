import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
`

export const Select = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        border: 1px solid ${theme.colors.gray};
        border-radius: 2.4rem;
        outline: none;

        & svg {
            fill: transparent;
            stroke: ${theme.colors.black};
        }

        &:focus {
            border: 1px solid ${theme.colors.primary};
            color: ${theme.colors.primary};

            & svg {
                fill: transparent;
                stroke: ${theme.colors.primary};
            }
        }
        &:hover {
            border: 1px solid ${theme.colors.primary};
            color: ${theme.colors.primary};

            & svg {
                fill: transparent;
                stroke: ${theme.colors.primary};
            }
        }
    `};
`

type ItemsProps = {
    isOpen?: boolean
}

const itemsModifiers = {
    open: () => css`
        visibility: visible;
        opacity: 1;
    `,
    close: () => css`
        visibility: hidden;
        opacity: 0;
    `,
}

export const Items = styled.div<ItemsProps>`
    ${({ theme, isOpen = false }) => css`
        position: absolute;
        margin-top: 0.5rem;
        padding: 1rem;
        border: 1px solid ${theme.colors.lightGray};
        border-radius: 2.4rem;
        width: 100%;
        transition: all 0.3s;
        z-index: ${theme.layers.menu};
        background-color: ${theme.colors.white};
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);

        ${isOpen ? itemsModifiers.open : itemsModifiers.close};
    `};
`

type ItemsOverlayProps = {
    isOpen?: boolean
}

export const ItemsOverlay = styled.div<ItemsOverlayProps>`
    ${({ theme, isOpen }) => css`
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: ${theme.layers.base};
        background-color: transparent;

        display: ${isOpen ? 'block' : 'none'};
    `};
`

type ItemProps = {
    useHover?: boolean
    padding?: string
}

export const Item = styled.div<ItemProps>`
    ${({ theme, useHover = true, padding = '1rem 0.8rem' }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${padding};
        border-radius: 2rem;
        cursor: pointer;

        ${useHover &&
        css`
            &:hover {
                background-color: ${theme.colors.secondary};
                color: ${theme.colors.white};
            }
        `}
    `};
`
