import React from 'react'

export type InputSearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
    buttonLabel?: string
    onSearch: (searchTerm: string) => void
}
