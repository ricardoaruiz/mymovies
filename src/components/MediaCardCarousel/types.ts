import { MediaCardProps } from 'components/MediaCard/types'

export type MediaCardCorouselProps = {
    title?: string
    cards: Card[]
    onCardClicked: (id: string | number) => void
}

type Card = Omit<MediaCardProps, 'onClick'> & {
    id: string | number
}
