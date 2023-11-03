import React from 'react';
import './style.css';
import consultation_icon from '../../assets/consultation-icon.png';
const Consultation = () => {
  return (
    <div>
        <div className="consultation-area">
    <div className="container">
        <div className="row align-items-center consultation">
            <div className="col-lg-4 col-md-4 col-sm-12  consultation-main">
                <div className="consultation-single-box">
                    <div className="consultation-icon">
                       <img src={consultation_icon} alt='consultation-icon'/>
                    </div>
                    <div className="consultation-content">
                        <h5 className="consultation-title">GET A FERR CONSULTATION</h5>
                        <span className="consultation-text">+91 91570 60241</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="consultation-desc">
                    <p>Our expert career consultants will conduct a thorough evaluation of your educational background, skills, interests, and career aspirations.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="dreamhub-btn">
                <a href="mailto:info.zinsten.com">DESCOVER MORE</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Consultation