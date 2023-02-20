import { SECTIONS } from '@content/sections'
import { trackGoal } from 'fathom-client'

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {SECTIONS.map((section) => (
            <div key={section.key} className="px-5 py-2">
              <a
                href={section.href}
                onClick={() => trackGoal(section.trackingId, 0)}
                className="text-base text-gold hover:opacity-75"
              >
                {section.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-600">
          &copy; 2022{' '}
          <a
            className="hover:gold underline-offset-4 hover:underline"
            href="https://www.teknologist.co?ref=apps/wedding"
          >
            Teknologist, Inc.
          </a>{' '}
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
