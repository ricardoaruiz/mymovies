import { Story, Meta } from '@storybook/react'
import Hero from '.'
import { HeroProps } from './types'

export default {
    title: 'Components/Hero',
    component: Hero,
    args: {
        title: 'Bem-vindo(a).',
        subtitle:
            'Milhões de filmes, séries e pessoas para descobrir. Explore já.',
        imgURL: '/images/hero1-img.jpg',
        onSearch: (searchTerm: string) =>
            alert(`The search terms is ${searchTerm}`),
    },
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<HeroProps>

export const Default: Story<HeroProps> = (props) => <Hero {...props} />
