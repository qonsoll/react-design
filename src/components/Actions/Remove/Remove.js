import { Popconfirm, Tooltip, Typography } from 'antd'
import React, { Fragment, forwardRef } from 'react'

import Button from '../../Button'
import { DeleteOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const DEFAULT_PROPS = {
  tooltipPlacement: 'bottom',
  question: 'Are you sure you want to remove',
  confirmLabel: 'Yes, remove',
  cancelLabel: 'No, keep',
  itemName: 'it'
}

const Remove = forwardRef((props, ref) => {
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
      disabled={disabled}
    >
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
            ref={ref}
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type || DEFAULT_PROPS.type}
          icon={iconNode || iconNodeLeft}
          danger
          ref={ref}
        >
          {text}
          {iconNodeRight}
        </Button>
      )}
    </Popconfirm>
  )
})

Remove.displayName = 'Remove'
Remove.propTypes = {
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
  props: PropTypes.shape({
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    ghost: PropTypes.bool,
    href: PropTypes.string,
    htmlType: PropTypes.string,
    loading: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({ delay: PropTypes.number })
    ]),
    size: PropTypes.oneOf(['small', 'middle', 'large']),
    target: PropTypes.string,
    onClick: PropTypes.func
  })
}
Remove.defaultProps = {
  tooltipPlacement: 'bottom',
  question: 'Are you sure you want to remove',
  confirmLabel: 'Yes, remove',
  cancelLabel: 'No, keep',
  itemName: 'it',
  shape: 'default'
}

export default Remove
