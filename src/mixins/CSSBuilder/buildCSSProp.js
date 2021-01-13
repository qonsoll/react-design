import { css } from 'styled-components'

const buildCSSProp = (prop, value) =>
  css`
    ${prop}: ${value}
  `

export default buildCSSProp
