import styled, { css } from 'styled-components'

import { ContainerProps } from './types'

const Container = styled.main<ContainerProps>`
    ${({
        theme,
        isFullWidthMobile = false,
        isFullWidthDesktop = false,
        mt = '0',
        mb = '0',
    }) => css`
        width: 100%;
        margin-top: ${mt};
        margin-bottom: ${mb};
        margin-left: auto;
        margin-right: auto;

        ${!isFullWidthDesktop &&
        css`
            max-width: ${theme.grid.container};
        `}

        ${!isFullWidthMobile &&
        css`
            padding: 0 1rem;
        `};
    `};
`

export default Container
