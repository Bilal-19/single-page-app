import React from "react";
import HospitalInfo from "./hospitalInformation";
import DetailSection from "./detailSection";

export default function ArticleSection() {
    return (
        <>
            {/* Article Section*/}
            <div className="container-fluid bg-color">

                {/* Section 1 */}
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="section--heading">You currently have 3 requests</h5>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="row box">

                    <div className="col-md-12">
                        <HospitalInfo />
                    </div>

                    <div className="col-md-12">
                            <button className="button-design first-btn">RECEIVED</button>
                            <button className="button-design second-btn">NEGIOTIATING</button>
                            <button className="button-design third-btn">COMPLETED</button>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="row">
                    <DetailSection />
                </div>
            </div>
        </>
    )
}