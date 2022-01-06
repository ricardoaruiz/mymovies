import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { ItemMenu } from './types'
import { Menu } from '.'

const menuItems: ItemMenu[] = [
    {
        main: { id: 'movies', label: 'Filmes' },
        subItems: [
            {
                id: 'popular-movies',
                label: 'Filmes Populares',
                href: '/popular-movies',
            },
            {
                id: 'playing-movies',
                label: 'Filmes Em cartaz',
                href: '/playing-movies',
            },
            {
                id: 'upcomming-movies',
                label: 'Filmes Próximas estreias',
                href: '/upcomming-movies',
            },
        ],
    },
    {
        main: { id: 'series', label: 'Séries' },
        subItems: [
            {
                id: 'popular-series',
                label: 'Séries Populares',
                href: '/popular-series',
            },
            {
                id: 'playing-series',
                label: 'Séries Em exibição',
                href: '/playing-series',
            },
            {
                id: 'ontv-series',
                label: 'Séries Na TV',
                href: '/ontv-series',
            },
        ],
    },
    {
        main: { id: 'people', label: 'Pessoas' },
        subItems: [
            {
                id: 'popular-people',
                label: 'Pessoas Populares',
                href: '/popular-people',
            },
        ],
    },
]

describe('<Menu />', () => {
    beforeEach(() => {
        global.innerWidth = 769
    })

    it('should be render correctly desktop', () => {
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

    it('should be render correctly mobile', async () => {
        global.innerWidth = 300

        renderWithTheme(<Menu items={menuItems} />)

        expect(screen.getByLabelText(/menu da aplicação/i)).toBeInTheDocument()

        const sliderMenu = screen.getByLabelText(
            'slider menu, press esc to close'
        )
        expect(sliderMenu).toHaveAttribute('aria-hidden', 'true')

        const openMenuButton = screen.getByLabelText('open menu button')
        act(() => {
            fireEvent.click(openMenuButton)
        })

        const closeMenuButton = await waitFor(() => {
            expect(sliderMenu).toHaveAttribute('aria-hidden', 'false')
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

            return screen.getByLabelText('close menu button')
        })

        act(() => {
            fireEvent.click(closeMenuButton)
        })

        await waitFor(() => {
            expect(sliderMenu).toHaveAttribute('aria-hidden', 'true')
        })
    })

    it('should be show movies options menu when item menu is hovered', async () => {
        renderWithTheme(<Menu items={menuItems} />)

        const moviewItemMenu = screen.getByRole('menuitem', {
            name: /filmes, ver mais/i,
        })
        expect(moviewItemMenu).toBeInTheDocument()

        act(() => {
            fireEvent.mouseOver(moviewItemMenu)
        })

        await waitFor(() => {
            expect(
                screen.getByRole('group', { name: /filmes menu items/i })
            ).toHaveAttribute('aria-hidden', 'false')
            expect(
                screen.getByRole('menuitem', { name: /filmes populares/i })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('menuitem', { name: /filmes em cartaz/i })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('menuitem', {
                    name: /filmes próximas estreias/i,
                })
            ).toBeInTheDocument()

            expect(
                screen.queryByRole('menuitem', {
                    name: /séries menu items/i,
                })
            ).not.toBeInTheDocument()
        })
    })

    it('should be show series options menu when item series is hovered', async () => {
        renderWithTheme(<Menu items={menuItems} />)

        const seriesItemMenu = screen.getByRole('menuitem', {
            name: /séries, ver mais/i,
        })
        expect(seriesItemMenu).toBeInTheDocument()

        act(() => {
            fireEvent.mouseOver(seriesItemMenu)
        })

        await waitFor(() => {
            expect(
                screen.getByRole('group', { name: /séries menu items/i })
            ).toHaveAttribute('aria-hidden', 'false')
            expect(
                screen.getByRole('menuitem', { name: /séries populares/i })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('menuitem', { name: /séries em exibição/i })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('menuitem', {
                    name: /séries na tv/i,
                })
            ).toBeInTheDocument()

            expect(
                screen.queryByRole('menuitem', {
                    name: /filmes próximas estreias/i,
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
                screen.getByRole('group', { name: /pessoas menu items/i })
            ).toHaveAttribute('aria-hidden', 'false')
            expect(
                screen.getByRole('menuitem', { name: /pessoas populares/i })
            ).toBeInTheDocument()

            expect(
                screen.queryByRole('menuitem', {
                    name: /filmes próximas estreias/i,
                })
            ).not.toBeInTheDocument()
        })
    })
})
