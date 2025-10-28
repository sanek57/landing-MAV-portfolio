import { useRef } from 'react'

// components
import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Review } from './components/Review'
import { Skill } from './components/Skill'
import { Work } from './components/Work'

// node modules
import { ReactLenis } from 'lenis/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// register GSAP plugin
gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')

    // console.log(elements)

    elements.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
          // markers: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      })
    })
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
