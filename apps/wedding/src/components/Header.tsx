import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Hydrangea from './icons/Hydrangea'
import useTailwind from '@hooks/useTailwind'
import { trackGoal } from 'fathom-client'

import { SECTIONS } from '@content/sections'
import { useSection } from '@contexts/Location'
import clsx from 'clsx'

const Header = () => {
  const { theme } = useTailwind()
  const [activeSection] = useSection()

  return (
    <Popover className="fixed z-10 w-full backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-2 md:justify-start md:space-x-4">
          <div className="md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md  border border-primary bg-primary p-2 text-gold hover:border-gold hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-4 font-display text-xs font-light uppercase md:flex lg:text-sm">
            {SECTIONS.map((section) => (
              <a
                href={section.href}
                key={section.key}
                onClick={() => trackGoal(section.trackingId, 0)}
                className={clsx('hover:opacity-75', {
                  'border-b-gold text-gold':
                    !activeSection ||
                    ['home', 'favorites', 'story', 'registry', 'faq'].includes(
                      activeSection
                    ),
                  'border-b-primary text-primary': [
                    'travel',
                    'rsvp',
                    'schedule',
                    'location',
                  ].includes(activeSection),
                  'border-b-2': activeSection === section.key,
                })}
              >
                {section.name}
              </a>
            ))}
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#rsvp"
              className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-gold border-transparent bg-primary px-4 py-2 text-base font-medium text-gold shadow-sm hover:opacity-75"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Hydrangea
                    fill={theme.colors.primary}
                    stroke={'white'}
                    height={50}
                    width={50}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {SECTIONS.map((section) => (
                    <Popover.Button
                      as={'a'}
                      key={section.key}
                      href={section.href}
                      onClick={() => trackGoal(section.trackingId, 0)}
                      className={clsx(
                        '-m-3 flex items-center rounded-md p-3 text-primary hover:bg-gray-50 hover:underline hover:underline-offset-8',
                        {
                          'underline underline-offset-8':
                            activeSection === section.key,
                        }
                      )}
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {section.name}
                      </span>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <Popover.Button
                  as="a"
                  href="#rsvp"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:opacity-75"
                >
                  RSVP
                </Popover.Button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
