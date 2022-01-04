import styled, { css } from 'styled-components'

import { AvatarProps } from './types'

const avatarModifiers = {
    small: () => css`
        width: 2.5rem;
        height: 2.5rem;
    `,
    medium: () => css`
        width: 5rem;
        height: 5rem;
    `,
    large: () => css`
        width: 7.5rem;
        height: 7.5rem;
    `,
}

export const Avatar = styled.div<AvatarProps>`
    ${({ imgURL, size = 'medium', onClick }) => css`
        background-image: url(${imgURL});
        background-position: center center;
        background-size: cover;
        border-radius: 50%;
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
        cursor: ${onClick ? 'pointer' : 'default'};
        ${avatarModifiers[size]};
    `};
`
