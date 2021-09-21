import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'
// import { Typography as AntTypography } from 'antd'
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
