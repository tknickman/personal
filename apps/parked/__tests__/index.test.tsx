import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders page heading", () => {
    render(<Home hostName={"test.com"} />);
    const heading = screen.getByText("This site has been retired");
    expect(heading).toBeInTheDocument();
  });
});
