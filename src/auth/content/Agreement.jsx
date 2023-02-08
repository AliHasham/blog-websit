import React from 'react'

const Agreement = () => {
  return (
    <div className="agreement" style={{marginTop: '-62px'}}>
      <div className="container">
        <div className="main-header">
          <h1 style={{ color: 'white', fontWeight: "100;" }}><strong>Agreement to official rules</strong></h1>

          <div className="divider"></div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 scrollpoint sp-effect1">
            <ul className='ul-element'>
              <li><strong>By participating in this contest, participants agree to abide by the terms and conditions.</strong></li>
              <li><strong>By submitting code, students give full rights of ownership of the submitted code to PSU-ACM.</strong></li>
              <li><strong>PSU-ACM pledges to keep all personal information safe provided during the registration period.</strong></li>
              <li><strong>Students must provide their current university ID, full name, phone number and personal email address.</strong></li>
              <li><strong>By accepting the prize, PSU-ACM reserves the right to use students’ names, photos (male only) etc in future advertisements for the competition.</strong></li>
              <li><strong>The competition is open for currently registered university students only. PSU staff and faculty are not eligible to compete.</strong></li>
              <li><strong>Competition Organizers reserve the right to disqualify teams violating competition rules for any or all of the following breaches: </strong>
                <ul style={{ fontSize: "70%", }}>
                  <li><strong>Providing false information about yourself during registration would result in disqualification.</strong></li>
                  <li><strong>Sharing/using from others any information about a problem (including its content/solution) before the end of the competition.</strong></li>
                  <li><strong>Any kind of discussions between teams is strictly prohibited and would result in disqualification of both or more teams.</strong></li>
                  <li><strong>Submitting unethical, lewd, obscene or any kind of morally unacceptable content.</strong></li>
                  <li><strong>Violation of PSU ethical terms and conditions for students.</strong></li>
                </ul>
                <strong> </strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agreement;