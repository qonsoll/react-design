import { css } from 'styled-components'

const singleCSSProperty = ({ componentPropertyValue, theme, cssProperty }) =>
  componentPropertyValue &&
  css`
    ${cssProperty}: ${theme
      ? theme[componentPropertyValue] || componentPropertyValue
      : componentPropertyValue};
  `

const hover = (props) => css`
  &:focus {
    ${() => {
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
            theme: null,
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
      theme: null,
      cssProperty: 'border'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderTop,
      theme: null,
      cssProperty: 'border-top'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderRight,
      theme: null,
      cssProperty: 'border-right'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderBottom,
      theme: null,
      cssProperty: 'border-bottom'
    })}
    ${singleCSSProperty({
      componentPropertyValue: props?.hoverBorderLeft,
      theme: null,
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
