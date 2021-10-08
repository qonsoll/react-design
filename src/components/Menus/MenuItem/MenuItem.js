import React from 'react'
import PropTypes from 'prop-types'
import { Menu as AntMenu } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
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

const StyledMenuItem = styled(AntMenu.Item).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['borderRadius', 'alignItems'].includes(prop)
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
      transform: true
    })
  )
)

const MenuItem = (props) => {
  const {loading, icon, ...rest} = props
  return (<StyledMenuItem disabled={loading} icon={loading?<LoadingOutlined />:icon} {...rest} />)
}

MenuItem.propTypes = {
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  title: PropTypes.string,
  loading:PropTypes.bool
}

export default MenuItem
