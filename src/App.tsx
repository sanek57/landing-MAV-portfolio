// components
import { About } from './components/About'
import { Contacts } from './components/Contacts'
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
      </main>
    </>
  )
}

export default App
