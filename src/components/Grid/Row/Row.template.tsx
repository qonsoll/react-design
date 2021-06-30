import React from "react";
import classNames from "classnames";
import "./Row.scss";
import styled from "styled-components";
import {
  space,
  color,
  layout,
  background,
  border,
  shadow,
  compose,
  system,
} from "styled-system";
import { RowProps } from "./Row.types";

/**
 * Composing props from styled system
 */
const BoxStyleProps = compose(
  space,
  color,
  layout,
  background,
  border,
  shadow,
  system({
    v: {
      property: "alignItems",
      transform: (value) => {
        const map = {
          top: "flex-start",
          center: "center",
          bottom: "flex-end",
        };
        return map[value];
      },
    },
    h: {
      property: "justifyContent",
      transform: (value) => {
        const map = {
          left: "flex-start",
          center: "center",
          right: "flex-end",
          around: "space-around",
          between: "space-between",
          evenly: "space-evenly",
        };
        return map[value];
      },
    },
  })
);

/**
 * Building styled Box. Core element for container
 */
const Box = styled.div<RowProps>(BoxStyleProps);

/**
 * Creating Container which returns Box with className (css)
 */
const Row = React.forwardRef<HTMLDivElement, RowProps>((props) => {
  const { noGutters, noInnerGutters, noOuterGutters, children } = props;
  const className = classNames({
    row: true,
    "no-gutters": noGutters,
    "no-inner-gutters": noInnerGutters,
    "no-outer-gutters": noOuterGutters,
  });
  return (
    <Box
      data-testid="row"
      className={className}
      ref={ref}
      {...(props as unknown)}
    >
      {children}
    </Box>
  );
});

export default Row;
