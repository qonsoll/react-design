import { css } from 'styled-components'
import { breakpoints } from '../design/design-system'

const mediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default mediaQuery
