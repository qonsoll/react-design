import React from 'react'
import Card from './Card'
import { Card as AntCard, Avatar } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes
} from '../../helpers/arg-types'
import CSSPropValues from '../../helpers/css-prop-values'

export default {
  title: 'Components/Card/CardConfiguration',
  component: Card,
  argTypes: {
    actions: {
      table: {
        disable: true
      }
    },
    activeTabKey: {
      table: {
        disable: true
      }
    },
    bodyStyle: {
      table: {
        disable: true
      }
    },
    bordered: {
      table: {
        disable: true
      }
    },
    cover: {
      table: {
        disable: true
      }
    },
    defaultActiveTabKey: {
      table: {
        disable: true
      }
    },
    extra: {
      table: {
        disable: true
      }
    },
    headStyle: {
      table: {
        disable: true
      }
    },
    hoverable: {
      table: {
        disable: true
      }
    },
    loading: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    tabBarExtraContent: {
      table: {
        disable: true
      }
    },
    tabList: {
      table: {
        disable: true
      }
    },
    tabProps: {
      table: {
        disable: true
      }
    },
    title: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    },
    onTabChange: {
      table: {
        disable: true
      }
    },
    avatar: {
      table: {
        category: 'Default AntD props for Card.Meta'
      },
      description: 'Avatar or icon'
    },
    className: {
      table: {
        category: 'Default AntD props for Card.Meta'
      },
      description: 'The className of container'
    },
    description: {
      table: {
        category: 'Default AntD props for Card.Meta'
      },
      description: 'Description content',
      control: { type: 'text' }
    },
    style: {
      table: {
        category: 'Default AntD props for Card.Meta'
      },
      description: 'The style object of container'
    },
    title: {
      table: {
        category: 'Default AntD props for Card.Meta'
      },
      description: 'Title content',
      control: { type: 'text' }
    },
    shadowless: {
      table: {
        category: 'Custom properties'
      },
      description: 'Use to disable card shadow.'
    },
    ...spaceArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...layoutArgTypes,
    ...flexboxArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes,
    transform: {
      table: {
        category: 'Extra CSS props'
      },
      control: CSSPropValues.transform
    }
  }
}

const Template = (args) => {
  const { avatar, title, description, ...rest } = args

  const cardMetaProps = { avatar, title, description }

  return (
    <Card {...rest}>
      <AntCard.Meta {...cardMetaProps} />
    </Card>
  )
}

export const cardConfiguration = Template.bind({})
cardConfiguration.args = {
  cover: (
    <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
  ),
  actions: [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />
  ],
  avatar: (
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  ),
  title: 'Card title',
  description: 'This is the description'
}
