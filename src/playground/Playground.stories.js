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
import Input from '../components/Inputs/Input'
import Text from '../components/Typography/Text'
import Divider from '../components/Divider'
import Img from '../components/Media/Img'
import Menu from '../components/Menus/Menu'
import MenuItem from '../components/Menus/MenuItem'
import Group from '../components/Menus/Group'
import Submenu from '../components/Menus/Submenu'
import { Select, Card, Button, Table, Form } from 'antd'
import {
  TeamOutlined,
  FormatPainterOutlined,
  DatabaseOutlined,
  SearchOutlined,
  BellOutlined
} from '@ant-design/icons'
import QLLogo from '../assets/ql-logo-full-primary.svg'

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

  const columns = [
    {
      title: 'Variable',
      dataIndex: 'variable',
      key: 'variable'
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value'
    }
  ]

  const data = [
    {
      key: '1',
      variable: '--ql-color-accent1',
      value: 'rgb(102, 72, 191)'
    },
    {
      key: '2',
      variable: '--ql-color-dark',
      value: 'rgb(46, 45, 53)'
    },
    {
      key: '3',
      variable: '--ql-font-family-main',
      value: 'Poppins'
    }
  ]

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
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
            {/* <Table
              columns={columns}
              dataSource={data}
              title={() => 'General settings'}
              pagination={false}
            /> */}

            <Form
              // size="small"
              // size="large"
              layout="vertical"
              style={{ padding: '64px 0' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ remember: true }}
            >
              <Form.Item
                //
                label="Email"
                name="label"
                rules={[
                  {
                    required: true,
                    message:
                      'Please input your email!Please input your email!Please input your email!Please input your email!'
                  }
                ]}
              >
                <Input placeholder="Enter email" />
              </Form.Item>
              <Form.Item
                //
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!'
                  }
                ]}
              >
                <Input placeholder="Enter password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>

            <Box my={4}>
              <Divider />
            </Box>
            <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
              <Box display="flex" style={{ gap: '16px' }}>
                <Button type="default">Text</Button>
                <Button type="default">Text</Button>
                <Button type="default">Text</Button>
              </Box>
              <Box display="flex" style={{ gap: '16px' }}>
                <Button type="default" danger>
                  Text
                </Button>
                <Button type="default" danger>
                  Text
                </Button>
                <Button type="default" danger>
                  Text
                </Button>
              </Box>
              <Box display="flex" style={{ gap: '16px' }}>
                <Button type="primary">Text</Button>
                <Button type="primary">Text</Button>
                <Button type="primary">Text</Button>
              </Box>
              <Box display="flex" style={{ gap: '16px' }}>
                <Button type="primary" danger>
                  Text
                </Button>
                <Button type="primary" danger>
                  Text
                </Button>
                <Button type="primary" danger>
                  Text
                </Button>
              </Box>
            </Box>
          </PageWrapper>
        </Layout>
      </LayoutSystemProvider>
    </ThemeProvider>
  )
}

const headerLayout = (
  <>
    <Container>
      <Row noOuterGutters v="center">
        <Col cw={3}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Enter querues here..."
            bordered={false}
          />
        </Col>
        <Col>
          <Menu mode="horizontal">
            <MenuItem icon={<TeamOutlined />}>Roles</MenuItem>
            <MenuItem icon={<FormatPainterOutlined />}>Styling</MenuItem>
            <MenuItem icon={<DatabaseOutlined />}>DB structure</MenuItem>
          </Menu>
        </Col>
        <Col cw="auto">
          <Button type="text" shape="circle" icon={<BellOutlined />} />
        </Col>
      </Row>
    </Container>
  </>
)

const asideLayoutLeft = (
  <>
    <Box mb={48}>
      <Img src={QLLogo} alt="Qonsoll App" height={48} />
    </Box>

    <Box display="flex" flexDirection="column" mb={24}>
      <Text
        variant="caption1"
        type="secondary"
        fontWeight={500}
        textTransform="uppercase"
        mb={1}
      >
        Application
      </Text>
      <Select defaultValue="3">
        <Select.Option value="1">Admin-app</Select.Option>
        <Select.Option value="2">Buyer-app</Select.Option>
        <Select.Option value="3">Customer-app</Select.Option>
      </Select>
    </Box>
    <Box display="flex" flexDirection="column">
      <Text
        variant="caption1"
        type="secondary"
        fontWeight={500}
        textTransform="uppercase"
        mb={1}
      >
        Branch
      </Text>
      <Select defaultValue="3">
        <Select.Option value="1">main</Select.Option>
        <Select.Option value="2">staging</Select.Option>
        <Select.Option value="3">promotion-form</Select.Option>
      </Select>
    </Box>

    <Box>
      <Divider my={24} />
    </Box>

    <Box>
      <Menu mode="vertical">
        <MenuItem icon={<TeamOutlined />}>Roles</MenuItem>
        <MenuItem icon={<FormatPainterOutlined />}>Styling</MenuItem>
        <MenuItem icon={<DatabaseOutlined />}>DB structure</MenuItem>
        <Submenu key="sub2" icon={<BellOutlined />} title="Submenu">
          <MenuItem key="5">Option 5</MenuItem>
          <MenuItem key="6">Option 6</MenuItem>
          {/* <SubMenu key="sub3" title="Submenu">
                <MenuItem key="7">Option 7</MenuItem>
                <MenuItem key="8">Option 8</MenuItem>
              </SubMenu> */}
        </Submenu>
        <Group title="Group title">
          <MenuItem>Menu item #2</MenuItem>
          <MenuItem>Menu item #3</MenuItem>
        </Group>
      </Menu>
    </Box>
  </>
)

const asideLayoutRight = (
  <>
    <Box>
      <Menu mode="inline">
        <MenuItem icon={<TeamOutlined />}>Roles</MenuItem>
        <MenuItem icon={<FormatPainterOutlined />}>Styling</MenuItem>
        <MenuItem icon={<DatabaseOutlined />}>DB structure</MenuItem>
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
        <Button type="primary">Add role</Button>
      </Col>
    </Row>
  </Container>
)
