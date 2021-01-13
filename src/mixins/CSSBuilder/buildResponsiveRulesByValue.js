import { css } from 'styled-components'
import buildObjectOfCSSProps from './buildObjectOfCSSProps'
import buildMediaQuery from './buildMediaQuery'
import buildCSSProp from './buildCSSProp'

const buildResponsiveRulesByValue = ({
  breakpoints,
  defaultStyle,
  dynamicStyle
}) => {
  return css`
    ${buildObjectOfCSSProps(defaultStyle)}
    ${Object.keys(dynamicStyle).map((prop) => {
      if (Array.isArray(dynamicStyle[prop])) {
        return dynamicStyle[prop].map(
          (value, index) =>
            buildMediaQuery[breakpoints[index]]`
            ${buildCSSProp(prop, value)}
          `
        )
      } else {
        return buildObjectOfCSSProps(dynamicStyle)
      }
    })}
  `
}

export default buildResponsiveRulesByValue

/**
 * flex: 1 0 0%;
 * width: 25%;
 * @media (min-width: 576px) {
 *  flex: 0 0 auto;
 *  width: auto;
 * }
 * @media (min-width: 768px) {
 *  flex: 0 0 auto;
 *  width: 50%;
 * }
 */
