import React from 'react'
import { defaultBreakpoints } from 'styled-media-query'

type UseMediaType = {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
}

const currentWidth = 0
const mobileBreakpoint = Number(defaultBreakpoints.medium.replace('px', ''))
const tabletBreakpoint = Number(defaultBreakpoints.large.replace('px', ''))

export const useMedia = (): UseMediaType => {
    const [width, setWidth] = React.useState<number>(currentWidth)

    const setRealTimeWidth = React.useCallback(() => {
        setWidth(window.innerWidth)
    }, [])

    React.useEffect(() => {
        setRealTimeWidth()
        window.addEventListener('resize', setRealTimeWidth)

        return () => {
            window.removeEventListener('resize', setRealTimeWidth)
        }
    }, [setRealTimeWidth])

    const isMobile = React.useMemo(() => {
        return width < mobileBreakpoint
    }, [width])

    const isTablet = React.useMemo(() => {
        return width >= mobileBreakpoint && width < tabletBreakpoint
    }, [width])

    const isDesktop = React.useMemo(() => {
        return width >= tabletBreakpoint
    }, [width])

    return { isMobile, isTablet, isDesktop }
}
