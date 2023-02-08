import React, { useEffect } from 'react';
import '../../style/rule.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

  
const Rule = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
 },[]);
  return (


    <div className="rule" id="rule">
      <h1 data-aos="fade-up" className='rule-head'>Rules</h1>



      <div data-aos="fade-left" className="col-md-12 col-sm-12 col-lg-12 col-xs-12 rule-link ">
        <ul>
          <li>A College or University can have more than one team with three collegiate students in
            each team. The university faculties are required to proctor the teams.</li>
          <li>Every team has to provide the name of the mentor and his/her email address.</li>
          <li>The university can assign the task of proctoring to different faculty or staff so
            as to have an effective invigilation during the programming contest session. Every
            university has to provide the name of the proctor(s) along with some necessary information
            as mentioned in Proctor Form.</li>
          <li>Programming Jam 7.0 is a virtual Event. There is no need for physical attendance
            in the premises of Prince Sultan University, but students will work from their
            Universities through the <a to="#">Hackerrank system</a>.</li>
          <li>Team members must have ability to quickly figure out the difficulty of the problems, catch the requirements, design and build software system to solve the problems under the strong scrutiny of expert judges. For a well-trained team, some of the problems require precision only while others require knowledge and understanding of advanced algorithms. The team that solves the most problems with the least penalty points (see rules) is declared the winner.</li>
        </ul>
      </div>


    </div>


  )
}

export default Rule