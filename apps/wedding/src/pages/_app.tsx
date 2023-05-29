import 'focus-visible'
import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import RSVPs from '@/contexts/RSVP'
import SectionContext from '@/contexts/Location'

// internal
import { getDomains, useFathom } from '@tek/utils'

const hostnames = process.env.NEXT_PUBLIC_FATHOM_TRACKING_DOMAINS
const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_TRACKING_ID
const fathomUrl = process.env.NEXT_PUBLIC_FATHOM_TRACKING_URL

export default function App({ Component, pageProps }: AppProps) {
  useFathom(fathomSiteId as string, {
    url: fathomUrl,
    includedDomains: getDomains({ hostnames }),
  })

  return (
    <>
      <SectionContext>
        <RSVPs>
          <Component {...pageProps} />
        </RSVPs>
      </SectionContext>
      <Analytics />
    </>
  )
}

// web vitals
export { reportWebVitals } from 'next-axiom'
