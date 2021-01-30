import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
} from "styled-system";
import { BoxProps } from "./Box.types";
import { hover, focus } from "../../../design-system/extensions";

const StyledBox = styled.div<BoxProps>`
  ${compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow
  )}
  ${hover}
  ${focus}
`;

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children } = props;
  return (
    <StyledBox data-testid="box" ref={ref} {...(props as unknown)}>
      {children}
    </StyledBox>
  );
});

export default Box;
