import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../../../../Grid/Container'
import Row from '../../../../../Grid/Row'
import Col from '../../../../../Grid/Col'
import Img from '../../../../../Media/Img'
import Avatar from '../../../../../Media/Avatar'
import Navigation from '../../../../../Navigation'

const HeaderVariant1Desktop = (props) => {
  return (
    <Container>
      <Row height='100%'>
        <Col cw='auto' alignSelf='center'>
          <Img
            src='https://worktube.ai/images/wt-logo-full-color.svg'
            alt='Logo'
            height={28}
          />
        </Col>
        <Col>
          <Navigation dataSource={[1, 2, 3]} />
        </Col>
        <Col cw='auto'>
          notifications and language select
          <Avatar size='large' />
        </Col>
      </Row>
    </Container>
  )
}

HeaderVariant1Desktop.propTypes = {
  layout: PropTypes.array
}

export default HeaderVariant1Desktop
