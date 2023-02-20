import Heading from '@/components/Heading'
import Section from '@/components/Section'

const faqs = [
  {
    id: 1,
    question: 'What are the Covid-19 guidelines?',
    answer:
      'We encourage everyone to take precautions leading up to the wedding to make it a safe and enjoyable environment for everybody, including our guests who might have pre-existing conditions or other vulnerabilities. Vaccinations are encouraged, and masks are welcomed. ',
  },
  {
    id: 2,
    question: 'What is the dress code?',
    answer:
      'Cocktail attire is recommended, but we encourage everyone to wear what you prefer!',
  },
  {
    id: 3,
    question:
      'Will there be any accommodations for those with difficulty walking?',
    answer:
      'The property is on a hill and most of the day will take place on grass-surfaces. (So stilettos are probably not your friend.) Please do not hesitate to let us know if you anticipate any concerns with walking short, but sometimes hilly distances to the various areas.',
  },
  {
    id: 4,
    question: 'Will there be any accommodations for hearing impaired guests?',
    answer:
      'For folks hard of hearing, let us know if you’re concerned, and we will do our best to make sure you have seats close to the action!',
  },
]

export default function FAQ() {
  return (
    <Section className="bg-primary" id="faq">
      <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-xl">
          <Heading>FAQ</Heading>
          <p className="mt-4 text-xl font-light tracking-widest text-egg">
            Covid, access, and other information
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-base font-medium text-gold">
                {faq.question}
              </dt>
              <dd className="mt-3 text-sm text-egg">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
