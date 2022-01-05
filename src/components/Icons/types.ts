import React from 'react'

export type IconProps = IconEvents &
    React.SVGAttributes<SVGElement> & {
        width?: string
        height?: string
        stroke?: string
    }

type IconEvents = {
    onClick?: () => void
}
