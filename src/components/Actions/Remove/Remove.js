import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Typography, Tooltip, Popconfirm } from 'antd'
import Button from '../../Button'
import { DeleteOutlined } from '@ant-design/icons'

/**
 * Remove button (19 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {string}      [text]                      Use to add text label for button button.
 * @param {string}      [type]                      Use to change button type.
 * @param {node}        [icon]                      Use to add icon at the left side inside button (shortcut, worked the same as property "iconLeft").
 * @param {node}        [iconLeft]                  Use to add icon at the left side inside button (worked the same as property "icon").
 * @param {node}        [iconRight]                 Use to add icon at the right side inside button.
 * @param {oneOf}       [shape]                     Use to set button shape.
 * @param {string}      [tooltip]                   Use to enable tooltip and specify text for it. Tooltip works ONLY when button without text.
 * @param {oneOf}       [tooltipPlacement]          Use to specify tooltip position.
 * @param {string}      [question]                  Use to specify remove question.
 * @param {function}    [onSubmit]                  Set the handler to handle submit event.
 * @param {string}      [confirmLabel]              Use to specify submit button text.
 * @param {function}    [onCancel]                  Set the handler to handle cancel event.
 * @param {string}      [cancelLabel]               Use to specify cancel button text.
 * @param {string}      [popconfirmPlacement]       Use to specify popconfirm placement.
 * @param {string}      [itemName]                  Use to set item name.
 * @param {object}      [props]                     Rest of the button properties are similar as in default AntD button (check Ant documentation: https://ant.design/components/button/).
 *
 * @return {ReactComponent}
 */

const DEFAULT_PROPS = {
  tooltipPlacement: 'bottom',
  question: 'Are you sure you want to remove',
  confirmLabel: 'Yes, remove',
  cancelLabel: 'No, keep',
  itemName: 'it'
}

const ClinicRemove = (props) => {
  const {
    text,
    type,
    icon,
    iconLeft,
    iconRight,
    shape,
    tooltip,
    tooltipPlacement,
    question,
    onSubmit,
    confirmLabel,
    onCancel,
    cancelLabel,
    popconfirmPlacement,
    itemName
  } = props

  const iconNode = typeof icon === 'boolean' ? <DeleteOutlined /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <DeleteOutlined /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <DeleteOutlined /> : iconRight

  return (
    <Popconfirm
      title={
        <Fragment>
          <Typography.Text>
            {question || DEFAULT_PROPS.question}
          </Typography.Text>
          {itemName && <Typography.Text strong> {itemName}</Typography.Text>}
          <Typography.Text>?</Typography.Text>
        </Fragment>
      }
      onConfirm={onSubmit}
      onCancel={onCancel}
      okButtonProps={{ danger: true }}
      okText={`${confirmLabel || DEFAULT_PROPS.confirmLabel} ${
        itemName || DEFAULT_PROPS.itemName
      }`}
      cancelText={`${cancelLabel || DEFAULT_PROPS.cancelLabel} ${
        itemName || DEFAULT_PROPS.itemName
      }`}
      placement={popconfirmPlacement}
    >
      {!text && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip
          title={tooltip}
          placement={tooltipPlacement || DEFAULT_PROPS.tooltipPlacement}
        >
          <Button
            {...props}
            type={type || DEFAULT_PROPS.type}
            icon={iconNode || iconNodeLeft || iconNodeRight}
            danger
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type || DEFAULT_PROPS.type}
          icon={iconNode || iconNodeLeft}
          danger
        >
          {text}
          {iconNodeRight}
        </Button>
      )}
    </Popconfirm>
  )
}

ClinicRemove.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'text',
    'link',
    'dashed',
    'ghost'
  ]),
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  iconLeft: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  iconRight: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  shape: PropTypes.oneOf(['default', 'circle', 'round']),
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
  question: PropTypes.string,
  onSubmit: PropTypes.func,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func,
  cancelLabel: PropTypes.string,
  popconfirmPlacement: PropTypes.oneOf([
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
  itemName: PropTypes.string,
  props: PropTypes.object
}
ClinicRemove.defaultProps = {
  tooltipPlacement: 'bottom',
  question: 'Are you sure you want to remove',
  confirmLabel: 'Yes, remove',
  cancelLabel: 'No, keep',
  itemName: 'it',
  shape: 'default'
}

export default ClinicRemove
