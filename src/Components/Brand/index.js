import React from 'react'
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4 from '../../assets/brand4.png';
import brand5 from '../../assets/brand5.png';
import './style.css';


const Brand = () => {
  return (
    <div>
        <div className='brand-main'>
            <div className='container'>
                <div className='brand-inner row'>
                    <div className='col-lg-3 col-md-3 col-sm-6 brand-img'>
                        <img src={brand1} alt='brand-img'/>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 brand-img'>
                        <img src={brand2} alt='brand-img'/>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 brand-img'>
                        <img src={brand3} alt='brand-img'/>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 brand-img'>
                        <img src={brand4} alt='brand-img'/>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Brand