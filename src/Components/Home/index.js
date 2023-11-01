import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css';

const Home = () => {
    return (
        <div>
            <div className='home-content'>
                <div className='container'>
                <div className='row align-items-center home-content-main '>
                    <div className='col-lg-12 col-md-12 zoomIn '>
                        <div className="legend">
                            <div className="content-main1">
                                <h1 className="banner_tital">Who are we ?</h1>
                                <p className="banner_text mb-4">Zinsten is an AI-powered career guidance app that helps students find their
                                    ideal career path based on their education and interests. By analyzing their educational
                                    background and passions, Zinsten generates personalized course recommendations to guide students
                                    towards fulfilling careers. Our mission is to empower individuals to make informed career
                                    decisions, bridging the gap between education and passion, and helping them unlock their true
                                    potential for a successful future.</p>
                                <div className="read_bt"><a href="#">Get A Quote</a></div>
                            </div>
                        </div>
                    </div>
                {/* <div className="hero-shape3 bounce-animate5">
					<img src={hero_shape3} alt="hero-shape3"/>
				</div> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home