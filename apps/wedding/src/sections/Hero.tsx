import { Container } from '@components/Container'
import Section from '@components/Section'
import Heading from '@components/Heading'
import Hydrangea from '@components/icons/Hydrangea'

const Hero = () => {
  return (
    <Section
      id="home"
      className="flex min-h-[100vh] justify-center bg-primary pt-10 pb-20 text-center align-middle sm:py-24"
    >
      <Container className="mt-24 sm:mt-4">
        <div className="max-w-2xl text-center text-gold sm:mt-2 lg:max-w-full lg:px-12">
          <Heading>Stephanie Lyn Palazzo</Heading>
          <h2 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-[8rem]">
            &amp;
          </h2>
          <Heading>Thomas Edward Knickman</Heading>
        </div>

        <div className="flex justify-center text-center align-middle">
          <div className="mx-1">
            <Hydrangea width={75} height={75} />
          </div>
        </div>
        <div className="mt-8 flex justify-center text-center align-middle">
          <div className="font-display text-sm font-light uppercase tracking-[.5em] text-gold sm:text-xl">
            <p>Please join us on</p>
            <p>30 September 2022 at 5PM</p>
            <p>Celebration to Follow</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
