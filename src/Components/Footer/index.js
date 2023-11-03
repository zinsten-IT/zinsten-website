import React from 'react'
import './style.css'
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';


const Footer = () => {
   return (
      <div>
         <div className="footer_section layout_padding">
            <div className="container ">
               <div className='row footer-main'>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                     {/* <div className="form_wrapper">
            <div className="form_wrapper_inner">
               <div className="input_btn_main pb-3">
                  <input type="text" className="mail_text" placeholder="Email" name="Enter your email"/>
               </div>
               <div className="input_btn_main pb-3">
                  <input className="mail_text" placeholder="Name" name="Enter your Name"/>
               </div>
               <div className="input_btn_main  pb-3">
                  <textarea className="mail_text" placeholder="Message" name="Enter your Message"></textarea>
               </div>
               <button type="submit" value="Send" className="submit-btn">
                  <span className="MuiTypography-root MuiTypography-body1"> Send Message</span>
               </button>

            </div>
                     </div> */}
                     <div className="footer-logo">
                     <NavLink to="/">
                           <img src={logo} alt="img" />
                           </NavLink>
                     </div>
                     <div className='footer-content'>
                        <p>Your journey to knowledge and self-improvement begins here.
                           Let us guide you to the courses that match your unique preferences,
                           interests, and learning style. Start your educational adventure today
                           and unlock your full potential with us.</p>
                     </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                     <div className='Footer-content'>
                        <h4 className="contact_msg">Information</h4>
                        <div className="contact_msg_main">
                           <div className="contact_msg_inner">
                              <ul>
                                 <li><a href='#'>Personal info</a></li>
                                 <li><a href='#'>Credit slips</a></li>
                                 <li><a href='#'>Addresses</a></li>
                                 <li><a href='#'>Blogs</a></li>
                                 <li><a href='#'><NavLink to="/contact">Contact</NavLink></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                     <div className='Footer-content'>
                        <h4 className="contact_msg">Menu</h4>
                        <div className="contact_msg_main">
                           <div className="contact_msg_inner">
                              <ul>
                                 <li><a href='#'><NavLink exact to="/">Home</NavLink></a></li>
                                 <li><a href='#'><NavLink to="/about">About</NavLink></a></li>
                                 <li><a href='#'><NavLink to="/services">Services</NavLink></a></li>
                                 <li><a href='#'><NavLink to="/contact">Contact</NavLink></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                     <div className='Footer-content'>
                        <h4 className="contact_msg">Our Services</h4>
                        <div className="contact_msg_main">
                           <div className="contact_msg_inner">
                              <ul>
                              <li><a href='#'><NavLink to="/contact">Contact</NavLink></a></li>
                                 <li><a href='#'>Store</a></li>
                                 <li><a href='#'>My account</a></li>
                                 <li><a href='#'>Home</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright_section">
            <div className="container">
               <p className="copyright_text"><span id="currentYear"></span> All Rights Reserved. Managed by <a
                  href="https://zinsten.com">Zinsten.com</a></p>
            </div>
         </div>
      </div>
   )
}

export default Footer