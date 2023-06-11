import React from "react";

export default function HospitalInfo() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 col-md-3">
                        <p className="heading">St Judes Hospital</p>
                        <p className="heading-description">Saratosa, FL. 33178</p>
                    </div>

                    <div className="col-sm-1 col-md-1">
                        <p className="vertical-line"></p>
                    </div>

                    <div className="col-sm-3 col-md-3">
                        <pre>
                            <h3 className="heading">10  -        17</h3>
                        </pre>
                        <pre>
                            <p className="heading-description align-date">October    December</p>
                        </pre>
                    </div>

                    <div className="col-sm-1 col-md-1">
                        <p className="vertical-line"></p>
                    </div>

                    <div className="col-sm-3 col-md-3">
                        <h3 className="heading">20 Rooms</h3>
                        <p className="heading-description">10 Singles, 10 Doubles</p>
                    </div>


                </div>
            </div>
        </>
    )
}