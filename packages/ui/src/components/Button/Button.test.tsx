import { render, screen } from "@testing-library/react";
import Button from ".";

describe("<Button />", () => {
  it("renders with children", () => {
    const text = "I am an anchor";
    render(<Button>{text}</Button>);
    const button = screen.getByText(text);
    expect(button).toBeVisible();
  });

  it("supports custom classNames", () => {
    const text = "I am an anchor";
    const className = "my-custom-class";
    render(<Button className={className}>{text}</Button>);
    const button = screen.getByText(text);
    expect(button.className).toContain(className);
    // ensure other classnames are still present
    expect(button.className).toContain("inline-flex");
  });

  it("can be round", () => {
    const text = "I am an anchor";
    render(<Button rounded>{text}</Button>);
    const button = screen.getByText(text);
    expect(button.className).toContain("rounded-full");
  });
});
