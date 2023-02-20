import Heading from '@/components/Heading'
import Hydrangea from '@/components/icons/Hydrangea'
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className="flex h-screen min-h-full flex-col bg-primary pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <Link href="/">
            <Hydrangea />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <Heading center>Looks like you&apos;re lost</Heading>
            <p className="text-display mt-2 text-base text-egg">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="rounded-md border-gold p-2 text-base font-medium text-gold hover:border"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
