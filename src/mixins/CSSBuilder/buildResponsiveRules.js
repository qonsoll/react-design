import buildResponsiveRulesByMap from './buildResponsiveRulesByMap'
import buildResponsiveRulesByValue from './buildResponsiveRulesByValue'

const buildResponsiveRules = ({
  breakpoints,
  map,
  properties,
  defaultStyle,
  dynamicStyle
}) =>
  (breakpoints &&
    map &&
    properties &&
    buildResponsiveRulesByMap({ breakpoints, map })) ||
  (breakpoints &&
    defaultStyle &&
    buildResponsiveRulesByValue({ breakpoints, defaultStyle, dynamicStyle }))

export default buildResponsiveRules
