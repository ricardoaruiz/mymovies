import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from './index'
import { FooterProps } from './types'

const content = [
    {
        title: 'O Básico',
        items: [
            { text: 'Sobre o MyMovies', href: '/' },
            { text: 'Contate-nos', href: '/' },
        ],
    },
    {
        title: 'Envolva-se',
        items: [
            { text: 'Adicionar um novo filme', href: '/' },
            { text: 'Adicionar uma nova série', href: '/' },
        ],
    },
    {
        title: 'Comunidade',
        items: [
            { text: 'Diretrizes', href: '/' },
            { text: 'Discussões', href: '/' },
        ],
    },
    {
        title: 'Legalidade',
        items: [
            { text: 'Termo de uso', href: '/' },
            { text: 'Política de privacidade', href: '/' },
        ],
    },
]

export default {
    title: 'Components/Structural/Footer',
    component: Footer,
    args: { content },
    parameters: {
        layout: 'fullscreen',
    },
} as Meta

export const Default: Story<FooterProps> = (args) => <Footer {...args} />

export const CustomTextLogo: Story<FooterProps> = (args) => <Footer {...args} />
CustomTextLogo.args = {
    logo: { texts: { first: 'The', second: 'Logo' } },
}

export const ImageLogo: Story<FooterProps> = (args) => <Footer {...args} />
ImageLogo.args = {
    logo: {
        imgURL: '/images/avatar.jpeg',
    },
}
