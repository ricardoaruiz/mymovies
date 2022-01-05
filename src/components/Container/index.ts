import styled, { css } from 'styled-components'

type ContainerProps = {
    isFullWidthDesktop?: boolean
    isFullWidthMobile?: boolean
}

const Container = styled.main<ContainerProps>`
    ${({ theme, isFullWidthMobile = false, isFullWidthDesktop = false }) => css`
        ${!isFullWidthDesktop &&
        css`
            max-width: ${theme.grid.container};
            margin: 0 auto;
        `}

        ${!isFullWidthMobile &&
        css`
            padding: 0 1rem;
        `};
    `};
`

export default Container
