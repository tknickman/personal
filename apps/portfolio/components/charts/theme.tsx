import { Theme } from "@nivo/core";
import colors from "tailwindcss/colors";

const theme: Theme = {
  textColor: colors.gray["200"],
  grid: {
    line: {
      stroke: colors.gray["600"],
    },
  },
  tooltip: {
    container: {
      fontSize: "10px",
      color: colors.gray["800"],
    },
  },
};

export default theme;
