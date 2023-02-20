import { motion } from 'framer-motion'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { Favorite } from '@types'
import { trackGoal } from 'fathom-client'

const getRotation = () => {
  const val = Math.random() * (1 - -1) + -1
  if (val >= 0) {
    return 0.2
  }
  return -0.2
}

const Place = ({ place }: { place: Favorite }) => {
  const directions = place.directions.marriott

  return (
    <motion.div
      whileHover={{ scale: 1.01, rotate: getRotation() }}
      key={place.title}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={place.image.src}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-egg p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-maroon">
            {place.category.name}
          </p>
          <a
            href={place.href}
            className="mt-2 block underline-offset-4"
            onClick={() => trackGoal(place.trackingId, 0)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xl font-semibold text-primary hover:underline">
              {place.title}
            </p>
            <p className="mt-3 text-base text-gray-500">{place.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={directions.directionsHref}>
              <LocationMarkerIcon className="h-10 w-10 text-primary" />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a
                href={directions.directionsHref}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {place.address}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <span>
                {directions.walkingTime} walk ({directions.walkingDistance})
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Place
