import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders page heading", () => {
    render(<Home />);
    const heading = screen.getByText("TEKnologist LLC");
    expect(heading).toBeInTheDocument();
  });
});
