import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Welcome from '@/components/Sections/Welcome'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Skills />
    </>
  )
}
