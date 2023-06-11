import React from "react"
import Sidebar from "./sidebar"
import ArticleSection from "./articleSection"
import chat from "../images/chat_icon.png"

export default function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-12">

            <div className="row">

              <div className="col-sm-12 col-md-2">
                <Sidebar />
              </div>

              <div className="col-sm-12 col-md-10 bg-color">
                <ArticleSection />

                <div className="col-sm-12 col-md-12">
                  <img src={chat} className="chat--icon"></img>
                </div>
              </div>

            </div>

          </div>






        </div>
      </div>
    </>
  )
}

