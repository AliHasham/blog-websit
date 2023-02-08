import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



   
export default function TextWithHeader({headerText,subText,subTextL}) {
    useEffect(()=>{
        AOS.init({duration:2000})
     },[]);
    return (
        
        <div className="section-3 col-md-3 col-sm-3 col-xs-6">
            <div className="section-3-text ">
                <h3  data-aos="fade-up"className='section-3-header-text'>{headerText}</h3>
                <p data-aos="fade-up">{subText}<br />
                {subTextL}</p>
                <p></p>
            </div>
        </div>
    )
}