import { renderWithTheme } from 'utils/tests/helpers'

import Layout from '.'

jest.mock('./components/Header', () => ({
    Header: () => <div data-testid="mocked-header">Header</div>,
}))

jest.mock('./components/Footer', () => ({
    Footer: () => <div data-testid="mocked-header">Header</div>,
}))

describe('<Layout />', () => {
    it('should be render correctly', () => {
        const { container } = renderWithTheme(
            <Layout>
                <div data-testid="main-content">Conteúdo</div>
            </Layout>
        )

        expect(container).toMatchSnapshot()
    })
})
