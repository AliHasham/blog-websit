import React from 'react'
import { SupportText } from '../../component/SupportText';

const Support = () => {
  return (
    <section className="doublediagonal" id="support">
<div className="container">
<div className="section-heading">
<h1 style={{color:'#0000009c'}}><strong>Support</strong></h1>

<div className="divider"></div>
<p style={{color:'#0000009c'}}><strong>For more info and support, contact us!</strong></p>
</div>

<div className="row">
<div className="col-md-12">
<div className="row">
<div className="col-md-4 col-sm-4 "><strong> </strong></div>

<div className="col-md-8 col-sm-8 ">
<SupportText
    TextSponser={"Prince Sultan University, Riyadh, Saudi Arabia"}
    />
<SupportText
    TextSponser={"pjam@psu.edu.sa"}
    />
    <SupportText
    TextSponser={"+966 11 4948287"}
    />

</div>
</div>
</div>
</div>
</div>
</section>
  )
}

export default Support;
