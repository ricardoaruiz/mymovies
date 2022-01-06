import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Footer } from '.'

const content = [
    {
        title: 'O Básico',
        items: [
            { text: 'Sobre o MyMovies', href: '/about' },
            { text: 'Contate-nos', href: '/contact' },
        ],
    },
    {
        title: 'Envolva-se',
        items: [
            { text: 'Adicionar um novo filme', href: '/' },
            { text: 'Adicionar uma nova série', href: '/' },
        ],
    },
]

const mockedPush = jest.fn()
jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: mockedPush,
        }
    },
}))

describe('<Footer />', () => {
    beforeEach(() => {
        mockedPush.mockClear()
    })

    it('should be render correctly', () => {
        renderWithTheme(<Footer />)

        expect(screen.getByLabelText('logo text')).toBeInTheDocument()
        expect(screen.getByText('My')).toBeInTheDocument()
        expect(screen.getByText('Movies')).toBeInTheDocument()
        expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
    })

    it('should be render with custom logo text', () => {
        renderWithTheme(
            <Footer logo={{ texts: { first: 'The', second: 'Logo' } }} />
        )

        expect(screen.getByLabelText('logo text')).toBeInTheDocument()
        expect(screen.getByText('The')).toBeInTheDocument()
        expect(screen.getByText('Logo')).toBeInTheDocument()
        expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
    })

    it('should be render with logo image', () => {
        renderWithTheme(<Footer logo={{ imgURL: '/images/avatar.jpeg' }} />)
        expect(screen.getByLabelText('logo image')).toBeInTheDocument()
    })

    it('should be render with content', () => {
        renderWithTheme(<Footer content={content} />)

        expect(screen.getByText('My')).toBeInTheDocument()
        expect(screen.getByText('Movies')).toBeInTheDocument()
        expect(
            screen.getByRole('listitem', { name: /o básico list item/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('item', { name: /o básico, sobre o mymovies/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('item', { name: /o básico, contate-nos/i })
        ).toBeInTheDocument()

        expect(
            screen.getByRole('listitem', { name: /envolva-se list item/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('item', { name: /adicionar um novo filme/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('item', { name: /adicionar uma nova série/i })
        ).toBeInTheDocument()
    })

    it('should be navigate when an item is clicked', () => {
        renderWithTheme(<Footer content={content} />)

        const aboutMovieItem = screen.getByRole('item', {
            name: /o básico, sobre o mymovies/i,
        })

        fireEvent.click(aboutMovieItem)
        expect(mockedPush).toHaveBeenCalledWith('/about')

        const contactItem = screen.getByRole('item', {
            name: /o básico, contate-nos/i,
        })

        fireEvent.click(contactItem)
        expect(mockedPush).toHaveBeenCalledWith('/contact')
    })

    it('should be navigate when is pressed Enter key on item', () => {
        renderWithTheme(<Footer content={content} />)

        const aboutMovieItem = screen.getByRole('item', {
            name: /o básico, sobre o mymovies/i,
        })

        fireEvent.keyDown(aboutMovieItem, {
            key: 'Enter',
        })
        expect(mockedPush).toHaveBeenCalledWith('/about')

        const contactItem = screen.getByRole('item', {
            name: /o básico, contate-nos/i,
        })

        fireEvent.keyDown(contactItem, {
            key: 'Enter',
        })
        expect(mockedPush).toHaveBeenCalledWith('/contact')
    })

    it('should be navigate when is pressed Space key on item', () => {
        renderWithTheme(<Footer content={content} />)

        const aboutMovieItem = screen.getByRole('item', {
            name: /o básico, sobre o mymovies/i,
        })

        fireEvent.keyDown(aboutMovieItem, {
            key: ' ',
        })
        expect(mockedPush).toHaveBeenCalledWith('/about')

        const contactItem = screen.getByRole('item', {
            name: /o básico, contate-nos/i,
        })

        fireEvent.keyDown(contactItem, {
            key: ' ',
        })
        expect(mockedPush).toHaveBeenCalledWith('/contact')
    })
})
