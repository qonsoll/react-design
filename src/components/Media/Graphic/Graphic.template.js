import Box from '../../Box'
import { DEFAULT_PROPS } from './constants'
import Img from '../Img'
import PropTypes from 'prop-types'
import React from 'react'

const Graphic = (props) => {
  const {
    src,
    alt,
    hidden,
    animation,
    width,
    height,
    position,
    top,
    bottom,
    left,
    right,
    objectFit,
    zIndex,
    background
  } = props

  return (
    <Box display={hidden || DEFAULT_PROPS.hidden} background={background}>
      <Img
        src={src}
        alt={alt}
        zIndex={zIndex}
        className={animation || DEFAULT_PROPS.animation}
        width={width}
        height={height || DEFAULT_PROPS.height}
        position={position || DEFAULT_PROPS.position}
        top={top}
        bottom={bottom || DEFAULT_PROPS.bottom}
        left={left || DEFAULT_PROPS.left}
        right={right}
        objectFit={objectFit}
      />
    </Box>
  )
}

Graphic.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hidden: PropTypes.array,
  animation: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf([
    'absolute',
    'fixed',
    'inherit',
    'initial',
    'relative',
    'revert',
    'static',
    'sticky',
    'unset'
  ]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  objectFit: PropTypes.oneOf([
    'contain',
    'cover',
    'fill',
    'inherit',
    'initial',
    'none',
    'revert',
    'scale-down',
    'unset'
  ])
}
Graphic.defaultProps = {
  hidden: ['none', 'none', 'none', 'none', 'block', 'block'],
  animation: 'animate__animated animate__jackInTheBox',
  height: '30%',
  position: 'fixed',
  bottom: '50px',
  left: '74%'
}

export default Graphic
