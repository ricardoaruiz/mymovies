import React from 'react'
import { useRouter } from 'next/router'

import { LogoProps } from './types'

import * as S from './styles'

const Logo: React.VFC<LogoProps> = ({
    imgURL,
    href,
    size = 'medium',
    texts = {
        first: 'My',
        second: 'Movies',
    },
}) => {
    const router = useRouter()

    /**
     * Navigate to informed href
     */
    const navigate = React.useCallback(() => {
        href && router.push(href)
    }, [href, router])

    /**
     * Render logo by default, informed texts or image
     */
    const logo = React.useMemo(() => {
        const logo = imgURL ? (
            <S.LogoImage imgURL={imgURL} size={size} />
        ) : (
            <S.LogoText size={size}>
                <strong tabIndex={-1}>{texts.first}</strong>
                <small tabIndex={-1}>{texts.second}</small>
            </S.LogoText>
        )
        return logo
    }, [imgURL, size, texts.first, texts.second])

    /**
     * Render component
     */
    return (
        <S.Logo
            href={href}
            role="img"
            aria-label="logo"
            tabIndex={1}
            onClick={navigate}
            onKeyDown={navigate}
        >
            {logo}
        </S.Logo>
    )
}

export default Logo
