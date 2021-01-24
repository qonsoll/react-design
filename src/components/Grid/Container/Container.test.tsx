import React from "react";
import { render } from "@testing-library/react";

import Container from "./Container.template";
import { ContainerProps } from "./Container.types";

describe("Container", () => {
  let props: ContainerProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<Container {...props} />);

  it("should have bounded className", () => {
    props.bounded = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("bounded");
  });

  it("should have gutters className", () => {
    props.gutters = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("gutters");
  });

  it("should have container-sm className", () => {
    props.sm = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("container-sm");
  });

  it("should have container-md className", () => {
    props.md = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("container-md");
  });

  it("should have container-lg className", () => {
    props.lg = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("container-lg");
  });

  it("should have container-xl className", () => {
    props.xl = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("container-xl");
  });

  it("should have container-xxl className", () => {
    props.xxl = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("container-xxl");
  });

  it("should have gutter-default className", () => {
    props.gutterDefault = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("gutter-default");
  });

  it("should have gutter-sm className", () => {
    props.gutterSm = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("gutter-sm");
  });

  it("should have gutter-md className", () => {
    props.gutterMd = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("gutter-md");
  });

  it("should have gutter-lg className", () => {
    props.gutterLg = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("gutter-lg");
  });

  it("should have gutter-xl className", () => {
    props.gutterXl = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("gutter-xl");
  });

  it("should have gutter-xxl className", () => {
    props.gutterXxl = true;
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("container");
    expect(testComponent).toHaveClass("gutter-xxl");
  });
});