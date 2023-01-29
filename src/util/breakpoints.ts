import { generateMedia } from 'styled-media-query'

export const breakpoints = {
  desktop: 1333,
  tablet: 900,
  mobile: 375
}

export const getMediaQuery = (windowSize: number | undefined): string => {
  if (!windowSize) return ''
  else if (windowSize <= breakpoints.mobile) return 'mobile'
  else if (windowSize <= breakpoints.tablet) return 'tablet'
  else if (windowSize <= breakpoints.desktop) return 'laptop'
  else return 'desktop'
}

export const media = generateMedia({
  desktop: `${breakpoints.desktop}px`,
  tablet: `${breakpoints.tablet}px`,
  mobile: `${breakpoints.mobile}px`
})
