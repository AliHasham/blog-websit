import React from 'react'
const Contact = () => {
  return (
    <div class="contact"style={{marginTop: '-62px'}}>
      <div class="container">
        <div class="main-header">
          <h1 style={{ color: 'black', fontWeight: '100' }}><strong>Contact</strong></h1>

          <div class="divider"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 scrollpoint sp-effect1 active animated fadeInLeft">
          <ul class='ul-element'>
            <li><strong>If you have any issues or questions about general contest procedures please feel free to contact our helpdesk team during the competition writing email to <a href="mailto:pjam@psu.edu.sa"><strong>pjam@psu.edu.sa </strong></a> </strong></li>
            <li><strong>Please note the helpdesk team will NOT answer questions related to the programming problems nor provide extra examples or any other information. </strong></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact;