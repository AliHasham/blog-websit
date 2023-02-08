import React, { useEffect } from 'react';
import '../../style/elgibility.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Eligbility = () => {
  useEffect(()=>{
     AOS.init({duration:2000})
  },[]);
  return (
   <div className="eligbility-main" id="eligbility">
    <div className="container  ">
    <div data-aos="fade-down" className="section-heading ">
    <h1 >Eligbility</h1>
    
    <div className="divider"></div>
    
    <p>Conditions that teams have to satisfy</p>
    </div>
    
    <div className="row ">
    <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 ">
    <ul  data-aos="fade-left" className="eligibility">
        <li>Participants must compete as part of a team. Teams are comprised of up to 3 graduate or under graduate students currently doing their study in a Saudi University, governmental or private.</li>
        <li>There is no restriction on students declared major program of study. Student from all major programs of study are welcome.</li>
        <li>All contestants must register before the competition.</li>
        <li>Team members must solve and complete the problems without assistance from others. Please note that the intent and spirit of the competition is for the students, not others, to solve a problem..</li>
        <li>Teams must have a proctor to supervise during the 09 hours competition. Each team must provide the name of proctor when registering. Persons acting as proctor must limit the level of support and must not contribute in any other form that might be considered original authorship, or in any way that may enable claims of rights or ownership to the submitted entries. Proctors in no case will work-on-behalf of teams or individuals be allowed. Proctors would have to monitor student throughout the period of the competition.</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
  
  )
}

export default Eligbility