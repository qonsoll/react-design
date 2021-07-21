import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../Grid/Row'
import Col from '../../Grid/Col'
import { Checkbox } from 'antd'

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
