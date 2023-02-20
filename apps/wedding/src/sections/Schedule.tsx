import Heading from '@components/Heading'
import Section from '@components/Section'
import SCHEDULE from '@content/schedule'

export default function Schedule() {
  return (
    <Section className="bg-egg px-8" id="schedule">
      <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-xl">
          <Heading color="text-primary">Schedule</Heading>
          <p className="mb-8 font-light tracking-widest text-primary md:text-xl">
            For our need-to-know, need-to-plan, or just simply curious friends
            and family, here is a schedule of events:
          </p>
        </div>

        <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {SCHEDULE.map((step) => (
            <li key={step.name} className="md:flex-1">
              <div className="group flex flex-col border-l-4 border-primary py-2 pl-4 hover:border-primary md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                <span className="text-lg font-bold text-primary group-hover:text-primary">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
