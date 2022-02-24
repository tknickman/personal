import { render, screen } from "@testing-library/react";
import Anchor from ".";

describe("<Anchor />", () => {
  it("renders with children", () => {
    const text = "I am an anchor";
    render(<Anchor>{text}</Anchor>);
    const anchor = screen.getByText(text);
    expect(anchor).toBeVisible();
  });

  it("supports custom classNames", () => {
    const text = "I am an anchor";
    const className = "my-custom-class";
    render(<Anchor className={className}>{text}</Anchor>);
    const anchor = screen.getByText(text);
    expect(anchor.className).toContain(className);
    // ensure other classnames are still present
    expect(anchor.className).toContain("inline-flex");
  });

  it("can be round", () => {
    const text = "I am an anchor";
    render(<Anchor rounded>{text}</Anchor>);
    const anchor = screen.getByText(text);
    expect(anchor.className).toContain("rounded-full");
  });

  it("adds noopener noreferrer", () => {
    const text = "I am an anchor";
    render(<Anchor target="_blank">{text}</Anchor>);
    const anchor = screen.getByText(text);
    expect(anchor.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
