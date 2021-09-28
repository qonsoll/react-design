import React from 'react'
import PropTypes from 'prop-types'
import { Menu as AntMenu } from 'antd'
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

const StyledSubmenu = styled(AntMenu.SubMenu)(
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

const Submenu = (props) => <StyledSubmenu {...props} />

Submenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  popupClassName: PropTypes.string,
  popupOffset: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.node,
  onTitleClick: PropTypes.func
}

export default Submenu
