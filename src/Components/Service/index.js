import React from 'react';
import './style.css'
import service1 from '../../assets/s1.jpg';
import service2 from '../../assets/s2.jpg';
import service3 from '../../assets/s3.jpg';
import 'animate.css';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

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
                                <div class="btn_main"><NavLink to="/services"> Personalized Career Assessment</NavLink></div>
                           <p>Our personalized career assessment service utilizes cutting-edge AI technology to analyze
                             your education and interests. We provide you with a comprehensive report, outlining your strengths and areas of interest, and recommend career paths that align with your unique profile.
                             This assessment is the first step in discovering your ideal career.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-4 mb-5  wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                        <div className="gradient-border" id="box">
                            <div className='services-img'>
                                <img src={service2} alt="service2" />
                            </div>
                            <div className='services-content'>
                                <div class="btn_main"><NavLink to="/services"> Customized Course Recommendations</NavLink></div>
                                <p>At Zinsten, we understand that finding the right educational path is crucial for career success.
                                     We offer customized course recommendations tailored to your unique profile. Whether you're a student looking for the best-fit program or a professional seeking to enhance your skills,
                                     our data-driven approach ensures you get the most relevant course suggestions.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-4 mb-5  wow animate__animated animate__fadeInUp " data-wow-delay="1.5s">
                        <div className="gradient-border" id="box">
                            <div className='services-img'>
                                <img src={service3} alt="service3" />
                            </div>
                            <div className='services-content'>
                                <div class="btn_main"><NavLink to="/services">Career Guidance and Support</NavLink></div>
                                <p>Zinsten provides ongoing career guidance and support to
                                     help you achieve your goals. Our expert team is here to answer your questions, assist with course selections, and provide valuable insights throughout your educational journey. We're committed to bridging the gap between education and passion,
                                     helping you unlock your true potential for a successful.</p>
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