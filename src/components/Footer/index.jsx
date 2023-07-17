import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { FaSnapchatSquare } from 'react-icons/fa'
import "../Footer/style.css"

export default function Footer() {
  return (
    <div className='foot' id='contact'>
      <div className='owners-info'>
        <p id='number'>CONTACT: <a href="#number">+237-670-716-777</a></p>
        <p id='email'>EMAIL: <a href="#email">taryllngam@gmail.com</a></p>
        <p id='location'>LOCATION: <a href="#location">Yaounde,Cameroon</a></p>
      </div>
      <div className='socials'>
        <div><h1>FOLLOW US</h1></div>
        <div className='social'>
      <a id='facebook' href="#facebook"><AiFillFacebook/></a>
      <a id='instagram' href="#instagram"><AiFillInstagram/></a>
      <a id='twitter' href="#twitter"><AiFillTwitterSquare/></a>
      <a id='linkedin' href="#linkedin"><AiFillLinkedin/></a>
      <a id='snapchat' href="#snapchat"><FaSnapchatSquare/></a>
      </div>
      </div>
    </div>
  )
}

