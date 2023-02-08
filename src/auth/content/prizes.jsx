import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Prizes = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
 },[]);
  return (
    
    <div className="prizes" id="prizes">
     
      <div className="container">
        <div data-aos="fade-up" className="main-header">
          <h1 style={{ color: 'white', fontWeight: "100;" }}><strong>Prizes</strong></h1>

          <div className="divider"></div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 scrollpoint sp-effect1">
            <ul data-aos="fade-left" className='ul-element'>
              <li><strong>The winning team members will each receive an award certificate.</strong></li>
              <li><strong>Award certificates will be given to only the first three first winners: </strong>
                <ul>
                  <li><strong><span style={{ color: "#4990d6" }}><strong>GOLD AWARD CERTIFICATE, for the first place</strong></span></strong></li>
                  <li><strong><span style={{ color: "#4990d6" }}><strong>SILVER AWARD CERTIFICATE, for the second place</strong></span></strong></li>
                  <li><strong><span style={{ color: "#4990d6" }}><strong>BRONZE AWARD CERTIFICATE, for the third place</strong></span></strong></li>
                </ul>
                <strong> </strong></li>
              <li><strong>All active participants in the competition will receive a participation certificate, for their efforts and participation.</strong></li>
              <li><strong>Results will be published on the ACM Chapter Competition website.</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes;