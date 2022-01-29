import Chart from "./Chart";
import data from "./data";

const formattedLanguageData = data.map((dataSet) => {
  return {
    ...dataSet,
    data: dataSet.data.map(({ x, y }) => ({ y: y ? 10 - y : null, x })),
  };
});

const LanguageChart = () => <Chart data={formattedLanguageData} />;

export default LanguageChart;
