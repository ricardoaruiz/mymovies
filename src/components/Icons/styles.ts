import styled, { css } from 'styled-components'
import { IconProps } from './types'

export const SVG = styled.svg<IconProps>`
    ${({ theme, width, height, stroke }) => css`
        width: ${width || '2rem'};
        height: ${height || '2rem'};
        stroke: ${stroke || theme.colors.white};
        cursor: pointer;

        :hover {
            stroke: ${theme.colors.primary};
        }
    `};
`
