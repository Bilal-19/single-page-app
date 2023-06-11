import React from "react";
import HospitalInfo from "./hospitalInformation";
import Card from "./card";
import data from "./data";


export default function DetailSection() {
    const customCard = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />


        )
    })
    return (
        <>
            <div className="container-fluid">
                <div className="row detail-box">
                    <div className="col-md-12">
                        <HospitalInfo />
                        <button className="btn--style">COMPLETED</button>
                    </div>

                    <div className="col-sm-12 col-md-12">
                        <div className="d-inline-flex">
                        {customCard}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}