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

const ANTD_CARD_PROPS = [
  'actions',
  'activeTabKey',
  'bodyStyle',
  'bordered',
  'cover',
  'defaultActiveTabKey',
  'extra',
  'headStyle',
  'hoverable',
  'loading',
  'size',
  'tabBarExtraContent',
  'tabList',
  'tabProps',
  'title',
  'type',
  'onTabChange',
  'hoverable',
  'avatar',
  'description'
]

const StyledAntCard = styled(AntCard).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ANTD_CARD_PROPS.includes(prop) || defaultValidatorFn(prop)
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
  actions: PropTypes.array,
  activeTabKey: PropTypes.string,
  bodyStyle: PropTypes.object,
  bordered: PropTypes.bool,
  cover: PropTypes.node,
  defaultActiveTabKey: PropTypes.string,
  extra: PropTypes.node,
  headStyle: PropTypes.object,
  hoverable: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default']),
  tabBarExtraContent: PropTypes.node,
  tabList: PropTypes.array,
  title: PropTypes.node,
  type: PropTypes.string,
  onTabChange: PropTypes.func,
  shadowless: PropTypes.bool
}
Card.defaultProps = {
  shadowless: false
}

export default Card
