import { LogoProps } from '../Logo/types'

export type FooterProps = {
    logo?: LogoProps
    content?: GroupItem[]
}

type GroupItem = {
    title: string
    items: Item[]
}

type Item = {
    text: string
    href: string
}
