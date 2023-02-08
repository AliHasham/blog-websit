import React, { useEffect } from 'react'
import TextWithHeader from '../../component/TextWithHeader'
import '../../style/about.css'
// import Content from './Content'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
     },[]);
    return (
        <>
            <div className='container' id="about" style={{width:'100%'}}>
                <div className='row'>
                    
                    <div data-aos="fade-down" className="about-head-text section-1">
                        <h2>About</h2>
                    </div>

                    <div data-aos="fade-left" className='about-text section-1'>
                        <p> The Programming Jam 7.0 is an annual programming contest that is organized by
                            the  ACM Professional Chapter in Saudi Arabia annually in Prince Sultan University.
                            After the successful previous events, this year, this competition will be open to all
                            students of Universities in Saudi Arabia, as a new form of gathering
                            programmers at national level and as a joint event among Saudi Universities.<br /><br />

                            This programming contest falls under the umbrella of ACM Professional Chapter
                            in Saudi Arabia and is organized by the College of Computer and Information
                            Sciences of Prince Sultan University to nurture the innovation, creativeness and
                            collaboration to help and support new groups of software programs. It also helps the students
                            to test their ability to perform well under pressure with limited time. The contest will follow
                            the format of the traditional ACM International Collegiate Programming Contest (ICPC). It is going
                            to be 9 hours online coding competition where wide community of colleges and universities students
                            can participate to engage themselves with challenging questionAt programming.
                        </p>
                    </div>

                    <div  data-aos="fade-up" className="row">
                        <TextWithHeader
                        
                            headerText={"Duration"}
                            subText={"09 hour "}
                            subTextL={"from 9:00 am to 6:00 pm"}
                        />

                        <TextWithHeader
                     
                            headerText={"Participants"}
                            subText={"Any undergraduate student in Saudi Universities"}
                        />

                        <TextWithHeader
                     
                            headerText={"Remote"}
                            subText={"Virtual event. No physical attendance at PSU premises"}
                        />


                        <TextWithHeader
                     
                            headerText={"Winner Awards"}
                            subText={"Valuable awards for the three first winners"}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
