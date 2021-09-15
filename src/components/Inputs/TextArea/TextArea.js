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
  allowClear: PropTypes.bool,
  autoSize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  bordered: PropTypes.bool,
  defaultValue: PropTypes.string,
  maxLength: PropTypes.number,
  showCount: PropTypes.bool,
  value: PropTypes.string,
  onPressEnter: PropTypes.func,
  onResize: PropTypes.func,
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default TextArea
