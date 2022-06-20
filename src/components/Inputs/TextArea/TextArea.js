import React, { Fragment, forwardRef } from 'react'
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography
} from 'styled-system'

import { Input as AntInput } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

TextArea.displayName = 'TextArea'
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
