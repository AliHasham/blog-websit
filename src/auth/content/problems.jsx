import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Problems = () => {
	useEffect(()=>{
		AOS.init({duration:2000})
	 },[]);
	return (

		<div className="submission " id="problem">
			<div className="container">
				<div data-aos="fade-ups" className="main-header">
					<h1 >Problems Submission</h1>

					<div className="divider"></div>
				</div>

				<div className="row">
					<div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 scrollpoint sp-effect1">
						<ul data-aos="fade-left" className='ul-element'>
							<li>Problems would be posted on competition website at exactly at 9:00 AM (26 March 2022).</li>
							<li>Students are required to submit solutions to the Problems online.</li>
							<li>Each submission would be time stamped (extra points awarded for early submission).</li>
							<li>Competition will close precisely at <strong>6:00 PM the same day.</strong> All submissions after the deadline would be ignored.</li>
							<li>Students are encouraged to solve as many questions as possible to improve their chances of winning.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Problems;