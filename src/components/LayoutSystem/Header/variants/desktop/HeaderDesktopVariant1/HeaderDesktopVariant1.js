import React from 'react'
import Container from '../../../../../Grid/Container'
import Row from '../../../../../Grid/Row'
import Col from '../../../../../Grid/Col'
import Img from '../../../../../Media/Img'
import Avatar from '../../../../../Media/Avatar'
import Navigation from '../../../../../Navigation'
import {
  AppstoreOutlined,
  CalendarOutlined,
  CarOutlined,
  UserOutlined
} from '@ant-design/icons'

const navConfig = [
  { text: 'Dashboard', icon: <AppstoreOutlined /> },
  { text: 'Scheduler', icon: <CalendarOutlined /> },
  { text: 'My cars', icon: <CarOutlined /> }
]

const HeaderVariant1Desktop = (props) => {
  return (
    <Container>
      <Row height='100%' noOuterGutters v='center'>
        <Col cw='auto'>
          <Img
            src='https://worktube.ai/images/wt-logo-full-color.svg'
            alt='Logo'
            height={24}
          />
        </Col>
        <Col height='inherit' alignItems='center'>
          <Navigation dataSource={navConfig} />
        </Col>
        <Col cw='auto'>
          {/* notifications and language select */}
          <Avatar size='large' icon={<UserOutlined />} />
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderVariant1Desktop
