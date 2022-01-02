import { screen } from '@testing-library/react'
import { renderWithTheme } from '../utils/tests/helpers'

import Home from './index'

describe('<Home />', () => {
    it('should render the heading', () => {
        renderWithTheme(<Home />)

        expect(
            screen.getByRole('heading', { name: /MyMovies/i })
        ).toBeInTheDocument()
    })
})
