// components
import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Review } from './components/Review'
import { Skill } from './components/Skill'
import { Work } from './components/Work'

import { ReactLenis, useLenis } from 'lenis/react'

function App() {

  const lenis = useLenis((lenis) => {
    // called every scroll
    // console.log(lenis)
  })


  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contacts />
        <Footer />
      </main>
    </ReactLenis>
  )
}

export default App
