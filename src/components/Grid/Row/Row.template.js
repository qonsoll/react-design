import styled, { css } from 'styled-components'
import { base } from '../../../design/design-system'
import { valuesByMediaQuery, listMediaQueries } from '../../../mixins'
import { space, color, layout, background, border, shadow } from 'styled-system'
import { hover } from '../../../extensions'
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
 * Add vertical and horizontal gutters + g='0'
 * Write JSON file with all properties
 */

const vMap = {
  top: 'align-items: flex-start;',
  center: 'align-items: center;',
  bottom: 'align-items: flex-end'
}

const hMap = {
  left: 'justify-content: flex-start;',
  center: 'justify-content: center;',
  right: 'justify-content: flex-end;',
  around: 'justify-content: space-around;',
  between: 'justify-content: space-between;',
  evenly: 'justify-content: space-evenly'
}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${hover}
  ${(props) => {
    if (props.v) {
      const breakpoints =
        props?.theme?.base?.grid?.breakpoints || base.grid.breakpoints
      return Array.isArray(props.v)
        ? valuesByMediaQuery({
            breakpoints,
            values: props.v,
            map: vMap
          })
        : css`
            ${vMap[props.v]}
          `
    }
  }}
  ${(props) => {
    if (props.h) {
      const breakpoints =
        props?.theme?.base?.grid?.breakpoints || base.grid.breakpoints
      return Array.isArray(props.h)
        ? valuesByMediaQuery({
            breakpoints,
            values: props.h,
            map: hMap
          })
        : css`
            ${hMap[props.h]}
          `
    }
  }}
  ${(props) => {
    if (!props.disableDynamicGutters) {
      const breakpoints =
        props?.theme?.base?.grid?.breakpoints || base.grid.breakpoints
      const negativeGutters =
        props?.theme?.base?.grid?.negativeGutters || base.grid.negativeGutters
      return css`
        margin-left: ${base.grid.negativeGutters.xs};
        margin-right: ${base.grid.negativeGutters.xs};
        ${listMediaQueries({
          breakpoints,
          valuesMap: negativeGutters,
          properties: ['margin-left', 'margin-right']
        })}
      `
    }
  }}
  ${(props) => {
    if (props.noGutters) {
      return css`
        & > div {
          padding-left: 0;
          padding-right: 0;
        }
      `
    }
  }}
`

Row.propTypes = {
  v: PropTypes.oneOf(Object.keys(vMap)),
  h: PropTypes.oneOf(Object.keys(hMap)),
  noGutters: PropTypes.bool,
  disableDynamicGutters: PropTypes.bool,
  ...spacePropTypes,
  ...colorPropTypes,
  ...layoutPropTypes,
  ...backgroundPropTypes,
  ...borderPropTypes,
  ...shadowPropTypes,
  ...hoverPropTypes
}

export default Row
