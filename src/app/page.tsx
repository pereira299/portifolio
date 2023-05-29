import About from '@/components/Sections/About'
import Projects from '@/components/Sections/Projects'
import Skills from '@/components/Sections/Skills'
import Welcome from '@/components/Sections/Welcome'

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Skills />
      <Projects />
    </>
  )
}
