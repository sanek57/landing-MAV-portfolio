// components
import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Review } from './components/Review'
import { Skill } from './components/Skill'
import { Work } from './components/Work'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
