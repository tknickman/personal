import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("home", () => {
  it("renders page heading", () => {
    expect.assertions(1);
    render(<Home hostName={"test.com"} />);
    const heading = screen.getByText("This site has been retired");
    expect(heading).toBeInTheDocument();
  });
});
