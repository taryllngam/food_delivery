import React from "react"
import img13 from "../../assets/pic.png"
import "../Hero/style.css"


export default function Hero() {  
      return (
    <div className="container1" id="home">
      <div className="intro">
    <h1>TARYLL'S FOOD APP <br />
    HE FOOD INDUSTRY'S  #1 ORDERING PLATFORM</h1>
    <blockquote>
    ORDER WITH US TODAY AND GET GOOD FOOD WITHIN
      <span className="mins">
        <div className="minn">
      <span className="min"> MINUTES</span>
      </div>
    </span>
       
        </blockquote>
    </div>
    <div>
        <img className="hero-image" src= {img13} alt="" />
      </div>
  </div>
  )
}
