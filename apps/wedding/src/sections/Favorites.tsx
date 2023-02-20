import Heading from '@components/Heading'
import Section from '@components/Section'
import Place from '@components/Place'

import { FAVORITES } from '@content/favorites'

const Favorites = () => {
  return (
    <Section
      id="favorites"
      className="relative bg-primary px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="absolute inset-0">
        <div className="h-1/3 bg-primary sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <Heading autoAlign={false}>
            These are a few of our favorite things...
          </Heading>
          <p className="mx-auto mt-3 max-w-2xl font-light tracking-widest text-egg sm:mt-4 md:text-xl">
            Like so many weddings, this is a celebration of love. And it would
            not be complete without a love letter to Lancaster, and in
            particular, this small city&apos;s food scene.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {FAVORITES.map((place) => (
            <Place place={place} key={place.title} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Favorites
