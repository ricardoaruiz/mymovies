export type InputSelectProps = {
    placeholder?: string
    items: SelectItem<number | string | null>[]
    selectedItem: SelectItem<number | string | null> | null
    onChange: (seletecItem: SelectItem<number | string | null>) => void
}

export type SelectItem<T> = {
    label: string
    value: T
}
