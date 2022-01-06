import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../../../utils/tests/helpers'
import { Logo } from '.'

const mockedPush = jest.fn()
jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: mockedPush,
        }
    },
}))

const logoTextColor = '#F231A5'

describe('<Logo />', () => {
    beforeEach(() => {
        mockedPush.mockClear()
    })

    it('should be render correctly', () => {
        renderWithTheme(<Logo />)

        const logo = screen.getByRole('img', { name: 'logo' })
        expect(logo).toBeInTheDocument()
        const logoText = screen.getByRole('img', { name: 'logo text' })
        expect(logoText).toBeInTheDocument()
        expect(screen.getByText(/my/i)).toBeInTheDocument()
        expect(screen.getByText(/movies/i)).toBeInTheDocument()
        expect(logo).toHaveStyle({
            cursor: 'default',
        })
    })

    it('should be route when href was informed and click on text logo', () => {
        renderWithTheme(<Logo href="/home" />)

        const logo = screen.getByRole('img', { name: 'logo' })
        expect(logo).toHaveStyle({
            cursor: 'pointer',
        })
        fireEvent.click(logo)
        expect(mockedPush).toHaveBeenCalledWith('/home')
    })

    it('should be route when href was informed and press Enter key on text logo', () => {
        renderWithTheme(<Logo href="/home" />)

        const logo = screen.getByRole('img', { name: 'logo' })
        expect(logo).toHaveStyle({
            cursor: 'pointer',
        })
        fireEvent.focusIn(logo)
        fireEvent.keyDown(logo, {
            key: 'Enter',
        })
        expect(mockedPush).toHaveBeenCalledWith('/home')
    })

    it('should be route when href was informed and press Space key on text logo', () => {
        renderWithTheme(<Logo href="/home" />)

        const logo = screen.getByRole('img', { name: 'logo' })
        expect(logo).toHaveStyle({
            cursor: 'pointer',
        })
        fireEvent.focusIn(logo)
        fireEvent.keyDown(logo, {
            key: ' ',
        })
        expect(mockedPush).toHaveBeenCalledWith('/home')
    })

    it('should be render with informed texts', () => {
        renderWithTheme(<Logo texts={{ first: 'First', second: 'Second' }} />)

        expect(screen.getByText(/first/i)).toBeInTheDocument()
        expect(screen.getByText(/second/i)).toBeInTheDocument()
    })

    it('should be render small text logo', () => {
        renderWithTheme(<Logo size="small" />)

        const logoText = screen.getByRole('img', { name: 'logo text' })
        expect(logoText).toHaveStyle({
            color: logoTextColor,
            'font-size': '3rem',
        })
        expect(logoText.lastChild).toHaveStyle({
            'font-size': '1.5rem',
        })
    })

    it('should be render medium text logo', () => {
        renderWithTheme(<Logo size="medium" />)

        const logoText = screen.getByRole('img', { name: 'logo text' })
        expect(logoText).toHaveStyle({
            color: logoTextColor,
            'font-size': '4rem',
        })
        expect(logoText.lastChild).toHaveStyle({
            'font-size': '2rem',
        })
    })

    it('should be render large text logo', () => {
        renderWithTheme(<Logo size="large" />)

        const logo = screen.getByRole('img', { name: 'logo text' })
        expect(logo).toHaveStyle({
            color: logoTextColor,
            'font-size': '5rem',
        })
        expect(logo.lastChild).toHaveStyle({
            'font-size': '2.5rem',
        })
    })

    it('should be render xlarge text logo', () => {
        renderWithTheme(<Logo size="xlarge" />)

        const logoText = screen.getByRole('img', { name: 'logo text' })
        expect(logoText).toHaveStyle({
            color: logoTextColor,
            'font-size': '6rem',
        })
        expect(logoText.lastChild).toHaveStyle({
            'font-size': '3rem',
        })
    })

    it('should be render xxlarge text logo', () => {
        renderWithTheme(<Logo size="xxlarge" />)

        const logoText = screen.getByRole('img', { name: 'logo text' })
        expect(logoText).toHaveStyle({
            color: logoTextColor,
            'font-size': '7rem',
        })
        expect(logoText.lastChild).toHaveStyle({
            'font-size': '3.5rem',
        })
    })

    it('should be render with informed image', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} />)

        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toBeInTheDocument()
    })

    it('should be route when href was informed and click on image logo', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} href="/movies" />)

        const logo = screen.getByRole('img', { name: 'logo' })
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveStyle({
            cursor: 'pointer',
        })
        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toBeInTheDocument()

        fireEvent.click(logoImage)
        expect(mockedPush).toHaveBeenCalledWith('/movies')
    })

    it('should be route when href was informed and press Enter key on image logo', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} href="/movies" />)

        const logo = screen.getByRole('img', { name: 'logo' })
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveStyle({
            cursor: 'pointer',
        })
        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toBeInTheDocument()

        fireEvent.focusIn(logoImage)
        fireEvent.keyDown(logoImage, {
            key: 'Enter',
        })
        expect(mockedPush).toHaveBeenCalledWith('/movies')
    })

    it('should be route when href was informed and press Space key on image logo', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} href="/movies" />)

        const logo = screen.getByRole('img', { name: 'logo' })
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveStyle({
            cursor: 'pointer',
        })
        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toBeInTheDocument()

        fireEvent.focusIn(logoImage)
        fireEvent.keyDown(logoImage, {
            key: ' ',
        })
        expect(mockedPush).toHaveBeenCalledWith('/movies')
    })

    it('should be render small image logo', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} size="small" />)

        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toHaveStyle({
            width: '2.5rem',
            height: '2.5rem',
        })
    })

    it('should be render medium image logo', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} size="medium" />)

        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toHaveStyle({
            width: '5rem',
            height: '5rem',
        })
    })

    it('should be render large image logo', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} size="large" />)

        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toHaveStyle({
            width: '7.5rem',
            height: '7.5rem',
        })
    })

    it('should be render xlarge image logo', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} size="xlarge" />)

        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toHaveStyle({
            width: '10rem',
            height: '10rem',
        })
    })

    it('should be render xxlarge image logo', () => {
        const imgURL = '/images/avatar.jpeg'
        renderWithTheme(<Logo imgURL={imgURL} size="xxlarge" />)

        const logoImage = screen.getByRole('img', { name: 'logo image' })
        expect(logoImage).toHaveStyle({
            width: '12.5rem',
            height: '12.5rem',
        })
    })
})
