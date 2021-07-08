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

/**
 * Paragraph (19 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {object}      [Default AntD props]      Component absolutely maintain default AntD paragraph properties (check Ant documentation: https://ant.design/components/typography/#Typography.Paragraph).
 * @param {oneOf}       [Packages]                Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}       [Extra CSS props]         Additional CSS properties which could be applyed.
 *
 * @return {ReactComponent}
 */

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
