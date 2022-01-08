import React from 'react'

type UseScrollType = {
    verticalPosition: number
    isScrollDown: boolean
    isScrollUp: boolean
}

export const useScroll = (): UseScrollType => {
    const [verticalPosition, setVerticalPosition] = React.useState(0)
    const [isDown, setIsDown] = React.useState(false)

    /**
     *
     */
    const updateVerticalPosition = React.useCallback(() => {
        setIsDown(window.scrollY > verticalPosition)
        setVerticalPosition(window.scrollY)
    }, [verticalPosition])

    /**
     *
     */
    React.useEffect(() => {
        window.addEventListener('scroll', updateVerticalPosition)

        return () =>
            window.removeEventListener('scroll', updateVerticalPosition)
    }, [updateVerticalPosition])

    return {
        verticalPosition,
        isScrollDown: isDown,
        isScrollUp: !isDown,
    }
}
