import React, { useEffect } from 'react'
import '../Design/Projects.css'
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Projects({projects}) {
 useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])
  return (
    <div id='dp1' ref={projects}>
      <h1 id='dph1'>PROJECTS</h1>
      <img id='dpi1' src="images/28.png" alt='Inetrnal App' data-aos="fade-down-left" data-aos-delay="000" />
      <span id='dps1' data-aos="fade-down-left" data-aos-delay="000" >Internal App</span>
      <img id='dpi2' src="images/29.png" alt='Public App' data-aos="fade-down-left" data-aos-delay="200" />
      <span id='dps2' data-aos="fade-down-left" data-aos-delay="200">Public App</span>
      <img id='dpi3' src="images/logo.png" alt='E-commerce App' data-aos="fade-down-left" data-aos-delay="400" />
      <span id='dps3' data-aos="fade-down-left" data-aos-delay="400" >E-commerce App</span>
      <img id='dpi4' src="images/31.png" alt='Personal App' data-aos="fade-down-left" data-aos-delay="600" />
      <span id='dps4' data-aos="fade-down-left" data-aos-delay="600" >Personal App</span>
    </div>
  )
}



