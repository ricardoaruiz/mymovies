import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Header from './index'

export default {
    title: 'Components/Structural/Header',
    component: Header,
} as Meta

export const Default: Story = (args) => <Header {...args} />
