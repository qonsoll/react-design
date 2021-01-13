import { css } from 'styled-components'
import { mediaQuery } from './mediaQuery'

export const listMediaQueries = ({ breakpoints, valuesMap, properties }) =>
  breakpoints.map(
    (breakpoint) => mediaQuery[breakpoint]`
    ${properties.map(
      (property) =>
        css`
          ${property}: ${valuesMap[breakpoint]};
        `
    )}
  `
  )
