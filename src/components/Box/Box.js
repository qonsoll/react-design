import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography
} from 'styled-system'

import styled from 'styled-components'

const Box = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})(
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    system({
      whiteSpace: true,
      cursor: true,
      wordBreak: true,
      zoom: true,
      transform: true,
      transition: true,
      gap: true,
      columnGap: true,
      rowGap: true,
      filter: true
    })
  )
)

Box.propTypes = {}

export default Box
