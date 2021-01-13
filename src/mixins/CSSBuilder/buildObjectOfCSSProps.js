import { css } from 'styled-components'
import buildCSSProp from './buildCSSProp'

const buildObjectOfCSSProps = (obj) => css`
  ${Object.keys(obj).map((prop) => buildCSSProp(prop, obj[prop]))}
`

export default buildObjectOfCSSProps
