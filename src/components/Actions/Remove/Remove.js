import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Typography, Tooltip, Popconfirm } from 'antd'
import Button from '../../Button'
import { DeleteOutlined } from '@ant-design/icons'

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
    disabled,
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
      disabled={disabled}>
      {!text && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip
          title={tooltip}
          placement={tooltipPlacement || DEFAULT_PROPS.tooltipPlacement}
          // visible={!disabled} вона тепер завжди видима... навіть якщо тексту нема
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
          danger>
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
  shape: PropTypes.oneOf(['default', 'circle', 'rounded']),
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
