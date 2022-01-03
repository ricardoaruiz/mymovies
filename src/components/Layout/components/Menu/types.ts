import { Item } from './components/Item/types'

export type MenuProps = {
    items: ItemMenu[]
}

export type ItemMenu = {
    main: Item
    subItems?: Item[]
}
