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

import { Select as AntdSelect } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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
