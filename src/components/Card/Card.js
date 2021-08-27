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

const StyledAntCard = styled(AntCard).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})(
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
