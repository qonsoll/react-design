import { color, compose, position } from 'styled-system'

import { Spin as AntSpin } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSpin = styled(AntSpin)(compose(color, position))

const Spin = (props) => {
  return <StyledSpin {...props} />
}

Spin.propTypes = {
  opacity: PropTypes.string
}

export default Spin
