import { css } from 'styled-components'
import buildArrayOfCSSProps from './buildArrayOfCSSProps'
import buildMediaQuery from './buildMediaQuery'

const buildResponsiveRulesByMap = ({ breakpoints, map, properties }) => {
  return css`
    ${buildArrayOfCSSProps(properties, map.xs)}
    ${breakpoints.map(
      (breakpoint) =>
        buildMediaQuery[breakpoint]`
        ${buildArrayOfCSSProps(properties, map[breakpoint])}
      `
    )}
  `
}

export default buildResponsiveRulesByMap

/**
 * padding-left: map.xs;
 * padding-right: map.xs;
 * @media (min-width: 576px) {
 *  padding-left: map.sm;
 *  padding-right: map.sm;
 * }
 * @media (min-width: 768px) {
 *  padding-left: map.md;
 *  padding-right: map.md;
 * }
 */
