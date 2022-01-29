import { ResponsivePie } from "@nivo/pie";
import { DataType } from "./data";
import theme from "../theme";

const Chart = ({ data }: { data: DataType }) => (
  <ResponsivePie
    theme={theme}
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLabel={(d) => `${d.id}`}
    arcLinkLabel={(d) => `${d.value} Years`}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#fff"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 50,
        itemWidth: 30,
        itemHeight: 18,
        itemTextColor: "#fff",
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Chart;
