import React from 'react'
import './style.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client_img from '../../assets/client-img.png';
import quick_icon from '../../assets/quick-icon.png';
import Fade from 'react-reveal/Fade';
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoSlide:true,
    };
    return (
        <div>
            <div className="client_section layout_padding">
            <Fade bottom cascade duration={1000}> 
                <div className="container">
                    
                    <h1 className="client_tital">Kind words from our happy clients</h1>
                    <div className="client_section_2">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <Slider {...settings}>
                                    <div className="carousel-item active">
                                        <div className="quick_icon">
                                            <img src={quick_icon} alt="Quick-Icon" />
                                        </div>
                                        <div className="client_main">
                                            <div className="box_left">
                                                <p className="lorem_text">
                                                    "I recently completed the advanced-level digital marketing course on this platform, and I have to say, it was one of the best learning experiences I've ever had. The course content was comprehensive and up-to-date, the instructors were top-notch, and the interactive exercises really helped solidify my understanding. I've already started applying what I learned to my own business, and I'm seeing great results!"
                                                </p>
                                            </div>
                                            <div className="box_right">
                                                <div className="client_taital_left">
                                                    <div className="client_img">
                                                        <img src={client_img} alt="Client-Image" />
                                                    </div>
                                                </div>
                                                <div className="client_taital_right">
                                                    <h4 className="client_name">Dame</h4>
                                                    <p className="customer_text">Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item active">
                                        <div className="quick_icon">
                                            <img src={quick_icon} alt="Quick-Icon" />
                                        </div>
                                        <div className="client_main">
                                            <div className="box_left">
                                                <p className="lorem_text">
                                                    "I recently completed the advanced-level digital marketing course on this platform, and I have to say, it was one of the best learning experiences I've ever had. The course content was comprehensive and up-to-date, the instructors were top-notch, and the interactive exercises really helped solidify my understanding. I've already started applying what I learned to my own business, and I'm seeing great results!"
                                                </p>
                                            </div>
                                            <div className="box_right">
                                                <div className="client_taital_left">
                                                    <div className="client_img">
                                                        <img src={client_img} alt="Client-Image" />
                                                    </div>
                                                </div>
                                                <div className="client_taital_right">
                                                    <h4 className="client_name">Dame</h4>
                                                    <p className="customer_text">Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Testimonial