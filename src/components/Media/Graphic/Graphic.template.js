import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import Img from '../Img'
import { DEFAULT_PROPS } from './constants'

/**
 * Graphic (19 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {string.isRequired}       [src]                Image url.
 * @param {string.isRequired}       [alt]                Image alt-description.
 * @param {array}                   [hidden]             Use to setup when component should be hidden (based on breakpoints).
 * @param {string}                  [animation]          Use to specify animation rules (based on classes).
 * @param {oneOfType}               [width]              Component width.
 * @param {oneOfType}               [height]             Component height.
 * @param {string}                  [position]           Use to specify component position.
 * @param {string}                  [top]                Top offset.
 * @param {string}                  [bottom]             Bottom offset.
 * @param {string}                  [left]               Left offset.
 * @param {string}                  [right]              Right offset.
 * @param {string}                  [objectFit]          Use to specify render method.
 *
 * @return {ReactComponent}
 */

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
    objectFit
  } = props

  return (
    <Box display={hidden || DEFAULT_PROPS.hidden}>
      <Img
        src={src}
        alt={alt}
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
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
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
