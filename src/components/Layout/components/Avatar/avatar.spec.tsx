import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../../../utils/tests/helpers'
import { Avatar } from '.'

describe('<Avatar />', () => {
    it('should be render correctly', () => {
        renderWithTheme(<Avatar imgURL="/images/avatar.jpeg" />)

        expect(
            screen.getByRole('img', {
                name: /avatar image/i,
            })
        ).toBeInTheDocument()
    })

    it('should be render with small size', () => {
        renderWithTheme(<Avatar imgURL="/images/avatar.jpeg" size="small" />)

        expect(
            screen.getByRole('img', {
                name: /avatar image/i,
            })
        ).toHaveStyle({
            width: '2.5rem',
            height: '2.5rem',
        })
    })

    it('should be render with small medium', () => {
        renderWithTheme(<Avatar imgURL="/images/avatar.jpeg" size="medium" />)

        expect(
            screen.getByRole('img', {
                name: /avatar image/i,
            })
        ).toHaveStyle({
            width: '5rem',
            height: '5rem',
        })
    })

    it('should be render with small large', () => {
        renderWithTheme(<Avatar imgURL="/images/avatar.jpeg" size="large" />)

        expect(
            screen.getByRole('img', {
                name: /avatar image/i,
            })
        ).toHaveStyle({
            width: '7.5rem',
            height: '7.5rem',
        })
    })

    it('should be render with cursor default when not pass onClick event', () => {
        renderWithTheme(<Avatar imgURL="/images/avatar.jpeg" size="large" />)

        expect(
            screen.getByRole('img', {
                name: /avatar image/i,
            })
        ).toHaveStyle({
            cursor: 'default',
        })
    })

    it('should be render with cursor pointer when pass onClick event', () => {
        const onClick = jest.fn()
        renderWithTheme(
            <Avatar
                imgURL="/images/avatar.jpeg"
                size="large"
                onClick={onClick}
            />
        )

        expect(
            screen.getByRole('img', {
                name: /avatar image/i,
            })
        ).toHaveStyle({
            cursor: 'pointer',
        })
    })

    it('should be call onClick callback when image whas clicked', () => {
        const onClick = jest.fn()
        renderWithTheme(
            <Avatar
                imgURL="/images/avatar.jpeg"
                size="large"
                onClick={onClick}
            />
        )

        const avatarImage = screen.getByRole('img', {
            name: /avatar image/i,
        })

        fireEvent.click(avatarImage)

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
