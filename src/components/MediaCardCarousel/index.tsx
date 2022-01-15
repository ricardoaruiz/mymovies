import React from 'react'

import { MediaCard } from 'components/MediaCard'
import { MediaCardCorouselProps } from './types'

import * as S from './styles'

export const MediaCardCarousel: React.VFC<MediaCardCorouselProps> = ({
    title,
    cards,
    isLoading = false,
    onCardClicked,
    onScrolledEnd,
}) => {
    const carouselRef = React.useRef<HTMLDivElement>(null)
    const [scrollPosition, setScrollPosition] = React.useState(0)
    const [carouselWidth, setCarouselWidth] = React.useState(1)

    const checkHorizontalScrollEnded = React.useCallback(() => {
        carouselRef.current?.addEventListener('scroll', () => {
            if (carouselRef.current) {
                setScrollPosition(
                    carouselRef.current.clientWidth +
                        carouselRef.current.scrollLeft
                )
            }
        })
    }, [])

    React.useEffect(() => {
        if (carouselRef.current) {
            setCarouselWidth(carouselRef.current.scrollWidth)
        }
    }, [cards])

    React.useEffect(() => {
        if (scrollPosition >= carouselWidth) {
            onScrolledEnd && !isLoading && onScrolledEnd()
        }
    }, [
        carouselWidth,
        isLoading,
        onScrolledEnd,
        scrollPosition,
        setScrollPosition,
    ])

    React.useEffect(() => {
        if (onScrolledEnd) {
            carouselRef.current?.addEventListener(
                'scroll',
                checkHorizontalScrollEnded
            )

            return () =>
                // eslint-disable-next-line react-hooks/exhaustive-deps
                carouselRef.current?.removeEventListener(
                    'scroll',
                    checkHorizontalScrollEnded
                )
        }
    }, [checkHorizontalScrollEnded, onScrolledEnd])

    return (
        <S.Wrapper>
            {title && <S.Title>{title}</S.Title>}
            <S.MediaCardCarousel ref={carouselRef}>
                {cards.map((card) => (
                    <MediaCard
                        key={card.id}
                        {...card}
                        onClick={() => onCardClicked(card.id)}
                    />
                ))}
                {isLoading && (
                    <MediaCard
                        key="-1"
                        imgURL="/images/loader.gif"
                        title=""
                        date=""
                    />
                )}
            </S.MediaCardCarousel>
        </S.Wrapper>
    )
}
