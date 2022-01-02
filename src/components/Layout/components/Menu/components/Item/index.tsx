import Link from 'next/link'
import React from 'react'

import { ItemProps } from './types'
import * as S from './styles'

const Item: React.FC<ItemProps> = ({ label, href, onClick, children }) => {
    const [isHovered, setIsHovered] = React.useState(false)

    /**
     *
     */
    const renderItem = React.useMemo(
        () => <S.Item onClick={onClick}>{label}</S.Item>,
        [label, onClick]
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
    const renderDropDownItem = React.useMemo(() => {
        return (
            <>
                {renderItem}
                <S.DropDownItems show={isHovered}>{children}</S.DropDownItems>
            </>
        )
    }, [children, isHovered, renderItem])

    return (
        <S.ItemContainer
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!children ? renderNavigationItem : renderDropDownItem}
        </S.ItemContainer>
    )
}

export default Item
