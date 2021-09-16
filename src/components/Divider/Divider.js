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

const StyledAntDivider = styled(AntDivider)`
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
  style: PropTypes.shape,
  type: PropTypes.oneOf(['horizontal', 'vertical'])
}

export default Divider
