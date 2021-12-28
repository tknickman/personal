import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders page heading", () => {
    render(
      <Home hoverColor="red" selectedItem={{}} setSelectedItem={() => {}} />
    );
    const heading = screen.getByText("Thomas E. Knickman");
    expect(heading).toBeInTheDocument();
  });
});
