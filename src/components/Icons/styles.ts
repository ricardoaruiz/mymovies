import styled, { css } from 'styled-components'
import { IconProps } from './types'

export const SVG = styled.svg<IconProps>`
    ${({ theme, width, height, stroke, useHover = true }) => css`
        width: ${width || '2rem'};
        height: ${height || '2rem'};
        stroke: ${stroke || theme.colors.white};
        /* fill: ${theme.colors.black}; */
        cursor: pointer;

        ${useHover &&
        css`
            :hover {
                stroke: ${theme.colors.primary};
                /* fill: ${theme.colors.primary}; */
            }
        `}
    `};
`
