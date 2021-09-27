import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'
import { Tooltip } from 'antd'
import { EditOutlined } from '@ant-design/icons'

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
          placement={tooltipPlacement || DEFAULT_PROPS.tooltipPlacement}>
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
          onClick={onClick}>
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
    target: PropTypes.string
  })
}
Edit.defaultProps = {
  tooltipPlacement: 'bottom',
  shape: 'default'
}

export default Edit
