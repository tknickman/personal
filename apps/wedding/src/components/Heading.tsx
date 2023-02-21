import { ReactNode } from 'react'
import clsx from 'clsx'

const Heading = ({
  children,
  color = 'text-gold',
  autoAlign = true,
  center = false,
}: {
  children: ReactNode
  color?: string
  autoAlign?: boolean
  center?: boolean
}) => {
  return (
    <h1
      className={clsx(
        color,
        'py-6 font-script text-6xl font-light tracking-wide  sm:text-7xl md:text-8xl lg:text-[8rem]',
        {
          'text-center sm:text-left': autoAlign && !center,
          'text-center': center,
        }
      )}
    >
      {children}
    </h1>
  )
}

export default Heading
