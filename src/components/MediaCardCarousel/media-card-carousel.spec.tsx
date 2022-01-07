import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MediaCardCarousel } from '.'

const getCards = (cardQuantity = 5) => {
    return Array.from({ length: cardQuantity }, (_, i) => {
        return {
            id: i,
            imgURL:
                i % 2 === 0
                    ? '/images/cards/spiderman.jpg'
                    : '/images/cards/venon.jpg',
            title:
                i % 2 === 0
                    ? `Home aranha de volta ao lar${i}`
                    : `Venon: Tempo de carnificina${i}`,
            date: i % 2 === 0 ? '17 de jul de 2017' : '21 de ago de 2021',
        }
    })
}

describe('<MediaCardCarousel />', () => {
    test('should be render correctly without', () => {
        renderWithTheme(
            <MediaCardCarousel cards={[]} onCardClicked={jest.fn()} />
        )

        expect(screen.queryByRole('heading')).not.toBeInTheDocument()
        expect(screen.queryAllByRole('img')).toHaveLength(0)
    })

    test('should be render correctly with cards', () => {
        renderWithTheme(
            <MediaCardCarousel cards={getCards(2)} onCardClicked={jest.fn()} />
        )

        expect(screen.queryByRole('heading')).not.toBeInTheDocument()
        expect(screen.queryAllByRole('img')).toHaveLength(2)
    })

    test('should be render correctly with cards and title', () => {
        renderWithTheme(
            <MediaCardCarousel
                title="Filmes em cartaz"
                cards={getCards(2)}
                onCardClicked={jest.fn()}
            />
        )

        expect(
            screen.queryByRole('heading', { name: /^filmes em cartaz$/i })
        ).toBeInTheDocument()
        expect(screen.queryAllByRole('img')).toHaveLength(2)
    })

    test('should be call onCardClicked callback when a card is clicked', () => {
        const mockedOnCardClicked = jest.fn()
        renderWithTheme(
            <MediaCardCarousel
                title="Filmes em cartaz"
                cards={getCards(2)}
                onCardClicked={mockedOnCardClicked}
            />
        )

        expect(
            screen.queryByRole('heading', { name: /^filmes em cartaz$/i })
        ).toBeInTheDocument()

        const firstCard = screen.getByRole('button', {
            name: /^Home aranha de volta ao lar0$/i,
        })
        fireEvent.click(firstCard)
        expect(mockedOnCardClicked).toHaveBeenCalledTimes(1)
    })

    test('should be call onCardClicked callback when press Enter key on card text', () => {
        const mockedOnCardClicked = jest.fn()
        renderWithTheme(
            <MediaCardCarousel
                title="Filmes em cartaz"
                cards={getCards(2)}
                onCardClicked={mockedOnCardClicked}
            />
        )

        expect(
            screen.queryByRole('heading', { name: /^filmes em cartaz$/i })
        ).toBeInTheDocument()

        const firstCard = screen.getByRole('button', {
            name: /^Home aranha de volta ao lar0$/i,
        })
        fireEvent.keyDown(firstCard, { key: 'Enter' })
        expect(mockedOnCardClicked).toHaveBeenCalledTimes(1)
    })

    test('should be call onCardClicked callback when press Space key on card text', () => {
        const mockedOnCardClicked = jest.fn()
        renderWithTheme(
            <MediaCardCarousel
                title="Filmes em cartaz"
                cards={getCards(2)}
                onCardClicked={mockedOnCardClicked}
            />
        )

        expect(
            screen.queryByRole('heading', { name: /^filmes em cartaz$/i })
        ).toBeInTheDocument()

        const firstCard = screen.getByRole('button', {
            name: /^Home aranha de volta ao lar0$/i,
        })
        fireEvent.keyDown(firstCard, { key: ' ' })
        expect(mockedOnCardClicked).toHaveBeenCalledTimes(1)
    })
})
