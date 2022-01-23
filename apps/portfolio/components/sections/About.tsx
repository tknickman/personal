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
        <div className="text-sm font-semibold tracking-wide uppercase text-dark">
          Thomas E. Knickman
        </div>

        <p className="mt-2 text-4xl text-dark">
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
