import React from 'react'
import { FaUtensils } from 'react-icons/fa';
import '../About/style.css'
import chef from "../../../src/chef.png"
export default function About() {
    return (
        <div className='about' id='about'>
         
                <div className='decor'>
                    
                    <h2>About Us</h2></div>
                 
                <div className='about-head'><h1 className='about-header'>Welcome to <FaUtensils className="food" />  Restoran</h1></div>
                <div className='disect'>
                    <div>
                    <img id='about-img' src={ chef } alt="" />
                    </div>
                <p>“Welcome to Restoran” is a common greeting that customers receive when entering a restaurant, typically followed by a friendly welcome and an invitation to be seated.

                    This greeting sets the tone for the dining experience, creating a welcoming and hospitable environment that encourages customers to relax and enjoy their meal.</p>
                    </div>

        </div>
    )
}
