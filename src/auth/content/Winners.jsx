import React from 'react'

const Winners = () => {
	return (
		<div className="winners" style={{marginTop: '-62px'}}>
			<div className="container" style={{width:'97%'}}>
				<div className=" main-header">
					<h1 style={{ color: 'white', fontWeight: "100;" }}>Winners</h1>

					<div className="divider"></div>
				</div>

				<div className="row">
					<div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 scrollpoint sp-effect1">
						<ul className='ul-element'>
							<li>Winners will be determined strictly based on the overall score earned by a team.</li>
							<li>In the event of a tie between contestants, the one with lower timestamp (submitted earlier) will be declared winner.</li>
							<li>Winners will be announced on <strong><a href="#" target="_blank">ACM Chapter Competition events website</a> </strong></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Winners