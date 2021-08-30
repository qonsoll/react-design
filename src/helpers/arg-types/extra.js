import CSSPropValues from '../css-prop-values'

const extraArgTypes = {
  whiteSpace: {
    table: {
      category: 'Extra'
    },
    description: 'It specifies how white-space inside an element is handled.',
    control: {
      type: CSSPropValues.whiteSpace.type,
      options: CSSPropValues.whiteSpace.options
    }
  },
  cursor: {
    table: {
      category: 'Extra'
    },
    description:
      'The property specifies the mouse cursor to be displayed when pointing over an element.',
    control: {
      type: CSSPropValues.cursor.type,
      options: CSSPropValues.cursor.options
    }
  },
  wordBreak: {
    table: {
      category: 'Extra'
    },
    description:
      'The property specifies how words should break when reaching the end of a line.',
    control: {
      type: CSSPropValues.wordBreak.type,
      options: CSSPropValues.wordBreak.options
    }
  },
  zoom: {
    table: {
      category: 'Extra'
    },
    description: 'The property is used to change the scale of the content.',
    control: { type: 'text' }
  },
  transform: {
    table: {
      category: 'Extra'
    },
    description:
      'The property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.',
    control: { type: 'text' }
  },
  transition: {
    table: {
      category: 'Extra'
    },
    description:
      'It allows you to change property values smoothly, over a given duration.',
    control: { type: 'text' }
  }
}

export default extraArgTypes
