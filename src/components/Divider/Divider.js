import React from 'react'
import PropTypes from 'prop-types'
import { Divider as AntDivider } from 'antd'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  system
} from 'styled-system'
const ANTD_DIVIDER_PROPS = [
  'className',
  'dashed',
  'orientation',
  'plain',
  'style',
  'type'
]
const StyledAntDivider = styled(AntDivider).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ANTD_DIVIDER_PROPS.includes(prop) || defaultValidatorFn(prop)
})`
  && {
    ${compose(
      space,
      color,
      typography,
      layout,
      flexbox,
      background,
      border,
      position,
      shadow,
      system({ transform: true })
    )}
  }
`

const Divider = (props) => <StyledAntDivider {...props} />

Divider.propTypes = {
  className: PropTypes.string,
  dashed: PropTypes.bool,
  orientation: PropTypes.oneOf(['left', 'right', 'center']),
  plain: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf(['horizontal', 'vertical'])
}

export default Divider
