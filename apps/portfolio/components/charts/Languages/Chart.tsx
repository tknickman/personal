import { ResponsiveBump } from "@nivo/bump";
import colors from "tailwindcss/colors";
import Point from "./Point";
import { DataType } from "./data";
import theme from "../theme";

const Chart = ({ data }: { data: DataType }) => (
  <ResponsiveBump
    data={data}
    theme={theme}
    colors={{ datum: "color" }}
    lineWidth={2}
    enableGridX={true}
    enableGridY={false}
    activeLineWidth={3}
    inactiveLineWidth={1}
    pointSize={6}
    inactiveOpacity={0.6}
    pointComponent={Point}
    pointColor={colors.gray["800"]}
    activePointSize={15}
    inactivePointSize={0}
    pointBorderWidth={2}
    activePointBorderWidth={2}
    pointBorderColor={{ from: "serie.color" }}
    axisBottom={{
      tickSize: 0,
      tickPadding: 15,
      tickRotation: 90,
      legend: "",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    animate={true}
    axisTop={null}
    axisLeft={null}
    margin={{ top: 40, right: 100, bottom: 40 }}
    axisRight={null}
  />
);

export default Chart;
