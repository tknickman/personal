import Section from "../layout/Section";

const About = () => {
  return (
    <Section
      number="01"
      titleSolid="About"
      titleOutline="Me"
      align="left"
      id="About"
      background="accent"
    >
      <div className="pt-3">
        <div className="text-dark text-sm font-semibold uppercase tracking-wide">
          Thomas E. Knickman
        </div>

        <p className="text-dark mt-2 text-4xl">
          Text about me text about me Text about me text about me Text about me
          text about me Text about me text about me Text about me text about me
          Text about me text about me Text about me text about me Text about me
          text about me Text about me text about me Text about me text about me
          Text about me text about me Text about me text about me Text about me
          text about me Text about me text about me Text about me text about me.
        </p>
      </div>
    </Section>
  );
};

export default About;
