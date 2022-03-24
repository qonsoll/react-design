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

import { Empty } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledEmpty = styled(Empty)(
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
      transform: true
    })
  )
)

const NoData = (props) => {
  return <StyledEmpty {...props} />
}

NoData.propTypes = {
  description: PropTypes.string,
  image: PropTypes.node,
  imageStyle: PropTypes.object
}

NoData.defaultProps = {
  description: 'No Data'
}

export default NoData
