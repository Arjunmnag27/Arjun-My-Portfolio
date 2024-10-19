import React, { useEffect } from 'react'
import '../Design/Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Contact({ contact }) {
useEffect (()=>{
  AOS.init({duration:1000})
  AOS.refresh()
}, [])

  return (
    <div id='Cd' ref={contact}>
      <div id='f1'data-aos="fade-up-left">
        <form>
          <input className='i1' type="text" placeholder='Name'  required/>
          <input className='i1' type="email" placeholder='E-mail'  required/>
          <input className='i1' type="value" placeholder='Phone' required />
          <input className='i1' type="text" placeholder='What are you looking for?'/>
          <input id='i2' type="checkbox" />
          <label id='l1'>Can we connect through call?</label>
          <button id='cdb'>Submit</button>
        </form>
      </div>
      {/* <img id='cdi1' src="images/35.png" alt="" data-aos="fade-up-right"/> */}
      <img id='cdi2' src="images/22.jpg" alt="" />
    </div>
  )
}
