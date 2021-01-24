import React from "react";
import classNames from "classnames";
import "./Container.scss";
import styled from "styled-components";
import {
  space,
  color,
  layout,
  background,
  border,
  shadow,
  compose,
} from "styled-system";
import { ContainerProps } from "./Container.types";

/**
 * Composing props from styled system
 */
const BoxStyleProps = compose(space, color, layout, background, border, shadow);

/**
 * Building styled Box. Core element for container
 */
const Box = styled.div<ContainerProps>(BoxStyleProps);

/**
 * Creating Container which returns Box with className (css)
 */
const Container: React.FC<ContainerProps> = (props) => {
  const {
    bounded,
    gutters,
    sm,
    md,
    lg,
    xl,
    xxl,
    gutterDefault,
    gutterSm,
    gutterMd,
    gutterLg,
    gutterXl,
    gutterXxl,
    children,
  } = props;
  const className = classNames({
    container: true,
    bounded,
    gutters,
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "gutter-default": gutterDefault,
    "gutter-sm": gutterSm,
    "gutter-md": gutterMd,
    "gutter-lg": gutterLg,
    "gutter-xl": gutterXl,
    "gutter-xxl": gutterXxl,
  });
  return (
    <Box data-testid="container" className={className} {...(props as unknown)}>
      {children}
    </Box>
  );
};

export default Container;
