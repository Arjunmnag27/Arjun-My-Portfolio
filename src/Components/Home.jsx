import React, { useRef } from 'react'
import '../Design/Home.css'
import Arjun from './Arjun'
import FED from './FED'
import IT from './IT'
import Contact from './Contact'
import Navbar from './Navbar'
import Projects from './Projects'
import Knowmore from './Knowmore'


export default function Home() {
  let projects = useRef()
  let scrollToProjects = (() => {
    projects.current.scrollIntoView({ behavior: 'smooth' })
  })

  let contact = useRef()
  let scrollToContact = (() => {
    contact.current.scrollIntoView({ behavior: 'smooth' })
  })

  let knowmore = useRef()
  let scrollToKnowmore = (() => {
    knowmore.current.scrollIntoView({ behavior: 'smooth' })
  })



  return (
    <div id='HD1'>
      <Navbar scrollToProjects={scrollToProjects} scrolltocontact={scrollToContact} scrollToKnowmore={scrollToKnowmore}/>
      <Arjun />
      <FED />
      <IT />
      <Contact contact={contact} />
      <Projects projects={projects} />
      <Knowmore knowmore={knowmore}/>
    </div>
  )
}
