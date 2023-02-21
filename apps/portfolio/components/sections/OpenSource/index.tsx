import Section from "../../layout/Section";
import RepoCard from "./RepoCard";
import { OpenSourceData } from "./constants";

const OpenSource = () => (
  <Section
    number="02"
    titleSolid="Open"
    titleOutline="Source"
    align="center"
    singleLine
    fontSize="text-5xl sm:text-7xl"
    id="Work"
    background="accent"
  >
    <div className="grid grid-cols-2 grid-rows-2 gap-8 px-8 py-3 sm:grid-cols-3 lg:grid-cols-5 lg:grid-rows-1">
      {OpenSourceData.map(({ key, ...openSourceData }) => (
        <RepoCard key={key} {...openSourceData} />
      ))}
    </div>
  </Section>
);

export default OpenSource;
