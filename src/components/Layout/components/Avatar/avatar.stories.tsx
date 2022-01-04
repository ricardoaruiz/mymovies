import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Avatar } from '.'
import { AvatarProps } from './types'

export default {
    title: 'Components/Structural/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
    args: {
        size: 'medium',
        imgURL: '/images/avatar.jpeg',
    },
    parameters: {
        layout: 'fullscreen',
    },
} as Meta

export const Default: Story<AvatarProps> = (props) => <Avatar {...props} />
