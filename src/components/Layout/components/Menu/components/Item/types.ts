export type Item = Pick<ItemEvents, 'onClick'> & {
    id?: string
    label: string
    href?: string
}

export type ItemProps = Item &
    Omit<ItemEvents, 'onClick'> & {
        isOpen?: boolean
        type?: 'mobile' | 'desk'
    }

type ItemEvents = {
    onClick?: () => void
    onMouseOver?: () => void
    onMouseLeave?: () => void
}
