import React from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'
import NavigationItem from '../NavigationItem'

const Navigation = (props) => {
  const { vertical, color, dataSource, isCollapsed } = props

  return (
    <Box
      height='inherit'
      display='flex'
      flexDirection={vertical && 'column'}
      color={color || 'var(--ql-navigation-color)'}
      alignItems={isCollapsed && 'center'}
    >
      {dataSource.map(({ ...arg }, index) => (
        <NavigationItem
          key={index}
          vertical={vertical}
          isCollapsed={isCollapsed}
          {...arg}
        />
      ))}
    </Box>
  )
}

Navigation.propTypes = {
  dataSource: PropTypes.array,
  vertical: PropTypes.bool,
  color: PropTypes.string
}

export default Navigation
