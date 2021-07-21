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
