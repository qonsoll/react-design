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
  system,
  variant
} from 'styled-system'

const StyledText = styled(AntTypography.Text).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
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
        textOverflow: true,
        webkitLineClamp: {
          property: '-webkit-line-clamp'
        },
        webkitBoxOrient: {
          property: '-webkit-box-orient'
        }
      }),
      variant({
        variants: {
          h1: {
            fontSize: 'var(--font-size-h1)',
            lineHeight: 'var(--line-height-h1)',
            fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          h2: {
            fontSize: 'var(--font-size-h2)',
            lineHeight: 'var(--line-height-h2)',
            fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          h3: {
            fontSize: 'var(--font-size-h3)',
            lineHeight: 'var(--line-height-h3)',
            fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          h4: {
            fontSize: 'var(--font-size-h4)',
            lineHeight: 'var(--line-height-h4)',
            fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          h5: {
            fontSize: 'var(--font-size-h5)',
            lineHeight: 'var(--line-height-h5)',
            fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          h6: {
            fontSize: 'var(--font-size-h6)',
            lineHeight: 'var(--line-height-h6)',
            fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          overline: {
            fontSize: 'var(--font-size-overline)',
            lineHeight: 'var(--line-height-overline)',
            fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing-default)'
          },
          body1: {
            fontSize: 'var(--font-size-body1)',
            lineHeight: 'var(--line-height-body1)',
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          body2: {
            fontSize: 'var(--font-size-body2)',
            lineHeight: 'var(--line-height-body2)',
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          caption1: {
            fontSize: 'var(--font-size-caption1)',
            lineHeight: 'var(--line-height-caption1)',
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing-none)'
          },
          caption2: {
            fontSize: 'var(--font-size-caption2)',
            lineHeight: 'var(--line-height-caption2)',
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing-none)'
          }
        }
      })
    )}
  }
`
const Text = (props) => {
  const { isEllipsis } = props

  return (
    <StyledText
      textOverflow={isEllipsis && 'ellipsis'}
      whiteSpace={isEllipsis && 'nowrap'}
      overflow={isEllipsis && 'hidden'}
      {...props}
    />
  )
}

Text.propTypes = {
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
    'textOverflow',
    'webkitLineClamp',
    'webkitBoxOrient'
  ]),
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'overline',
    'body1',
    'body2',
    'caption1',
    'caption2'
  ]),
  isEllipsis: PropTypes.bool
}

export default Text
