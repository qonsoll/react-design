import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
} from "styled-system";

export type ContainerProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  ShadowProps & {
    className?: string;
    bounded?: boolean;
    gutters?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
    gutterDefault?: boolean;
    gutterSm?: boolean;
    gutterMd?: boolean;
    gutterLg?: boolean;
    gutterXl?: boolean;
    gutterXxl?: boolean;
    children?: JSX.Element | JSX.Element[];
  };
