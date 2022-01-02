export type ItemProps = {
    id?: string
    label: string
    href?: string
    isOpen?: boolean
    onMouseOver?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
}
