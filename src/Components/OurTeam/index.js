import React from 'react'
import './style.css';
import Abhishek from '../../assets/abhishekg.jpg';
import Anjali from '../../assets/anjalis.jpeg';
import Chirag from '../../assets/chirag.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faReddit, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
							<div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
								<div className="team-single-box">
									<div className="team-thumb">
										<img src={Abhishek} alt="team-img" />
									</div>
									<div className="team-social-icon">
										<div className="team-social-icon-inner">
											<div className='social-icon'><a href="https://www.facebook.com/profile.php?id=61553027129781"><FontAwesomeIcon icon={faFacebook} /></a></div>
											<div className='social-icon'><a href="https://twitter.com/home/worldzinsten"><FontAwesomeIcon icon={faTwitter} /></a></div>
											<div className='social-icon'><a href="https://www.instagram.com/worldzinsten"><FontAwesomeIcon icon={faInstagram} /></a></div>
											<div className='social-icon'><a href="https://www.reddit.com/user/worldzinsten"><FontAwesomeIcon icon={faReddit} /></a></div>
											<div className='social-icon'><a href="https://www.linkedin.com/worldzinsten"><FontAwesomeIcon icon={faLinkedin} /></a></div>
										</div>
									</div>
									<div className="team-content">
										<div className='team-content-inner'>
											<h3 className="team-title">Mr William</h3>
											<span className="team-text">Marketing Head</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0s">
								<div className="team-single-box">
									<div className="team-thumb">
										<img src={Anjali} alt="team-img" />
									</div>
									<div className="team-social-icon">
										<div className="team-social-icon-inner">
											<div className='social-icon'><a href="https://www.facebook.com/profile.php?id=61553027129781"><FontAwesomeIcon icon={faFacebook} /></a></div>
											<div className='social-icon'><a href="https://twitter.com/home/worldzinsten"><FontAwesomeIcon icon={faTwitter} /></a></div>
											<div className='social-icon'><a href="https://www.instagram.com/worldzinsten"><FontAwesomeIcon icon={faInstagram} /></a></div>
											<div className='social-icon'><a href="https://www.reddit.com/user/worldzinsten"><FontAwesomeIcon icon={faReddit} /></a></div>
											<div className='social-icon'><a href="https://www.linkedin.com/worldzinsten"><FontAwesomeIcon icon={faLinkedin} /></a></div>
										</div>
									</div>
									<div className="team-content">
										<div className='team-content-inner'>
											<h3 className="team-title">Mrs Amelia</h3>
											<span className="team-text">Marketing Specialist</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="1.5s">
								<div className="team-single-box">
									<div className="team-thumb">
										<img src={Chirag} alt="team-img" />
									</div>
									<div className="team-social-icon">
									<div className="team-social-icon-inner">
											<div className='social-icon'><a href="https://www.facebook.com/profile.php?id=61553027129781"><FontAwesomeIcon icon={faFacebook} /></a></div>
											<div className='social-icon'><a href="https://twitter.com/home/worldzinsten"><FontAwesomeIcon icon={faTwitter} /></a></div>
											<div className='social-icon'><a href="https://www.instagram.com/worldzinsten"><FontAwesomeIcon icon={faInstagram} /></a></div>
											<div className='social-icon'><a href="https://www.reddit.com/user/worldzinsten"><FontAwesomeIcon icon={faReddit} /></a></div>
											<div className='social-icon'><a href="https://www.linkedin.com/worldzinsten"><FontAwesomeIcon icon={faLinkedin} /></a></div>
										</div>
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