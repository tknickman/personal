import { render, screen } from '@testing-library/react'
import { createMockRouter } from '@tek/utils'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import RSVPs from '@/contexts/RSVP'
import SectionContext from '@/contexts/Location'
import Home from '../src/pages/index'

describe('Home', () => {
  it('renders page heading', () => {
    render(
      <RouterContext.Provider value={createMockRouter({ query: {} })}>
        <SectionContext>
          <RSVPs>
            <Home />
          </RSVPs>
        </SectionContext>
      </RouterContext.Provider>
    )
    const s = screen.getByText('Stephanie Lyn Palazzo')
    const t = screen.getByText('Thomas Edward Knickman')
    expect(s).toBeInTheDocument()
    expect(t).toBeInTheDocument()
  })
})
