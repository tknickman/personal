import LanguageChart from "../charts/Languages";
import WorkChart from "../charts/Work";
import PositionsChart from "../charts/Positions";
import Section from "../layout/Section";

const Stats = () => {
  return (
    <>
      <Section
        number="03"
        titleSolid="The"
        titleOutline="Numbers"
        align="center"
        id="Stats"
      >
        <div className="h-96">
          <LanguageChart />
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="h-96 w-full lg:w-1/2">
            <PositionsChart />
          </div>
          <div className="h-96 w-full lg:w-1/2">
            <WorkChart />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Stats;
