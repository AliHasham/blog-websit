import React from 'react'

const Frequently = () => {
    return (
        <div id="faq">
            <div className="container">
                <div className="main-header" >
                    <h1 style={{ color: 'black', fontWeight: "100" }}><strong>Frequently Asked Questions</strong></h1>
                    <div className="divider"></div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 ">
                        <ul className='ul-element' style={{ color: 'black' }}>
                            <li><strong><b><span style={{ color: "#339966" }}>When is the Contest?</span> </b>26 March 2022.</strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>Who is organizing the contest?</span> </b>Umbrella of ACM Professional Chapter KSA and going to be organized by CCIS of PSU.</strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>Where will be the contest?</span> </b>Online.</strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>Where to register for the contest?</span><a href="#"
                                target="_blank"> <strong>To Register in PSU-National Programming Contest, please click here</strong>
                            </a></b></strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>How many teams of each university can participate in
                                the contest?</span> </b>There is no limitations</strong>
                            </li>
                            <li><strong><b><span style={{ color: "#339966" }}>How many students on each team?</span> </b>
                                Teams are comprised of up to 3 graduate or under graduate students.</strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>What is the style of the contest,
                                and the difficulty level of the problems?</span> </b>
                                Contest is 14 hours. Each time  a set of 8 to 12 short problems will be given.
                                Some problems require only
                                basic knowledge of the programming. Other problems require strong knowledge of basic
                                mathematics, data structures and strong knowledge of algorithms.</strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>What is the style of the problems?</span> </b>
                                The style of problems follows from the famous ACM International Collegiate Programming
                                Contest (ICPC). The best way to see the style of problems is to view archives of the ACM ICPC: <strong>
                                    <a href="#">https://icpc.baylor.edu/worldfinals/problems</a></strong></strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>How do the team members contribute to solve a problem? Does each team member have a specific task?</span> </b>
                                The team members should browse the problem set and attempt to identify the problems that can be solved by them with confidence. Then, they work together, as a team,
                                to solve the problem. If successful, they submit the problem through the software interface provided, and
                                they continue in this process for the duration of the contest.</strong></li>
                            <li><strong><span style={{ color: "#339966" }}><b>How are submitted problems judged?</b></span><b> </b
                            >For each problem, students are given a sample input and a correct sample output that should
                                be expected. Once their program is working (or seems to be working), they can submit their solution.
                                The solution will be run against a larger set of input from the judges; this input set is more compr
                                ehensive, with the intention of testing all possible cases. Students should pay close attention
                                to the input and output description to make sure they have correctly considered all possible
                                scenarios. Upon running the student submission, if the team’s output matches the judges output,
                                then the team submission is accepted.</strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>How can our team members prepare for the contest?
                            </span> </b>Team members can practice for the competition by trying to solve problems of previous
                                programming competitions such as IEEE programming competitions and ACM programming competitions.</strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>Is code documentation considered when judgi
                                ng the programs?</span> </b>No. We will be following the ACM ICPC format. Programs are strictly
                                judged according to their ability to correctly solve the judges input file.</strong></li>
                            <li><strong><b><span style={{ color: "#339966" }}>What programming languages knowledge is requ
                                ired to enter the competition?</span> </b>The official and unique language of the contest is Jav
                                a for this year.</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frequently;