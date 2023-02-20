import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import { SECTIONS } from '@content/sections'
import { SectionKeys } from '@types'

type SectionContext = {
  section: SectionKeys
  setSection: Dispatch<SetStateAction<SectionKeys>>
}

const SectionContext = createContext<SectionContext>({
  section: 'home',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSection: () => {},
})

function SectionRouting({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<SectionKeys>(SECTIONS[0].key)

  return (
    <SectionContext.Provider
      value={{
        section,
        setSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  )
}

const useSection = (): [SectionKeys, Dispatch<SetStateAction<SectionKeys>>] => {
  const { section, setSection } = useContext(SectionContext)
  return [section, setSection]
}

export { SectionContext, useSection }
export default SectionRouting
