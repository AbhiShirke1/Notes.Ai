import { FaFacebook, FaGithub, FaHome, FaInstagram, FaMailBulk, FaPhone } from 'react-icons/fa';
import './footer.css';


function Footer(){
          return(
                    <div className='footer'>
                              <div className='footer-container'>
                                        <div className='left'>
                                                  <div className='location'>
                                                            <FaHome size={20} style={{color:"#000",marginRight:"2rem"}}/>
                                                            <div>
                                                            <p>A2/103 Shree Saraswati Socitey Chembur-71 </p>
                                                            <p>India.</p>
                                                  </div>
                                                  </div>



                                                  <div className='phone'>
                                                            <h4>
                                                            <FaPhone size={20} style={{color:"#000" , marginRight:"2rem"}}/>
                                                            91+ 9137948726  
                                                            </h4>
                                                
                                                  </div>      

                                                  <div className='email'>
                                                            <h4>
                                                            <FaMailBulk size={20} style={{color:"#000" , marginRight:"2rem"}}/>
                                                              siddharth.yadav0913@gmail.com  
                                                            </h4>
                                                
                                                  </div>                      
                                        </div>


                                        <div className='right'>
                                                  <h4>About Myself</h4>
                                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                        </div>

                                        <div className='social'>
                                                  <FaFacebook size={30} style={{color:"#000" , marginRight:"2rem"}}/>
                                                  <FaGithub size={30} style={{color:"#000" , marginRight:"2rem"}}/>
                                                  <FaInstagram size={30} style={{color:"#000" , marginRight:"2rem"}}/>
                                        </div>
                              </div>

                    </div>
          )
}

export default Footer;
