import React, { useMemo } from 'react'

import Box from '../../Box'
import { DEFAULT_PROPS } from './constants'
import PropTypes from 'prop-types'
import Text from '../../Typography/Text'
import Title from '../../Typography/Title'

const HeadingPrimary = (props) => {
  const {
    title,
    subTitle,
    titleMarginBottom,
    subtitleMarginBottom,
    textAlign = DEFAULT_PROPS.textAlign,
    titleSize,
    titleLevel,
    titleVariant
  } = props

  const widthComputed = useMemo(
    () => (textAlign === DEFAULT_PROPS.textAlign && '100%') || undefined,
    [textAlign]
  )
  const mbComputed = useMemo(
    () =>
      (subTitle && (subtitleMarginBottom || DEFAULT_PROPS.titleMarginBottom)) ||
      undefined,
    [subTitle, subtitleMarginBottom]
  )

  return (
    <Box mb={titleMarginBottom} textAlign={textAlign} width={widthComputed}>
      <Box mb={mbComputed}>
        {/* titleSize will be deprecated soon. Use titleLevel instead!!! */}
        <Title level={titleLevel || titleSize} variant={titleVariant}>
          {title}
        </Title>
      </Box>
      {subTitle && <Text>{subTitle}</Text>}
    </Box>
  )
}

HeadingPrimary.propTypes = {
  title: PropTypes.string,
  titleLevel: PropTypes.oneOf([1, 2, 3, 4, 5]),
  titleSize: PropTypes.oneOf([1, 2, 3, 4, 5]),
  titleVariant: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
  ]),
  titleMarginBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  subtitleMarginBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  subTitle: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'inherit', 'unset'])
}
HeadingPrimary.defaultProps = {
  textAlign: 'center'
}

export default HeadingPrimary
