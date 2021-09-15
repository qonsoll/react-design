import { create } from '@storybook/theming';
import QLLogo from '../src/assets/ql-logo-full-primary.svg'
export default create({
  base: 'light',
  
  colorSecondary: '#6648bf',

  // UI
  appBg: '#f9f9fb',

  // Typography
  fontBase: 'Poppins',

  // Text colors
  textColor: '#2E2D35',
  textInverseColor: 'rgb(255 255 255 / 90%)',
  
  // Brand
  brandTitle: 'Qonsoll/React design',
  brandUrl: 'https://https://qonsoll.no/',
  brandImage: QLLogo,
});