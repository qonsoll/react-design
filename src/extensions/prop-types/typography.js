import PropTypes from 'prop-types'
import CSSPropValues from '../../CSSPropValues'

const typographyPropTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.oneOf(CSSPropValues.textAlign.options),
  fontStyle: PropTypes.oneOf(CSSPropValues.fontStyle.options)
}

export default typographyPropTypes
