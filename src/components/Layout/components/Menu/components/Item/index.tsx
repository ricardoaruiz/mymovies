import React from 'react'
import Link from 'next/link'
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
    const renderItem = React.useMemo(
        () => <S.Item tabIndex={-1}>{label}</S.Item>,
        [label]
    )

    /**
     *
     */
    const renderNavigationItem = React.useMemo(() => {
        return !href ? (
            renderItem
        ) : (
            <Link href={href} passHref>
                {renderItem}
            </Link>
        )
    }, [href, renderItem])

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
                >
                    {children}
                </S.DropDownItems>
            </S.DropDownItemsContainer>
        )
    }, [children, isMobile, isOpen, renderItem])

    /**
     *
     */
    const handleClickEvent = React.useCallback(() => {
        children && isOpen && onMouseLeave && onMouseLeave()
        children && !isOpen && onMouseOver && onMouseOver()

        onClick && onClick()
        href && router.push(href)
    }, [children, href, isOpen, onClick, onMouseLeave, onMouseOver, router])

    /**
     *
     */
    const handleKeyDownEvent = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            console.log('handleKeyDownEvent')
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
            {!children ? renderNavigationItem : renderDropDownItems}
        </S.ItemContainer>
    )
}

export default Item
