import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-input-2'
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
 * PhoneInput (24 Mar 2021)
 *
 * @since      0.0.1
 *
 * @param {object}      [Default react-phone-input-2 props]      Component absolutely maintain default react-phone-input-2 input properties (check documentation: https://github.com/bl00mber/react-phone-input-2).
 * @param {oneOf}       [Packages]                               Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}       [Extra CSS props]                        Additional CSS properties which could be applyed.
 * @param {oneOf}       [size]                                   Allow you to specify input size.
 *
 * @return {ReactComponent}
 */

const StyledReactPhoneInput = styled(PhoneInput)(
  compose(
    typography,
    space,
    color,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    system({ transform: true })
  )
)

const phoneInputSizeMap = {
  sm: 'sm',
  lg: 'lg'
}

const StyledPhoneInput = forwardRef((props, ref) => {
  const { size } = props

  return (
    <StyledReactPhoneInput
      inputClass={`ant-input ant-input-${phoneInputSizeMap[size]}`}
      ref={ref}
      {...props}
    />
  )
})

StyledPhoneInput.propTypes = {
  'Default react-phone-input-2 props': PropTypes.object,
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
  size: PropTypes.oneOf(['sm', 'lg']),
  'Extra CSS props': PropTypes.oneOf(['transform'])
}

export default StyledPhoneInput
