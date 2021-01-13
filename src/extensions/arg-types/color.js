import theme from '../../design/design-system'

const colorArgTypes = {
  color: {
    description: 'Text color. Theme field: colors',
    control: { type: 'select', options: Object.keys(theme.colors) }
  },
  bg: {
    description: 'Background color. Theme field: colors',
    control: { type: 'select', options: Object.keys(theme.colors) }
  },
  opacity: { description: 'Background opacity', control: { type: 'number' } }
}

export default colorArgTypes
