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

import { Badge as AntBadge } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledBadge = styled(AntBadge)(
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
const Badge = (props) => <StyledBadge {...props} />

Badge.propTypes = {
  color: PropTypes.string,
  count: PropTypes.string,
  dot: PropTypes.bool,
  offset: PropTypes.any,
  overflowCount: PropTypes.number,
  showZero: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  status: PropTypes.oneOf([
    'success',
    'processing',
    'default',
    'error',
    'warning'
  ]),
  text: PropTypes.node,
  title: PropTypes.string
}

export default Badge
