import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import { Typography } from 'antd'
import { DEFAULT_PROPS } from './constants'

/**
 * Heading primary (19 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {string}      [title]                      Use to specify title text.
 * @param {node}        [titleSize]                  Use to set title size.
 * @param {node}        [titleMarginBottom]          Use to specify offset between title and subtitle.
 * @param {string}      [subTitle]                   Use to specify subtitle text.
 * @param {node}        [textAlign]                  Use to set text align.
 *
 * @return {ReactComponent}
 */

const HeadingPrimary = (props) => {
  const { title, subTitle, titleMarginBottom, textAlign, titleSize } = props

  return (
    <Box textAlign={textAlign || DEFAULT_PROPS.textAlign}>
      <Box
        mb={subTitle && (titleMarginBottom || DEFAULT_PROPS.titleMarginBottom)}
      >
        <Typography.Title level={titleSize}>{title}</Typography.Title>
      </Box>
      {subTitle && <Typography.Text>{subTitle}</Typography.Text>}
    </Box>
  )
}

HeadingPrimary.propTypes = {
  title: PropTypes.string.isRequired,
  titleSize: PropTypes.oneOf([1, 2, 3, 4, 5]),
  titleMarginBottom: PropTypes.number,
  subTitle: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'inherit', 'unset'])
}
HeadingPrimary.defaultProps = {
  textAlign: 'center'
  // titleMarginBottom: 3
}

export default HeadingPrimary
