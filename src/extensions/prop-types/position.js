import PropTypes from 'prop-types'
// import CSSPropValues from '../../CSSPropValues'

const positionPropTypes = {
  position: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default positionPropTypes
