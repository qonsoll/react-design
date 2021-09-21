import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import Title from '../../Typography/Title'
import Text from '../../Typography/Text'
import { DEFAULT_PROPS } from './constants'

const HeadingPrimary = (props) => {
  const { title, subTitle, titleMarginBottom, textAlign, titleSize } = props

  return (
    <Box textAlign={textAlign || DEFAULT_PROPS.textAlign}>
      <Box
        mb={subTitle && (titleMarginBottom || DEFAULT_PROPS.titleMarginBottom)}>
        <Title level={titleSize}>{title}</Title>
      </Box>
      {subTitle && <Text>{subTitle}</Text>}
    </Box>
  )
}

HeadingPrimary.propTypes = {
  title: PropTypes.string,
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
