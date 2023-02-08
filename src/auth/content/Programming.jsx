import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Programming = () => {
  useEffect(()=>{
		AOS.init({duration:2000})
	 },[]);
  return (
    <div className="problems">
      <div className="container">
        <div data-aos="fade-up" className="main-header">
          <h1 >Programming Problems</h1>

          <div className="divider"></div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 scrollpoint sp-effect1">
            <ul data-aos="fade-left" className='ul-element'>
              <li>Problems are designed and developed by a panel of expert programmers.</li>
              <li>The panel of judges is made up of experienced programmers.</li>
              <li>All contestants must register before the competition.</li>
              <li>Problems will be categorized as MEDIUM, and HARD to allow for participants of all experience levels to participate.</li>
              <li>All of the problems must be answered in Java.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programming;