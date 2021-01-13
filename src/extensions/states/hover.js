import { css } from 'styled-components'
import { singleCSSProperty } from '../../mixins'

const hover = (props) => css`
  &:hover {
    ${(props) => {
      if (props.hover) {
        return css`
          ${singleCSSProperty({
            componentPropertyValue: props?.hover?.bg,
            theme: props.theme.colors,
            cssProperty: 'background-color'
          })}
          ${singleCSSProperty({
            componentPropertyValue: props?.hover?.color,
            theme: props.theme.colors,
            cssProperty: 'color'
          })}
          ${singleCSSProperty({
            componentPropertyValue: props?.hover?.border,
            cssProperty: 'border'
          })}
        `
      }
    }}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBg,
      theme: props.theme.colors,
      cssProperty: 'background-color'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverColor,
      theme: props.theme.colors,
      cssProperty: 'color'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorder,
      cssProperty: 'border'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderTop,
      cssProperty: 'border-top'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderRight,
      cssProperty: 'border-right'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderBottom,
      cssProperty: 'border-bottom'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderLeft,
      cssProperty: 'border-left'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderRadius,
      theme: props.theme.radii,
      cssProperty: 'border-radius'
    })}
  }
`

export default hover
