import React from "react";

export default function Sidebar() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <p className="login--heading">LOGIN</p>
                    <p className="text-success set-navigation">Current requests</p>
                    <hr />
                    <p className="set-navigation">Ongoing stays</p>
                    <hr />
                    <p className="set-navigation">Previous stays</p>
                    <hr />
                    <p className="set-navigation">Reports</p>
                    <hr />
                    <div className="col-md-2 set--footer">
                        <button className="logout-btn">Log - Out</button>
                        <p className="">Help-Desk</p>
                        <p className="">786-874 9988</p>
                    </div>
                </div>
            </div>
        </>
    )
}