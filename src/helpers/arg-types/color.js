import Theme from '../Theme'

const colorArgTypes = {
  color: {
    table: {
      category: 'Color'
    },
    description: 'Text color. Theme field: colors',
    control: { type: 'select', options: Theme.colors }
  },
  bg: {
    table: {
      category: 'Color'
    },
    description: 'Background color. Theme field: colors',
    control: { type: 'select', options: Theme.colors }
  },
  opacity: {
    table: {
      category: 'Color'
    },
    description: 'Background opacity',
    control: { type: 'number' }
  }
}

export default colorArgTypes
