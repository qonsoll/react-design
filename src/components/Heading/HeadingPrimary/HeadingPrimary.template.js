import Box from '../../Box'
import { DEFAULT_PROPS } from './constants'
import PropTypes from 'prop-types'
import React from 'react'
import Text from '../../Typography/Text'
import Title from '../../Typography/Title'

const HeadingPrimary = (props) => {
  const {
    title,
    subTitle,
    titleMarginBottom,
    textAlign,
    titleSize,
    titleLevel,
    titleVariant,
    ...rest
  } = props

  return (
    <Box textAlign={textAlign || DEFAULT_PROPS.textAlign} {...rest}>
      <Box
        mb={subTitle && (titleMarginBottom || DEFAULT_PROPS.titleMarginBottom)}
      >
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
  titleMarginBottom: PropTypes.number,
  subTitle: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'inherit', 'unset'])
}
HeadingPrimary.defaultProps = {
  textAlign: 'center'
}

export default HeadingPrimary
