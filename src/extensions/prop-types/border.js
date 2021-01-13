import PropTypes from 'prop-types'
import CSSPropValues from '../../CSSPropValues'

const borderPropTypes = {
  border: PropTypes.string,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.oneOf(CSSPropValues.borderStyle.options),
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderTop: PropTypes.string,
  borderTopWidth: PropTypes.string,
  borderTopStyle: PropTypes.oneOf(CSSPropValues.borderStyle.options),
  borderTopColor: PropTypes.string,
  borderTopLeftRadius: PropTypes.string,
  borderTopRightRadius: PropTypes.string,
  borderRight: PropTypes.string,
  borderRightWidth: PropTypes.string,
  borderRightStyle: PropTypes.oneOf(CSSPropValues.borderStyle.options),
  borderRightColor: PropTypes.string,
  borderBottom: PropTypes.string,
  borderBottomWidth: PropTypes.string,
  borderBottomStyle: PropTypes.oneOf(CSSPropValues.borderStyle.options),
  borderBottomColor: PropTypes.string,
  borderBottomLeftRadius: PropTypes.string,
  borderBottomRightRadius: PropTypes.string,
  borderLeft: PropTypes.string,
  borderLeftWidth: PropTypes.string,
  borderLeftStyle: PropTypes.oneOf(CSSPropValues.borderStyle.options),
  borderLeftColor: PropTypes.string,
  borderX: PropTypes.string,
  borderY: PropTypes.string
}

export default borderPropTypes
