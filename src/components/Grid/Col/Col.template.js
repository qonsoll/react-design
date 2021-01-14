import { memo } from 'react'
import styled, { css } from 'styled-components'
import { base } from '../../../design/design-system'
import { mediaQuery, listMediaQueries } from '../../../mixins'
import { hover } from '../../../extensions'
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

const FLEX = {
  CONTENT_SPACE: '0 0 auto',
  FULL_SPACE: '1 0 0%'
}

const WIDTH = {
  AUTO: 'auto',
  COL: 'col',
  CALC: (columns, value) => (100 / columns) * parseInt(value)
}

const PROPERTIES = {
  BOX_SIZING: 'box-sizing',
  FLEX: 'flex',
  WIDTH: 'width',
  PADDING_LEFT: 'padding-left',
  PADDING_RIGHT: 'padding-right',
  ORDER: 'order',
  ALIGN_SELF: 'align-self'
}

const Col = styled.div`
  /* GENERAL STYLES */
  background-color: var(--background);
  ${PROPERTIES.BOX_SIZING}: border-box;
  ${PROPERTIES.FLEX}: ${(props) =>
    props.cw ? FLEX.CONTENT_SPACE : FLEX.FULL_SPACE};
  ${PROPERTIES.WIDTH}: ${(props) => !props.cw && WIDTH.AUTO};

  /* GENERATED GENERAL STYLES */
  ${(props) => {
    /**
     * Applying theme override rules if exist, otherwise taking rules
     * from default theme (src/design/design-system)
     */
    const breakpoints =
      props?.theme?.base?.grid?.breakpoints || base.grid.breakpoints
    const gutters = props?.theme?.base?.grid?.gutters || base.grid.gutters

    /**
     * Generating styles for all media queries based on custom or default
     * theme using listMediaQueries mixin
     */
    return css`
      ${PROPERTIES.PADDING_LEFT}: ${gutters.xs};
      ${PROPERTIES.PADDING_RIGHT}: ${gutters.xs};
      ${listMediaQueries({
        breakpoints,
        valuesMap: gutters,
        properties: [PROPERTIES.PADDING_LEFT, PROPERTIES.PADDING_RIGHT]
      })}
    `
  }}

  /* STYLED SYSTEM STYLES */
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}

  /* CUSTOM EXTENSIONS */
  ${hover}

  /* STYLED SYSTEM CUSTOM STYLES */
  ${(props) => {
    return system({
      cw: {
        property: PROPERTIES.WIDTH,
        transform: (value) => {
          /**
           * Applying theme override rules if exist, otherwise taking rules
           * from default theme (src/design/design-system)
           */
          const columns = props?.theme?.base?.grid?.columns || base.grid.columns

          /**
           * Value auto will take content width, col - all available space,
           * otherwise - calculate column width
           */
          return value === WIDTH.AUTO
            ? value
            : value !== WIDTH.COL
            ? `${WIDTH.CALC(columns, value)}%`
            : WIDTH.AUTO
        }
      },
      order: {
        property: PROPERTIES.ORDER
      },
      v: {
        property: PROPERTIES.ALIGN_SELF
      }
    })
  }}

  /* CUSTOM STYLES EXTENSION */
  ${(props) => {
    /**
     * Apply scenario below only when cw property value is not empty
     */
    if (props.cw) {
      /**
       * Applying theme override rules if exist, otherwise taking rules
       * from default theme (src/design/design-system)
       */
      const breakpoints =
        props?.theme?.base?.grid?.breakpoints || base.grid.breakpoints

      /**
       * Rules below should work only when value of cw property is array
       * Than we should change flex rules based on appropriate media query.
       * mediaQuery mixin helps us to build correct CSS based on default
       * or custom theme
       */
      if (Array.isArray(props.cw)) {
        /**
         * Rules below should be applied only when one of array value is
         * col. Means, column should take all available space
         */
        return props.cw.map(
          (value, index) =>
            value === WIDTH.COL &&
            mediaQuery[breakpoints[index]]`
              ${PROPERTIES.FLEX}: ${FLEX.FULL_SPACE};
            `
        )
      }
    }
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
  v: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ...spacePropTypes,
  ...colorPropTypes,
  ...layoutPropTypes,
  ...backgroundPropTypes,
  ...borderPropTypes,
  ...shadowPropTypes,
  ...hoverPropTypes
}

export default memo(Col)
