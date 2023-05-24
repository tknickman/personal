import { render, screen } from "@testing-library/react";
import { createMockRouter } from "@tek/utils";
import { RouterContext } from "next/dist/shared/lib/router-context";
import Home from "../pages/index";

describe("home", () => {
  it("renders page heading", () => {
    expect.assertions(1);

    render(
      <RouterContext.Provider value={createMockRouter({ query: {} })}>
        <Home hoverColor="red" selectedItem={null} setSelectedItem={() => {}} />
      </RouterContext.Provider>
    );
    const heading = screen.getByText("Senior Software Engineer");
    expect(heading).toBeInTheDocument();
  });
});
