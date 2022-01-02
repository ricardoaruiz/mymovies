import React from 'react'
import { Content, Footer, Header } from './components'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />

            <Content>{children}</Content>

            <Footer />
        </>
    )
}

export default Layout
