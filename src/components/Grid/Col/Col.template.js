import React from 'react'
import classNames from 'classnames'
import {
  space,
  color,
  layout,
  background,
  border,
  shadow,
  compose,
  system,
  flexbox
} from 'styled-system'
import styled, { css } from 'styled-components'
import { BREAKPOINTS, GUTTERS_MAP } from '../../../constants'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: $gutter-default;
  padding-right: $gutter-default;
  flex: 1 0 0%;
  width: auto;
  &.content-space {
    flex: 0 0 auto;
  }
  ${(props) => {
    const breakpoints = Object.keys(BREAKPOINTS)
    return breakpoints.map((breakpoint) => {
      return css`
        @media (min-width: ${BREAKPOINTS[breakpoint]}) {
          padding-left: ${GUTTERS_MAP[breakpoint]};
          padding-right: ${GUTTERS_MAP[breakpoint]};
        }
      `
    })
  }}
`

/**
 * Composing props from styled system
 */
const BoxStyleProps = compose(
  space,
  color,
  layout,
  background,
  border,
  shadow,
  flexbox,
  system({
    cw: {
      property: 'width',
      transform: (value) => {
        /**
         * Applying theme override rules if exist, otherwise taking rules
         * from default theme (src/design/design-system)
         */

        /**
         * Value auto will take content width, col - all available space,
         * otherwise - calculate column width
         */
        if (value === 'auto') {
          return value
        }
        if (value !== 'col') {
          return `${(100 / 12) * parseInt(value, 10)}%`
        }
        return 'auto'
      }
    },
    order: {
      property: 'order'
    },
    alignSelf: {
      property: 'alignSelf'
    },
    v: {
      property: 'alignItems',
      transform: (value) => {
        const map = {
          top: 'flex-start',
          center: 'center',
          bottom: 'flex-end'
        }
        return map[value]
      }
    },
    h: {
      property: 'justifyContent',
      transform: (value) => {
        const map = {
          left: 'flex-start',
          center: 'center',
          right: 'flex-end',
          around: 'space-around',
          between: 'space-between',
          evenly: 'space-evenly'
        }
        return map[value]
      }
    }
  })
)

/**
 * Building styled Box. Core element for container
 */
const Box = styled(StyledDiv).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})(BoxStyleProps)

/**
 * Creating Container which returns Box with className (css)
 */
const Col = React.forwardRef((props, ref) => {
  const { cw, children } = props
  const className = classNames({
    col: true,
    'content-space': !!cw
  })
  return (
    <Box data-testid='col' className={className} ref={ref} {...props}>
      {children}
    </Box>
  )
})

export default Col
