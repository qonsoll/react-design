import React from 'react'
import PropTypes from 'prop-types'
import { Spin as AntSpin } from 'antd'
import styled from 'styled-components'
import { compose, color, position } from 'styled-system'

const StyledSpin = styled(AntSpin)(compose(color, position))

const Spin = (props) => {
  return <StyledSpin {...props} />
}

Spin.propTypes = {
  opacity: PropTypes.string
}

export default Spin
