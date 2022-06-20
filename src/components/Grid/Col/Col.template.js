import { BREAKPOINTS, GUTTERS_MAP } from '../../../constants'
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system
} from 'styled-system'
import styled, { css } from 'styled-components'

import React from 'react'
import classNames from 'classnames'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: var(--ql-grid-gutter-default);
  padding-right: var(--ql-grid-gutter-default);
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
  position,
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
    h: {
      property: 'alignItems',
      transform: (value) => {
        const map = {
          left: 'flex-start',
          center: 'center',
          right: 'flex-end'
        }
        return map[value]
      }
    },
    v: {
      property: 'justifyContent',
      transform: (value) => {
        const map = {
          top: 'flex-start',
          center: 'center',
          bottom: 'flex-end',
          around: 'space-around',
          between: 'space-between',
          evenly: 'space-evenly'
        }
        return map[value]
      }
    },
    filter: true
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
  const { cw, children, className, ...rest } = props

  const classes = classNames({
    col: true,
    'content-space': Boolean(cw),
    [className]: Boolean(className)
  })

  return (
    <Box data-testid="col" className={classes} ref={ref} cw={cw} {...rest}>
      {children}
    </Box>
  )
})

Col.displayName = 'Col'

export default Col
