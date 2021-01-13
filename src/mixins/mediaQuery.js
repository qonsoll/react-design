import { css } from 'styled-components'
import { breakpoints } from '../design/design-system'

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
