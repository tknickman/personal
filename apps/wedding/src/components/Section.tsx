import { useElementPosition } from '@tek/utils/client'
import { useSection } from '@contexts/Location'
import { useRouter } from 'next/router'
import { useEffect, ReactNode } from 'react'
import { SectionKeys } from '@types'

const Section = ({
  children,
  id,
  className,
}: {
  children: ReactNode
  id: SectionKeys
  className?: string
}) => {
  const router = useRouter()
  const [section, setSection] = useSection()
  const [rect, ref] = useElementPosition<HTMLElement>()

  useEffect(() => {
    if (rect.top < 10 && rect.height - Math.abs(rect.top) > 10) {
      if (section !== id) {
        setSection(id)
      }
    }
  }, [router, id, rect, section, setSection])

  return (
    <section id={id} className={className} ref={ref}>
      {children}
    </section>
  )
}

export default Section
