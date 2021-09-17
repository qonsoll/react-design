import React from 'react'
import PropTypes from 'prop-types'
import { Skeleton as AntSkeleton } from 'antd'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  system
} from 'styled-system'

const StyledAntSkeleton = styled(AntSkeleton)(
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    system({
      whiteSpace: true,
      cursor: true,
      wordBreak: true,
      zoom: true,
      transform: true
    })
  )
)

const Skeleton = (props) => <StyledAntSkeleton {...props} />

Skeleton.propTypes = {
  active: PropTypes.bool,
  avatar: PropTypes.oneOfType([
    PropTypes.shape({
      active: PropTypes.bool,
      shape: PropTypes.oneOf(['circle', 'square']),
      size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['large', 'small', 'default'])
      ])
    }),
    PropTypes.bool
  ]),
  loading: PropTypes.bool,
  paragraph: PropTypes.oneOfType([
    PropTypes.shape({
      rows: PropTypes.number,
      width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.string)
      ])
    }),
    PropTypes.bool
  ]),
  round: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),
    PropTypes.bool
  ])
}

export default Skeleton
