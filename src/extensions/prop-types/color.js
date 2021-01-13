import PropTypes from 'prop-types'

const colorPropTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default colorPropTypes
