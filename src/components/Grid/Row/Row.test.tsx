import React from "react";
import { render } from "@testing-library/react";

import Row from "./Row.template";
import { RowProps } from "./Row.types";

describe("Row", () => {
  let props: RowProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<Row {...props} />);

  it("should have no-gutters className", () => {
    props.noGutters = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("row");
    expect(testComponent).toHaveClass("no-gutters");
  });

  it("should have no-inner-gutters className", () => {
    props.noInnerGutters = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("row");
    expect(testComponent).toHaveClass("no-inner-gutters");
  });

  it("should have margin css property", () => {
    props.margin = "16px";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("row");
    expect(getComputedStyle(testComponent).margin).toBe('16px')
  });

  it("should have yellow color css property", () => {
    props.color = "yellow";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("row");
    expect(getComputedStyle(testComponent).color).toBe('yellow')
  });

  it("should have alignItems css property", () => {
    props.v = "center";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("row");
    expect(getComputedStyle(testComponent).alignItems).toBe('center')
  });

  it("should have justifyContent css property", () => {
    props.h = "center";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("row");
    expect(getComputedStyle(testComponent).justifyContent).toBe('center')
  });
});