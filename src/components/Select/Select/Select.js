import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography
} from 'styled-system'

import { Select as AntSelect } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled(AntSelect)(
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    system({
      whiteSpace: true,
      cursor: true,
      wordBreak: true,
      zoom: true,
      transform: true,
      transition: true
    })
  )
)

const Select = (props) => <StyledSelect {...props} />

Select.OptGroup = AntSelect.OptGroup
Select.propTypes = {
  allowClear: PropTypes.bool,
  autoClearSearchValue: PropTypes.bool,
  autoFocus: PropTypes.bool,
  bordered: PropTypes.bool,
  clearIcon: PropTypes.node,
  defaultActiveFirstOption: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
    PropTypes.number
  ]),
  disabled: PropTypes.bool,
  dropdownClassName: PropTypes.string,
  dropdownMatchSelectWidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  dropdownRender: PropTypes.func,
  dropdownStyle: PropTypes.object,
  fieldNames: PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.string,
    options: PropTypes.any
  }),
  filterOption: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  filterSort: PropTypes.func,
  getPopupContainer: PropTypes.func,
  labelInValue: PropTypes.bool,
  listHeight: PropTypes.number,
  loading: PropTypes.bool,
  maxTagCount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['responsive'])
  ]),
  maxTagPlaceholder: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  maxTagTextLength: PropTypes.number,
  menuItemSelectedIcon: PropTypes.node,
  mode: PropTypes.oneOf(['multiple', 'tags']),
  notFoundContent: PropTypes.node,
  open: PropTypes.bool,
  optionFilterProp: PropTypes.string,
  optionLabelProp: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.node,
  removeIcon: PropTypes.node,
  searchValue: PropTypes.string,
  showArrow: PropTypes.bool,
  showSearch: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'small', 'middle']),
  suffixIcon: PropTypes.node,
  tagRender: PropTypes.func,
  tokenSeparators: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number
  ]),
  virtual: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onDeselect: PropTypes.func,
  onDropdownVisibleChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInputKeyDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onPopupScroll: PropTypes.func,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func
}

export default Select
