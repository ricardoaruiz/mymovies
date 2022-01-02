import { act, fireEvent, screen, waitFor, within } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Menu from '.'

describe('<Menu />', () => {
    it('should be render correctly', () => {
        renderWithTheme(<Menu />)

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

    it('should be show moview options menu when item menu is hovered', async () => {
        renderWithTheme(<Menu />)
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
                    name: /próximas estreias nos cinemas/i,
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
        renderWithTheme(<Menu />)
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
                    name: /próximas estreias nos cinemas/i,
                })
            ).not.toBeInTheDocument()
        })
    })

    it('should be show people options menu when item people is hovered', async () => {
        renderWithTheme(<Menu />)
        const moviewItemMenu = screen.getByRole('menuitem', {
            name: /pessoas, ver mais/i,
        })

        act(() => {
            fireEvent.mouseOver(moviewItemMenu)
        })

        await waitFor(() => {
            expect(
                screen.getByRole('menuitem', {
                    name: /pessoas populares/i,
                })
            ).toBeInTheDocument()
            expect(
                screen.queryByRole('menuitem', {
                    name: /próximas estreias nos cinemas/i,
                })
            ).not.toBeInTheDocument()
        })
    })
})
