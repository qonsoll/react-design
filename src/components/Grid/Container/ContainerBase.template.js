import styled, { css } from 'styled-components'

import {
  BREAKPOINTS,
  CONTAINER_MAX_WIDTH_MAP,
  DEFAULTS,
  GUTTERS_MAP,
  NEGATIVE_GUTTERS_MAP
} from '../../../constants'

/**
 * Building styled Box. Core element for container
 */
const ContainerBase = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
  &.bounded {
    ${(props) => {
      const breakpoints = Object.keys(BREAKPOINTS)
      return breakpoints.map((breakpoint) => {
        return css`
          @media (min-width: ${BREAKPOINTS[breakpoint]}) {
            max-width: ${CONTAINER_MAX_WIDTH_MAP[breakpoint]};
          }
        `
      })
    }}
  }
  ${(props) => {
    const breakpoints = Object.keys(BREAKPOINTS)
    return breakpoints.map((breakpoint) => {
      return css`
        &.container-${breakpoint} {
          max-width: ${CONTAINER_MAX_WIDTH_MAP[breakpoint]} !important;
        }
      `
    })
  }}
  &.gutters {
    padding-left: ${DEFAULTS.gutterDefault};
    padding-right: ${DEFAULTS.gutterDefault};
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
    .row {
      margin-left: ${DEFAULTS.negativeGutterDefault};
      margin-right: ${DEFAULTS.negativeGutterDefault};
      ${(props) => {
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
    &.static-gutters {
      padding-left: ${DEFAULTS.gutterDefault} !important;
      padding-right: ${DEFAULTS.gutterDefault} !important;
      .row {
        margin-left: ${DEFAULTS.negativeGutterDefault} !important;
        margin-right: ${DEFAULTS.negativeGutterDefault} !important;
      }
    }
  }
  &.gutter-default {
    padding-left: ${DEFAULTS.gutterDefault};
    padding-right: ${DEFAULTS.gutterDefault};
  }
  ${(props) => {
    const breakpoints = Object.keys(BREAKPOINTS)
    return breakpoints.map((breakpoint) => {
      return css`
        &.gutter-${breakpoint} {
          padding-left: ${GUTTERS_MAP[breakpoint]} !important;
          padding-right: ${GUTTERS_MAP[breakpoint]} !important;
        }
      `
    })
  }}
`

export default ContainerBase
