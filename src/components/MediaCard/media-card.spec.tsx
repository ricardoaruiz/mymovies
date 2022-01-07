import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MediaCard } from '.'

describe('<MediaCard />', () => {
    it('should be render correctly', () => {
        renderWithTheme(
            <MediaCard
                imgURL="/images/cards/spiderman.jpg"
                title="Homem aranha de volta ao lar"
                date="05 de jul de 2017"
            />
        )

        const image = screen.getByRole('img', {
            name: /homem aranha de volta ao lar/i,
        })
        expect(image).toBeInTheDocument()
        expect(image).toHaveStyle(
            'background-image: url(/images/cards/spiderman.jpg)'
        )
        expect(
            screen.getByRole('term', { name: /homem aranha de volta ao lar/i })
        ).toBeInTheDocument()
        expect(
            screen.getByText(/homem aranha de volta ao lar/i)
        ).toBeInTheDocument()
        expect(screen.getByText('05 de jul de 2017')).toBeInTheDocument()
    })

    it('should call onClick callback when title card is clicked', () => {
        const mockedOnClick = jest.fn()
        renderWithTheme(
            <MediaCard
                imgURL="/images/cards/spiderman.jpg"
                title="Homem aranha de volta ao lar"
                date="05 de jul de 2017"
                onClick={mockedOnClick}
            />
        )

        const texts = screen.getByRole('button', {
            name: /homem aranha de volta ao lar/i,
        })
        expect(texts).toBeInTheDocument()
        fireEvent.click(texts)
        expect(mockedOnClick).toHaveBeenCalledTimes(1)
    })

    it('should call onClick callback when press Enter key on title card', () => {
        const mockedOnClick = jest.fn()
        renderWithTheme(
            <MediaCard
                imgURL="/images/cards/spiderman.jpg"
                title="Homem aranha de volta ao lar"
                date="05 de jul de 2017"
                onClick={mockedOnClick}
            />
        )

        const texts = screen.getByRole('button', {
            name: /homem aranha de volta ao lar/i,
        })
        expect(texts).toBeInTheDocument()
        fireEvent.keyDown(texts, { key: 'Enter' })
        expect(mockedOnClick).toHaveBeenCalledTimes(1)
    })

    it('should call onClick callback when press Enter key on title card', () => {
        const mockedOnClick = jest.fn()
        renderWithTheme(
            <MediaCard
                imgURL="/images/cards/spiderman.jpg"
                title="Homem aranha de volta ao lar"
                date="05 de jul de 2017"
                onClick={mockedOnClick}
            />
        )

        const texts = screen.getByRole('button', {
            name: /homem aranha de volta ao lar/i,
        })
        expect(texts).toBeInTheDocument()
        fireEvent.keyDown(texts, { key: ' ' })
        expect(mockedOnClick).toHaveBeenCalledTimes(1)
    })
})
