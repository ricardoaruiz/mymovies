import styled from 'styled-components'
import media from 'styled-media-query'

export const MainContent = styled.div`
    ${media.greaterThan('medium')`
        padding-top: 7rem;
    `}
`
