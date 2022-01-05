import React from 'react'
import { useRouter } from 'next/router'

import Logo from '../Logo'
import { FooterProps } from './types'

import * as S from './styles'

const Footer: React.VFC<FooterProps> = ({ logo, content }) => {
    const router = useRouter()

    /**
     * Navigate to informed href
     */
    const navigate = React.useCallback(
        (href: string) => {
            href && router.push(href)
        },
        [router]
    )

    /**
     * Navigate to informed href when Enter or Space key is pressed
     */
    const onKeyDownNavigate = React.useCallback(
        (event: React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
            if (event.key === 'Enter' || event.key === ' ') {
                navigate(href)
            }
        },
        [navigate]
    )

    return (
        <S.Footer>
            <S.FooterContent>
                <S.LogoContainer>
                    <Logo
                        href={logo?.href}
                        imgURL={logo?.imgURL}
                        texts={logo?.texts}
                        size={logo?.size || 'xlarge'}
                    />
                </S.LogoContainer>

                <S.ItemContainer>
                    {content?.map((item) => (
                        <S.Item
                            key={item.title}
                            aria-label={`${item.title} list item`}
                            role="listitem"
                        >
                            <h3>{item.title}</h3>
                            <ul tabIndex={-1}>
                                {item.items.map((subItem) => (
                                    <li key={subItem.text} tabIndex={-1}>
                                        <a
                                            tabIndex={1}
                                            role="item"
                                            aria-label={`${item.title}, ${subItem.text}`}
                                            onClick={() =>
                                                navigate(subItem.href)
                                            }
                                            onKeyDown={(e) =>
                                                onKeyDownNavigate(
                                                    e,
                                                    subItem.href
                                                )
                                            }
                                        >
                                            {subItem.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </S.Item>
                    ))}
                </S.ItemContainer>
            </S.FooterContent>
        </S.Footer>
    )
}

export default Footer
