import './Hero.css';
import React from 'react'
import { Link } from 'react-router-dom';
import  { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import NET from 'vanta/dist/vanta.net.min'


const Hero = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x539165,
        backgroundColor: 0xffffff

  }))
}
return () => {
  if (vantaEffect) vantaEffect.destroy()
}
}, [vantaEffect])
  return (
    <div className='hero' ref={myRef}>
          <div className='mask'>
                    {/* <img className='into-img' src={heroimg} alt="Introimg" /> */}
          </div>
         <div className='content' >
                    <h1 data-text='Stop losing track of your tasks.'>Stop losing track of your tasks.</h1>
                    <p>A task planning app that allows you to plan all your tasks from multiple tools directly in your calendar. </p> 
                    <div className='button'>
                              <Link to='/project' className='btn'>Try Now</Link> 
                              {/* <Link to='/education' className='btn btn-light'>Education</Link>                    */}
                    </div>
          </div> 
    </div>


  )
}

export default Hero
