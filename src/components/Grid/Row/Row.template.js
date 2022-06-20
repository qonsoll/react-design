import { BREAKPOINTS, NEGATIVE_GUTTERS_MAP } from '../../../constants'
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  shadow,
  space,
  system
} from 'styled-system'
// import './Row.scss'
import styled, { css } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  &.no-gutters {
    & > .col {
      padding-left: 0;
      padding-right: 0;
    }
  }
  &.no-inner-gutters {
    & > .col:not(:first-child) {
      padding-left: 0;
    }
    & > .col:not(:last-child) {
      padding-right: 0;
    }
  }
  &.no-outer-gutters {
    & > .col:first-child {
      padding-left: 0;
    }
    & > .col:last-child {
      padding-right: 0;
    }
  }

  &.negative-block-margin {
    margin-left: var(--ql-grid-negative-gutter-default);
    margin-right: var(--ql-grid-negative-gutter-default);

    ${() => {
      const breakpoints = Object.keys(BREAKPOINTS)
      return breakpoints.map((breakpoint) => {
        return css`
          @media (min-width: ${BREAKPOINTS[breakpoint]}) {
            margin-left: ${NEGATIVE_GUTTERS_MAP[breakpoint]};
            margin-right: ${NEGATIVE_GUTTERS_MAP[breakpoint]};
          }
        `
      })
    }}
  }
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
const Row = React.forwardRef((props, ref) => {
  const {
    noGutters,
    noInnerGutters,
    noOuterGutters,
    negativeBlockMargin,
    children,
    className,
    ...rest
  } = props

  const classes = classNames({
    row: true,
    'no-gutters': noGutters,
    'no-inner-gutters': noInnerGutters,
    'no-outer-gutters': noOuterGutters,
    'negative-block-margin': negativeBlockMargin,
    [className]: Boolean(className)
  })

  return (
    <Box data-testid="row" className={classes} ref={ref} {...rest}>
      {children}
    </Box>
  )
})

Row.displayName = 'Row'
Row.propTypes = {
  noGutters: PropTypes.bool,
  noInnerGutters: PropTypes.bool,
  noOuterGutters: PropTypes.bool,
  negativeBlockMargin: PropTypes.bool
}

export default Row
