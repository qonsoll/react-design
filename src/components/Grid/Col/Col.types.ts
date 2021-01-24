import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
} from "styled-system";

export type ColProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  ShadowProps & {
    cw?:
      | number
      | string
      | [string?, string?, string?, string?, string?]
      | [number?, number?, number?, number?, number?];
    order?: number;
    v?: "top" | "center" | "bottom";
    children?: JSX.Element | JSX.Element[];
  };
