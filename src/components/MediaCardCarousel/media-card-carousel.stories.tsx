import { Story, Meta } from '@storybook/react'
import { MediaCardCarousel } from '.'
import { MediaCardCorouselProps } from './types'

const getCards = (cardQuantity = 10) => {
    return Array.from({ length: cardQuantity }, (_, i) => {
        return {
            id: i,
            imgURL:
                i % 2 === 0
                    ? '/images/cards/spiderman.jpg'
                    : '/images/cards/venon.jpg',
            title:
                i % 2 === 0
                    ? 'Home aranha de volta ao lar'
                    : 'Venon: Tempo de carnificina',
            date: i % 2 === 0 ? '17 de jul de 2017' : '21 de ago de 2021',
        }
    })
}

export default {
    title: 'Components/MediaCardCarousel',
    component: MediaCardCarousel,
    args: {
        title: 'Filmes em cartaz',
        cards: getCards(),
    },
} as Meta<MediaCardCorouselProps>

export const Defatult: Story<MediaCardCorouselProps> = (props) => (
    <MediaCardCarousel {...props} />
)
