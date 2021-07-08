import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

/**
 * AppHeaderWrapper (26 Mar 2021)
 *
 * @since      0.0.1
 *
 * @param {node}         [children]                  Use to insert any node within component.
 *
 * @return {ReactComponent}
 */

const AppHeaderWrapper = (props) => {
  const { children } = props

  return <Box {...props}>{children}</Box>
}

AppHeaderWrapper.propTypes = {
  children: PropTypes.node
}

export default AppHeaderWrapper
