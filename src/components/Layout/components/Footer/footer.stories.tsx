import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from './index'

export default {
    title: 'Components/Structural/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta

export const Default: Story = (args) => <Footer {...args} />
