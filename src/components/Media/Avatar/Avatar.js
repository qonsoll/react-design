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
  system,
  typography
} from 'styled-system'

import { Avatar as AntAvatar } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ANTD_AVATAR_PROPS = [
  'alt',
  'gap',
  'icon',
  'shape',
  'size',
  'src',
  'srcSet',
  'draggable',
  'crossOrigin',
  'onError'
]
const Avatar = styled(AntAvatar).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    ANTD_AVATAR_PROPS.includes(prop) || defaultValidatorFn(prop)
})(
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
      transform: true,
      filter: true
    })
  )
)

Avatar.propTypes = {
  alt: PropTypes.string,
  gap: PropTypes.number,
  icon: PropTypes.node,
  shape: PropTypes.oneOf(['circle', 'square']),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  srcSet: PropTypes.string,
  draggable: PropTypes.bool,
  crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials', '']),
  onError: PropTypes.func,
  whiteSpace: PropTypes.string,
  cursor: PropTypes.string,
  wordBreak: PropTypes.string,
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

export default Avatar
