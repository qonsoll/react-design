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

const ANTD_TEXT_PROPS = [
  'code',
  'copyable',
  'delete',
  'disabled',
  'editable',
  'ellipsis',
  'keyboard',
  'mark',
  'strong',
  'italic',
  'type',
  'underline',
  'variants'
]

const StyledText = styled(AntTypography.Text).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ANTD_TEXT_PROPS.includes(prop) || defaultValidatorFn(prop)
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
          overline: {
            fontSize: 'var(--ql-font-size-overline)',
            lineHeight: 'var(--ql-line-height-overline)',
            fontWeight: 'var(--ql-typography-heading-font-weight)',
            letterSpacing: 'var(--ql-letter-spacing-default)',
            textTransform: 'uppercase'
          },
          body1: {
            fontSize: 'var(--ql-font-size-body1)',
            lineHeight: 'var(--ql-line-height-body1)',
            fontWeight: 'var(--ql-font-weight-regular)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          },
          body2: {
            fontSize: 'var(--ql-font-size-body2)',
            lineHeight: 'var(--ql-line-height-body2)',
            fontWeight: 'var(--ql-font-weight-regular)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          },
          caption1: {
            fontSize: 'var(--ql-font-size-caption1)',
            lineHeight: 'var(--ql-line-height-caption1)',
            fontWeight: 'var(--ql-font-weight-regular)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          },
          caption2: {
            fontSize: 'var(--ql-font-size-caption2)',
            lineHeight: 'var(--ql-line-height-caption2)',
            fontWeight: 'var(--ql-font-weight-regular)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
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
  code: PropTypes.bool,
  copyable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      icon: PropTypes.node,
      text: PropTypes.string,
      onCopy: PropTypes.func,
      tooltips: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.node)
      ])
    })
  ]),
  delete: PropTypes.bool,
  disabled: PropTypes.bool,
  editable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      icon: PropTypes.node,
      tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
      editing: PropTypes.bool,
      maxLength: PropTypes.number,
      autoSize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
          minRows: PropTypes.number,
          maxRows: PropTypes.number
        })
      ]),
      onStart: PropTypes.func,
      onChange: PropTypes.func,
      onCancel: PropTypes.func,
      onEnd: PropTypes.func
    })
  ]),
  ellipsis: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      rows: PropTypes.number,
      expandable: PropTypes.bool,
      suffix: PropTypes.string,
      symbol: PropTypes.node,
      tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
      onExpand: PropTypes.func,
      onEllipsis: PropTypes.func
    })
  ]),
  keyboard: PropTypes.bool,
  mark: PropTypes.bool,
  onClick: PropTypes.func,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
  underline: PropTypes.bool,
  variant: PropTypes.oneOf([
    'overline',
    'body1',
    'body2',
    'caption1',
    'caption2'
  ]),
  isEllipsis: PropTypes.bool
}

export default Text
