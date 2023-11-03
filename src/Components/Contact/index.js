import React, { useState } from 'react';
import './style.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    password: '',
    mobileNo: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data to the console
  };
  return (
    <div className='contact-main'>
      <div className='container'>
        <div className='section-title'>
          <h5>CONTACT US</h5>
          <h3>We Are Here For You</h3>
          <div class="bar-main">
            <div class="bar bar-big"></div>
          </div>
          <p>Got a project in mind? We’d love to hear about it. Take five minutes to fill
            out our project form so that we can get to know you and understand your project.</p>
        </div>
        <div className='elementor'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='icon-box'>
                <div className='icon-box-icon'>
                  <i class="ri-map-pin-fill"></i>
                </div>
                <div className="icon-box-content">
                  <div className="title">
                    <h2>Enter Your Address</h2>
                  </div>
                  <div className="description">
                    <p>54/1 New sorini Asut, Melbord Austria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='icon-box'>
                <div className='icon-box-icon'>
                  <i class="ri-mail-fill"></i>
                </div>
                <div className="icon-box-content">
                  <div className="title">
                    <h2>Opening Hours</h2>
                  </div>
                  <div className="description">
                    <p>Mon - Thu: 10:00am - 05:00pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='icon-box'>
                <div className='icon-box-icon'>
                  <i class="ri-phone-fill"></i>
                </div>
                <div className="icon-box-content">
                  <div className="title">
                    <h2>Contact Directly</h2>
                  </div>
                  <div className="description">
                    <p>demo@example.com, 54786547521
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className='elementor-section'>
        <div className='container'>
          <div class="section-title">
            <h5>Contact Us</h5>
            <h3>Feel Free Contact</h3>
            <h3>Us Now<span></span></h3>
            <div class="bar-main">
              <div class="bar bar-big"></div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='form-group col-lg-6 '>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    placeholder='FirstName'
                  />
                </div>
                <div className='form-group col-lg-6 '>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    placeholder='LastName'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-lg-6'>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='Email'
                  />
                </div>

                <div className='form-group col-lg-6 '>
                  <input
                    type="tel"
                    id="mobileNo"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                    placeholder='Phone'
                  />
                </div>
              </div>
              <div className='form-group '>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder='Message'
                  className='form-message'
                />
              </div>
              <div className='send-btn'>
                <button type="submit" className='btn btn-primary '>Free Consultancy</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div >
      <div class="col-lg-12 contact-right-site">
                    <div class="contact-map" data-wow-delay="0.3s">
                        <div class="w-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0038258647737!2d72.86365997547138!3d21.23169688077713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3c8840ae65%3A0xe447279a17c1f6c2!2sVIP%20Cir%2C%20Uttran%2C%20Surat%2C%20Gujarat%20394105!5e0!3m2!1sen!2sin!4v1699017327061!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
      </div>

    </div>
  )
}

export default Contact