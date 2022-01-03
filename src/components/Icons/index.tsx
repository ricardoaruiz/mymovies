import React from 'react'

import { IconProps } from './types'

import * as S from './styles'

export const MenuIcon: React.VFC<IconProps> = (props) => {
    return (
        <S.SVG
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </S.SVG>
    )
}

export const CloseIcon: React.VFC<IconProps> = (props) => {
    return (
        <S.SVG
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
            />
        </S.SVG>
    )
}
