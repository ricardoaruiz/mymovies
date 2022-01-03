export type IconProps = IconEvents & {
    width?: string
    height?: string
    stroke?: string
}

type IconEvents = {
    onClick?: () => void
}
