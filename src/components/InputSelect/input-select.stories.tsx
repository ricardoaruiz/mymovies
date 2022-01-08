import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { InputSelect } from '.'
import { InputSelectProps, SelectItem } from './types'

export default {
    title: 'Components/InputSelect',
    component: InputSelect,
    args: {
        placeholder: 'Selecione um item da lista',
        items: [
            { label: 'Item #1', value: 1 },
            { label: 'Item #2', value: 2 },
            { label: 'Item #3', value: 3 },
        ],
    },
} as Meta<InputSelectProps>

export const Default: Story<InputSelectProps> = (args) => {
    const [selectedItem, setSelectedItem] = React.useState<SelectItem<
        number | string | null
    > | null>(null)
    return (
        <InputSelect
            {...args}
            selectedItem={selectedItem}
            onChange={setSelectedItem}
        />
    )
}
