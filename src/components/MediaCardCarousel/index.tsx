import React from 'react'

import { MediaCard } from 'components/MediaCard'
import { MediaCardCorouselProps } from './types'

import * as S from './styles'

export const MediaCardCarousel: React.VFC<MediaCardCorouselProps> = ({
    title,
    cards,
    onCardClicked,
}) => {
    return (
        <S.Wrapper>
            {title && <S.Title>{title}</S.Title>}
            <S.MediaCardCarousel>
                {cards.map((card) => (
                    <MediaCard
                        key={card.id}
                        {...card}
                        onClick={() => onCardClicked(card.id)}
                    />
                ))}
            </S.MediaCardCarousel>
        </S.Wrapper>
    )
}
