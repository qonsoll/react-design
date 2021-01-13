import { css } from 'styled-components'
import buildCSSProp from './buildCSSProp'

const buildArrayOfCSSProps = (properties, value) =>
  css`
    ${properties.map((property) => buildCSSProp(property, value))}
  `

export default buildArrayOfCSSProps
