import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Hero from './'

describe('<Hero />', () => {
    it('should render correctly', () => {
        renderWithTheme(<Hero />)

        const hero = screen.getByLabelText('hero')
        expect(hero).toBeInTheDocument()
        expect(hero).not.toHaveStyle({
            background: 'url(/images/hero1-img.jpg)',
        })
        const headers = screen.queryAllByRole('heading')
        expect(headers[0]).toHaveTextContent('')
        expect(headers[1]).toHaveTextContent('')
        expect(
            screen.queryByPlaceholderText(/digite sua busca aqui/i)
        ).not.toBeInTheDocument()
    })

    it('should render with informed image', () => {
        renderWithTheme(<Hero imgURL="/images/hero1-img.jpg" />)

        const hero = screen.getByLabelText('hero')
        expect(hero).toBeInTheDocument()
        expect(hero).toHaveStyle({
            background: 'url(/images/hero1-img.jpg)',
        })
        expect(
            screen.queryByPlaceholderText(/digite sua busca aqui/i)
        ).not.toBeInTheDocument()
    })

    it('should render correctly with informed title', () => {
        renderWithTheme(<Hero title="Bem vindo" />)

        const hero = screen.getByLabelText(/bem vindo/i)
        expect(hero).toBeInTheDocument()
        const headers = screen.queryAllByRole('heading')
        expect(headers[0]).toHaveTextContent(/bem vindo/i)
        expect(headers[1]).toHaveTextContent('')
        expect(
            screen.queryByPlaceholderText(/digite sua busca aqui/i)
        ).not.toBeInTheDocument()
    })

    it('should render correctly with informed subtitle', () => {
        renderWithTheme(<Hero subtitle="Milhões de files e séries" />)

        const hero = screen.getByLabelText(/milhões de files e séries/i)
        expect(hero).toBeInTheDocument()
        const headers = screen.queryAllByRole('heading')
        expect(headers[0]).toHaveTextContent('')
        expect(headers[1]).toHaveTextContent(/milhões de files e séries/i)
        expect(
            screen.queryByPlaceholderText(/digite sua busca aqui/i)
        ).not.toBeInTheDocument()
    })

    it('should render correctly with informed title and subtitle', () => {
        renderWithTheme(
            <Hero title="Bem vindo" subtitle="Milhões de files e séries" />
        )

        const hero = screen.getByLabelText(
            /bem vindo milhões de files e séries/i
        )
        expect(hero).toBeInTheDocument()
        const headers = screen.queryAllByRole('heading')
        expect(headers[0]).toHaveTextContent(/bem vindo/i)
        expect(headers[1]).toHaveTextContent(/milhões de files e séries/i)
        expect(
            screen.queryByPlaceholderText(/digite sua busca aqui/i)
        ).not.toBeInTheDocument()
    })

    it('should render correctly with search field', () => {
        renderWithTheme(
            <Hero
                title="Bem vindo"
                subtitle="Milhões de files e séries"
                onSearch={jest.fn()}
            />
        )

        const hero = screen.getByLabelText(
            /bem vindo milhões de files e séries/i
        )
        expect(hero).toBeInTheDocument()
        const headers = screen.queryAllByRole('heading')
        expect(headers[0]).toHaveTextContent(/bem vindo/i)
        expect(headers[1]).toHaveTextContent(/milhões de files e séries/i)
        expect(
            screen.getByPlaceholderText(/digite sua busca aqui/i)
        ).toBeInTheDocument()
    })

    it('should render correctly with search field with custom placeholder', () => {
        renderWithTheme(
            <Hero
                title="Bem vindo"
                subtitle="Milhões de files e séries"
                onSearch={jest.fn()}
                searchFieldPlaceholder="Faça sua busca aqui!"
            />
        )

        const hero = screen.getByLabelText(
            /bem vindo milhões de files e séries/i
        )
        expect(hero).toBeInTheDocument()
        const headers = screen.queryAllByRole('heading')
        expect(headers[0]).toHaveTextContent(/bem vindo/i)
        expect(headers[1]).toHaveTextContent(/milhões de files e séries/i)
        expect(
            screen.getByPlaceholderText(/faça sua busca aqui!/i)
        ).toBeInTheDocument()
    })

    it('should render call onSearch callback when search is performed with search button click', () => {
        const mockedOnSearch = jest.fn()
        renderWithTheme(
            <Hero
                title="Bem vindo"
                subtitle="Milhões de files e séries"
                onSearch={mockedOnSearch}
                searchFieldPlaceholder="Faça sua busca aqui!"
            />
        )

        const inputSearch = screen.getByPlaceholderText(/faça sua busca aqui!/i)
        fireEvent.change(inputSearch, {
            target: { value: 'back to the future' },
        })

        fireEvent.click(screen.getByRole('button', { name: /buscar/i }))
        expect(mockedOnSearch).toBeCalledWith('back to the future')
    })

    it('should render call onSearch callback when search is performed with Enter on search field', () => {
        const mockedOnSearch = jest.fn()
        renderWithTheme(
            <Hero
                title="Bem vindo"
                subtitle="Milhões de files e séries"
                onSearch={mockedOnSearch}
                searchFieldPlaceholder="Faça sua busca aqui!"
            />
        )

        const inputSearch = screen.getByPlaceholderText(/faça sua busca aqui!/i)
        fireEvent.change(inputSearch, {
            target: { value: 'back to the future' },
        })

        fireEvent.keyDown(inputSearch, {
            key: 'Enter',
        })
        expect(mockedOnSearch).toBeCalledWith('back to the future')
    })
})
