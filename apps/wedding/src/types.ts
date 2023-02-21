import { ComponentProps } from 'react'
import { StaticImageData } from 'next/image'

export type HotelKey = 'cork' | 'marriott' | 'arts'
export type SectionKeys =
  | 'home'
  | 'rsvp'
  | 'registry'
  | 'location'
  | 'faq'
  | 'story'
  | 'schedule'
  | 'favorites'
  | 'travel'

export type DinnerChoice = 'steak' | 'chicken' | 'vegetarian'
export type Dinner = {
  id: DinnerChoice
  name: string
  shortName: string
  description: string
  Icon: (
    props: React.ComponentProps<'svg'> & {
      selected?: boolean
      className?: string
      disabled?: boolean
    }
  ) => JSX.Element
}

export type RSVP = {
  firstName: string
  lastName: string
  isAttending: boolean
  hasDietaryRestrictions: boolean
  dinner?: Dinner
  email?: string
  restrictions?: string
  groupId?: string
}

export type FavoriteCategory = {
  name: string
}

export type FavoriteAddress = {
  walkingTime: string
  walkingDistance: string
  directionsHref: string
}

export type HotelAddress = {
  line1: string
  line2: string
}

export type Favorite = {
  title: string
  href: string
  trackingId: string
  category: FavoriteCategory
  address: string
  directions: Record<string, FavoriteAddress>
  description: string
  image: StaticImageData
}

export type Hotel = {
  name: string
  key: HotelKey
  description: string
  address: HotelAddress
  href: string
}

export type Section = {
  name: string
  key: SectionKeys
  href: string
  trackingId: string
  component: () => JSX.Element
  icon: (props: ComponentProps<'svg'>) => JSX.Element
}

export type Event = {
  id: string
  name: string
}
