import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../Grid/Row'
import Col from '../../Grid/Col'
import { Checkbox } from 'antd'

/**
 * Advanced list component (6 Sep 2020)
 *
 * Renders list of items with action section (could be form)
 *
 * @since      0.0.1
 *
 * @param {object}    item            Component input data
 * @param {node}      children        Component to render
 * @param {number}    [mb]            Margin bottom
 * @param {function}  isSelected      Function that helps to get status of the item
 * @param {function}  toggle          Adding/removing item to/from array
 *
 * @return {node}
 */

const SelectableItem = (props) => {
  // Props destructuring
  const { item, children, mb, isSelected, toggle } = props

  return (
    <Row mb={mb} alignItems='center' justifyContent='center'>
      <Col>
        <Checkbox
          checked={isSelected(item && item.id)}
          onClick={() => toggle(item.id)}
        />
      </Col>
      <Col flex='1 1 0'>{children}</Col>
    </Row>
  )
}

SelectableItem.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node,
  mb: PropTypes.number,
  isSelected: PropTypes.func,
  toggle: PropTypes.func
}

export default SelectableItem
