import { css } from 'styled-components'
import { mediaQuery } from './mediaQuery'
import { column } from './column'
import { base } from '../design/design-system'

export const listColumnsByMediaQuery = ({ breakpoints, columns, props }) =>
  breakpoints.map(
    (breakpoint) => css`
      ${mediaQuery[breakpoint]`
        ${column({
          propertyValue: props[breakpoint],
          columns: props?.theme?.grid?.columns || base.grid.columns
        })}
      `}
    `
  )
