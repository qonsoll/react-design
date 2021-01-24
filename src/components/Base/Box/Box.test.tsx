import React from "react";
import { render } from "@testing-library/react";

import Box from "./Box.template";
import { BoxProps } from "./Box.types";

describe("Box", () => {
  let props: BoxProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<Box {...props}>Box content</Box>);

  it("should render content", () => {
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("box");
    expect(testComponent.innerHTML).toBe('Box content')
  });

  it("should have margin css property", () => {
    props.margin = "16px";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("box");
    expect(getComputedStyle(testComponent).margin).toBe('16px')
  });

  it("should have yellow color css property", () => {
    props.color = "yellow";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("box");
    expect(getComputedStyle(testComponent).color).toBe('yellow')
  });

  it("should have font-size css property equal to 16px", () => {
    props.fontSize = "16px";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("box");
    expect(getComputedStyle(testComponent).fontSize).toBe('16px')
  });
  
});