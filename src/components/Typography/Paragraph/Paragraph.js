import React from 'react'
import PropTypes from 'prop-types'
import { Typography as AntTypography } from 'antd'
import styled from 'styled-components'
import {
  // compose,
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

const StyledParagraph = styled(AntTypography.Paragraph)`
  margin-bottom: 0 !important;
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${system({
    whiteSpace: true,
    cursor: true,
    wordBreak: true,
    zoom: true,
    transform: true,
    textTransform: true
  })}
`

const Paragraph = (props) => {
  return <StyledParagraph {...props} />
}

Paragraph.propTypes = {
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
    'transform',
    'textTransform'
  ])
}

export default Paragraph
