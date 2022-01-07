import React from 'react'

import { HeroProps } from './types'
import { InputSearch } from 'components'

import * as S from './styles'

const Hero: React.VFC<HeroProps> = ({
    title,
    subtitle,
    imgURL,
    onSearch,
    searchFieldPlaceholder = 'Digite sua busca aqui',
}) => {
    const ariaLabel = React.useMemo(() => {
        const text = `${title || ''} ${subtitle || ''}`
        return text.trim() || 'hero'
    }, [subtitle, title])

    return (
        <S.Hero imgURL={imgURL} tabIndex={1} aria-label={ariaLabel}>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subtitle}</S.SubTitle>

            {onSearch && (
                <InputSearch
                    placeholder={searchFieldPlaceholder}
                    onSearch={onSearch}
                />
            )}
        </S.Hero>
    )
}

export default Hero
