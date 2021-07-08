import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'
import { Tooltip } from 'antd'
import { EditOutlined } from '@ant-design/icons'

/**
 * Edit button (16 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {string}      [text]                Use to add text label for button button.
 * @param {node}        [icon]                Use to add icon at the left side inside button (shortcut, worked the same as property "iconLeft").
 * @param {node}        [iconLeft]            Use to add icon at the left side inside button (worked the same as property "icon").
 * @param {node}        [iconRight]           Use to add icon at the right side inside button.
 * @param {oneOf}       [shape]               Use to set button shape.
 * @param {function}    [onClick]             Set the handler to handle click event.
 * @param {string}      [tooltip]             Use to enable tooltip and specify text for it. Tooltip works ONLY when button without text.
 * @param {oneOf}       [tooltipPlacement]    Use to specify tooltip position.
 * @param {object}      [props]               Rest of the button properties are similar as in default AntD button (check Ant documentation: https://ant.design/components/button/).
 *
 * @return {ReactComponent}
 */

const DEFAULT_PROPS = {
  tooltipPlacement: 'bottom'
}

const Edit = (props) => {
  const {
    text,
    icon,
    iconLeft,
    iconRight,
    onClick,
    shape,
    tooltip,
    tooltipPlacement
  } = props

  const iconNode = typeof icon === 'boolean' ? <EditOutlined /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <EditOutlined /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <EditOutlined /> : iconRight

  return (
    <Fragment>
      {!text && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip
          title={tooltip}
          placement={tooltipPlacement || DEFAULT_PROPS.tooltipPlacement}
        >
          <Button
            {...props}
            icon={iconNode || iconNodeLeft || iconNodeRight}
            danger={false}
            onClick={onClick}
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          icon={iconNode || iconNodeLeft}
          danger={false}
          onClick={onClick}
        >
          {text}
          {iconNodeRight}
        </Button>
      )}
    </Fragment>
  )
}

Edit.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  iconLeft: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  iconRight: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  shape: PropTypes.oneOf(['default', 'circle', 'round']),
  onClick: PropTypes.func,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
  ]),
  props: PropTypes.object
}
Edit.defaultProps = {
  tooltipPlacement: 'bottom',
  shape: 'default'
}

export default Edit
