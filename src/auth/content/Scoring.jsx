import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Scoring = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
 },[]);
  return (
    <div className="scoring" id="scoring">
      <div className="container">
        <div className="main-header">
          <h1 data-aos="fade-up">Scoring Criteria</h1>

          <div className="divider"></div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 scrollpoint sp-effect1">
            <ul data-aos="fade-left" className='ul-element'>
              <li>Scoring is based on problem difficulty and time until completion.</li>
              <li>Each problem is worth a certain value of points.</li>
              <li>Contestants will be ranked in order of the highest score first and lowest score last.</li>
              <li>Any special scoring rules or bonus points will be announced with the problems.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scoring;