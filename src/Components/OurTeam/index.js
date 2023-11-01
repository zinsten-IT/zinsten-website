import React from 'react'
import './style.css';
import Abhishek from '../../assets/abhishekg.jpg';
import Anjali from '../../assets/anjalis.jpeg';
import Chirag from '../../assets/chirag.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
import Fade from 'react-reveal/Fade';
const OurTeam = () => {
	return (
		<div>
			<div className="team-area">
				<div className="container">
						<div className="col-lg-12">
						<Fade bottom cascade duration={1000}>
							<div className="section-title text-center">
								<div className="section-sub-title">
									<h5>OUR TEAM</h5>
								</div>
								<div className="section-main-title">
									<h2>Meet Our Dedicated<span className="headline-color"> Team</span></h2>
								</div>
							</div>
							</Fade>
						</div>
						<div className='row'>
						<Fade bottom cascade duration={1000}>
						<div className="col-lg-4 col-md-4 col-sm-12 mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
							<div className="team-single-box">
								<div className="team-thumb">
									<img src={Abhishek} alt="team-img" />
								</div>
								<div className="team-social-icon">
									<ul>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
									</ul>
								</div>
								<div className="team-content">
									<div className='team-content-inner'>
										<h3 className="team-title">Mr William</h3>
										<span className="team-text">Marketing Head</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0s">
							<div className="team-single-box">
								<div className="team-thumb">
									<img src={Anjali} alt="team-img" />
								</div>
								<div className="team-social-icon">
									<ul>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
									</ul>
								</div>
								<div className="team-content">
									<div className='team-content-inner'>
										<h3 className="team-title">Mrs Amelia</h3>
										<span className="team-text">Marketing Specialist</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="1.5s">
							<div className="team-single-box">
								<div className="team-thumb">
									<img src={Chirag} alt="team-img" />
								</div>
								<div className="team-social-icon">
									<ul>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
										<li className='social-icon'><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
									</ul>
								</div>
								<div className="team-content">
									<div className='team-content-inner'>
										<h3 className="team-title">Robert Gerry</h3>
										<span className="team-text">Marketing Head</span>
									</div>
								</div>
							</div>
						</div>
						</Fade>
						</div>
				</div>
			</div>
		</div>
	)
}

export default OurTeam