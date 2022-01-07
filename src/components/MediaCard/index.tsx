import React from 'react'

import { MediaCardProps } from './types'

import * as S from './styles'

export const MediaCard: React.VFC<MediaCardProps> = ({
    imgURL,
    title,
    date,
    onClick,
}) => {
    /**
     *
     */
    const handleKeydown = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                onClick && onClick()
            }
        },
        [onClick]
    )

    return (
        <S.MediaCard>
            <S.MediaImage
                imgURL={imgURL}
                role="img"
                aria-label={title}
                tabIndex={-1}
            />

            <S.InfoContainer
                role={onClick ? 'button' : 'term'}
                aria-label={title}
                onClick={onClick}
                onKeyDown={handleKeydown}
                tabIndex={1}
            >
                <S.Title>{title}</S.Title>
                <S.Date>{date}</S.Date>
            </S.InfoContainer>
        </S.MediaCard>
    )
}
