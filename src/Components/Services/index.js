import React from 'react';
import './style.css'
import service1 from '../../assets/s1.jpg';
import service2 from '../../assets/s2.jpg';
import service3 from '../../assets/s3.jpg';
import 'animate.css';
import Fade from 'react-reveal/Fade';

const Service = () => {
    return (
        <div className='services-main'>
            <div className="container">
            <Fade bottom cascade duration={1000}>
                <div className='services_tital'>
                    Our Best Services
                </div>
                </Fade>
                <p className='services_text'>Our service provides personalized course recommendations based on your individual preferences, interests, and learning style. We use data and insights
                    to create a customized learning path for you, ensuring that you find the courses that are right for you.</p>
                    <Fade bottom cascade duration={1000}>
                <div className="row d-flex mt-3">
                    <div className=" col-lg-4 col-md-4 mb-5  wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                        <div className="gradient-border" id="box">
                            <div className='services-img'>
                                <img src={service1} alt="service1" />
                            </div>
                            <div className='services-content'>
                                <div class="btn_main"><a href="#">Personalized</a></div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-4 mb-5  wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                        <div className="gradient-border" id="box">
                            <div className='services-img'>
                                <img src={service2} alt="service2" />
                            </div>
                            <div className='services-content'>
                                <div class="btn_main"><a href="#">Personalized</a></div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-4 mb-5  wow animate__animated animate__fadeInUp " data-wow-delay="1.5s">
                        <div className="gradient-border" id="box">
                            <div className='services-img'>
                                <img src={service3} alt="service3" />
                            </div>
                            <div className='services-content'>
                                <div class="btn_main"><a href="#">Personalized</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Service