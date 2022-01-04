import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const ItemContainer = styled.div`
    ${({ theme }) => css`
        position: relative;
        display: flex;
        align-items: center;
        align-self: stretch;
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
    font-size: 1.8rem;

    ${media.greaterThan('medium')`
        font-size: 2rem;
    `}
`

// DropdownItems
export const DropDownItemsContainer = styled.div<{ isMobile: boolean }>`
    ${({ isMobile }) => css`
        ${isMobile &&
        css`
            display: flex;
            flex-direction: column;
        `}
    `};
`

type DropDownItemsProps = {
    show: boolean
    isMobile: boolean
}

const dropDownItemsModifiers = {
    visible: (isMobile = false) => css`
        ${isMobile &&
        css`
            height: max-content;
            visibility: visible;
            opacity: 1;
        `}
        ${!isMobile &&
        css`
            visibility: visible;
            opacity: 1;
        `}
    `,
    invisible: (isMobile = false) => css`
        ${isMobile &&
        css`
            height: 0;
            visibility: hidden;
            opacity: 0;
        `}
        ${!isMobile &&
        css`
            visibility: hidden;
            opacity: 0;
        `}
    `,
    mobile: () => css`
        position: relative;
        width: auto;
        transition: opacity 0.6s;
        padding: 0.5rem;
    `,
    desktop: (theme: DefaultTheme) => css`
        position: absolute;
        top: 40px;
        left: 5px;
        border: 1px solid ${theme.colors.white};
        border-radius: 5px;
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
        width: max-content;
        transition: opacity 0.4s;
        padding: 1rem;
    `,
}

export const DropDownItems = styled.div<DropDownItemsProps>`
    ${({ theme, show = false, isMobile = true }) => css`
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.secondary};
        z-index: ${theme.layers.menu};

        ${isMobile
            ? dropDownItemsModifiers.mobile()
            : dropDownItemsModifiers.desktop(theme)};

        ${show
            ? dropDownItemsModifiers.visible(isMobile)
            : dropDownItemsModifiers.invisible(isMobile)}
    `};
`
