import React from 'react'

const Registration = () => {
    return (
        <div className="registration" id="registration">
            <div className="container">
                <div className="main-header">
                    <h1 style={{ color: 'white', fontWeight: '100' }}><strong>Registration Steps</strong></h1>

                    <div className="divider"></div>

                    <p><strong>To register to the event, follow these steps accurately</strong></p>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 ">
                        <h3 className="text-center">A detailed guide is provided on this link <strong><a href="#" target="_blank">Download the guide</a></strong></h3>

                        <ul className='ul-element'>
                            <li><strong>Build a team from University students.</strong></li>
                            <li><strong>Create an account for the team in <strong><a href="#" target="_blank">Hackerrank</a></strong>. </strong></li>
                            <li><strong>Choose a faculty member from your University as mentor.</strong></li>
                            <li><strong>Register the team<strong> <b><a href="#" target="_blank">here</a></b></strong></strong></li>
                            <li><strong>Then, the mentor should contact us on <strong><a href="#" target="_blank">pjam@psu.edu.sa </a></strong> to confirm your team registration. </strong></li>
                            <li><strong>To know how to create a team in Hackerrank, <a href="#">you can follow this guideline</a>. </strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;