import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { FaSnapchatSquare } from 'react-icons/fa'
import "../Footer/style.css"

export default function Footer() {
  return (
    <div className='foot' id='contact'>
      <div className='owners-info'>
        <p>CONTACT: <a href="#">+237-670-716-777</a></p>
        <p>EMAIL: <a href="#">taryllngam@gmail.com</a></p>
        <p>LOCATION: <a href="#">Yaounde,Cameroon</a></p>
      </div>
      <div className='socials'>
        <div><h1>FOLLOW US</h1></div>
        <div className='social'>
      <a href=""><AiFillFacebook/></a>
      <a href=""><AiFillInstagram/></a>
      <a href=""><AiFillTwitterSquare/></a>
      <a href=""><AiFillLinkedin/></a>
      <a href=""><FaSnapchatSquare/></a>
      </div>
      </div>
    </div>
  )
}

