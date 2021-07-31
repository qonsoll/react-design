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

const ANTD_TITLE_PROPS = [
  'level',
  'code',
  'copyable',
  'delete',
  'disabled',
  'editable',
  'ellipsis',
  'mark',
  'onClick',
  'italic',
  'type',
  'underline'
]

const StyledTitle = styled(AntTypography.Title).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ANTD_TITLE_PROPS.includes(prop) || defaultValidatorFn(prop)
})`
  && {
    ${compose(
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
    )}
  }
`

const Title = (props) => {
  return <StyledTitle {...props} />
}

Title.propTypes = {
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
    'textTransform',
    'textOverflow'
  ])
}

export default Title
