import React, { Fragment, forwardRef } from 'react'

import Button from '../../Button'
import PropTypes from 'prop-types'
import { SaveOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

const DEFAULT_PROPS = {
  tooltipPlacement: 'bottom'
}

const Save = forwardRef((props, ref) => {
  const {
    text,
    type,
    icon,
    iconLeft,
    iconRight,
    onClick,
    shape,
    tooltip,
    tooltipPlacement
  } = props

  const iconNode = typeof icon === 'boolean' ? <SaveOutlined /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <SaveOutlined /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <SaveOutlined /> : iconRight

  return (
    <Fragment>
      {!text && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip
          title={tooltip}
          placement={tooltipPlacement || DEFAULT_PROPS.tooltipPlacement}
        >
          <Button
            {...props}
            type={type}
            icon={iconNode || iconNodeLeft || iconNodeRight}
            danger={false}
            onClick={onClick}
            ref={ref}
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type}
          icon={iconNode || iconNodeLeft}
          danger={false}
          onClick={onClick}
          ref={ref}
        >
          {text || 'Save'}
          {iconNodeRight}
        </Button>
      )}
    </Fragment>
  )
})

Save.displayName = 'Save'
Save.propTypes = {
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
Save.defaultProps = {
  tooltipPlacement: 'bottom'
}

export default Save
