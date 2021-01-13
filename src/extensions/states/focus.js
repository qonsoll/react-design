import { css } from 'styled-components'
import { singleCSSProperty } from '../../mixins'

const focus = (props) => css`
  &:focus {
    ${(props) => {
      if (props.focus) {
        return css`
          ${singleCSSProperty({
            componentPropertyValue: props?.focus?.bg,
            theme: props.theme.colors,
            cssProperty: 'background-color'
          })}
          ${singleCSSProperty({
            componentPropertyValue: props?.focus?.color,
            theme: props.theme.colors,
            cssProperty: 'color'
          })}
          ${singleCSSProperty({
            componentPropertyValue: props?.focus?.border,
            cssProperty: 'border'
          })}
        `
      }
    }}
    ${singleCSSProperty({
      componentPropertyValue: props?.focusBg,
      theme: props.theme.colors,
      cssProperty: 'background-color'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.focusColor,
      theme: props.theme.colors,
      cssProperty: 'color'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.focusBorder,
      cssProperty: 'border'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.focusBorderTop,
      cssProperty: 'border-top'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.focusBorderRight,
      cssProperty: 'border-right'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.focusBorderBottom,
      cssProperty: 'border-bottom'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.focusBorderLeft,
      cssProperty: 'border-left'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.focusBorderRadius,
      theme: props.theme.radii,
      cssProperty: 'border-radius'
    })}
  }
`

export default focus
