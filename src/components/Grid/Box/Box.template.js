import styled from 'styled-components'
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
} from 'styled-system'
import {
  spacePropTypes,
  colorPropTypes,
  typographyPropTypes,
  layoutPropTypes,
  flexboxPropTypes,
  gridPropTypes,
  backgroundPropTypes,
  borderPropTypes,
  positionPropTypes,
  shadowPropTypes,
  hoverPropTypes
} from '../../../extensions/prop-types'
import { hover } from '../../../extensions'

const Box = styled.div`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${hover}
`

Box.propTypes = {
  ...spacePropTypes,
  ...colorPropTypes,
  ...typographyPropTypes,
  ...layoutPropTypes,
  ...flexboxPropTypes,
  ...gridPropTypes,
  ...backgroundPropTypes,
  ...borderPropTypes,
  ...positionPropTypes,
  ...shadowPropTypes,
  ...hoverPropTypes
}

export default Box
