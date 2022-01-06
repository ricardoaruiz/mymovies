import React from 'react'
import { useRouter } from 'next/router'

import { LogoProps } from './types'

import * as S from './styles'

export const Logo: React.VFC<LogoProps> = ({
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
     * Navigate to informed href when Enter or Space key is pressed
     */
    const onKeyDownNavigate = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                navigate()
            }
        },
        [navigate]
    )

    /**
     * Render logo by default, informed texts or image
     */
    const logo = React.useMemo(() => {
        const logo = imgURL ? (
            <S.LogoImage
                imgURL={imgURL}
                size={size}
                role="img"
                aria-label="logo image"
                tabIndex={-1}
            />
        ) : (
            <S.LogoText size={size} role="img" aria-label="logo text">
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
            onKeyDown={onKeyDownNavigate}
        >
            {logo}
        </S.Logo>
    )
}
