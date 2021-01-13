import PropTypes from 'prop-types'
import CSSPropValues from '../../CSSPropValues'

const gridPropTypes = {
  gridGap: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  gridRowGap: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  gridColumnGap: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  gridColumn: PropTypes.string,
  gridRow: PropTypes.string,
  gridArea: PropTypes.string,
  gridAutoFlow: PropTypes.oneOf(CSSPropValues.gridAutoFlow.options),
  gridAutoRows: PropTypes.string,
  gridAutoColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  gridTemplateAreas: PropTypes.string
}

export default gridPropTypes
