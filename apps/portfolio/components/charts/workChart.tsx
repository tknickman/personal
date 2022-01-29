import { ResponsiveLine } from "@nivo/line";
import colors from "tailwindcss/colors";

const data = [
  {
    id: "SurveyMonkey",
    color: "#00BF6F",
    data: [
      {
        x: "2014",
        y: 100,
      },
      {
        x: "2015",
        y: 100,
      },
      {
        x: "2016",
        y: 100,
      },
      {
        x: "2017",
        y: 0,
      },
      {
        x: "2018",
        y: 80,
      },
      {
        x: "2019",
        y: 100,
      },
      {
        x: "2020",
        y: 100,
      },
      {
        x: "2021",
        y: 20,
      },
    ],
  },
  {
    id: "Under Armour",
    color: "#d9004c",
    data: [
      {
        x: "2014",
        y: 0,
      },
      {
        x: "2015",
        y: 0,
      },
      {
        x: "2016",
        y: 0,
      },
      {
        x: "2017",
        y: 100,
      },
      {
        x: "2018",
        y: 20,
      },
      {
        x: "2019",
        y: 0,
      },
      {
        x: "2020",
        y: 0,
      },
      {
        x: "2021",
        y: 0,
      },
    ],
  },
  {
    id: "Momentive.ai",
    color: "#FFE01A",
    data: [
      {
        x: "2014",
        y: 0,
      },
      {
        x: "2015",
        y: 0,
      },
      {
        x: "2016",
        y: 0,
      },
      {
        x: "2017",
        y: 0,
      },
      {
        x: "2018",
        y: 0,
      },
      {
        x: "2019",
        y: 0,
      },
      {
        x: "2020",
        y: 0,
      },
      {
        x: "2021",
        y: 80,
      },
    ],
  },
  {
    id: "WFH",
    data: [
      {
        x: "2014",
        y: 0,
      },
      {
        x: "2015",
        y: 0,
      },
      {
        x: "2016",
        y: 0,
      },
      {
        x: "2017",
        y: 0,
      },
      {
        x: "2018",
        y: 100,
      },
      {
        x: "2019",
        y: 100,
      },
      {
        x: "2020",
        y: 100,
      },
      {
        x: "2021",
        y: 100,
      },
    ],
  },
  {
    id: "Office",
    data: [
      {
        x: "2014",
        y: 100,
      },
      {
        x: "2015",
        y: 100,
      },
      {
        x: "2016",
        y: 100,
      },
      {
        x: "2017",
        y: 100,
      },
      {
        x: "2018",
        y: 0,
      },
      {
        x: "2019",
        y: 0,
      },
      {
        x: "2020",
        y: 0,
      },
      {
        x: "2021",
        y: 0,
      },
    ],
  },
];

const WorkChart = () => (
  <ResponsiveLine
    data={data}
    curve="catmullRom"
    colors={{ datum: "color" }}
    theme={{
      textColor: colors.gray["200"],
      grid: {
        line: {
          stroke: colors.gray["600"],
        },
      },
    }}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: 0,
      max: 100,
      stacked: false,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisLeft={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: 36,
      legendPosition: "middle",
    }}
    pointSize={0}
    enableArea={true}
    areaOpacity={0.4}
    areaBlendMode="normal"
    useMesh={false}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
      },
    ]}
  />
);

export default WorkChart;
