import { Checkbox } from 'antd'
import Col from '../../Grid/Col'
import PropTypes from 'prop-types'
import React from 'react'
import Row from '../../Grid/Row'

const SelectableItem = (props) => {
  // Props destructuring
  const { item, children, mb, isSelected, toggle } = props

  return (
    <Row mb={mb} alignItems="center" justifyContent="center">
      <Col>
        <Checkbox
          checked={isSelected(item && item.id)}
          onClick={() => toggle(item.id)}
        />
      </Col>
      <Col flex="1 1 0">{children}</Col>
    </Row>
  )
}

SelectableItem.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node,
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  isSelected: PropTypes.bool,
  toggle: PropTypes.func
}

export default SelectableItem
