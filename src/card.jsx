import React from "react";
import logo from "../images/symbol.png"

export default function Card(props) {
    console.log(props.id)
    return (
        <>
            <div className="row mx-3">
                <div className="card mx-2 card--color main--card">
                    {
                        props.rareFind ? <button className="card--badge">Rare Find</button> : null
                    }
                    <img className="card-img-top img-fluid mb-0" src={logo} style={{ height: "80px", width: "80px" }}></img>
                    <p className="mt-0 logo--name">Holiday Inn</p>
                    <div className="card sub--card">
                        <p className="description">{props.description}</p>
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <p className="price">Singles: ${props.singlePrice}</p>
                                <p className="price">Doubles: ${props.doublePrice}</p>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <button className="book--btn">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}