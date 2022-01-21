import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Badge as AntBadge } from 'antd'

const StyledRibbon = styled(AntBadge.Ribbon)`
  ${({ textColor, offset, placement }) => `
  color: ${textColor};
  top: ${offset?.[0]};
  left: ${placement === 'start' && offset?.[1]};
  right: ${placement === 'end' && offset?.[1]};
`}
`

const Ribbon = (props) => {
  const { color, bg, offset, children, ...rest } = props

  return (
    <StyledRibbon {...rest} color={bg} offset={offset} textColor={color}>
      {children}
    </StyledRibbon>
  )
}

Ribbon.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  offset: PropTypes.array,
  children: PropTypes.node
}

export default Ribbon
