import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Logo from '.'
import { LogoProps } from './types'

export default {
    title: 'Components/Structural/Logo',
    component: Logo,
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
        },
        imgURL: {
            control: 'select',
            options: ['', '/images/avatar.png', '/images/avatar.jpeg'],
        },
    },
    args: {
        size: 'medium',
        imgURL: '/images/avatar.jpeg',
    },
    parameters: {
        layout: 'centered',
    },
} as Meta

export const Default: Story<LogoProps> = (props) => <Logo {...props} />
