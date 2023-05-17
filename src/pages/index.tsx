import Link from 'next/link'

import Nav from '@/components/Nav/Nav'
import AboutMe from '@/components/About/Me'
import Projects from '../components/Info/Projects'
import Footer from '@/components/Footer/Footer'


export default function Home() {

  return (
    <>
      <Nav />
      <AboutMe />
      <Projects />
    </>
  )
}
