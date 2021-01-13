import PropTypes from 'prop-types'
import CSSPropValues from '../../CSSPropValues'

const layoutPropTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  size: PropTypes.string,
  display: PropTypes.oneOf(CSSPropValues.display.options),
  verticalAlign: PropTypes.oneOf(CSSPropValues.verticalAlign.options),
  overflow: PropTypes.oneOf(CSSPropValues.overflow.options),
  overflowX: PropTypes.oneOf(CSSPropValues.overflowX.options),
  overflowY: PropTypes.oneOf(CSSPropValues.overflowY.options)
}

export default layoutPropTypes
