import React from 'react'
import Header from '../auth/content/header';
import Content from '../auth/content/Content';
import About from '../auth/content/About';
import Rule from '../auth/content/Rule';
import Eligbility from '../auth/content/Eligbility';
import RoleProctor from '../auth/content/RoleProctor';
import Problems from '../auth/content/problems';
import Programming from '../auth/content/Programming';
import Scoring from '../auth/content/Scoring';
import Winners from '../auth/content/Winners';
import Prizes from '../auth/content/prizes';
import Agreement from '../auth/content/Agreement';
import Contact from '../auth/content/Contact';
import Registration from '../auth/content/Registration';
import Frequently from '../auth/content/Frequently';
import Organizers from '../auth/content/Organizers';
import Sponsons from '../auth/content/Sponsons';
import Support from '../auth/content/Support';
import Fotter from '../auth/content/Fotter';
// import Router from '../router/Router';


const Component = () => {

  // function reveal() {
  //   var reveals = document.querySelectorAll('.animation');

  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 150;

  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("active");
  //     } else {
  //       reveals[i].classList.remove("active");
  //     }
  //   }
  // }

  // window.addEventListener("scroll", reveal);
  return (




    <div className='container' >
      <div className='row'>
        <Content />
        <About />
        <Rule />
        <Eligbility />
        <RoleProctor />
        <Programming />
        <Problems />
        <Scoring />
        <Winners />
        <Prizes />
        <Agreement />
        <Contact />
        <Registration />
        <Frequently />
        <Organizers />
        <Sponsons />
        <Support />
        <Fotter />



      </div>
    </div>
  )

}
export default Component;