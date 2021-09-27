import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '../MenuItem'
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

const StyledGroup = styled(AntMenu.ItemGroup)(
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

const Group = (props) => <StyledGroup {...props} />

Group.propTypes = {
  children: PropTypes.arrayOf(PropTypes.instanceOf(MenuItem)),
  title: PropTypes.node
}

export default Group
