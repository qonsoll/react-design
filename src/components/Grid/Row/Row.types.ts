import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
} from "styled-system";

export type RowProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  ShadowProps & {
    className?: string;
    noGutters?: boolean;
    noInnerGutters?: boolean;
    noOuterGutters?: boolean;
    v?:
      | "top"
      | "center"
      | "bottom"
      | [string, string?, string?, string?, string?];
    h?:
      | "left"
      | "center"
      | "right"
      | "around"
      | "between"
      | "evenly"
      | [string, string?, string?, string?, string?];
    disableDynamicGutters?: boolean;
    children?: JSX.Element | JSX.Element[];
  };
