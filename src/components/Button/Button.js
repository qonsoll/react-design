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

/**
 * Divider (14 Apr 2021)
 *
 * @since      0.0.2
 *
 * @param {object}      [Default AntD props]      Component absolutely maintain default AntD button properties (check Ant documentation: https://ant.design/components/button/#API).
 * @param {oneOf}       [Packages]                Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}       [Extra CSS props]         Additional CSS properties which could be applyed.
 * @param {oneOf}       [variant]                 Use to change button type.
 *
 * @return {ReactComponent}
 */

const Button = styled(AntButton)(({ theme }) =>
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
      transition: true
    }),
    variant({
      variants: {
        white: {
          color: 'var(--btn-white-color)',
          bg: 'var(--btn-white-bg)',
          borderColor: 'var(--btn-white-border)',
          '&:hover': {
            color: 'var(--btn-text-hover-color)',
            bg: 'var(--btn-white-hover-bg)',
            borderColor: 'var(--btn-white-hover-border)'
          }
        }
      }
    })
  )
)

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
