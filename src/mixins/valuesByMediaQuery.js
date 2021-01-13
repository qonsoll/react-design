import { css } from 'styled-components'
import { mediaQuery } from './mediaQuery'

export const valuesByMediaQuery = ({ breakpoints, values, map }) =>
  values.map((value, index) =>
    index > 0
      ? mediaQuery[breakpoints[index - 1]]`
          ${map[value]}
        `
      : css`
          ${map[value]}
        `
  )
