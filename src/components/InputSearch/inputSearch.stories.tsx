import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import InputSearch from '.'
import { InputSearchProps } from './types'

export default {
    title: 'Components/InputSearch',
    component: InputSearch,
    args: {
        buttonLabel: 'Fazer a busca',
        placeholder: 'Informe o que você deseja aqui!',
        onSearch: (searchTerm: string) =>
            alert(
                `Sua busca será realizada com o seguinte termo: ${searchTerm}`
            ),
    },
} as Meta

export const Default: Story<InputSearchProps> = (args) => (
    <InputSearch {...args} />
)
