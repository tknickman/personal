import { render, screen } from "@testing-library/react";
import { All_ICONS } from ".";

const table = All_ICONS.map((Icon) => ({ Icon }));

describe("<Icon />", () => {
  it.each(table)("$Icon.name - renders", ({ Icon }) => {
    render(<Icon />);
    expect(screen.getByTitle(Icon.name).parentElement).toMatchSnapshot();
  });

  it.each(table)("$Icon.name - includes a title", ({ Icon }) => {
    render(<Icon />);
    expect(screen.getByTitle(Icon.name)).toBeInTheDocument();
  });
});
