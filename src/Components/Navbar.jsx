import React from 'react'
import '../Design/Navbar.css'
import cv from '../Assest/Arjun_React Developer_Resume-2.pdf'

export default function Navbar({scrollToProjects, scrolltocontact, scrollToKnowmore}) {
 
  return (
    <div id='ndv'>
      <div id='ndv1'>
        <img id='ndi1' src="images/f.png" alt="" />
        <img id='ndi2' src="images/i.png" alt="" />
        <img id='ndi3' src="images/w.png" alt="" />
        <h1>ARJUN M NAG</h1>
      </div>
      <div id='ndv2'>
        <span className='ndv2s' onClick={scrollToProjects}>Projects</span>
        <a href={cv} download={true}><span className='ndv2s'>Downlaod Resume</span></a>
        <span className='ndv2s' onClick={scrollToKnowmore}>Know more</span>
        <span className='ndv2s' onClick={scrolltocontact} >Contact me</span>
      </div>
    </div>
  )
}
