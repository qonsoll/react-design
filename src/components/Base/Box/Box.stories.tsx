import React from "react";
import Box from "./Box.template";
import {
  spaceArgTypes,
  colorArgTypes,
  layoutArgTypes,
  backgroundArgTypes,
  borderArgTypes,
  positionArgTypes,
  shadowArgTypes,
  hoverArgTypes,
  focusArgTypes
} from '../../../design-system/extensions/arg-types'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../../../design-system/Theme'

export default {
  title: "Base/Box",
  component: Box,
  argTypes: {
    ...spaceArgTypes,
    ...colorArgTypes,
    ...layoutArgTypes,
    ...backgroundArgTypes,
    ...borderArgTypes,
    ...positionArgTypes,
    ...shadowArgTypes,
    ...hoverArgTypes,
    ...focusArgTypes
  }
};

export const Default = (args) => (
  <ThemeProvider theme={Theme}>
    <Box {...args} />
  </ThemeProvider>
);

Default.args = {
  bg: 'theme',
  height: '50px'
}

Default.parameters = {
  docs: {
    source: {
      code: '<Box>Box content</Box>'
    }
  }
}