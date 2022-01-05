import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Hero from './'

describe('<Hero />', () => {
    it('should render correctly', () => {
        renderWithTheme(<Hero />)

        const hero = screen.getByLabelText(
            'Bem-vindo(a). Milhões de filmes, séries e pessoas para descobrir. Explore já.'
        )
        expect(hero).toBeInTheDocument()
        expect(hero).not.toHaveStyle({
            background: 'url(/images/hero1-img.jpg)',
        })

        expect(
            screen.getByRole('heading', {
                name: /^bem-vindo\(a\)\.$/i,
            })
        )
        expect(
            screen.getByRole('heading', {
                name: /^milhões de filmes, séries e pessoas para descobrir. explore já.$/i,
            })
        )
        expect(
            screen.getByPlaceholderText(
                /Buscar por um filme, série ou pessoa../i
            )
        ).toBeInTheDocument()
    })

    it('should render with informed image', () => {
        renderWithTheme(<Hero imgURL="/images/hero1-img.jpg" />)

        const hero = screen.getByLabelText(
            'Bem-vindo(a). Milhões de filmes, séries e pessoas para descobrir. Explore já.'
        )
        expect(hero).toBeInTheDocument()
        expect(hero).toHaveStyle({
            background: 'url(/images/hero1-img.jpg)',
        })
    })
})
