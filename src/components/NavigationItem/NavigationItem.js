import React from 'react'
// import PropTypes from 'prop-types'
import Box from '../Box'
// import Container from '../../Grid/Container'
// import Row from '../../Grid/Row'
// import Col from '../../Grid/Col'
import { SettingOutlined } from '@ant-design/icons'

const NavigationItem = (props) => {
  // const { height, layout } = props

  return (
    <Box display='flex'>
      <SettingOutlined size={32} />
      Item
    </Box>
  )
}

// NavigationItem.propTypes = {
//   height: PropTypes.number,
//   layout: PropTypes.array
// }

export default NavigationItem
