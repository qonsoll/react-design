import styled, { css } from 'styled-components'
import { base, sizes } from '../../../design/design-system'
import { listMediaQueries } from '../../../mixins'
import {
  space,
  color,
  layout,
  background,
  border,
  position,
  shadow
} from 'styled-system'
import PropTypes from 'prop-types'
import {
  spacePropTypes,
  colorPropTypes,
  layoutPropTypes,
  backgroundPropTypes,
  borderPropTypes,
  positionPropTypes,
  shadowPropTypes,
  hoverPropTypes
} from '../../../extensions/prop-types'
import { hover } from '../../../extensions'

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
  ${space}
  ${color}
  ${background}
  ${border}
  ${shadow}
  ${layout}
  ${position}
  ${hover}
  ${(props) => {
    if (props.bounded) {
      const breakpoints =
        props?.theme?.base?.grid?.breakpoints || base.grid.breakpoints
      const containerSizes = props?.theme?.sizes?.container || sizes.container
      return css`
        ${listMediaQueries({
          breakpoints,
          valuesMap: containerSizes,
          properties: ['max-width']
        })}
      `
    }
  }}
  ${(props) => {
    if (props.gutters) {
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
    } else {
      return css`
        & > div {
          margin-left: 0;
          margin-right: 0;
        }
      `
    }
  }}
  ${(props) => {
    if (props.fullHeight) {
      return css`
        height: 100%;
      `
    }
  }}
`

Container.propTypes = {
  // Specific for this component
  bounded: PropTypes.bool,
  gutters: PropTypes.bool,
  fullHeight: PropTypes.bool,
  // Box prop types
  ...spacePropTypes,
  ...colorPropTypes,
  ...backgroundPropTypes,
  ...borderPropTypes,
  ...shadowPropTypes,
  ...layoutPropTypes,
  ...positionPropTypes,
  ...hoverPropTypes
}

export default Container
