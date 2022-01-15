import { MediaCardProps } from 'components/MediaCard/types'

export type MediaCardCorouselProps = {
    title?: string
    cards: Card[]
    isLoading?: boolean
    onCardClicked: (id: string | number) => void
    onScrolledEnd?: () => void
}

export type Card = Omit<MediaCardProps, 'onClick'> & {
    id: string | number
}
