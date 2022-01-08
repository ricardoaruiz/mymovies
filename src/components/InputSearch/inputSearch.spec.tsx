import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import InputSearch from '.'

describe('<InputSearch />', () => {
    it('should be render correctly', () => {
        renderWithTheme(<InputSearch onSearch={jest.fn} />)

        expect(screen.getByLabelText('search field')).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /buscar/i })
        ).toBeInTheDocument()
    })

    it('should be send filled search term when search button is clicked', () => {
        const mockedOnSearch = jest.fn()
        renderWithTheme(<InputSearch onSearch={mockedOnSearch} />)

        const searchInput = screen.getByLabelText('search field')
        const searchButton = screen.getByRole('button', { name: /buscar/i })

        fireEvent.change(searchInput, {
            target: { value: 'Informed search term' },
        })
        fireEvent.click(searchButton)

        expect(mockedOnSearch).toHaveBeenCalledWith('Informed search term')
        expect(searchInput).toHaveFocus()
    })

    it('should be send filled search term when press Enter on search field', () => {
        const mockedOnSearch = jest.fn()
        renderWithTheme(<InputSearch onSearch={mockedOnSearch} />)

        const searchInput = screen.getByLabelText('search field')

        fireEvent.change(searchInput, {
            target: { value: 'Informed search term' },
        })

        fireEvent.keyDown(searchInput, {
            key: 'Enter',
        })

        expect(mockedOnSearch).toHaveBeenCalledWith('Informed search term')
    })

    it('should be clean search field when press Escape on it', () => {
        renderWithTheme(<InputSearch onSearch={jest.fn()} />)

        const searchInput = screen.getByLabelText('search field')
        expect(searchInput).not.toHaveValue('Informed search term')

        fireEvent.change(searchInput, {
            target: { value: 'Informed search term' },
        })
        expect(searchInput).toHaveValue('Informed search term')

        fireEvent.keyDown(searchInput, {
            key: 'Escape',
        })
        expect(searchInput).not.toHaveValue('Informed search term')
    })
})
