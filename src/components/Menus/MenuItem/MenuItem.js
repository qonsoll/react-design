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

// const ANTD_MENU_ITEM_PROPS = ['danger', 'disabled', 'icon', 'key', 'title']

const StyledMenuItem = styled(AntMenu.Item)(
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

const MenuItem = (props) => <StyledMenuItem {...props} />

MenuItem.propTypes = {
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  key: PropTypes.string,
  title: PropTypes.string
}

export default MenuItem
