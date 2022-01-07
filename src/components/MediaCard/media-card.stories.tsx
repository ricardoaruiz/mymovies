import { Story, Meta } from '@storybook/react'
import { MediaCard } from '.'
import { MediaCardProps } from './types'

export default {
    title: 'Components/MediaCard',
    component: MediaCard,
    argTypes: {
        imgURL: {
            control: { type: 'select' },
            options: ['/images/cards/spiderman.jpg', '/images/cards/venon.jpg'],
        },
    },
    args: {
        imgURL: '/images/cards/spiderman.jpg',
        title: 'Home aranha de volta ao lar',
        date: '17 de jul de 2017',
    },
} as Meta<MediaCardProps>

export const Defatult: Story<MediaCardProps> = (props) => (
    <MediaCard {...props} />
)
