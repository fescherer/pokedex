import React from 'react'

export const useMediaQuery = () => {
  const [windowSize, setWindowSize] = React.useState<number | undefined>(
    undefined
  )

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize ?? 0
}
