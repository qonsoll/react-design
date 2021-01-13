import styled, { css } from 'styled-components'
import { base } from '../../../design/design-system'
import { mediaQuery, column, listMediaQueries } from '../../../mixins'
import {
  space,
  color,
  layout,
  background,
  border,
  shadow,
  system
} from 'styled-system'
import {
  spacePropTypes,
  colorPropTypes,
  layoutPropTypes,
  backgroundPropTypes,
  borderPropTypes,
  shadowPropTypes,
  hoverPropTypes
} from '../../../extensions/prop-types'
import PropTypes from 'prop-types'

// TODO
/**
 * Implement col
 * Add flexbox possibilities
 * Show all possible combinations in docs
 */

const Col = styled.div`
  box-sizing: border-box;
  flex: ${(props) => (props.cw ? '0 0 auto' : '1 0 0%')};
  width: ${(props) => !props.cw && 'auto'};
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${system({
    cw: {
      property: 'width',
      transform: (value, scale) =>
        value === 'auto' ? value : `${(100 / 12) * parseInt(value)}%`
    },
    order: {
      property: 'order'
    }
  })}
  ${(props) => {
    const breakpoints =
      props?.theme?.base?.grid?.breakpoints || base.grid.breakpoints
    const gutters = props?.theme?.base?.grid?.gutters || base.grid.gutters
    return css`
      padding-left: ${base.grid.gutters.xs};
      padding-right: ${base.grid.gutters.xs};
      ${listMediaQueries({
        breakpoints,
        valuesMap: gutters,
        properties: ['padding-left', 'padding-right']
      })}
    `
  }}
`

Col.propTypes = {
  cw: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  order: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  ...spacePropTypes,
  ...colorPropTypes,
  ...layoutPropTypes,
  ...backgroundPropTypes,
  ...borderPropTypes,
  ...shadowPropTypes,
  ...hoverPropTypes
}

export default Col
