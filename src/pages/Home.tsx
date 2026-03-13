import Hero from '../components/Hero'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Timeline />
      <Contact />
    </main>
  )
}
