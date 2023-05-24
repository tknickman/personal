import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("home", () => {
  it("renders page heading", () => {
    expect.assertions(1);
    render(<Home />);
    const heading = screen.getByText("TEKnologist LLC");
    expect(heading).toBeInTheDocument();
  });
});
