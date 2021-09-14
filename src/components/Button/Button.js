import PropTypes from 'prop-types'
import { Button as AntButton } from 'antd'
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

const Button = styled(AntButton)`
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
        transition: true
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
          }
        }
      })
    )}
  }
`

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'text', 'link', 'ghost']),
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  shape: PropTypes.string,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  target: PropTypes.string,
  onClick: PropTypes.func,
  'Extra CSS props': PropTypes.oneOf([
    'whiteSpace',
    'cursor',
    'wordBreak',
    'zoom',
    'transform',
    'transition'
  ]),
  variant: PropTypes.oneOf(['white'])
}

export default Button
