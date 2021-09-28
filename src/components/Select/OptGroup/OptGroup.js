import React from 'react'
import PropTypes from 'prop-types'
import { Select as AntdSelect } from 'antd'
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

/** FIXME component doesn`t work with styled-component */
const StyledOptGroup = styled(AntdSelect.OptGroup)(
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

const OptGroup = (props) => <StyledOptGroup {...props} />

OptGroup.isSelectOptGroup = true
OptGroup.propTypes = {
  key: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default OptGroup
