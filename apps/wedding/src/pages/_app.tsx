import 'focus-visible'
import '@/styles/tailwind.css'
import { AppProps } from 'next/app'
import RSVPs from '@/contexts/RSVP'
import SectionContext from '@/contexts/Location'
import { getDomains, useFathom, useLogRocket } from '@tek/utils'

const hostnames = process.env.NEXT_PUBLIC_FATHOM_TRACKING_DOMAINS
const fathomSiteId = process.env.NEXT_PUBLIC_FATHOM_TRACKING_ID
const fathomUrl = process.env.NEXT_PUBLIC_FATHOM_TRACKING_URL
const logRocketSiteId = process.env.NEXT_PUBLIC_LOG_ROCKET_SITE_ID

export default function App({ Component, pageProps }: AppProps) {
  useFathom(fathomSiteId as string, {
    url: fathomUrl,
    includedDomains: getDomains({ hostnames }),
  })
  useLogRocket(logRocketSiteId as string)

  return (
    <SectionContext>
      <RSVPs>
        <Component {...pageProps} />
      </RSVPs>
    </SectionContext>
  )
}

// web vitals
export { reportWebVitals } from 'next-axiom'
