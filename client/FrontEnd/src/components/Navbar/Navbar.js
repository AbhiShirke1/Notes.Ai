import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
import {FaBars,FaTimes,FaHome,FaUserAlt,FaStickyNote} from 'react-icons/fa'
import {MdNotes,MdOutlineFeaturedPlayList} from 'react-icons/md';

function Navbar(){

          const [click,setClick]=useState(false);

          const handleClick =()=>setClick(!click);

          const [color,setColor] = useState(false);
          const changeColor =()=>{
                    if (window.scrollY >=100){
                              setColor(true);
                    }else{
                              setColor(false);
                    }
          };

          window.addEventListener("scroll",changeColor);

                   return (
                    <div className={'header header-bg'}>
                              
                              <Link to='/'><MdNotes size="1.9rem" style={{color:'#fff'}}/>Notein.AI</Link>
                              <ul className={click ? "nav-menu active " : "nav-menu"}>
                                        <li>
                                                  <Link to='/'><FaHome size="1.2rem" style={{color:'#fff',marginRight:"0.5rem",marginTop:"0.5rem"}}/>Home</Link>
                                        </li>
                                        <li>
                                                  <Link to='/notes'><FaStickyNote size="1.2rem" style={{color:'#fff',marginRight:"0.5rem",marginTop:"0.5rem"}}/>Notes</Link>
                                        </li>
                                        <li>
                                                  <Link to='/implement'><MdOutlineFeaturedPlayList size="1.2rem" style={{color:'#fff',marginRight:"0.5rem",marginTop:"0.5rem"}}/>Features</Link>
                                        </li>
                                        <li>
                                                  <Link to='/login' className=''><FaUserAlt size="1.2rem" style={{color:'#fff',marginRight:"0.5rem",marginTop:"0.5rem"}}/>Login</Link>   
                                        </li>
                              </ul>
                              
                              <div className='hamburger' onClick={handleClick}>
                                        {click ? (<FaTimes size="20" style={{color:'#fff'}}/>):
                                        (<FaBars size={20} style={{color:"#fff"}}/>)}
                              </div>
                    </div>
          )
}

export default Navbar;