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
        textOverflow: true,
        webkitLineClamp: {
          property: '-webkit-line-clamp'
        },
        webkitBoxOrient: {
          property: '-webkit-box-orient'
        },
        filter: true
      }),
      variant({
        variants: {
          h1: {
            fontFamily: 'var(--ql-font-family-headings)',
            fontSize: 'var(--ql-font-size-h1)',
            lineHeight: 'var(--ql-line-height-h1)',
            fontWeight: 'var(--ql-typography-heading-font-weight)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          },
          h2: {
            fontFamily: 'var(--ql-font-family-headings)',
            fontSize: 'var(--ql-font-size-h2)',
            lineHeight: 'var(--ql-line-height-h2)',
            fontWeight: 'var(--ql-typography-heading-font-weight)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          },
          h3: {
            fontFamily: 'var(--ql-font-family-headings)',
            fontSize: 'var(--ql-font-size-h3)',
            lineHeight: 'var(--ql-line-height-h3)',
            fontWeight: 'var(--ql-typography-heading-font-weight)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          },
          h4: {
            fontFamily: 'var(--ql-font-family-headings)',
            fontSize: 'var(--ql-font-size-h4)',
            lineHeight: 'var(--ql-line-height-h4)',
            fontWeight: 'var(--ql-typography-heading-font-weight)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          },
          h5: {
            fontFamily: 'var(--ql-font-family-headings)',
            fontSize: 'var(--ql-font-size-h5)',
            lineHeight: 'var(--ql-line-height-h5)',
            fontWeight: 'var(--ql-typography-heading-font-weight)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          },
          h6: {
            fontFamily: 'var(--ql-font-family-headings)',
            fontSize: 'var(--ql-font-size-h6)',
            lineHeight: 'var(--ql-line-height-h6)',
            fontWeight: 'var(--ql-typography-heading-font-weight)',
            letterSpacing: 'var(--ql-letter-spacing-none)'
          }
        }
      })
    )}
  }
`

const Title = (props) => {
  const { isEllipsis, clamp, ...rest } = props
  return (
    <StyledTitle
      textOverflow={isEllipsis && 'ellipsis'}
      whiteSpace={isEllipsis && 'nowrap'}
      overflow={(isEllipsis || clamp) && 'hidden'}
      display={clamp && '-webkit-box'}
      webkitLineClamp={clamp}
      webkitBoxOrient={clamp && 'vertical'}
      {...rest}
    />
  )
}

Title.propTypes = {
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
  clamp: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  mark: PropTypes.bool,
  onClick: PropTypes.func,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
  underline: PropTypes.bool,
  variant: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
  ])
}

export default Title
