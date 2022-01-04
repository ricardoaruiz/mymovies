import React from 'react'

import * as S from './styles'
import { AvatarProps } from './types'

export const Avatar: React.FC<AvatarProps> = ({
    imgURL,
    size = 'medium',
    onClick,
}) => {
    return (
        <S.Avatar
            imgURL={imgURL}
            size={size}
            onClick={onClick}
            aria-label="avatar image"
            role="img"
        />
    )
}
