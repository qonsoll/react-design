import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card as AntCard } from 'antd'
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
 * Card (16 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {object}      [Default AntD props]      Component absolutely maintain default AntD card properties (check Ant documentation: https://ant.design/components/card/#Card).
 * @param {boolean}     [shadowless]              Use to disable card shadow.
 * @param {oneOf}       [Packages]                Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}       [Extra CSS props]         Additional CSS properties which could be applyed.
 *
 * @return {ReactComponent}
 */

const StyledAntCard = styled(AntCard)(
  compose(
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
    system({ transform: true })
  )
)

const Card = (props) => {
  const { shadowless } = props

  const boxShadowProps = shadowless ? 'unset' : 'var(--card-radius)'

  return <StyledAntCard boxShadow={boxShadowProps} {...props} />
}

Card.propTypes = {
  'Default AntD props': PropTypes.object,
  shadowless: PropTypes.bool,
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
  'Extra CSS props': PropTypes.oneOf(['transform'])
}
Card.defaultProps = {
  shadowless: false
}

export default Card
