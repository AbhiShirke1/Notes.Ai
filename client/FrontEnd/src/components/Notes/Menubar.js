import React from 'react';
import { useState } from 'react';
import './menu.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCamera, FaAssistiveListeningSystems, FaStopCircle } from 'react-icons/fa';
import { SiGrammarly } from "react-icons/si";
import { FcNeutralDecision } from "react-icons/fc";

function Menubar() {

    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);

    return (
        <div>
            <div className={click ? "box-menu active " : "box-menu"}>
                {/* <div class="wrapper1">
                                                            <div class="hamburger1" onClick={handleClick}>
                                                                      {click ? (<FaTimes size="20" style={{color:'#222'}}/>):
                                                                                (<FaBars size={20} style={{color:"#222"}}/>)}                                                           
                                                             </div>
                                                  </div> */}
                <ul className='m-3'>
                    <li className>
                        <FaCamera size="25" style={{ color: '#0A2647' }} />
                    </li>
                    <li>
                        <FaAssistiveListeningSystems size="25" style={{ color: '#222' }} />
                </li>
                <li>
                    <FaStopCircle size="25" style={{ color: 'red' }} />
                </li>
                <li>
                    <SiGrammarly size="25" style={{ color: '#ABC270' }} />
                </li>
                <li>
                    <FcNeutralDecision size="27" style={{ color: '#ABC270' }} />
                </li>

            </ul>
        </div>

        </div >
    )
}

export default Menubar;

