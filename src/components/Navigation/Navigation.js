import React from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'
import NavigationItem from '../NavigationItem'

const Navigation = (props) => {
  const { dataSource } = props

  return (
    <Box display='flex' flexDirection=''>
      {dataSource.map(({ ...arg }, index) => (
        <NavigationItem key={index} {...arg} />
      ))}
    </Box>
  )
}

Navigation.propTypes = {
  dataSource: PropTypes.array
}

export default Navigation
