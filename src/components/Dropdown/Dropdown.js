import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown as AntDropdown } from 'antd'
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

const StyledDropdown = styled(AntDropdown)(
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
      transform: true
    })
  )
)

const Dropdown = (props) => {
  return <StyledDropdown {...props} />
}

Dropdown.propTypes = {
  arrow: PropTypes.bool,
  disabled: PropTypes.bool,
  destroyPopupOnHide: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  overlay: PropTypes.object,
  overlayClassName: PropTypes.string,
  overlayStyle: PropTypes.object,
  placement: PropTypes.string,
  trigger: PropTypes.string,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  whiteSpace: PropTypes.string,
  cursor: PropTypes.string,
  wordBreak: PropTypes.string,
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default Dropdown
