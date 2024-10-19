import React from 'react'
import '../Design/Knowmore.css'
export default function Knowmore({knowmore}) {
  return (
    <div id='km' ref={knowmore}>
      <img id='kmi' src="images/Arjun.png" alt="" />
      <div id='kmd'>
        <h1 id='kmdh1'>Hi, I'am Arjun M Nag, React Developer</h1>
        <h3 id='kmdh3'>
          My journey into front-end development stems from a passion for creating user-friendly,
          visually appealing, and highly functional web applications.
          I chose front-end development because it bridges creativity with technology,
          allowing me to bring ideas to life in the browser.
          Through my learning journey, I became proficient in HTML, CSS, JavaScript,
          and React.js, which has become my preferred library for building modern,
          scalable applications.
          <br /><br />
          React.js, with its component-based architecture and efficient rendering
          through the Virtual DOM, plays a vital role in the web development landscape.
          It allows developers like me to build dynamic and responsive UIs while ensuring
          optimal performance. With React, I can create reusable components, streamline
          the development process, and improve overall user experience. This is why I
          embraced React.js as a core tool in my front-end toolkit - it's flexible,
          efficient, and widely used in the industry. By mastering front-end development and React.js,
          I am equipped to build applications that meet both user needs and industry
          standards.
        </h3>
      </div>
    </div>
  )
}
