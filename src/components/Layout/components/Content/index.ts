import styled, { css } from 'styled-components'

const Content = styled.main`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        padding: 0 1rem;
    `};
`

export default Content
