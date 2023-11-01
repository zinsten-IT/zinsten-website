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
                        <span className="consultation-text">666 888 0000</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="consultation-desc">
                    <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="dreamhub-btn">
                    <a href="about-us.html">DESCOVER MORE</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Consultation