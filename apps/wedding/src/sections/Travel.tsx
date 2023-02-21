import Heading from '@components/Heading'
import Section from '@components/Section'
import HOTELS from '@content/hotels'
import { ExternalLinkIcon } from '@heroicons/react/outline'

const Travel = () => {
  return (
    <Section className="bg-egg" id="travel">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <Heading color="primary">Need a place to stay?</Heading>
        <div className="mt-10 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
          {HOTELS.map((hotel) => (
            <div key={hotel.name}>
              <a
                href={hotel.href}
                className="inline-flex text-lg font-medium text-gray-900 underline-offset-2 hover:underline"
              >
                <ExternalLinkIcon className="mr-2 h-5 w-5 self-center" />
                {hotel.name}
              </a>
              <p className="mt-2 text-base text-gray-500">
                <span className="block">{hotel.address.line1}</span>
                <span className="block">{hotel.address.line2}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Travel
