import React, { useState, ReactNode } from 'react'
import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
const GOOGLE_MAPS_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID as string

const libraries: (
  | 'places'
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'visualization'
)[] = ['places']

type LocationItem = {
  name: string
  id: string
  content: ReactNode
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  location: {
    lat: number
    lng: number
  }
}

const locations: Array<LocationItem> = [
  {
    name: 'All Parking',
    id: 'parking',
    Icon: LocationMarkerIcon,
    content: (
      <div>
        <a
          className="hover:underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/maps/dir//chiques+church/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c8a1cc08e9d4f9:0x27fc5aa279db4b9e?sa=X&ved=2ahUKEwjIzpj8xr35AhUjM1kFHcvkC4IQ9Rd6BAhCEAQ"
        >
          <div>4045 Sunnyside Road</div>
          <div>Manheim, Pennsylvania 17545.</div>
        </a>
      </div>
    ),
    location: {
      lat: 40.183965,
      lng: -76.506965,
    },
  },
  {
    name: 'Ceremony & Reception',
    id: 'ceremony',
    Icon: LocationMarkerIcon,
    content: "Wouldn't you like to know",
    location: {
      lat: 40.163467,
      lng: -76.498832,
    },
  },
]

const MapContainer = () => {
  const [selected, setSelected] = useState<LocationItem>()

  const onSelect = (item: LocationItem) => {
    setSelected((prevItem) => {
      return prevItem?.id === item.id ? undefined : item
    })
  }

  const mapStyles = {
    height: '750px',
    width: '100%',
  }

  const defaultCenter = {
    lat: 40.171787,
    lng: -76.503394,
  }

  return (
    <div className="relative">
      {/* <Container className="absolute top-10 left-5 z-10 h-1/2 rounded-md bg-primary font-display text-egg">
        Some info about parking
      </Container> */}
      <LoadScript
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        mapIds={[GOOGLE_MAPS_MAP_ID]}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={selected ? 14.5 : 14}
          center={selected?.location || defaultCenter}
          options={{
            mapId: GOOGLE_MAPS_MAP_ID,
            disableDefaultUI: true,
          }}
        >
          {locations.map((item) => {
            return (
              <OverlayView
                key={item.name}
                position={item.location}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <>
                  <button
                    onClick={() => onSelect(item)}
                    className="group inline-flex items-center px-2.5 py-0.5"
                  >
                    <>
                      <item.Icon
                        className={clsx(
                          'mr-2 h-12 w-12 group-hover:text-primary',
                          {
                            'text-primary': selected,
                            'text-gold': !selected,
                          }
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={clsx(
                          'inline-flex items-center rounded-md border-2 border-gold px-2.5 py-0.5 font-display text-lg font-light text-primary backdrop-blur-md group-hover:border-gold group-hover:backdrop-blur-sm',
                          {
                            'border-none bg-egg font-bold': selected,
                          }
                        )}
                      >
                        {item.name}
                      </span>
                    </>
                  </button>
                  {selected && selected.id === item.id && (
                    <>
                      <div className="z-50 min-h-[4rem] max-w-sm rounded-md border-2 border-gold bg-egg p-4 text-lg">
                        <p>{item.content}</p>
                      </div>
                      <button
                        onClick={() => setSelected(undefined)}
                        type="button"
                        className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        Done
                      </button>
                    </>
                  )}
                </>
              </OverlayView>
            )
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapContainer
