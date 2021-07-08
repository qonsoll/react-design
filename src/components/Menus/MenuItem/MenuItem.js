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

/**
 * MenuItem (24 Mar 2021)
 *
 * @since      0.0.1
 *
 * @param {object}      [Default AntD props]      Component absolutely maintain default AntD menu item properties (check Ant documentation: https://ant.design/components/menu/#Menu.Item).
 * @param {oneOf}       [Packages]                Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}       [Extra CSS props]         Additional CSS properties which could be applyed.
 *
 * @return {ReactComponent}
 */

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

const MenuItem = (props) => {
  return <StyledMenuItem {...props} />
}

MenuItem.propTypes = {
  'Default AntD props': PropTypes.object,
  Packages: PropTypes.oneOf([
    'space',
    'color',
    'typography',
    'layout',
    'flexbox',
    'background',
    'border',
    'position',
    'shadow'
  ]),
  'Extra CSS props': PropTypes.oneOf([
    'whiteSpace',
    'cursor',
    'wordBreak',
    'zoom',
    'transform'
  ])
}

export default MenuItem
