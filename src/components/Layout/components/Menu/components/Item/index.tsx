import React from 'react'
import { useRouter } from 'next/router'

import { ItemProps } from './types'
import * as S from './styles'

const Item: React.FC<ItemProps> = ({
    id,
    label,
    href,
    isOpen = false,
    type = 'mobile',
    onMouseOver,
    onMouseLeave,
    onClick,
    children,
}) => {
    const myRef = React.useRef<HTMLDivElement>(null)
    const router = useRouter()

    /**
     *
     */
    const isMobile = React.useMemo(() => type === 'mobile', [type])

    /**
     *
     */
    const handleClickEvent = React.useCallback(() => {
        children && isOpen && onMouseLeave && onMouseLeave()
        children && !isOpen && onMouseOver && onMouseOver()
        onClick && onClick()

        setTimeout(() => {
            href && router.push(href)
        }, 250)
    }, [children, href, isOpen, onClick, onMouseLeave, onMouseOver, router])

    /**
     *
     */
    const renderItem = React.useMemo(
        () => <S.Item tabIndex={-1}>{label}</S.Item>,
        [label]
    )

    /**
     *
     */
    const renderDropDownItems = React.useMemo(() => {
        return (
            <S.DropDownItemsContainer isMobile={isMobile}>
                {renderItem}
                <S.DropDownItems
                    show={isOpen}
                    isMobile={isMobile}
                    tabIndex={-1}
                    role="group"
                    aria-label={`${label} menu items`}
                    aria-hidden={!isOpen}
                >
                    {children}
                </S.DropDownItems>
            </S.DropDownItemsContainer>
        )
    }, [children, isMobile, isOpen, label, renderItem])

    /**
     *
     */
    const handleKeyDownEvent = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                onMouseOver && onMouseOver()
                handleClickEvent()
            }
            if (event.key === 'Escape') {
                onMouseLeave && onMouseLeave()
                myRef.current?.focus()
            }
        },
        [handleClickEvent, onMouseLeave, onMouseOver]
    )

    /**
     *
     */
    const ariaLabel = React.useMemo(() => {
        if (children) {
            return `${label}, ${isOpen ? 'ver menos' : 'ver mais'}`
        }
        return label
    }, [children, isOpen, label])

    /**
     *
     */
    return (
        <S.ItemContainer
            id={id}
            ref={myRef}
            tabIndex={1}
            onClick={handleClickEvent}
            onMouseOver={() => !isMobile && onMouseOver && onMouseOver()}
            onMouseLeave={() => !isMobile && onMouseLeave && onMouseLeave()}
            onKeyDown={handleKeyDownEvent}
            aria-label={ariaLabel}
            role="menuitem"
        >
            {!children ? renderItem : renderDropDownItems}
        </S.ItemContainer>
    )
}

export default Item
