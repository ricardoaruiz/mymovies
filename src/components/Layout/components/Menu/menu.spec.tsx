import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { ItemMenu } from './types'
import Menu from '.'

const menuItems: ItemMenu[] = [
    {
        main: { id: 'movies', label: 'Filmes' },
        subItems: [
            {
                id: 'popular-movies',
                label: 'Populares',
                href: '/popular-movies',
            },
            {
                id: 'playing-movies',
                label: 'Em cartaz',
                href: '/playing-movies',
            },
            {
                id: 'upcomming-movies',
                label: 'Próximas estreias',
                href: '/upcomming-movies',
            },
        ],
    },
    {
        main: { id: 'series', label: 'Séries' },
        subItems: [
            {
                id: 'popular-series',
                label: 'Populares',
                href: '/popular-series',
            },
            {
                id: 'playing-series',
                label: 'Em exibição',
                href: '/playing-series',
            },
            {
                id: 'ontv-series',
                label: 'Na TV',
                href: '/ontv-series',
            },
        ],
    },
    {
        main: { id: 'people', label: 'Pessoas' },
        subItems: [
            {
                id: 'popular-people',
                label: 'Populares',
                href: '/popular-people',
            },
        ],
    },
]

describe('<Menu />', () => {
    it('should be render correctly', () => {
        renderWithTheme(<Menu items={menuItems} />)

        expect(screen.getByLabelText(/menu da aplicação/i)).toBeInTheDocument()
        expect(
            screen.getByRole('menuitem', {
                name: /filmes, ver mais/i,
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('menuitem', {
                name: /séries, ver mais/i,
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('menuitem', {
                name: /pessoas, ver mais/i,
            })
        ).toBeInTheDocument()
    })

    it('should be show movies options menu when item menu is hovered', async () => {
        renderWithTheme(<Menu items={menuItems} />)
        const moviewItemMenu = screen.getByRole('menuitem', {
            name: /filmes, ver mais/i,
        })

        act(() => {
            fireEvent.mouseOver(moviewItemMenu)
        })

        await waitFor(() => {
            expect(
                screen.getByRole('menuitem', {
                    name: /populares/i,
                })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('menuitem', {
                    name: /em cartaz/i,
                })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('menuitem', {
                    name: /próximas estreias/i,
                })
            ).toBeInTheDocument()
            expect(
                screen.queryByRole('menuitem', {
                    name: /na tv/i,
                })
            ).not.toBeInTheDocument()
        })
    })

    it('should be show series options menu when item series is hovered', async () => {
        renderWithTheme(<Menu items={menuItems} />)
        const moviewItemMenu = screen.getByRole('menuitem', {
            name: /séries, ver mais/i,
        })

        act(() => {
            fireEvent.mouseOver(moviewItemMenu)
        })

        await waitFor(() => {
            expect(
                screen.getByRole('menuitem', {
                    name: /populares/i,
                })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('menuitem', {
                    name: /em exibição/i,
                })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('menuitem', {
                    name: /na tv/i,
                })
            ).toBeInTheDocument()
            expect(
                screen.queryByRole('menuitem', {
                    name: /próximas estreias/i,
                })
            ).not.toBeInTheDocument()
        })
    })

    it('should be show people options menu when item people is hovered', async () => {
        renderWithTheme(<Menu items={menuItems} />)
        const moviewItemMenu = screen.getByRole('menuitem', {
            name: /pessoas, ver mais/i,
        })

        act(() => {
            fireEvent.mouseOver(moviewItemMenu)
        })

        await waitFor(() => {
            expect(
                screen.getByRole('menuitem', {
                    name: /populares/i,
                })
            ).toBeInTheDocument()
            expect(
                screen.queryByRole('menuitem', {
                    name: /próximas estreias/i,
                })
            ).not.toBeInTheDocument()
        })
    })
})
