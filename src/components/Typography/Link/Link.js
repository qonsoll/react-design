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

import { Typography as AntTypography } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled(AntTypography.Link)(
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
      transform: true,
      textTransform: true,
      textOverflow: true
    })
  )
)

const Link = (props) => <StyledLink {...props} />

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string
}

export default Link
