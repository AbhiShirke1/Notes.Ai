import React from 'react';
import './feature.css';
import {Link} from 'react-router-dom';
import {BsCameraFill,BsFillMicFill} from 'react-icons/bs';
import {FcNeutralDecision} from 'react-icons/fc';
import {SiGrammarly} from 'react-icons/si';
import  { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'

function Feature(props){

          const [vantaEffect1, setVantaEffect1] = useState(null)
          const myRef1 = useRef(null)
          useEffect(() => {
            if (!vantaEffect1) {
              setVantaEffect1(WAVES({
                    el: myRef1.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color:"#bbf9db"

              }))
            }
            return () => {
              if (vantaEffect1) vantaEffect1.destroy()
            }
          }, [vantaEffect1])
          return(
                    <div className='body' ref={myRef1}>
                              <div className='feature' >
                              <h1 className='fet-header'>Explore some features</h1>
                              <div className='feature-list'>
                                        <div className='feat-item'>
                                                  <div className='details'>
                                                            <BsCameraFill size={40} style={{marginLeft:"1rem"}}/>
                                                            <h2>Convert image to text</h2>
                                                            <p>The first thing you do daily with Planzer is plan your day with tasks from multiple integrations.</p>
                                                  </div>

                                        </div>

                                        <div className='feat-item'>
                                                  <div className='details'>
                                                            <BsFillMicFill size={40} style={{marginLeft:"1rem"}}/>
                                                            <h2>Convert speech to text</h2>
                                                            <p>The first thing you do daily with Planzer is plan your day with tasks from multiple integrations.</p>
                                                  </div>
                                                  
                                        </div>

                                        <div className='feat-item'>
                                                  <div className='details'>
                                                            <FcNeutralDecision size={40} style={{marginLeft:"1rem",color:"#222"}}/>
                                                            <h2>Check Sentiment</h2>
                                                            <p>The first thing you do daily with Planzer is plan your day with tasks from multiple integrations.</p>
                                                  </div>
                                                  
                                        </div>

                                        <div className='feat-item'>
                                                  <div className='details'>
                                                            <SiGrammarly size={40} style={{marginLeft:"1rem"}}/>
                                                            <h2>Check Grammar</h2>
                                                            <p>The first thing you do daily with Planzer is plan your day with tasks from multiple integrations.</p>
                                                  </div>
                                                  
                                        </div>

                                        <div className='feat-item'>
                                                  <div className='details'>
                                                            <SiGrammarly size={40} style={{marginLeft:"1rem"}}/>
                                                            <h2>Check Grammar</h2>
                                                            <p>The first thing you do daily with Planzer is plan your day with tasks from multiple integrations.</p>
                                                  </div>
                                                  
                                        </div>

                                        <div className='feat-item'>
                                                  <div className='details'>
                                                            <SiGrammarly size={40} style={{marginLeft:"1rem"}}/>
                                                            <h2>Check Grammar</h2>
                                                            <p>The first thing you do daily with Planzer is plan your day with tasks from multiple integrations.</p>
                                                  </div>
                                                  
                                        </div>


                              </div>
                              <Link to='/project' className='fet-btn'>Try Now</Link> 
                    </div>

                    </div>

          )
}

export default Feature;