import { render, screen } from '@testing-library/react'

import Home from './index'

describe('<Home />', () => {
    it('should render the heading', () => {
        render(<Home />)

        expect(
            screen.getByRole('heading', { name: /MyMovies/i })
        ).toBeInTheDocument()
    })
})
