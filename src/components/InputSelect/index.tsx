import React from 'react'

import { InputSelectProps, SelectItem } from './types'
import { DownIcon, UpIcon } from 'components'

import * as S from './styles'

export const InputSelect: React.VFC<InputSelectProps> = ({
    placeholder = 'Selecione um item',
    items,
    selectedItem,
    onChange,
}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const selectRef = React.useRef() as React.MutableRefObject<HTMLDivElement>

    /**
     *
     */
    const handleSelectClick = React.useCallback(() => {
        setIsOpen((state) => !state)
    }, [])

    /**
     *
     */
    const handleSelectKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                handleSelectClick()
                return
            }
            if (event.key === 'Escape') {
                selectRef.current.focus()
                setIsOpen(false)
                return
            }
        },
        [handleSelectClick]
    )

    /**
     *
     */
    const handleItemClick = React.useCallback(
        (value: SelectItem<number | string | null>) => {
            onChange(value)
            setIsOpen(false)
        },
        [onChange]
    )

    /**
     *
     */
    const handleItemKeyDown = React.useCallback(
        (
            event: React.KeyboardEvent<HTMLDivElement>,
            value: SelectItem<number | string | null>
        ) => {
            if (event.key === 'Enter' || event.key === ' ') {
                handleItemClick(value)
                selectRef.current.focus()
                return
            }
            if (event.key === 'Escape') {
                selectRef.current.focus()
                setIsOpen(false)
                return
            }
        },
        [handleItemClick]
    )

    /**
     *
     */
    const renderSelectItems = React.useCallback(() => {
        // remove selected item from items list
        const newItems = items
            .filter((item) => item.value !== selectedItem?.value)
            .map((item) => (
                <S.Item
                    key={item.value}
                    tabIndex={1}
                    role="menuitem"
                    aria-label={item.label}
                    onClick={() => handleItemClick(item)}
                    onKeyDown={(event) => handleItemKeyDown(event, item)}
                >
                    {item.label}
                </S.Item>
            ))

        // If an item is selected, put default item on top of items list
        if (selectedItem?.value) {
            const item = { label: placeholder, value: null } as SelectItem<
                string | number | null
            >
            newItems.unshift(
                <S.Item
                    key={-1}
                    tabIndex={1}
                    role="menuitem"
                    aria-label={item.label}
                    onClick={() => handleItemClick(item)}
                    onKeyDown={(event) => handleItemKeyDown(event, item)}
                >
                    {placeholder}
                </S.Item>
            )
        }

        return (
            <S.Items
                isOpen={isOpen}
                tabIndex={-1}
                role="group"
                aria-hidden={!isOpen}
            >
                {newItems}
            </S.Items>
        )
    }, [
        handleItemClick,
        handleItemKeyDown,
        isOpen,
        items,
        placeholder,
        selectedItem?.value,
    ])

    return (
        <S.Wrapper>
            <S.Select
                onClick={handleSelectClick}
                onKeyDown={handleSelectKeyDown}
                tabIndex={1}
                role="menu"
                aria-label={!selectedItem ? placeholder : selectedItem.label}
                ref={selectRef}
            >
                {/* Selected Item */}
                <S.Item useHover={false}>
                    {!selectedItem ? placeholder : selectedItem.label}
                    {isOpen ? <UpIcon /> : <DownIcon />}
                </S.Item>
            </S.Select>

            {/* Items */}
            {renderSelectItems()}

            <S.ItemsOverlay
                role="region"
                aria-label="select overlay"
                tabIndex={-1}
                isOpen={isOpen}
                onClick={() => {
                    setIsOpen(false)
                }}
            />
        </S.Wrapper>
    )
}
