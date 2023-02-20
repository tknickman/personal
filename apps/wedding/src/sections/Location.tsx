import Map from '@components/Map'
import Heading from '@components/Heading'
import Section from '@components/Section'
import House from '@components/icons/House'
import clsx from 'clsx'

import { LocationMarkerIcon } from '@heroicons/react/solid'

const timeline = [
  {
    id: 1,
    content: 'Parking',
    time: '4:30 PM',
    location: 'Chiques Church',
    icon: LocationMarkerIcon,
  },
  {
    id: 2,
    content: 'Ceremony',
    time: '5:00 PM',
    location: 'Palazzo Residence',
    icon: LocationMarkerIcon,
  },
  {
    id: 3,
    content: 'Cocktail Hour',
    time: '5:30 PM',
    location: 'Palazzo Residence',
    icon: LocationMarkerIcon,
  },
  {
    id: 4,
    content: 'Celebration',
    time: '6:30 PM',
    location: 'Palazzo Residence',
    icon: LocationMarkerIcon,
  },
  {
    id: 5,
    content: 'Departure',
    time: '11:30 PM',
    location: 'Chiques Church',
    icon: LocationMarkerIcon,
  },
]

function Timeline() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={clsx(
                      'flex h-8 w-8 items-center justify-center rounded-full  bg-egg ring-8 ring-egg'
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="w-50 flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div className="pl-2">
                    <p className="font-medium text-egg">{event.content}</p>
                    <p className="text-sm font-light text-gold">
                      {event.location}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-egg">
                    {event.time}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Location = () => {
  return (
    <Section className="bg-egg py-16 px-4 sm:px-6 lg:px-8" id="location">
      <main className="overflow-hidden">
        <div className="bg-warm-gray-50">
          <div className="mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
            <div className="pb-5 md:flex md:justify-between">
              <div className="flex-col">
                <Heading color="primary">Location</Heading>
                <div className="mt-4 font-display text-lg font-light tracking-widest text-primary sm:mt-3">
                  <strong className="text-xl font-extrabold uppercase">
                    Please park at{' '}
                    <a
                      className="hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.google.com/maps/dir//Chiques+Church/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c8a1cc08e9d4f9:0x27fc5aa279db4b9e?sa=X&ved=2ahUKEwiIhKfWqr35AhXjpIkEHR1lBjYQ9Rd6BAhCEAQ"
                    >
                      Chiques Church
                    </a>
                  </strong>
                  <p className="font-display text-sm font-light tracking-tight text-primary">
                    The Palazzo residence is on a hill, which makes for a
                    beautiful setting for a wedding, but not the most ideal
                    parking lot. Instead, we ask everyone park at Chiques
                    Church. No, we won’t be getting married there. And yes, the
                    parking lot is next to a cemetery. But we promise, a shuttle
                    will take you to the venue where heavenly wedding vistas
                    await you on the other side. Chiques Church is located at{' '}
                    <span>
                      <a
                        className="font-bold hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/place/Chiques+Church/@40.1833838,-76.5092788,17z/data=!3m1!4b1!4m5!3m4!1s0x89c8a1cc08e9d4f9:0x27fc5aa279db4b9e!8m2!3d40.1833614!4d-76.5069635"
                      >
                        4045 Sunnyside Road, Manheim, Pennsylvania 17545.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-4">
                <House className="mx-auto h-52 w-72 lg:w-[30rem]" />
                <strong className="font-display text-lg font-extrabold capitalize tracking-widest text-primary">
                  Please Note
                </strong>

                <p className="font-display text-sm font-light tracking-tight text-primary">
                  If you, good people reading this, should mistakenly show up at
                  the Palazzos’ with a car, there’s good news and bad news. The
                  good news is that a parking attendant will direct you to the
                  church just a mile away. The bad news is that your
                  welcome-champagne will be revoked.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <Map />
      </main>
    </Section>
  )
}

export default Location
