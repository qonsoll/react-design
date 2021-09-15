import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-input-2'
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

const StyledReactPhoneInput = styled(PhoneInput)(
  compose(
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
  )
)

const phoneInputSizeMap = {
  sm: 'sm',
  lg: 'lg'
}

const StyledPhoneInput = forwardRef((props, ref) => {
  const { size } = props

  return (
    <StyledReactPhoneInput
      inputClass={`ant-input ant-input-${phoneInputSizeMap[size]}`}
      ref={ref}
      {...props}
    />
  )
})

StyledPhoneInput.propTypes = {
  country: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,

  onlyCountries: PropTypes.arrayOf(PropTypes.string),
  preferredCountries: PropTypes.arrayOf(PropTypes.string),
  excludeCountries: PropTypes.arrayOf(PropTypes.string),

  placeholder: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  searchNotFound: PropTypes.string,
  disabled: PropTypes.bool,

  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  dropdownStyle: PropTypes.object,
  searchStyle: PropTypes.object,

  containerClass: PropTypes.string,
  inputClass: PropTypes.string,
  buttonClass: PropTypes.string,
  dropdownClass: PropTypes.string,
  searchClass: PropTypes.string,

  autoFormat: PropTypes.bool,

  enableAreaCodes: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  enableTerritories: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),

  disableCountryCode: PropTypes.bool,
  disableDropdown: PropTypes.bool,
  enableLongNumbers: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  countryCodeEditable: PropTypes.bool,
  enableSearch: PropTypes.bool,
  disableSearchIcon: PropTypes.bool,
  disableInitialCountryGuess: PropTypes.bool,
  disableCountryGuess: PropTypes.bool,

  regions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),

  inputProps: PropTypes.object,
  localization: PropTypes.object,
  masks: PropTypes.object,
  areaCodes: PropTypes.object,

  preserveOrder: PropTypes.arrayOf(PropTypes.string),

  defaultMask: PropTypes.string,
  alwaysDefaultMask: PropTypes.bool,
  prefix: PropTypes.string,
  copyNumbersOnly: PropTypes.bool,
  renderStringAsFlag: PropTypes.string,
  autocompleteSearch: PropTypes.bool,
  jumpCursorToEnd: PropTypes.bool,
  priority: PropTypes.object,
  enableAreaCodeStretch: PropTypes.bool,
  enableClickOutside: PropTypes.bool,
  showDropdown: PropTypes.bool,

  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onEnterKeyPress: PropTypes.func,
  isValid: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  defaultErrorMessage: PropTypes.string,
  specialLabel: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default StyledPhoneInput
