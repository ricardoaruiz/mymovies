import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Layout from '.'

export default {
    title: 'Components/Structural/Layout',
    component: Layout,
} as Meta

export const Default: Story = () => (
    <Layout>
        <h1>Conteúdo principal</h1>
    </Layout>
)
