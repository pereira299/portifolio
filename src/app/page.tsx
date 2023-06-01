import About from '@/components/Sections/About'
import Courses from '@/components/Sections/Courses'
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
      <Courses />
    </>
  )
}
