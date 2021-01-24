import React from "react";
import { render } from "@testing-library/react";

import Col from "./Col.template";
import { ColProps } from "./Col.types";

describe("Col", () => {
  let props: ColProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<Col {...props} />);

  it("should have margin css property", () => {
    props.margin = "16px";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("col");
    expect(getComputedStyle(testComponent).margin).toBe('16px')
  });

  it("should have yellow color css property", () => {
    props.color = "yellow";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("col");
    expect(getComputedStyle(testComponent).color).toBe('yellow')
  });

  it("should have correct width css property", () => {
    props.cw = 6;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("col");
    expect(getComputedStyle(testComponent).width).toBe(`${100/12*6}%`)
  });

  it("should have correct order css property", () => {
    props.order = 1;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("col");
    expect(getComputedStyle(testComponent).order).toBe('1')
  });
});