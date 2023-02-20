import { LinkIcon } from '@heroicons/react/outline'
import FathomGoals from '@/lib/fathomGoals'

import RSVP from '@sections/RSVP'
import Hero from '@sections/Hero'
import Location from '@sections/Location'
import Favorites from '@sections/Favorites'
import FAQ from '@sections/FAQ'
import Story from '@/sections/Story'
import Travel from '@sections/Travel'
import Registry from '@sections/Registry'
import Schedule from '@sections/Schedule'

import type { Section } from '@types'

const SECTIONS: Array<Section> = [
  {
    name: 'Home',
    key: 'home',
    href: '#',
    trackingId: FathomGoals.navHome,
    component: Hero,
    icon: LinkIcon,
  },
  {
    name: 'RSVP',
    key: 'rsvp',
    href: '#rsvp',
    trackingId: FathomGoals.navRSVP,
    component: RSVP,
    icon: LinkIcon,
  },
  {
    name: 'Registry',
    key: 'registry',
    href: '#registry',
    trackingId: FathomGoals.navRegistry,
    component: Registry,
    icon: LinkIcon,
  },
  {
    name: 'Location',
    key: 'location',
    href: '#location',
    trackingId: FathomGoals.navLocation,
    component: Location,
    icon: LinkIcon,
  },
  {
    name: 'FAQ',
    key: 'faq',
    href: '#faq',
    trackingId: FathomGoals.navFAQ,
    component: FAQ,
    icon: LinkIcon,
  },
  {
    name: 'Our Story',
    key: 'story',
    href: '#story',
    trackingId: FathomGoals.navStory,
    component: Story,
    icon: LinkIcon,
  },
  {
    name: 'Schedule',
    key: 'schedule',
    href: '#schedule',
    trackingId: FathomGoals.navStory,
    component: Schedule,
    icon: LinkIcon,
  },
  {
    name: 'Favorites',
    key: 'favorites',
    href: '#favorites',
    trackingId: FathomGoals.navFavorites,
    component: Favorites,
    icon: LinkIcon,
  },
  {
    name: 'Travel',
    key: 'travel',
    href: '#travel',
    trackingId: FathomGoals.navTravel,
    component: Travel,
    icon: LinkIcon,
  },
]

export { SECTIONS }
