import theme from '../../design/design-system'

const spaceArgTypes = {
  m: {
    description:
      'Defines margins (top, right, bottom, left). Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  mt: {
    description: 'Defines margin top. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  mr: {
    description: 'Defines margin right. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  mb: {
    description: 'Defines margin bottom. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  ml: {
    description: 'Defines margin left. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  mx: {
    description: 'Defines horizontal margins. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  my: {
    description: 'Defines vertical margins. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  p: {
    description:
      'Defines paddings (top, right, bottom, left). Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  pt: {
    description: 'Defines padding top. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  pr: {
    description: 'Defines padding right. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  pb: {
    description: 'Defines padding bottom. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  pl: {
    description: 'Defines padding left. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  px: {
    description: 'Defines horizontal paddings. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  },
  py: {
    description: 'Defines vertical paddings. Theme field: space',
    control: { type: 'select', options: Object.keys(theme.space) }
  }
}

export default spaceArgTypes
