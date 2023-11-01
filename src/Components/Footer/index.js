import React from 'react'
import './style.css'


const Footer = () => {
  return (
    <div>
         <div className="footer_section layout_padding">
      <div className="container ">
         <div className='row footer-main'>
         <div className='col-lg-6 col-md-6 col-sm-12'>
         <div className="form_wrapper">
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
         </div>
         </div>
         <div className='col-lg-6 col-md-6 col-sm-12'>
            <h1 className="contact_msg">
               <p>Say hello...&nbsp;</p>
            </h1>
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