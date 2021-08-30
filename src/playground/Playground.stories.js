import React from 'react'
import { ThemeProvider } from 'styled-components'
import breakpoints from '../styles/breakpoints'
import { LayoutSystemProvider } from '../components/LayoutSystem/LayoutSystem'
import Layout from '../components/LayoutSystem/Layout'
import Aside from '../components/LayoutSystem/Aside'
import Header from '../components/LayoutSystem/Header'
import PageWrapper from '../components/Wrappers/PageWrapper'
import Container from '../components/Grid/Container'
import Row from '../components/Grid/Row'
import Col from '../components/Grid/Col'
import Box from '../components/Box'
import Text from '../components/Typography/Text'
import Divider from '../components/Divider'
import Img from '../components/Media/Img'
import { Menu, Select, Input, Card, Button } from 'antd'
import {
  TeamOutlined,
  FormatPainterOutlined,
  DatabaseOutlined,
  SearchOutlined,
  BellOutlined
} from '@ant-design/icons'

export default {
  title: '@Playground',
  parameters: {
    layout: 'fullscreen'
  }
}

export const Template = (args) => {
  const layoutConfig = {
    isAsideLeft: true,
    asideLeftOuter: true,
    isAsideRight: true
  }

  return (
    <ThemeProvider theme={breakpoints}>
      <LayoutSystemProvider {...layoutConfig}>
        <Layout
          header={<Header>{headerLayout}</Header>}
          asideLeft={<Aside>{asideLayoutLeft}</Aside>}
          asideRight={<Aside>{asideLayoutRight}</Aside>}
        >
          <PageWrapper
            headingProps={{
              title: 'Roles',
              titleSize: 3,
              titleMarginBottom: '8px',
              textAlign: 'left',
              subTitle: ''
            }}
          >
            {contentLayout}
          </PageWrapper>
        </Layout>
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}

const headerLayout = (
  <>
    <Container>
      <Row noOuterGutters v='center'>
        <Col cw={3}>
          <Input
            prefix={<SearchOutlined />}
            placeholder='Enter querues here...'
            bordered={false}
          />
        </Col>
        <Col>
          <Menu mode='horizontal'>
            <Menu.Item icon={<TeamOutlined />}>Roles</Menu.Item>
            <Menu.Item icon={<FormatPainterOutlined />}>Styling</Menu.Item>
            <Menu.Item icon={<DatabaseOutlined />}>DB structure</Menu.Item>
          </Menu>
        </Col>
        <Col cw='auto'>
          <Button type='text' shape='circle' icon={<BellOutlined />} />
        </Col>
      </Row>
    </Container>
  </>
)

const asideLayoutLeft = (
  <>
    <Box mb={48}>
      <Img src='ql-logo-full-primary.svg' alt='Qonsoll App' height={48} />
    </Box>

    <Box display='flex' flexDirection='column' mb={24}>
      <Text
        variant='caption1'
        type='secondary'
        fontWeight={500}
        textTransform='uppercase'
        mb={1}
      >
        Application
      </Text>
      <Select defaultValue='3'>
        <Select.Option value='1'>Admin-app</Select.Option>
        <Select.Option value='2'>Buyer-app</Select.Option>
        <Select.Option value='3'>Customer-app</Select.Option>
      </Select>
    </Box>
    <Box display='flex' flexDirection='column'>
      <Text
        variant='caption1'
        type='secondary'
        fontWeight={500}
        textTransform='uppercase'
        mb={1}
      >
        Branch
      </Text>
      <Select defaultValue='3'>
        <Select.Option value='1'>main</Select.Option>
        <Select.Option value='2'>staging</Select.Option>
        <Select.Option value='3'>promotion-form</Select.Option>
      </Select>
    </Box>

    <Box>
      <Divider my={24} />
    </Box>

    <Box mx={-48}>
      <Menu>
        <Menu.Item icon={<TeamOutlined />}>Roles</Menu.Item>
        <Menu.Item icon={<FormatPainterOutlined />}>Styling</Menu.Item>
        <Menu.Item icon={<DatabaseOutlined />}>DB structure</Menu.Item>
      </Menu>
    </Box>
  </>
)

const asideLayoutRight = (
  <>
    <Box mx={-48}>
      <Menu mode='inline'>
        <Menu.Item icon={<TeamOutlined />}>Roles</Menu.Item>
        <Menu.Item icon={<FormatPainterOutlined />}>Styling</Menu.Item>
        <Menu.Item icon={<DatabaseOutlined />}>DB structure</Menu.Item>
      </Menu>
    </Box>
  </>
)

const contentLayout = (
  <Container>
    <Row noOuterGutters mb={48}>
      <Col cw={3}>
        <Card bordered={false}>Admin</Card>
      </Col>
      <Col cw={3}>
        <Card bordered={false}>Buyer</Card>
      </Col>
      <Col cw={3}>
        <Card bordered={false}>Customer</Card>
      </Col>
      <Col cw={3}>
        <Card bordered={false}>Visitor</Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button type='primary'>Add role</Button>
      </Col>
    </Row>
  </Container>
)
