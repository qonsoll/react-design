import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps
} from 'styled-system'
import { HoverProps } from '../../../design-system/extensions/hover/hover.types'
import { FocusProps } from '../../../design-system/extensions/focus/focus.types'

export type BoxProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  HoverProps &
  FocusProps & {
    as?: string
    className?: string
    children?: JSX.Element | JSX.Element[] | string
  }
