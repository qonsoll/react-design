import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
  FlexboxProps
} from 'styled-system'

export type ColProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  ShadowProps &
  FlexboxProps & {
    cw?:
      | number
      | string
      | [string?, string?, string?, string?, string?]
      | [number?, number?, number?, number?, number?]
    order?: number
    v?: 'top' | 'center' | 'bottom'
    h?: 'left' | 'center' | 'right' | 'around' | 'between' | 'evenly'
    children?: JSX.Element | JSX.Element[]
  }
