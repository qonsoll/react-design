import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import Button from './Button'
import {
  spaceArgTypes,
  colorArgTypes,
  typographyArgTypes,
  layoutArgTypes,
  flexboxArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes,
  extraArgTypes
} from '../../helpers/arg-types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Can be set to primary, secondary, ghost, dashed, link, text',
      control: {
        disable: true
      }
    },
    danger: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the danger status of button',
      control: { type: 'boolean' }
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Disabled state of button',
      control: { type: 'boolean' }
    },
    shape: {
      table: {
        disable: true
      }
    },
    block: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Option to fit button width to its parent width',
      control: { type: 'boolean' }
    },
    ghost: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Make background transparent and invert text and border colors',
      control: { type: 'boolean' }
    },
    href: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Redirect url of link button',
      control: { type: 'text' }
    },
    htmlType: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the original html type of button',
      options: ['submit', 'reset', 'button'],
      control: { type: 'select' }
    },
    icon: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the icon component of button',
      control: { disable: true }
    },
    loading: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the loading status of button',
      control: { type: 'boolean' }
    },
    size: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the size of button',
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' }
    },
    target: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Same as target attribute of a, works when href is specified',
      control: { type: 'text' }
    },
    onClick: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set the handler to handle click event'
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
    ...extraArgTypes,
    variant: {
      table: {
        category: 'Custom properties'
      },
      control: { type: 'select', options: ['null', 'white', 'dark'] },
      description: 'Use to change button type.'
    }
  }
}

const Template = (args) => {
  const { icon } = args

  return (
    <Button type="primary" {...args}>
      {!icon && 'Button'}
    </Button>
  )
}

export const primary = Template.bind({})
primary.args = {
  type: 'primary'
}
primary.argTypes = {
  type: {
    table: {
      category: 'Default AntD props'
    },
    description:
      'Can be set to primary, default, ghost, dashed, link, text. PRIMARY is now',
    control: {
      disable: true
    }
  }
}

export const Default = Template.bind({})
Default.args = {
  type: 'secondary'
}
Default.argTypes = {
  type: {
    table: {
      category: 'Default AntD props'
    },
    description:
      'Can be set to primary, default, ghost, dashed, link, text. DEFAULT is now',
    control: {
      disable: true
    }
  }
}

export const ghost = Template.bind({})
ghost.args = {
  type: 'ghost'
}
ghost.argTypes = {
  type: {
    table: {
      category: 'Default AntD props'
    },
    description:
      'Can be set to primary, default, ghost, dashed, link, text. GHOST is now',
    control: {
      disable: true
    }
  }
}

export const dashed = Template.bind({})
dashed.args = {
  type: 'dashed'
}
dashed.argTypes = {
  type: {
    table: {
      category: 'Default AntD props'
    },
    description:
      'Can be set to primary, default, ghost, dashed, link, text. DASHED is now',
    control: {
      disable: true
    }
  }
}

export const link = Template.bind({})
link.args = {
  type: 'link'
}
link.argTypes = {
  type: {
    table: {
      category: 'Default AntD props'
    },
    description:
      'Can be set to primary, default, ghost, dashed, link, text. LINK is now',
    control: {
      disable: true
    }
  }
}

export const text = Template.bind({})
text.args = {
  type: 'text'
}
text.argTypes = {
  type: {
    table: {
      category: 'Default AntD props'
    },
    description:
      'Can be set to primary, default, ghost, dashed, link, text. TEXT is now',
    control: {
      disable: true
    }
  }
}

export const buttonWithIcon = Template.bind({})
buttonWithIcon.args = {
  icon: <UserOutlined />,
  type: 'primary'
}
buttonWithIcon.argTypes = {
  shape: {
    table: {
      category: 'Default AntD props',
      disable: false
    },
    description: 'Can be set button shape',
    options: ['circle', 'round'],
    control: { type: 'radio' }
  },
  type: {
    description:
      'Can be set to primary, default, ghost, dashed, link, text. PRIMARY is now',
    options: ['primary', 'default', 'text', 'link', 'ghost', 'dashed'],
    control: {
      type: 'select',
      disable: false
    }
  }
}
