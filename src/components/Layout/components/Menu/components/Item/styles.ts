import styled, { css } from 'styled-components'

export const ItemContainer = styled.div`
    ${({ theme }) => css`
        position: relative;
        display: block;
        font-size: ${theme.font.sizes.xlarge};
        margin: 0 0.75rem;
        cursor: pointer;
        color: ${theme.colors.white};
        padding: 0.5rem 1rem;

        &:hover {
            color: ${theme.colors.primary};
        }
    `};
`

export const Item = styled.a`
    color: inherit;
    text-decoration: none;
`

// DropdownItems
type DropDownItemsProps = {
    show: boolean
}

const dropDownItemsModifiers = {
    visible: () => css`
        visibility: visible;
        opacity: 1;
    `,
    invisible: () => css`
        visibility: hidden;
        opacity: 0;
    `,
}

export const DropDownItems = styled.div<DropDownItemsProps>`
    ${({ theme, show = false }) => css`
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: ${theme.layers.menu};

        background-color: #032541;
        border: 1px solid ${theme.colors.white};
        border-radius: 5px;
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);

        top: 40px;
        left: -2px;
        padding: 10px;
        min-width: max-content;

        ${show
            ? dropDownItemsModifiers.visible()
            : dropDownItemsModifiers.invisible()}
    `};
`
