import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Badge as AntBadge } from 'antd'

const StyledRibbon = styled(AntBadge.Ribbon)`
  ${({ textColor, display, top, bottom, color }) => ` 
  display: ${display};
  top: ${top};
  bottom: ${bottom};

  .ant-ribbon {
    background-color: ${'var(--ql-ribbon-bg)' || color}
  }
  // .ant-ribbon-text {
  //   color: ${'var(--ql-ribbon-color)' || textColor};
  // }
`}
`

const Ribbon = (props) => {
  const { color, bg, top, bottom, children, display, ...rest } = props

  // const computedTop = typeof top === 'number' ? top + 'px' : top
  // const computedBottom = typeof bottom === 'number' ? bottom + 'px' : bottom

  return (
    <StyledRibbon
      {...rest}
      color={bg}
      display={display}
      textColor={color}
      top={top}
      bottom={bottom}
    >
      {children}
    </StyledRibbon>
  )
}

Ribbon.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  display: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Ribbon
