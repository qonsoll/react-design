import PropTypes from 'prop-types'
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

/**
 * Img (19 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {string.isRequired}       [src]                     Image url.
 * @param {string.isRequired}       [alt]                     Image alt-description.
 * @param {oneOf}                   [Packages]                Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}                   [Extra CSS props]         Additional CSS properties which could be applyed.
 *
 * @return {ReactComponent}
 */

const Img = styled('img')(
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
      objectFit: true
    })
  )
)

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
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
    'objectFit'
  ])
}

export default Img
