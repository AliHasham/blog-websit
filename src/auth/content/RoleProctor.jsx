import React, { useEffect } from 'react';
import '../../style/role.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const RoleProctor = () => {
	useEffect(()=>{
		AOS.init({duration:2000})
	 },[]);
	return (
		<div className="proctor_role">
			<div className="container">
				<div className="main-header-pro">
					<h1 data-aos="fade-up-left"className='role-head'>Role of Proctor</h1>
					<div className="divider"></div>


					<div className="row">
						<div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 ">
							<ul data-aos="fade-left" className='ul-element' style={{ color: 'black' }}>
								<li>Teams must have at least one proctor to supervise during the 09 hours competition.</li>
								<li>Proctors would have to monitor students throughout the period of the competition.</li>
								<li>Persons acting as proctor must limit the level of support and must not contribute in any other form that might be considered original authorship, or in any way that may enable claims of rights or ownership to the submitted entries.</li>
								<li>Proctors should not be allowed to work-on-behalf of teams or individuals in all circumstances.</li>
								<li>An e-certificate will be provided to the proctors by the <a href="#">ACM-Saudi Arabia Chapter</a>.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default RoleProctor;