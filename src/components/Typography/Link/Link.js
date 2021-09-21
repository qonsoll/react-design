import React from 'react'
import PropTypes from 'prop-types'
import { Typography as AntTypography } from 'antd'
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
