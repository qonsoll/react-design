import React from 'react'
import PropTypes from 'prop-types'
import { Typography as AntTypography } from 'antd'
import styled from 'styled-components'
import {
  // compose,
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

const StyledParagraph = styled(AntTypography.Paragraph)`
  margin-bottom: 0 !important;
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${system({
    whiteSpace: true,
    cursor: true,
    wordBreak: true,
    zoom: true,
    transform: true,
    textTransform: true
  })}
`

const Paragraph = (props) => <StyledParagraph {...props} />

Paragraph.propTypes = {
  code: PropTypes.bool,
  copyable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      icon: PropTypes.node,
      text: PropTypes.string,
      onCopy: PropTypes.func,
      tooltips: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.node)
      ])
    })
  ]),
  delete: PropTypes.bool,
  disabled: PropTypes.bool,
  editable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      icon: PropTypes.node,
      tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
      editing: PropTypes.bool,
      maxLength: PropTypes.number,
      autoSize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
          minRows: PropTypes.number,
          maxRows: PropTypes.number
        })
      ]),
      onStart: PropTypes.func,
      onChange: PropTypes.func,
      onCancel: PropTypes.func,
      onEnd: PropTypes.func
    })
  ]),
  ellipsis: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      rows: PropTypes.number,
      expandable: PropTypes.bool,
      suffix: PropTypes.string,
      symbol: PropTypes.node,
      tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
      onExpand: PropTypes.func,
      onEllipsis: PropTypes.func
    })
  ]),
  mark: PropTypes.bool,
  onClick: PropTypes.func,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
  underline: PropTypes.bool
}

export default Paragraph
