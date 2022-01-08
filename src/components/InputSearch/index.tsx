import React from 'react'

import { InputSearchProps } from './types'

import * as S from './styles'

const InputSearch: React.VFC<InputSearchProps> = ({
    buttonLabel = 'Buscar',
    onSearch,
    ...props
}) => {
    const inputSearchRef =
        React.useRef() as React.MutableRefObject<HTMLInputElement>

    /**
     *
     */
    const handleButtonSearchClick = React.useCallback(() => {
        onSearch(inputSearchRef.current.value)
        inputSearchRef.current.focus()
    }, [onSearch])

    /**
     *
     */
    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                handleButtonSearchClick()
                return
            }
            if (event.key === 'Escape') {
                inputSearchRef.current.value = ''
                return
            }
        },
        [handleButtonSearchClick]
    )

    return (
        <S.InputSearchContainer>
            <S.InputSearch
                tabIndex={1}
                ref={inputSearchRef}
                onKeyDown={handleKeyDown}
                aria-label={props.placeholder || 'search field'}
                {...props}
            />
            <S.ButtonSearch onClick={handleButtonSearchClick}>
                {buttonLabel}
            </S.ButtonSearch>
        </S.InputSearchContainer>
    )
}

export default InputSearch
