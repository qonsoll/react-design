import { css } from 'styled-components'

export const column = ({ propertyValue, columns }) =>
  propertyValue && propertyValue === 'auto'
    ? css`
        flex: 0 0 auto;
        width: auto;
      `
    : css`
        flex: 0 0 auto;
        width: ${(100 / columns) * parseInt(propertyValue)}%;
      `
