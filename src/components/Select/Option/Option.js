import React from 'react'
import PropTypes from 'prop-types'
import { Select as AntSelect } from 'antd'
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

const StyledOption = styled(AntSelect.Option)(
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
    })
  )
)

const Option = (props) => <StyledOption {...props} />

Option.isSelectOption = true
Option.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Option
