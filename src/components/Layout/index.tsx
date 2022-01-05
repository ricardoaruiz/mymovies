import React from 'react'
import { Footer, Header } from './components'

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

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />

            {children}

            <Footer logo={{ href: '/' }} content={content} />
        </>
    )
}

export default Layout
