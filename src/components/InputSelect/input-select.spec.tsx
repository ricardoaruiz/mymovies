import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { InputSelect } from '.'

const items = [
    { label: 'Item #1', value: 1 },
    { label: 'Item #2', value: 2 },
    { label: 'Item #3', value: 3 },
]

describe('<InputSelect />', () => {
    test('should be render correctly', () => {
        renderWithTheme(
            <InputSelect
                items={items}
                selectedItem={null}
                onChange={jest.fn()}
            />
        )

        expect(
            screen.getByRole('menu', { name: /Selecione um item/i })
        ).toBeInTheDocument()

        expect(screen.queryByRole('group')).not.toBeInTheDocument()
    })

    test('should be render with informed placeholder', () => {
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={jest.fn()}
            />
        )

        expect(
            screen.getByRole('menu', { name: /Selecione um item da lista/i })
        ).toBeInTheDocument()

        expect(screen.queryByRole('group')).not.toBeInTheDocument()
    })

    test('should be show options when select is clicked', () => {
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={jest.fn()}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.click(select)
        expect(screen.queryByRole('group')).toBeInTheDocument()
        expect(screen.queryAllByRole('menuitem')).toHaveLength(3)

        fireEvent.click(select)
        expect(screen.queryByRole('group')).not.toBeInTheDocument()
    })

    test('should be show options when press Enter key on select', () => {
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={jest.fn()}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.keyDown(select, { key: 'Enter' })
        expect(screen.queryByRole('group')).toBeInTheDocument()
        expect(screen.queryAllByRole('menuitem')).toHaveLength(3)

        fireEvent.keyDown(select, { key: 'Enter' })
        expect(screen.queryByRole('group')).not.toBeInTheDocument()
    })

    test('should be show options when press Space key on select', () => {
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={jest.fn()}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.keyDown(select, { key: ' ' })
        expect(screen.queryByRole('group')).toBeInTheDocument()
        expect(screen.queryAllByRole('menuitem')).toHaveLength(3)

        fireEvent.keyDown(select, { key: ' ' })
        expect(screen.queryByRole('group')).not.toBeInTheDocument()
    })

    test('should be hide options when press Escape key on select', () => {
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={jest.fn()}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.keyDown(select, { key: 'Enter' })
        expect(screen.queryByRole('group')).toBeInTheDocument()
        expect(screen.queryAllByRole('menuitem')).toHaveLength(3)

        fireEvent.keyDown(select, { key: 'Escape' })
        expect(screen.queryByRole('group')).not.toBeInTheDocument()
        expect(select).toHaveFocus()
    })

    test('should be call onChange callback when an item is clicked', () => {
        const mockedOnChange = jest.fn()
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={mockedOnChange}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.click(select)
        const firstItem = screen.queryAllByRole('menuitem')[0]
        fireEvent.click(firstItem)
        expect(mockedOnChange).toHaveBeenCalledWith(items[0])
        expect(select).not.toHaveFocus()
    })

    test('should be call onChange callback when press Enter on an item', () => {
        const mockedOnChange = jest.fn()
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={mockedOnChange}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.click(select)
        const firstItem = screen.queryAllByRole('menuitem')[0]
        fireEvent.keyDown(firstItem, { key: 'Enter' })
        expect(mockedOnChange).toHaveBeenCalledWith(items[0])
        expect(select).toHaveFocus()
    })

    test('should be call onChange callback when press Space on an item', () => {
        const mockedOnChange = jest.fn()
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={mockedOnChange}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.click(select)
        const firstItem = screen.queryAllByRole('menuitem')[0]
        fireEvent.keyDown(firstItem, { key: ' ' })
        expect(mockedOnChange).toHaveBeenCalledWith(items[0])
        expect(select).toHaveFocus()
    })

    test('should be hide options when press Escape key on an item', () => {
        const mockedOnChange = jest.fn()
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={mockedOnChange}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.click(select)
        expect(screen.queryByRole('group')).toBeInTheDocument()
        const firstItem = screen.queryAllByRole('menuitem')[0]
        fireEvent.keyDown(firstItem, { key: 'Escape' })
        expect(screen.queryByRole('group')).not.toBeInTheDocument()
        expect(select).toHaveFocus()
    })

    test('should be hide options when click outside select and options', () => {
        const mockedOnChange = jest.fn()
        renderWithTheme(
            <InputSelect
                placeholder="Selecione um item da lista"
                items={items}
                selectedItem={null}
                onChange={mockedOnChange}
            />
        )

        const select = screen.getByRole('menu', {
            name: /Selecione um item da lista/i,
        })

        fireEvent.click(select)
        expect(screen.queryByRole('group')).toBeInTheDocument()
        const selectOverlay = screen.getByRole('region', {
            name: /select overlay/i,
        })
        fireEvent.click(selectOverlay)
        expect(screen.queryByRole('group')).not.toBeInTheDocument()
    })
})
