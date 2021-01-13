import { css } from 'styled-components'

export const singleCSSProperty = ({
  componentPropertyValue,
  theme,
  cssProperty
}) =>
  componentPropertyValue &&
  css`
    ${cssProperty}: ${theme
      ? theme[componentPropertyValue] || componentPropertyValue
      : componentPropertyValue};
  `
