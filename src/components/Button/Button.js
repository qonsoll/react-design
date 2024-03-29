import React, { forwardRef } from 'react'
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
  typography,
  variant
} from 'styled-system'

import { Button as AntButton } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ANTD_BUTTON_PROPS = [
  'block',
  'danger',
  'disabled',
  'ghost',
  'href',
  'htmlType',
  'icon',
  'loading',
  'shape',
  'size',
  'target',
  'type',
  'boxShadow'
]
/** Attrs prop is used for pass className according to received variant
 *  in other case it isn't possible know what kind of variant Button got
 *  in order to rewrite class
 */
const StyledButton = styled(AntButton)
  .withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
      ANTD_BUTTON_PROPS.includes(prop) || defaultValidatorFn(prop)
  })
  .attrs(
    ({ variant }) =>
      variant && {
        className: `ant-btn-${variant}`
      }
  )`
  &&& {
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
        transition: true,
        textTransform: true
      }),
      variant({
        variants: {
          white: {
            color: 'var(--btn-white-color)',
            background: 'var(--btn-white-bg)',
            borderColor: 'var(--btn-white-border)',
            '&:hover': {
              color: 'var(--btn-white-hover-color)',
              background: 'var(--btn-white-hover-bg)',
              borderColor: 'var(--btn-white-hover-border)'
            }
          },
          dark: {
            color: 'var(--btn-dark-color)',
            background: 'var(--btn-dark-bg)',
            borderColor: 'var(--btn-dark-border)',
            '&:hover': {
              color: 'var(--btn-dark-hover-color)',
              background: 'var(--btn-dark-hover-bg)',
              borderColor: 'var(--btn-dark-hover-border)'
            }
          }
        }
      })
    )}
  }
`
const Button = forwardRef((props, ref) => {
  return <StyledButton {...props} ref={ref} />
})

Button.displayName = 'Button'
Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'text', 'link', 'ghost']),
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.node,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({ delay: PropTypes.number })
  ]),
  shape: PropTypes.oneOf(['default', 'circle', 'round']),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  target: PropTypes.string,
  onClick: PropTypes.func,
  whiteSpace: PropTypes.string,
  cursor: PropTypes.string,
  wordBreak: PropTypes.string,
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  transition: PropTypes.string,
  textTransform: PropTypes.string,
  variant: PropTypes.oneOf(['white', 'dark'])
}

export default Button
