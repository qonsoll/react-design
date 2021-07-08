import React, { Fragment, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Input as AntInput } from 'antd'
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
 * TextArea (16 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {object}      [Default AntD props]      Component absolutely maintain default AntD textarea properties (check Ant documentation: https://ant.design/components/input/#Input.TextArea).
 * @param {oneOf}       [Packages]                Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}       [Extra CSS props]         Additional CSS properties which could be applyed.
 *
 * @return {ReactComponent}
 */

const StyledTextArea = styled(AntInput.TextArea)(
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

const TextArea = forwardRef((props, ref) => {
  return (
    <Fragment>
      {props.size === 'large' ? (
        <StyledTextArea {...props} ref={ref} fontSize={20} />
      ) : (
        <StyledTextArea {...props} ref={ref} />
      )}
    </Fragment>
  )
})

TextArea.propTypes = {
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
  'Extra CSS props': PropTypes.oneOf(['transform'])
}

export default TextArea
