import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { createMockRouter } from "@tek/utils";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("home", () => {
  it("renders page heading", () => {
    expect.assertions(1);
    render(
      <RouterContext.Provider value={createMockRouter({ query: {} })}>
        <Home />
      </RouterContext.Provider>
    );
    const heading = screen.getByText("Public Asset Directory");
    expect(heading).toBeInTheDocument();
  });
});
