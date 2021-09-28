import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import Title from '../../Typography/Title'
import Text from '../../Typography/Text'
import { DEFAULT_PROPS } from './constants'

const HeadingPrimary = (props) => {
  const { title, subTitle, titleMarginBottom, textAlign, titleSize, titleLevel, titleVariant } = props

  return (
    <Box textAlign={textAlign || DEFAULT_PROPS.textAlign}>
      <Box
        mb={subTitle && (titleMarginBottom || DEFAULT_PROPS.titleMarginBottom)}>
        {/* titleSize will be deprecated soon. Use titleLevel instead!!! */}
        <Title level={titleLevel || titleSize} variant={titleVariant}>{title}</Title>
      </Box>
      {subTitle && <Text>{subTitle}</Text>}
    </Box>
  )
}

HeadingPrimary.propTypes = {
  title: PropTypes.string,
  titleLevel: PropTypes.oneOf([1, 2, 3, 4, 5]),
  titleSize: PropTypes.oneOf([1, 2, 3, 4, 5]),
  titleVariant: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
  ])]),
  titleMarginBottom: PropTypes.number,
  subTitle: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'inherit', 'unset'])
}
HeadingPrimary.defaultProps = {
  textAlign: 'center'
}

export default HeadingPrimary
