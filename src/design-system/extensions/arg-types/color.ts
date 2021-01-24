import { Theme } from '../../Theme'

const colorArgTypes = {
  color: {
    description: 'Text color. Theme field: colors',
    control: { type: 'select', options: Object.keys(Theme.colors) }
  },
  bg: {
    description: 'Background color. Theme field: colors',
    control: { type: 'select', options: Object.keys(Theme.colors) }
  },
  opacity: { description: 'Background opacity', control: { type: 'number' } }
}

export default colorArgTypes
