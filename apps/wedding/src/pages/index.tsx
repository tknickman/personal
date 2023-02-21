import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { SECTIONS } from '@content/sections'

const App = () => {
  return (
    <>
      <Head>
        <title>Thomas and Stephanie - September 30, 2022</title>
        <meta name="description" content="Wedding" />
      </Head>
      <Header />
      <main>
        {SECTIONS.map((section) => (
          <section.component key={section.key} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
