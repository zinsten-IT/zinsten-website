import React from 'react'
import about_thumb from '../../assets/about-thumb.png';
import './style.css';
import Fade from 'react-reveal/Fade';
import 'animate.css';
import { NavLink } from 'react-router-dom';

const Abouts = () => {
   return (
      <div className='mt-5'>
         <div className="about_section layout_padding">
            <div className='container'>
               <div className="row">
                  <div className="col-md-6">
                  <Fade bottom cascade duration={1000}> 
                     <div className="about_tital_main">
                        <h1 className="about_tital">About Us</h1>
                        <p className="about_text">There are many variations of passages of Lorem Ipsum available, but the majority
                           have suffered alteration in some form, by injected humour, or randomised words which don't look
                           even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
                           there isn't anything embarrassing hidden in the middle of text. All </p>

                        <div class="about-single-box">
                           <div class="about-content">
                              <h3 class="about-title">world of web development</h3>
                              <p class="about-desc"> From foundational concepts to advanced techniques, 
                              Zinsten ensures a comprehensive and immersive learning experience.</p>
                           </div>
                        </div>
                        <div className="readmore_bt"><NavLink to="/about">Read More</NavLink></div>
                        
                     </div>
                     </Fade>
                  </div>
                  <div className="col-md-6">
                     <div className='about-img wow animate__animated animate__fadeInRight'>
                        <img src={about_thumb} alt='about-thumb' />
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Abouts
