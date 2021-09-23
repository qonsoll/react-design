import PropTypes from 'prop-types'
import { Input as AntInput } from 'antd'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  system
} from 'styled-system'

const ANTD_INPUT_PROPS = [
  'addonAfter',
  'addonBefore',
  'allowClear',
  'bordered',
  'defaultValue',
  'disabled',
  'id',
  'maxLength',
  'prefix',
  'size',
  'suffix',
  'type',
  'value'
]
const Input = styled(AntInput).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ANTD_INPUT_PROPS.includes(prop) || defaultValidatorFn(prop)
})`
  &&&& {
    ${({ allowClear }) =>
      allowClear &&
      `
      &>input{
        box-shadow: unset;
     } `}
    ${compose(
      typography,
      space,
      color,
      layout,
      flexbox,
      background,
      border,
      position,
      shadow,
      system({ transform: true })
    )}
  }
`

Input.propTypes = {
  addonAfter: PropTypes.node,
  addonBefore: PropTypes.node,
  allowClear: PropTypes.bool,
  bordered: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  prefix: PropTypes.node,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  suffix: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default Input
