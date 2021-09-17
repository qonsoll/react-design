import React from 'react'
import Select from './Select'
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
  title: 'Components/Select',
  component: Select,
  argTypes: {
    allowClear: {
      table: {
        category: 'Default AntD props'
      },
      control: { type: 'boolean' },
      description: 'Show clear button'
    },
    autoClearSearchValue: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags'
    },
    autoFocus: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Get focus by default'
    },
    bordered: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether has border style'
    },
    clearIcon: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'The custom clear icon'
    },
    defaultActiveFirstOption: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether active first option by default'
    },
    defaultOpen: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Initial open state of dropdown'
    },
    defaultValue: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Initial selected option'
    },
    disabled: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether disabled select'
    },
    dropdownClassName: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The className of dropdown menu'
    },
    dropdownMatchSelectWidth: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Determine whether the dropdown menu and the select input are the same width. Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll'
    },
    dropdownRender: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Customize dropdown content'
    },
    dropdownStyle: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'The style of dropdown menu'
    },
    fieldNames: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Customize node title, key, options field name'
    },
    filterOption: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded'
    },
    filterSort: {
      table: {
        category: 'Default AntD props'
      },
      description:
        "Sort function for search options sorting, see Array.sort's compareFunction"
    },
    getPopupContainer: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative'
    },
    labelInValue: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Whether to embed label in value, turn the format of value from string to { value: string, label: ReactNode }'
    },
    listHeight: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Config popup height'
    },
    loading: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Indicate loading state'
    },
    maxTagCount: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Max tag count to show. responsive will cost render performance'
    },
    maxTagPlaceholder: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Placeholder for not showing tags'
    },
    maxTagTextLength: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Max tag text length to show'
    },
    menuItemSelectedIcon: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'The custom menuItemSelected icon with multiple options'
    },
    mode: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Set mode of Select'
    },
    notFoundContent: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Specify content to show when no result matches'
    },
    open: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Controlled open state of dropdown'
    },
    optionFilterProp: {
      table: {
        category: 'Default AntD props'
      },
      description:
        'Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label'
    },
    optionLabelProp: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Which prop value of option will render as content of select'
    },
    options: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Select options. Will get better perf than jsx definition'
    },
    placeholder: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Placeholder of select'
    },
    removeIcon: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'The custom remove icon'
    },
    searchValue: {
      table: {
        category: 'Default AntD props'
      },
      description: 'The current input "search" text'
    },
    showArrow: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether to show the drop-down arrow'
    },
    showSearch: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Whether show search input in single mode'
    },
    size: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Size of Select input'
    },
    suffixIcon: {
      table: {
        category: 'Default AntD props'
      },
      control: { disabled: true },
      description: 'The custom suffix icon'
    },
    tagRender: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Customize tag render'
    },
    tokenSeparators: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Separator used to tokenize on tag and multiple mode'
    },
    value: {
      table: {
        category: 'Default AntD props'
      },
      control: { disable: true },
      description: 'Current selected option (considered as a immutable array)'
    },
    virtual: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Disable virtual scroll when set to false'
    },
    onBlur: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when blur'
    },
    onChange: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when select an option or input value change'
    },
    onClear: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when clear'
    },
    onDeselect: {
      table: {
        category: 'Default AntD props'
      },
      description:
        "Called when an option is deselected, param is the selected option's value. Only called for multiple or tags, effective in multiple or tags mode only	"
    },
    onDropdownVisibleChange: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when dropdown open'
    },
    onFocus: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when focus'
    },
    onInputKeyDown: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when key pressed'
    },
    onMouseEnter: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when mouse enter'
    },
    onMouseLeave: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when mouse leave'
    },
    onPopupScroll: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Called when dropdown scrolls'
    },
    onSearch: {
      table: {
        category: 'Default AntD props'
      },
      description: 'Callback function that is fired when input changed'
    },
    onSelect: {
      table: {
        category: 'Default AntD props'
      },
      description:
        "Called when an option is selected, the params are option's value (or key) and option instance	"
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
    ...extraArgTypes
  }
}

const Template = (args) => <Select style={{ minWidth: 150 }} {...args} />

export const basicSelect = Template.bind({})
basicSelect.args = {
  options: [
    { label: 'Lucy', value: 1 },
    { label: 'Jack', value: 2 },
    { label: 'Ann', value: 3 }
  ],
  defaultValue: 1
}

export const multipleSelect = Template.bind({})
multipleSelect.args = {
  mode: 'multiple',
  options: [
    { label: 'Lucy', value: 1 },
    { label: 'Jack', value: 2 },
    { label: 'Ann', value: 3 }
  ],
  defaultValue: [1, 3]
}
