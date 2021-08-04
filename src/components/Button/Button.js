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
              color: 'var(--btn-text-hover-color)',
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
    'transition'
  ]),
  variant: PropTypes.oneOf(['white'])
}

export default Button
