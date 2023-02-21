import Map from '@components/Map'
import Heading from '@components/Heading'
import Section from '@components/Section'
import House from '@components/icons/House'

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
