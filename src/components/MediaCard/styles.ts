import styled, { css } from 'styled-components'
import { MediaCardProps } from './types'

export const MediaCard = styled.div`
    width: 15rem;
`

type MediaImageProp = Pick<MediaCardProps, 'imgURL'>

export const MediaImage = styled.div<MediaImageProp>`
    ${({ imgURL }) => css`
        background-image: url(${imgURL});
        background-position: center center;
        background-size: cover;
        width: 100%;
        height: 22.5rem;
        border-radius: 5px;
        font-size: 1.6rem;
    `};
`

type InfoContainerProps = Pick<MediaCardProps, 'onClick'>

export const InfoContainer = styled.div<InfoContainerProps>`
    ${({ theme, onClick }) => css`
        cursor: ${onClick ? 'pointer' : 'default'};

        &:hover {
            color: ${theme.colors.primary};
        }
    `};
`

export const Title = styled.p`
    ${({ theme }) => css`
        margin-top: 1rem;
        font-weight: ${theme.font.bold};
        line-height: 1.2;
    `};
`

export const Date = styled.p`
    ${({ theme }) => css`
        font-size: 1.4rem;
        margin-top: 0.5rem;
        color: ${theme.colors.gray};
    `};
`
