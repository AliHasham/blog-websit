import React from 'react'

const Organizers = () => {
    return (
        <div className="organizers">
            <div className="container">
                <div className="main-header">
                    <h1 style={{ color: 'white', fontWeight: "100" }}><strong>Organizers</strong></h1>

                    <div className="divider"></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4 "></div>

                    <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4 "><strong>
                        <a href="#">
                            <img alt="" className="logo-O" src={require('../../image/acm.png')} />
                        </a> </strong></div>

                    <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4 "><strong>
                        <img alt="" className="logo-O" src={require('../../image/psu.png')} />
                    </strong></div>

                    <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4 "></div>

                    <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4 "></div>
                </div>
            </div>
        </div>
    )
}

export default Organizers