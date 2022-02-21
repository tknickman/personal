import Section from "../../layout/Section";

const OpenSource = () => (
  <Section
    number="02"
    titleSolid="My"
    titleOutline="Work"
    align="center"
    singleLine
    fontSize="text-5xl sm:text-7xl"
    id="Work"
    background="default"
  >
    <div className="grid grid-cols-2 grid-rows-2 gap-8 px-8 py-3 lg:grid-rows-1 lg:grid-cols-5 sm:grid-cols-3">
      Work
    </div>
  </Section>
);

export default OpenSource;
