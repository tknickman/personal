import { render, screen } from "@testing-library/react";
import Avatar from ".";

describe("<Avatar />", () => {
  it("renders", () => {
    const name = "Thomas Knickman";
    render(
      <Avatar
        profile={{ name }}
        image={{
          src: "https://gravatar.com/avatar/0b61079d69a0faceb128b4b8637aa1d9",
          alt: "Profile image",
        }}
        href="#"
      />
    );
    const avatar = screen.getByText(name);
    expect(avatar).toBeVisible();
  });
});
