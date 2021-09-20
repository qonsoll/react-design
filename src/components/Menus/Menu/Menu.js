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

const StyledMenu = styled(AntMenu)(
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

const Menu = (props) => <StyledMenu {...props} />

Menu.propTypes = {
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
  expandIcon: PropTypes.node,
  forceSubMenuRender: PropTypes.bool,
  inlineCollapsed: PropTypes.bool,
  inlineIndent: PropTypes.number,
  mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
  multiple: PropTypes.bool,
  openKeys: PropTypes.arrayOf(PropTypes.string),
  overflowedIndicator: PropTypes.node,
  selectable: PropTypes.bool,
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.object,
  subMenuCloseDelay: PropTypes.number,
  subMenuOpenDelay: PropTypes.number,
  theme: PropTypes.oneOf(['dark', 'light']),
  triggerSubMenuAction: PropTypes.oneOf(['hover', 'click']),
  onClick: PropTypes.func,
  onDeselect: PropTypes.func,
  onOpenChange: PropTypes.func,
  onSelect: PropTypes.func
}

export default Menu
