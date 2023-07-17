import React from "react"
import "../Navbar/style.css"
import { FaUtensils } from 'react-icons/fa';
import { Link } from "react-router-dom";



 export default function Nav() {
    return (
        <div className="navBar">
        <div className="app-nav">
          <Link to='/'>Home</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Link to='signup'>Admin</Link>

          <FaUtensils className="food" />
        </div>
      </div>
    )
 }
 
