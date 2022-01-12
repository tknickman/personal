import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { createMockRouter } from "../test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Home", () => {
  it("renders page heading", () => {
    render(
      <RouterContext.Provider value={createMockRouter({ query: {} })}>
        <Home />
      </RouterContext.Provider>
    );
    const heading = screen.getByText("Public Asset Directory");
    expect(heading).toBeInTheDocument();
  });
});
