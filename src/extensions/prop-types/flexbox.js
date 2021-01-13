import PropTypes from 'prop-types'
import CSSPropValues from '../../CSSPropValues'

const flexboxPropTypes = {
  alignItems: PropTypes.oneOf(CSSPropValues.alignItems.options),
  alignContent: PropTypes.oneOf(CSSPropValues.alignContent.options),
  justifyContent: PropTypes.oneOf(CSSPropValues.justifyContent.options),
  flexWrap: PropTypes.oneOf(CSSPropValues.flexWrap.options),
  flexDirection: PropTypes.oneOf(CSSPropValues.flexDirection.options),
  flex: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexShrink: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexBasis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifySelf: PropTypes.oneOf(CSSPropValues.justifySelf.options),
  alignSelf: PropTypes.oneOf(CSSPropValues.alignSelf.options),
  order: PropTypes.number
}

export default flexboxPropTypes
